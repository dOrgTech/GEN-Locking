### Deploying Test DAOs

On Rinkeby:

1. Pull the nectarDAO migration repo:

   `git clone https://github.com/daostack/nectardao`

2. Create a .env file in the root dir with the infura node to use for deployment

   `provider="https://rinkeby.infura.io/v3/<api-key>"`

3. Create the deploy parameters file to use.

   (For rinkeby, copy the rinkeby_params_21_11.json file and change the bootstrap & governance dates to be something current.)

4. Update the package.json script file to use your file (the 'prepare' script)

   `"prepare": "node ./prepare.js ./parameters/deployment.json ./parameters/<your file>"`

5. Run the following command to deploy the DAO, inputting the private key of the account you with to use.

   `npm run migrate -- --private-key <private-key> --provider https://rinkeby.infura.io/v3/<api-key>`
