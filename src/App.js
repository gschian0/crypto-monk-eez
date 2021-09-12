import React from "react";
import "./styles.css";
import "@google/model-viewer/dist/model-viewer";
export default function App() {
  return (
    <div>
    <div className="title-plate">
    <h1 className="center">CRYPTO-MONK-EEZ</h1>
    </div>
    <span id="card">
     
    
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
            ar-status="not-presenting">
            <button slot="ar-button" >
              AR
            </button>
          </model-viewer>
        
          </span>

          

          <span id="card">
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
            ar-status="not-presenting">
            <button slot="ar-button" class="styles_arButton__lU3m5">
              AR
            </button>
          </model-viewer>
          </span>

          <div id="card">
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
            ar-status="not-presenting">
            <button slot="ar-button" class="styles_arButton__lU3m5">
              AR
            </button>
          </model-viewer>
          </div>

          <div id="card">
          <model-viewer
            className="center"
            src="https://ipfs.io/ipfs/bafybeidiomtnf7fhdu3wuscfihdljhgwttralubbuilp5i37xhxi6k5ld4"
            autoplay="true"
            auto-rotate="true"
            data-js-focus-visible="true"
            interaction-prompt="none"
            ar="true"
            ar-modes="webxr scene-viewer quick-look"
            camera-controls="true"
            ar-status="not-presenting">
            <button slot="ar-button" class="styles_arButton__lU3m5">
              AR
            </button>
          </model-viewer>
          </div>

          <div id="card">
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
            ar-status="not-presenting">
            <button slot="ar-button" class="styles_arButton__lU3m5">
              AR
            </button>
          </model-viewer>
          </div>

          <div id="card">
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
            ar-status="not-presenting">
            <button slot="ar-button" class="styles_arButton__lU3m5">
              AR
            </button>
          </model-viewer>
          </div>

  </div>

  );
}
