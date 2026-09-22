import ArmorCard from "../armor/ArmorCard";

function ArmorList({ armors, selectedArmor, onSelectArmor }) {
  const standardArmors = armors.filter((armor) => !armor.prestige);
  const prestigeArmors = armors.filter((armor) => armor.prestige);

  function renderArmorCard(armor) {
    return (
      <ArmorCard
        key={armor.id}
        armor={armor}
        isSelected={selectedArmor?.id === armor.id}
        onSelectArmor={onSelectArmor}
      />
    );
  }

  return (
    <div
      className={`armor-list ${
        selectedArmor ? "armor-list--has-selection" : ""
      }`}
    >
      {armors.length > 0 ? (
        <div className="armor-list__groups">
          {standardArmors.length > 0 && (
            <div
              className="armor-list__group"
              role="group"
              aria-labelledby="standard-armors-title"
            >
              <h3 id="standard-armors-title" className="visually-hidden">
                Standard armors
              </h3>

              <div className="armor-list__grid">
                {standardArmors.map(renderArmorCard)}
              </div>
            </div>
          )}

          {prestigeArmors.length > 0 && (
            <div
              className="armor-list__group"
              role="group"
              aria-labelledby="prestige-armors-title"
            >
              <h3 id="prestige-armors-title" className="visually-hidden">
                Prestige armors
              </h3>

              <div className="armor-list__grid">
                {prestigeArmors.map(renderArmorCard)}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>No armor is available for this selection.</p>
      )}
    </div>
  );
}

export default ArmorList;
