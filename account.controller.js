const mongoose = require ( 'mongoose' );
const Account = mongoose.model ( 'Account' );
const ethereum_controller = require('./ethereum.controller');

exports.new_account = async function ( req, res ) {
  let ethData;

  let newAccount = new Account (
    {
      ETH: req.body.ETH,
    }
  );

  // await new ETH walletAddress
  ethData = await ethereum_controller.get_new_address();
  newAccount.ETH = ethData;

  //save account object to the database
  newAccount.save ( function ( err, dbResponse ) {
    if ( err ) {
      res.send( err );
    }
    console.log ( "***" + ( dbResponse ) + "***" );
    res.send ( dbResponse );
  });
}
