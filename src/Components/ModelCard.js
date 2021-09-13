const ModelCard = (props) => {
  return (
    <span id="card">
      <model-viewer
        className="center"
        src={props.nftAddress}
        autoplay="true"
        auto-rotate="true"
        data-js-focus-visible="true"
        interaction-prompt="none"
        ar="true"
        ar-modes="webxr scene-viewer quick-look"
        camera-controls="true"
        ar-status="not-presenting"
      >
        <button slot="ar-button" className="styles_arButton__lU3m5">
          AR
        </button>
        <h2 className="center-h2">{props.itemName}</h2>
      </model-viewer>
    </span>
  );
};

export default ModelCard;
