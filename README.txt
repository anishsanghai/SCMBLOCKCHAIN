                                                          PRODUCT TRACING USING BLOCKCHAIN
Description: -
This project is the implementation of blockchain in supply chain management.

It is divided into 2 parts:-

UI:- The user interface for interacting with blockchain.

BC:- The blockchain folder with truffle framework that contains the smart contract for the blockchain

I have used the Ganache blockchain for testing and havent deployed it onto the ethereum blockchain

I have used firebase for cloud services and in the "pid.services.ts" it would be better for you to change the database name and dont forget to create your account on firebase.

For "Block.services.ts" you need to change the account addresses of the manufacturer, retailer and distributor. 
in order to deploy the smart contract on the ganache blockchain just type "truffle migrate --reset command" in the bc folder

In order check out the ui please use the command "ng serve".
