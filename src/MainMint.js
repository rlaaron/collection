import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import DAPP from './DAPP.json';

const DAPPAddress = "0x31E5853B63D2255473EF3B8cEA355a3E687D5Dc6"; 
                 
                                         
const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(              
        DAPPAddress,
        DAPP.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
        });
        console.log('response: ', response);
        } catch (err) {
        console.log("error: ", err)
        }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };
  const handleIncrement = () => {
    if (mintAmount >= 10) return;
    setMintAmount(mintAmount + 1);
  };  


  return (
    <div className='minting'>
        {isConnected ? (
            <div >
                <p className='text'> A brand for the metaverse<br></br>
                    3333 Azupreme<br></br>
                </p>
                <div>
                    <button onClick={handleDecrement} className = "contador" >-</button>
                    {/* <input type= " number" value={mintAmount}/> */}
                    <div className = "number" > {mintAmount}</div>
                    <button onClick={handleIncrement} className = "contador" >+</button>
                </div>
                <button onClick={handleMint} className="css-button-fully-rounded--red"> Mint now </button>
                <p className='text'>
                    Not affiliated with azuki or supreme<br></br>
                    Zero royalties, we love Degens<br></br>
                </p>
            </div>
        ) : (
            <p className='b'>CONNECT TO MINT</p>
        )}
    </div>
  );
};

export default MainMint;