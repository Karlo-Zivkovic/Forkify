import { useQuery } from "react-query";
import { getRecipes } from "../services/recipeApi";
import { useRecipesContext } from "../ContextApi";

export interface RecipeType {
  image_url: string;
  publisher: string;
  id: string;
  title: string;
}

export function useGetRecipes() {
  const { recipesFetching, queryRef, setRecipesFetching } = useRecipesContext();

  const { data, isLoading, error, isError } = useQuery<
    { data: { recipes: RecipeType[] } },
    Error
  >({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(queryRef.current!.value!),
    retry: 1,
    enabled: recipesFetching,
    onSettled: () => {
      setRecipesFetching(false);
      queryRef.current!.value = "";
    },
  });

  const recipes = data?.data.recipes;
  return { recipes, isLoading, error, isError };
}
