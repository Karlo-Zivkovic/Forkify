import { FC, useState } from "react";
import { RecipeType, useGetRecipes } from "./hooks/useGetRecipes";
import Recipe from "./Recipe";
import Spinner from "./Spinner";
import ErrorComp from "./ErrorComp";
import { useRecipesContext } from "./ContextApi";
import { RECIPES_PER_PAGE } from "./ContextApi";

const Sidebar: FC = () => {
  const { setId, setRecipeDetailsFetching, currentPage } = useRecipesContext();
  const { recipes, isLoading, error, isError } = useGetRecipes();
  const [isActiveItem, setIsActiveItem] = useState<RecipeType | undefined>(
    undefined
  );

  const indexOfLastRecipe = currentPage * RECIPES_PER_PAGE;
  const indexOfFirstRecipe = indexOfLastRecipe - RECIPES_PER_PAGE;
  const currentRecipes = recipes?.slice(indexOfFirstRecipe, indexOfLastRecipe);

  function handleClick(id: string) {
    setId(id);
    setRecipeDetailsFetching(true);
    setIsActiveItem(recipes?.find((rec) => rec.id === id));
  }

  if (isLoading) return <Spinner type="small" />;
  if (isError) return <ErrorComp errorMsg={error?.message} />;

  return (
    <div className="divide-y bg-white  h-[70rem] flex flex-col  overflow-hidden overflow-x-hidden items-center ">
      {currentRecipes?.map((recipe) => (
        <Recipe
          recipe={recipe}
          key={recipe.id}
          onClick={handleClick}
          isActiveItem={isActiveItem}
        />
      ))}
    </div>
  );
};

export default Sidebar;
