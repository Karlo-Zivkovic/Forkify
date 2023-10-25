import { FC } from "react";
import {
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlinePlusCircle,
  HiOutlineMinusCircle,
  HiOutlineBookmark,
  HiCheck,
  HiArrowRight,
} from "react-icons/hi2";
import { RecipeType2 } from "./hooks/useGetRecipe";
import { useRecipesContext } from "./ContextApi";

interface RecipeDetailContentType {
  recipe: RecipeType2;
}

const RecipeDetailContent: FC<RecipeDetailContentType> = ({ recipe }) => {
  const { setBookmarks, bookmarks } = useRecipesContext();
  const { curRecipe, setCurRecipe } = useRecipesContext();
  const backgroundImageStyle = {
    backgroundImage: `url(${recipe.image_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "full",
    height: "20rem",
  };

  function handleBookmark() {
    if (!bookmarks.find((el) => el.id === recipe.id)) {
      setBookmarks((prevBookmarks) => {
        const newBookmarks = [
          ...prevBookmarks,
          { ...recipe, bookmarked: true },
        ];
        return newBookmarks;
      });
    } else {
      const filteredBookmarks = bookmarks.filter(
        (el) => el.id !== curNewRecipe?.id
      );
      setBookmarks(filteredBookmarks);
    }
  }

  function handleIncrease() {
    const newIncreasedIngredients = curRecipe?.ingredients!.map((ingr) => {
      const x = ingr.quantity / curRecipe.servings;
      return { ...ingr, quantity: Number((ingr.quantity + x).toFixed(2)) };
    });

    setCurRecipe((oldRecipe) => ({
      ...oldRecipe,
      ingredients: newIncreasedIngredients,
      servings: oldRecipe!.servings + 1,
    }));
  }

  function handleDecrease() {
    const newIncreasedIngredients = curRecipe?.ingredients!.map((ingr) => {
      const x = ingr.quantity / curRecipe.servings;
      return { ...ingr, quantity: Number((ingr.quantity - x).toFixed(2)) };
    });

    setCurRecipe((oldRecipe) => ({
      ...oldRecipe,
      ingredients: newIncreasedIngredients,
      servings: oldRecipe!.servings - 1,
    }));
  }

  const curNewRecipe = bookmarks.find((el) => el.id === recipe.id);
  return (
    <div>
      <div className="relative">
        <h1 className="uppercase font-semibold text-stone-100 bg-gradient-to-br from-orange-200 to-orange-500 absolute z-50 px-6 py-1.5 left-[50%]  -bottom-4 translate-x-[-50%] text-3xl shadow-lg">
          {recipe.title}
        </h1>
        <div className="opacity-50" style={backgroundImageStyle}></div>
      </div>
      <div className="bg-stone-100 w-full h-[8rem] flex items-center px-20 gap-10 justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <HiOutlineClock size={32} className="text-orange-500 " />
            <p className="text-lg font-light">
              <span className="font-semibold">{recipe.cooking_time} </span>
              MINUTES
            </p>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineUsers size={32} className="text-orange-500 " />
            <p className="text-lg font-light">
              <span className="font-semibold">{recipe.servings} </span>
              SERVINGS
            </p>
            <div className="flex gap-1">
              <button
                disabled={curRecipe?.servings === 1}
                onClick={handleDecrease}
              >
                <HiOutlineMinusCircle
                  className="text-orange-500 hover:-translate-y-[2px]"
                  size={23}
                />
              </button>
              <button
                disabled={curRecipe?.servings === 10}
                onClick={handleIncrease}
              >
                <HiOutlinePlusCircle
                  size={23}
                  className="text-orange-500 hover:-translate-y-[2px]"
                />
              </button>
            </div>
          </div>
        </div>
        <button onClick={handleBookmark}>
          <HiOutlineBookmark
            // fill={false}
            size={46}
            className={`text-stone-100 bg-gradient-to-br from-orange-200 to-orange-500 rounded-full p-2 hover:scale-110 hover:cursor-pointer ${
              curNewRecipe?.bookmarked && "fill-slate-50"
            }`}
          />
        </button>
      </div>
      <div className="w-full h-content py-8 px-16 text-sm bg-stone-200">
        <h1 className="text-center text-xl font-semibold text-orange-500 pb-6">
          RECIPE INGREDIENTS
        </h1>
        <div className="flex w-full px-2 overflow-y-auto h-[15rem] items-center justify-between flex-wrap text-left">
          {recipe.ingredients!.map((ingr) => (
            <div
              key={Math.random()}
              className="flex w-[17rem] items-top gap-2 h-16 mb-0.5"
            >
              <HiCheck size={24} className="text-orange-500 w-8 text-3xl" />
              <p className="text-sm w-48 grow">
                {`${ingr.quantity > 0 ? ingr.quantity : ""} ${ingr.unit}
                ${ingr.description}`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-content pb-8 pt-14  px-16 text-sm ">
        <h1 className="text-center text-xl font-semibold text-orange-500 pb-6 ">
          HOW TO COOK IT
        </h1>
        <p className="text-base text-stone-600 leading-8">
          This recipe was carefully designed and tested by{" "}
          <span className="font-semibold">{recipe.publisher}</span>. Please
          check out directions at their website.
        </p>
        <button
          onClick={() => (window.location.href = `${recipe.source_url}`)}
          className="mt-10 bg-gradient-to-br from-orange-200 to-orange-500 px-6 py-2 font-semibold text-stone-100 text-lg rounded-full hover:scale-105 "
        >
          <a href={recipe.source_url} className="flex items-center gap-2">
            <span>DIRECTIONS</span>
            <HiArrowRight />
          </a>
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailContent;
