import React from 'react'
import styled from 'styled-components'
import ProgressCircle from 'components/common/ProgressCircle'
import checkboxIcon from 'assets/svgs/checkbox.svg'

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const CircleAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
`

const Instruction = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 16px;
  color: var(--enable-purple-text);
`

// TODO include SF Pro Text font
const SubInstruction = styled.div`
  font-family: SF Pro Text;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.4px;
  color: var(--enable-purple-border);
`

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 34px;
  margin: 0px 24px;
  background: var(--action-button);
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: var(--white-text);
`

const DisableButton = styled(Button)`
  border: 1px solid var(--inactive-border);
  color: var(--inactive-header-text);
  background: none;
`

class EnableTokenPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  Enable = () => {
    const { tokenStore } = this.props.root
    const { instruction, subinstruction, buttonText, spender, token } = this.props

    return (
      <React.Fragment>
        <CircleAndTextContainer>
          <ProgressCircle
            value={0} width={"45px"} height={"45px"}
            icon={(<Icon src={checkboxIcon} />)}
          />
          <Instruction>{instruction}</Instruction>
          <SubInstruction>{subinstruction}</SubInstruction>
        </CircleAndTextContainer>
        <Button onClick={tokenStore.approveMax(token, spender)}>
          {buttonText}
        </Button>
      </React.Fragment >
    )
  }

  Pending = () => {
    const { instruction, subinstruction, buttonText } = this.props

    return (
      <React.Fragment>
        <CircleAndTextContainer>
          <ProgressCircle
            value={66} width={"45px"} height={"45px"}
            rotate
          />
          <Instruction>{instruction}</Instruction>
          <SubInstruction>{subinstruction}</SubInstruction>
        </CircleAndTextContainer>
        <DisableButton>{buttonText}</DisableButton>
      </React.Fragment >
    )
  }

  render() {
    const { tokenStore, providerStore } = this.props.root
    const userAddress = providerStore.getDefaultAccount()

    const enabled = tokenStore.hasMaxApproval[userAddress]
    const pending = false

    return (
      <PanelWrapper>
        {pending ?
          this.Pending() :
          enabled ?
            <div></div> :
            this.Enable()
        }
      </PanelWrapper >
    )
  }
}

export default EnableTokenPanel