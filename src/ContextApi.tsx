import { FC, useRef } from "react";
import { createContext, useContext, useState } from "react";
import { RecipeType2 } from "./hooks/useGetRecipe";

export const RECIPES_PER_PAGE = 12;

interface RecipesContextType {
  id: string | null;
  setId: (id: string | null) => void;
  recipesFetching: boolean;
  setRecipesFetching: (isFetching: boolean) => void;
  recipeDetailsFetching: boolean;
  setRecipeDetailsFetching: (isFetching: boolean) => void;
  queryRef: React.RefObject<HTMLInputElement | null>;
  bookmarks: RecipeType2[];
  setBookmarks: React.Dispatch<React.SetStateAction<RecipeType2[]>>;
  curRecipe: RecipeType2 | null;
  setCurRecipe: React.Dispatch<React.SetStateAction<RecipeType2 | null>>;
  currentPage: number;
  setCurrentPage: (no: number) => void;
}

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

interface ContextApiProps {
  children: React.ReactNode;
}

export const ContextApi: FC<ContextApiProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [id, setId] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<RecipeType2[]>([]);

  const [recipesFetching, setRecipesFetching] = useState<boolean>(false);
  const [recipeDetailsFetching, setRecipeDetailsFetching] =
    useState<boolean>(false);
  const queryRef = useRef<HTMLInputElement | null>(null);
  const [curRecipe, setCurRecipe] = useState<RecipeType2 | null>(null);

  return (
    <RecipesContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        bookmarks,
        setBookmarks,
        recipeDetailsFetching,
        setRecipeDetailsFetching,
        queryRef,
        setId,
        id,
        recipesFetching,
        setRecipesFetching,
        curRecipe,
        setCurRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export function useRecipesContext() {
  const context = useContext(RecipesContext);
  if (context === undefined) {
    throw new Error("useRecipes must be used within a RecipeProvider");
  }
  return context;
}

export default ContextApi;
