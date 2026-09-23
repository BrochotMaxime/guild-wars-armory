import MaterialChecklistRow from "./MaterialChecklistRow";
import CurrencyAmount from "../ui/CurrencyAmount";
import prepareMaterialChecklistMaterials from "../../utils/prepareMaterialChecklistMaterials";

function MaterialChecklist({
  materialStatus,
  actualMaterialNeeds,
  materials,
  craftingRecipes,
  craftingSelections,
  craftingRequirements,
  inventory,
  onInventoryChange,
  onCraftingToggle,
}) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  function hasCraftingRecipe(materialId) {
    return craftingRecipes.some(
      (recipe) => recipe.outputMaterialId === materialId,
    );
  }

  function getArmorQuantity(materialId) {
    const armorRequirement = materialStatus.find(
      (item) => item.materialId === materialId,
    );

    return armorRequirement?.required ?? 0;
  }

  function getCraftQuantity(materialId) {
    return craftingRequirements.reduce((total, requirement) => {
      const ingredient = requirement.ingredients.find(
        (item) => item.materialId === materialId,
      );

      return total + (ingredient?.quantity ?? 0);
    }, 0);
  }

  const {
    commonPlannerMaterials,
    orderedRareMaterials,
    additionalCraftingGold,
  } = prepareMaterialChecklistMaterials({
    materialStatus,
    actualMaterialNeeds,
    materials,
    craftingRequirements,
  });

  function renderMaterialRow({ materialId, required, missing, depth = 0 }) {
    const material = getMaterialById(materialId);

    if (!material) {
      return null;
    }

    const row = {
      material,
      required,
      missing,
      depth,
      armorQuantity: getArmorQuantity(materialId),
      craftQuantity: getCraftQuantity(materialId),
      canCraft: material.type === "rare" && hasCraftingRecipe(materialId),
      isCrafting: Boolean(craftingSelections[materialId]),
      inventoryValue: inventory[materialId] ?? "",
    };

    return (
      <MaterialChecklistRow
        key={materialId}
        row={row}
        onInventoryChange={onInventoryChange}
        onCraftingToggle={onCraftingToggle}
      />
    );
  }

  const titleId = "material-checklist-title";

  return (
    <section
      id="material-checklist"
      className="material-checklist"
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <h3 id={titleId}>Material checklist</h3>

      <div className="material-checklist__table-wrapper">
        <table aria-label="Material requirements">
          <thead>
            <tr>
              <th scope="col">Material</th>
              <th scope="col">Need</th>
              <th scope="col">Owned</th>
              <th scope="col">Missing</th>
            </tr>
          </thead>

          {commonPlannerMaterials.length > 0 && (
            <tbody className="material-checklist__group">
              <tr className="material-checklist__group-title">
                <th scope="rowgroup" colSpan="4">
                  Common materials
                </th>
              </tr>

              {commonPlannerMaterials.map((material) =>
                renderMaterialRow(material),
              )}
            </tbody>
          )}

          {orderedRareMaterials.length > 0 && (
            <tbody className="material-checklist__group">
              <tr className="material-checklist__group-title">
                <th scope="rowgroup" colSpan="4">
                  Rare materials
                </th>
              </tr>

              {orderedRareMaterials.map((material) =>
                renderMaterialRow(material),
              )}
            </tbody>
          )}
        </table>
      </div>

      {additionalCraftingGold > 0 && (
        <p className="material-checklist__crafting-cost">
          Additional crafting cost:{" "}
          <strong>
            <CurrencyAmount goldAmount={additionalCraftingGold} />
          </strong>
        </p>
      )}
    </section>
  );
}

export default MaterialChecklist;
