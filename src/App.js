import React from "react";
import "./styles.css";
import "@google/model-viewer/dist/model-viewer";
import PurchaseLink from "./Components/PurchaseLink";
import ModelCard from "./Components/ModelCard";
import SoldLink from "./Components/SoldLink";

export default function App() {
  return (
    <div>
      <div className="title-plate">
        <h1 className="center">CRYPTO-MONK-EEZ</h1>
      </div>

      <ModelCard
        itemName="Cyrpto-Monk-Eez #1"
        nftAddress="https://ipfs.io/ipfs/bafybeicodrdwmgv74lzqvm7pg3byz2ml5dga4if6pztgsv56fmkjdlxcbi"
      />
      {/* <span id="card">
        <model-viewer
          className="center"
          src="https://ipfs.io/ipfs/bafybeicodrdwmgv74lzqvm7pg3byz2ml5dga4if6pztgsv56fmkjdlxcbi"
          autoplay="true"
          auto-rotate="true"
          data-js-focus-visible="true"
          interaction-prompt="none"
          ar="true"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls="true"
          ar-status="not-presenting"
        >
          <button slot="ar-button" class="styles_arButton__lU3m5">
            AR
          </button>
          <h2 className="center-h2">Cyrpto-Monk-Eez #1</h2>
        </model-viewer>
      </span> */}

      {/* //add logic to show the next card */}
      <SoldLink link="https://www.hicetnunc.xyz/objkt/290697" />

      <ModelCard
        itemName="Cyrpto-Monk-Eez #2"
        nftAddress="https://ipfs.io/ipfs/bafybeie7kuvl754vsszxmg45yhrpcuw4n6ifd5gbiy2kxbuhhahlzgbphu"
      />
      {/* <div id="card">
        <model-viewer
          className="center"
          src="https://ipfs.io/ipfs/bafybeie7kuvl754vsszxmg45yhrpcuw4n6ifd5gbiy2kxbuhhahlzgbphu"
          autoplay="true"
          auto-rotate="true"
          data-js-focus-visible="true"
          interaction-prompt="none"
          ar="true"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls="true"
          ar-status="not-presenting"
        >
          <button slot="ar-button" class="styles_arButton__lU3m5">
            AR
          </button>
          <h2 className="center-h2">Cyrpto-Monk-Eez #2</h2>
          <h2 className="center-h2">Samhain</h2>
        </model-viewer>
      </div> */}
      {/* //add logic to show the next card */}
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/290884" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #3 - Congo"
        nftAddress="https://ipfs.io/ipfs/bafybeidiomtnf7fhdu3wuscfihdljhgwttralubbuilp5i37xhxi6k5ld4"
      />
      {/*       
      <div id="card">
        <model-viewer
          className="center"
          src=""
          autoplay="true"
          auto-rotate="true"
          data-js-focus-visible="true"
          interaction-prompt="none"
          ar="true"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls="true"
          ar-status="not-presenting"
        >
          <button slot="ar-button" class="styles_arButton__lU3m5">
            AR
          </button>
          <h2 className="center-h2">Cyrpto-Monk-Eez #3 - Congo</h2>
        </model-viewer>
      </div> */}

      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/291061" />
      <div> </div>
      <ModelCard
        itemName="Crypto-Monk-Eez #4 - AAOG"
        nftAddress="https://ipfs.io/ipfs/bafybeiebmkwdhiudr5ljjjoqqltatpbba6pkwslgmrkgpvwa5jxlgjzymi"
      />
      {/* <div id="card">
        <model-viewer
          className="center"
          src="https://ipfs.io/ipfs/bafybeiebmkwdhiudr5ljjjoqqltatpbba6pkwslgmrkgpvwa5jxlgjzymi"
          autoplay="true"
          auto-rotate="true"
          data-js-focus-visible="true"
          interaction-prompt="none"
          ar="true"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls="true"
          ar-status="not-presenting"
        >
          <button slot="ar-button" class="styles_arButton__lU3m5">
            AR
          </button>
          <h2 className="center-h2">Cyrpto-Monk-Eez #4 - AAOG</h2>
        </model-viewer>
      </div> */}
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/291147" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #5 - Stein"
        nftAddress="https://ipfs.io/ipfs/bafybeibnih3glfcriakjm4zumeda5kyvewvxubfaszcnjkkmojztjoalh4"
      />
      {/* <div id="card">
        <model-viewer
          className="center"
          src="https://ipfs.io/ipfs/bafybeibnih3glfcriakjm4zumeda5kyvewvxubfaszcnjkkmojztjoalh4"
          autoplay="true"
          auto-rotate="true"
          data-js-focus-visible="true"
          interaction-prompt="none"
          ar="true"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls="true"
          ar-status="not-presenting"
        >
          <button slot="ar-button" class="styles_arButton__lU3m5">
            AR
          </button>
          <h2 className="center-h2">Cyrpto-Monk-Eez #5 - Stein</h2>
        </model-viewer>
      </div> */}
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/291195" />

      <ModelCard
        itemName="Cyrpto-Monk-Eez #6 - Boid"
        nftAddress="https://ipfs.io/ipfs/bafybeifdk4vncbdvih4qmlu4awnunrnfsk666dwsssibjmm2hssuy6dfiq"
      />

      {/* <span id="card">
        <model-viewer
          className="center"
          src="https://ipfs.io/ipfs/bafybeifdk4vncbdvih4qmlu4awnunrnfsk666dwsssibjmm2hssuy6dfiq"
          autoplay="true"
          auto-rotate="true"
          data-js-focus-visible="true"
          interaction-prompt="true"
          ar="true"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls="true"
          ar-status="not-presenting"
        >
          <button slot="ar-button">AR</button>
          <h2 className="center-h2">Cyrpto-Monk-Eez #6 - Boid</h2>
        </model-viewer>
      </span> */}
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/293472" />
      <ModelCard
        itemName="Cyrpto-Monk-Eez #7 - Scratch"
        nftAddress="https://ipfs.io/ipfs/bafybeigsjznxyh7cfyf7yedvwjmxh6jjoo5y2vnnwx5tkpn6rb5nwngscm"
      />
      {/* <div id="card">
        <model-viewer
          className="center"
          src="https://ipfs.io/ipfs/bafybeigsjznxyh7cfyf7yedvwjmxh6jjoo5y2vnnwx5tkpn6rb5nwngscm"
          autoplay="true"
          auto-rotate="true"
          data-js-focus-visible="true"
          interaction-prompt="none"
          ar="true"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls="true"
          ar-status="not-presenting"
        >
          <button slot="ar-button" class="styles_arButton__lU3m5">
            AR
          </button>
          <h2 className="center-h2">Cyrpto-Monk-Eez #7 - Scratch</h2>
        </model-viewer>
      </div> */}
      <PurchaseLink link="https://www.hicetnunc.xyz/objkt/293684" />
    </div>
  );
}
