import { useQuery } from "react-query";
import { getRecipe } from "../services/recipeApi";
import { useRecipesContext } from "../ContextApi";

export interface RecipeType2 {
  cooking_time?: number | undefined;
  servings: number;
  title?: string | undefined;
  ingredients?: { quantity: number; description: string; unit: string }[];
  image_url?: string;
  publisher?: string;
  id?: string;
  bookmarked?: boolean;
  source_url?: string;
}

export function useGetRecipe() {
  const { id, recipeDetailsFetching, setRecipeDetailsFetching } =
    useRecipesContext();

  const { data, isLoading, error, isError } = useQuery<
    { data: { recipe: RecipeType2 } },
    Error
  >({
    queryKey: ["recipe", id],
    queryFn: () => getRecipe(id!),
    retry: 1,
    enabled: recipeDetailsFetching,
    onSettled: () => {
      setRecipeDetailsFetching(false);
    },
  });

  const recipe = data?.data.recipe || null;

  return { recipe, isLoading, error, isError };
}
