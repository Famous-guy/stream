# eth-wallet-gen

<h5> This is an application that uses Infura as the API call to Generate a Ethereum Wallet Address. 
Then take the Ethereum Wallet Data and parse it over via JSON to the MongoDB.
This concept can be applied to many different applications involving generating Decentralized Data and storing that Data via Centralized.

<h3># npm i --save

<h5># You need to have MongoDB up and running locally on your Machine.

<h5># CD into your MongoDB dir, and then CD bin, finally give the terminal command to start node "./mongod --dbpath ~/mongo-data", if you are unsure of this then consult the MongoDB Docs.

<h5># I also used Robo 3T UI to view the data on the local MongoDB.

<h4># node app.js

<h4># Port will open 3030

1.) I used postman to make my POST call to:  
--> localhost:3030/account/newAccount <--

2.) The returning result should display a Generated ETH Wallet Address using the Infrua API
