import MaterialItem from "../materials/MaterialItem";
import CurrencyAmount from "../ui/CurrencyAmount";

function ArmorRequirements({ armor, materials, onMaterialClick, onPlanArmor }) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  const commonMaterials = armor.cost.materials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "common",
  );

  const rareMaterials = armor.cost.materials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "rare",
  );

  function renderMaterial({ materialId, quantity }) {
    const material = getMaterialById(materialId);

    if (!material) {
      return null;
    }

    return (
      <MaterialItem
        key={materialId}
        material={material}
        quantity={quantity}
        onDetailsClick={() => onMaterialClick(material)}
      />
    );
  }

  const titleId = `armor-requirements-${armor.id}-title`;

  return (
    <section className="armor-requirements" aria-labelledby={titleId}>
      <h3 id={titleId}>Requirements</h3>

      <p className="armor-requirements__gold">
        Cost:{" "}
        <strong>
          <CurrencyAmount goldAmount={armor.cost.gold} />
        </strong>
      </p>

      {commonMaterials.length > 0 && (
        <div className="armor-requirements__group">
          <h4>Common materials</h4>

          <ul className="material-list">
            {commonMaterials.map(renderMaterial)}
          </ul>
        </div>
      )}

      {rareMaterials.length > 0 && (
        <div className="armor-requirements__group">
          <h4>Rare materials</h4>

          <ul className="material-list">{rareMaterials.map(renderMaterial)}</ul>
        </div>
      )}

      <button
        type="button"
        className="button-primary plan-armor-button"
        onClick={onPlanArmor}
      >
        Plan this armor
      </button>
    </section>
  );
}

export default ArmorRequirements;
