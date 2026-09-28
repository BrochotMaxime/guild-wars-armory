import { useState } from "react";

import useArmorPlanning from "../../hooks/useArmorPlanning";

import ArmorPreviewGallery from "./ArmorPreviewGallery";
import ArmorRequirements from "./ArmorRequirements";

import MaterialDetails from "../materials/MaterialDetails";
import MaterialChecklist from "../materials/MaterialChecklist";

function ArmorDetails({
  armor,
  materials,
  craftingLocations,
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

  const armorCraftingLocations = armor.craftingLocationIds
    .map((locationId) =>
      craftingLocations.find((location) => location.id === locationId),
    )
    .filter(Boolean);

  const locationLabel =
    armorCraftingLocations.length === 1 ? "Location" : "Locations";

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

        <div className="armor-details__location">
          <span>{locationLabel}</span>

          {armorCraftingLocations.length > 0 ? (
            <ul className="armor-details__location-list">
              {armorCraftingLocations.map((location) => (
                <li key={location.id}>
                  <a
                    href={location.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${location.name} on Guild Wars Wiki — opens in a new tab`}
                  >
                    <span>{location.name}</span>
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <strong>Unknown location</strong>
          )}
        </div>
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
          onMaterialClick={setSelectedMaterial}
        />
      )}
    </section>
  );
}

export default ArmorDetails;
