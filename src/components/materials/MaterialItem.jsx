function MaterialItem({ material, quantity, onDetailsClick }) {
  return (
    <li className="material-item">
      <img
        className="material-item__icon"
        src={material.icon}
        alt=""
        loading="lazy"
        decoding="async"
      />

      <span className="material-item__name">{material.name}</span>

      <strong className="material-item__quantity">
        <span aria-hidden="true">× {quantity}</span>
        <span className="visually-hidden">{quantity} required</span>
      </strong>

      <button
        type="button"
        className="button-secondary material-item__details"
        aria-label={`View details for ${material.name}`}
        onClick={onDetailsClick}
      >
        Details
      </button>
    </li>
  );
}

export default MaterialItem;
