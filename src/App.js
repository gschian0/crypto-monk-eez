import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import "@google/model-viewer/dist/model-viewer";
import PurchaseLink from "./Components/PurchaseLink";
import ModelCard from "./Components/ModelCard";
import SoldLink from "./Components/SoldLink";
import axios from "axios";
import Tabs from "./Components/Tabs.js";
import Tab from "./Components/Tab.js";

export default function App() {
  const [objkts, setObjkt] = useState([]);
  const [year, setYear] = useState(2021);
  async function getTokenInfo(id) {
    try {
      const res = await axios.get(
        "https://api.better-call.dev/v1/tokens/mainnet/metadata?token_id=" +
          id.toString()
      );
      return res.data[0];
    } catch (error) {
      return null;
    }
  }

  // console.log(getTokenInfo(36899));

  async function getObjkts(id) {
    let queue = new Array();
    if (typeof id == "object") {
      id.forEach((element) => {
        queue.push(getTokenInfo(element));
      });
      Promise.all(queue).then((values) => {
        console.log(
          values.forEach((value) => {
            console.log(value);
            return value.data;
          })
        );
      });
    } else {
      queue.push(getTokenInfo(id));
      Promise.all(queue).then((values) => {
        console.log(values);
        return values.data;
      });
    }
  }
  const names = [];
  const MONKEEZ = getObjkts([
    290697, 290884, 291061, 291147, 291195, 293472, 293684, 298212,301025
  ]);

  for (let i = 0; i < MONKEEZ.length; i++) {
    console.log(MONKEEZ[i].data);
    names[i] = MONKEEZ[i];
  }

  return (
    <div>
      <div className="title-plate">
        <h1 className="center">CRYPTO MONK-EEZ</h1>
        <a href="https://www.wavefunction.dev">
          <h6> by wavefunction</h6>
        </a>
      </div>
      <ModelCard
        itemName={names ? "Crypto-Monk-Eez #1" : "Loading..."}
        nftAddress="https://ipfs.io/ipfs/bafybeicodrdwmgv74lzqvm7pg3byz2ml5dga4if6pztgsv56fmkjdlxcbi"
      />
      <SoldLink link="https://www.hicetnunc.xyz/objkt/290697" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #2"
        nftAddress="https://ipfs.io/ipfs/bafybeie7kuvl754vsszxmg45yhrpcuw4n6ifd5gbiy2kxbuhhahlzgbphu"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/290884" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #3 - Congo"
        nftAddress="https://ipfs.io/ipfs/bafybeidiomtnf7fhdu3wuscfihdljhgwttralubbuilp5i37xhxi6k5ld4"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/291061" />
      <div> </div>
      <ModelCard
        itemName="Crypto-Monk-Eez #4 - AAOG"
        nftAddress="https://ipfs.io/ipfs/bafybeiebmkwdhiudr5ljjjoqqltatpbba6pkwslgmrkgpvwa5jxlgjzymi"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/291147" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #5 - Stein"
        nftAddress="https://ipfs.io/ipfs/bafybeibnih3glfcriakjm4zumeda5kyvewvxubfaszcnjkkmojztjoalh4"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/291195" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #6 - Boid"
        nftAddress="https://ipfs.io/ipfs/bafybeifdk4vncbdvih4qmlu4awnunrnfsk666dwsssibjmm2hssuy6dfiq"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/293472" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #7 - Scratch"
        nftAddress="https://ipfs.io/ipfs/bafybeigsjznxyh7cfyf7yedvwjmxh6jjoo5y2vnnwx5tkpn6rb5nwngscm"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/293684" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #8 - Gizmo"
        nftAddress="https://ipfs.io/ipfs/bafybeifszy6l5mzmq6sdoeeopephtwbhiiuewsh4uccjmajxdur3kss44i"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/298212" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #9 - Suzie"
        nftAddress="https://ipfs.io/ipfs/bafybeieqa5twxnkgsii2mlo46wt6fblazvpub7phno4qikne2ciayg26cy"
      />
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/301025" />
      <br></br>
      <footer> copywright {new Date().getFullYear()}</footer>
    </div>
  );
}
