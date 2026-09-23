import { useState } from "react";

import useArmorPlanning from "../../hooks/useArmorPlanning";

import ArmorPreviewGallery from "./ArmorPreviewGallery";
import ArmorRequirements from "./ArmorRequirements";

import MaterialDetails from "../materials/MaterialDetails";
import MaterialChecklist from "../materials/MaterialChecklist";

function ArmorDetails({
  armor,
  materials,
  craftingRecipes,
  acquisitionMethods,
  onCheckMaterials,
}) {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const {
    materialStatus,
    actualMaterialNeeds,
    craftingRequirements,
    craftingSelections,
    inventory,
    isCheckingMaterials,
    startPlanning,
    toggleCrafting,
    updateInventory,
  } = useArmorPlanning(armor, materials, craftingRecipes);

  function handleCheckMaterials() {
    startPlanning();
    onCheckMaterials();
  }

  const craftingLocationNames = armor.craftingLocations
    .map((location) => location.name)
    .join(" • ");

  const titleId = `armor-details-${armor.id}-title`;

  return (
    <section
      id="armor-details"
      className="armor-details"
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <header className="armor-details__header">
        <div>
          <h2 id={titleId}>{armor.name}</h2>

          {armor.prestige && (
            <span className="armor-details__prestige">Prestige</span>
          )}
        </div>

        <p className="armor-details__location">
          <span>Location</span>

          <strong>{craftingLocationNames || "Unknown location"}</strong>
        </p>
      </header>

      <div className="armor-details__overview">
        <ArmorPreviewGallery armor={armor} />

        <ArmorRequirements
          armor={armor}
          materials={materials}
          onMaterialClick={setSelectedMaterial}
          onCheckMaterials={handleCheckMaterials}
        />
      </div>

      {selectedMaterial && (
        <MaterialDetails
          material={selectedMaterial}
          materials={materials}
          acquisitionMethods={acquisitionMethods}
          craftingRecipes={craftingRecipes}
          onClose={() => setSelectedMaterial(null)}
        />
      )}

      {isCheckingMaterials && (
        <MaterialChecklist
          materialStatus={materialStatus}
          actualMaterialNeeds={actualMaterialNeeds}
          materials={materials}
          craftingRecipes={craftingRecipes}
          craftingSelections={craftingSelections}
          craftingRequirements={craftingRequirements}
          inventory={inventory}
          onInventoryChange={updateInventory}
          onCraftingToggle={toggleCrafting}
        />
      )}
    </section>
  );
}

export default ArmorDetails;
