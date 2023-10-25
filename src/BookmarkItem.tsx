import { FC } from "react";
import { RecipeType2 } from "./hooks/useGetRecipe";
import { useRecipesContext } from "./ContextApi";

interface BookmarkItemProps {
  bookmark: RecipeType2;
}

const BookmarkItem: FC<BookmarkItemProps> = ({ bookmark }) => {
  const { setCurRecipe } = useRecipesContext();
  function handleBookmarkClick() {
    setCurRecipe(bookmark);
  }
  return (
    <button
      onClick={handleBookmarkClick}
      className="flex gap-8 items-center cursor-pointer  hover:bg-stone-200 hover:-translate-y-1 py-4 px-2 text-left "
    >
      <img
        className=" h-14 w-14  rounded-full"
        src={bookmark.image_url}
        alt={bookmark.title}
      />
      <div className="flex flex-col gap-1 w-52 overflow-hidden ">
        <p className="text-base text-orange-600 uppercase whitespace-nowrap truncate ">
          {bookmark.title}
        </p>
        <p className="text-xs uppercase text-stone-400">{bookmark.publisher}</p>
      </div>
    </button>
  );
};

export default BookmarkItem;
