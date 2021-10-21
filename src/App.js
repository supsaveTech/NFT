/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Lore from "./pages/lore";
import "./App.css";
import Web3 from "web3";
import { contractAbi, contractAddress } from "./config";
import swal from "sweetalert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [chainId, setChainId] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          loadBlockchainData();
          getCurrentAddressConnected();
          addAccountsAndChainListener();
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
        } catch (error) {
          if (error.code === 4001) {
            swal("Request to access account denied!", "", "error");
          } else console.error(error);
        }
      } else {
        swal(
          "",
          "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
          "error"
        );
      }
    }
    loadWeb3();
  }, []);

  const loadBlockchainData = async () => {
    const contract = new window.web3.eth.Contract(contractAbi, contractAddress);
    setContract(contract);
    const chainId = await window.web3.eth.getChainId();
    setChainId(chainId);
    //success when chainId = 4 else failure
    // you are connected to main net
    // Please connect to main net

    if (chainId === 4) {
      toast(`you are connected to main net`, {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      const totalSupply = await contract.methods.totalSupply().call();
      setTotalSupply(totalSupply);

      const price = await contract.methods.getNFTPrice().call();
      setPrice(price);
      const displayPrice = window.web3.utils.fromWei(price, "ether");
      setDisplayPrice(displayPrice);

      //event will be fired by the smart contract when a new Goose Punk is minted
      contract.events
        .GoosePunksMinted()
        .on("data", async function (result) {
          setTotalSupply(result.returnValues[0]);
        })
        .on("error", console.error);
    } else {
      toast("Please connect to main net", {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const getCurrentAddressConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addAccountsAndChainListener = async () => {
    //this event will be emitted when the currently connected chain changes.
    window.ethereum.on("chainChanged", (_chainId) => {
      window.location.reload();
    });

    // this event will be emitted whenever the user's exposed account address changes.
    window.ethereum.on("accountsChanged", (accounts) => {
      window.location.reload();
    });
  };

  // .mintGoosePunks(mintCount)

  async function mint(mintCount) {
    if (contract) {
      if (chainId === 4) {
        if (mintCount === 0) {
          swal("Atleast 1 Goose Punk should be minted", "", "info");
        } else {
          const finalPrice = Number(price) * mintCount;
          contract.methods
            .mintGoosePunks(mintCount)
            .send({ from: account, value: finalPrice })
            .on("transactionHash", function () {
              swal({
                title: "Minting NFT!",
                icon: "info",
              });
            })
            .on("confirmation", function () {
              const el = document.createElement("div");
              el.innerHTML =
                "View minted NFT on OpenSea : <a href='https://testnets.opensea.io/account' target='_blank'>View Now</a>";

              swal({
                title: "NFT Minted!",
                content: el,
                icon: "success",
              });
            })
            .on("error", function (error, receipt) {
              if (error.code === 4001) {
                swal("Transaction Rejected!", "", "error");
              } else {
                swal("Transaction Failed!", "", "error");
              }
            });
        }
      } else {
        swal("Please switch to mainnet to mint AngryBunnies", "", "error");
      }
    } else {
      swal(
        "",
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
        "error"
      );
    }
  }
  return (
    <div style={{ backgroundColor: "#1D1A24" }}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              account={account}
              mint={mint}
              totalSupply={totalSupply}
              displayPrice={displayPrice}
            />
          )}
        />
        <Route exact path="/lore" render={(props) => <Lore />} />
      </Switch>
    </div>
  );
};

export default App;
