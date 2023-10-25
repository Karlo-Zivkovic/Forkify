import { FC, useEffect } from "react";

import { useGetRecipe } from "./hooks/useGetRecipe";
import EmptyPage from "./EmptyPage";
import RecipeDetailContent from "./RecipeDetailContent";
import Spinner from "./Spinner";
import ErrorComp from "./ErrorComp";
import { useRecipesContext } from "./ContextApi";

const RecipeDetails: FC = () => {
  const { recipe, isLoading, error, isError } = useGetRecipe();
  const { setCurRecipe, curRecipe } = useRecipesContext();

  useEffect(
    function () {
      setCurRecipe(recipe);
    },
    [recipe, setCurRecipe]
  );

  let content;
  if (isError) content = <ErrorComp errorMsg={error?.message} />;
  if (!curRecipe) content = <EmptyPage />;
  if (isLoading) content = <Spinner type="big" />;
  if (curRecipe && !isLoading) {
    content = <RecipeDetailContent recipe={curRecipe} />;
  }

  return (
    <div className="w-[47rem]  bg-stone-100 text-center rounded-br-lg ">
      {content}
    </div>
  );
};

export default RecipeDetails;
