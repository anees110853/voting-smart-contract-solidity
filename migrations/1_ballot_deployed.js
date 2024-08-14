const BallotContract = artifacts.require("Ballot");

module.exports = function(deployer, network, accounts) {
  console.log('deploying');
  try {
    deployer.deploy(BallotContract,{from:accounts[2]});
    
  } catch (error) {
console.log("eroor", error);    
  }
};
