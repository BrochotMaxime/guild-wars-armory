function MaterialChecklistRow({
  row,
  onInventoryChange,
  onCraftingToggle,
  onMaterialClick,
}) {
  const {
    material,
    required,
    missing,
    depth,
    armorQuantity,
    craftQuantity,
    canCraft,
    isCrafting,
    inventoryValue,
  } = row;

  function renderNeed() {
    if (armorQuantity > 0 && craftQuantity > 0) {
      return (
        <>
          {armorQuantity} <br className="material-checklist__need-break" />+{" "}
          {craftQuantity} <br className="material-checklist__need-break" />={" "}
          {required}
        </>
      );
    }

    if (craftQuantity > 0) {
      return `+ ${craftQuantity}`;
    }

    return armorQuantity;
  }

  return (
    <tr>
      <th scope="row">
        <div
          className="material-checklist__material"
          style={{ "--material-depth": depth }}
        >
          <div className="material-checklist__material-identity">
            <img
              className="material-checklist__material-icon"
              src={material.icon}
              alt=""
              loading="lazy"
              decoding="async"
            />

            <span className="material-checklist__material-name">
              {material.name}
            </span>

            <button
              type="button"
              className="material-checklist__details-button"
              aria-label={`View details for ${material.name}`}
              onClick={() => onMaterialClick(material)}
            >
              Details
            </button>
          </div>

          {canCraft && missing > 0 && (
            <label className="material-checklist__craft-option">
              <input
                type="checkbox"
                checked={isCrafting}
                onChange={() => onCraftingToggle(material.id)}
              />

              <span>Craft missing</span>

              <span className="visually-hidden"> {material.name}</span>
            </label>
          )}
        </div>
      </th>

      <td data-label="Need">{renderNeed()}</td>

      <td data-label="Owned">
        <input
          type="number"
          min="0"
          step="1"
          value={inventoryValue}
          aria-label={`Owned quantity for ${material.name}`}
          onChange={(event) =>
            onInventoryChange(material.id, event.target.value)
          }
        />
      </td>

      <td data-label="Missing">
        {isCrafting && missing > 0 ? (
          <span className="material-checklist__crafted-status">Via craft</span>
        ) : (
          missing
        )}
      </td>
    </tr>
  );
}

export default MaterialChecklistRow;
