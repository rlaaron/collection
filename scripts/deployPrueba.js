
const hre = require("hardhat");

async function main() {
  const Prueba = await hre.ethers.getContractFactory("Prueba");
  const prueba = await Prueba.deploy("Hello, Hardhat!");

  await prueba.deployed();

  console.log("Pruebadeployed to:", prueba.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
