import { FC } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecipeDetails from "./RecipeDetails";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { RECIPES_PER_PAGE, useRecipesContext } from "./ContextApi";
import { useQueryClient } from "react-query";
import { RecipeType2 } from "./hooks/useGetRecipe";

const App: FC = () => {
  const { currentPage, setCurrentPage } = useRecipesContext();
  const queryClient = useQueryClient();
  const recipesData: { data: { recipes: RecipeType2[] } } | undefined =
    queryClient.getQueryData(["recipes"]);

  let recipes;
  let totalPages;
  if (recipesData) {
    recipes = recipesData.data.recipes;
    totalPages = Math.ceil(recipes?.length / RECIPES_PER_PAGE);
  }
  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }
  return (
    <div className="   w-screen bg-gradient-to-br from-orange-200 to-orange-400 flex justify-center text-stone-600 ">
      <div className="w-[70rem] my-[5rem] shadow-lg h-[78rem]">
        <Header />
        <div className="flex rounded-b-lg">
          <div className="divide-y bg-white  h-[74rem] flex flex-col  overflow-hidden overflow-x-hidden items-center w-[33%] justify-between rounded-bl-lg">
            <Sidebar />
            <div
              className={`flex w-[20rem]   ${
                currentPage === 1 && "justify-end"
              } gap-32 pb-10 pt-2 rounded-b-lg`}
            >
              {currentPage !== 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="flex gap-1 text-orange-500 font-semibold px-3 rounded-full py-1 hover:bg-stone-200 bg-stone-100 items-center mt-3 hover:scale-105  "
                >
                  <HiArrowSmallLeft />
                  <span>{currentPage - 1}</span>
                  <p>Page</p>
                </button>
              )}
              {currentPage <= totalPages! - 1 && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="flex gap-1 text-orange-500 font-semibold px-3 rounded-full py-1 hover:bg-stone-200 bg-stone-100 items-center mt-3  hover:scale-105"
                >
                  <p>Page</p>
                  <span>{currentPage + 1}</span>
                  <HiArrowSmallRight />
                </button>
              )}
            </div>
          </div>
          <RecipeDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
