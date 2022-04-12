import React from "react";
import banner from './assets/img/banner.jpg'
import twitter from './assets/img/t2.png'
import OpenSea from './assets/img/opensea.png'
import Etherscan from './assets/img/etherscan.webp'

const  NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <section className="nav">
            <div className="titulo"><img src={banner} className="titulo_img"/></div>
            <div className="links">
                <div> <img src = {twitter} className = "links_img"/></div>
                <div> <img src = {OpenSea} className = "links_img"/></div>
                <div> <img src = {Etherscan} className = "links_img"/></div>
                <div className="bo">
                    {isConnected ? (
                        <p className="connect">CONNECT</p>
                    )   : (
                        <button onClick={connectAccount} className="log">CONNECTED</button>
                    )}
                </div>
            </div>
        </section>
    );
};   
export default NavBar;