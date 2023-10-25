import { FC } from "react";
import { RecipeType } from "./hooks/useGetRecipes";

interface PropsType {
  recipe: RecipeType;
  onClick: (id: string) => void;
  isActiveItem: RecipeType | undefined;
}

const Recipe: FC<PropsType> = ({ recipe, onClick, isActiveItem }) => {
  return (
    <button
      onClick={() => onClick(recipe.id)}
      className={`${
        isActiveItem === recipe ? "bg-stone-200" : "bg-white"
      } px-10 py-4 hover:bg-stone-200 hover:-translate-y-1 gap-5 flex items-center  cursor-pointer hover:scale-105 text-left `}
    >
      <img
        className=" h-14 w-14  rounded-full"
        src={recipe.image_url}
        alt={recipe.title}
      />

      <div className="flex flex-col gap-1 w-52 overflow-hidden ">
        <p className="text-base text-orange-600 uppercase whitespace-nowrap truncate ">
          {recipe.title}
        </p>
        <p className="text-xs uppercase text-stone-400">{recipe.publisher}</p>
      </div>
    </button>
  );
};

export default Recipe;
