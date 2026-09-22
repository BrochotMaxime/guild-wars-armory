import CurrencyAmount from "../ui/CurrencyAmount";

function MaterialCraftingRecipe({ recipe, materials }) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  return (
    <div
      className="material-details__recipe"
      role="group"
      aria-labelledby={`recipe-${recipe.outputMaterialId}-title`}
    >
      <h5
        id={`recipe-${recipe.outputMaterialId}-title`}
        className="material-details__recipe-label"
      >
        Recipe
      </h5>

      <ul className="material-details__ingredients">
        {recipe.ingredients.map(({ materialId, quantity }) => {
          const ingredient = getMaterialById(materialId);

          if (!ingredient) {
            return null;
          }

          return (
            <li key={materialId} className="material-details__ingredient">
              <span className="visually-hidden">
                {quantity} {ingredient.name}
              </span>

              <span
                className="material-details__ingredient-content"
                aria-hidden="true"
              >
                <strong>{quantity}</strong>

                <img src={ingredient.icon} alt="" />
              </span>
            </li>
          );
        })}

        {recipe.gold > 0 && (
          <li className="material-details__recipe-gold">
            <strong>
              <CurrencyAmount goldAmount={recipe.gold} />
            </strong>
          </li>
        )}
      </ul>
    </div>
  );
}

export default MaterialCraftingRecipe;
