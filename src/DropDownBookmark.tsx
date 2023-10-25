import { FC } from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useRecipesContext } from "./ContextApi";
import BookmarkItem from "./BookmarkItem";

interface DropDownBookmarkProps {}

const DropDownBookmark: FC<DropDownBookmarkProps> = () => {
  const { bookmarks } = useRecipesContext();
  return (
    <div
      className={`${
        bookmarks.length ? "divide-y flex-col" : "gap-4"
      } bg-white   shadow-xl top-[4.53rem] right-[-3rem] px-5 py-2 absolute z-10 w-[22.1rem] h-content flex items-center`}
    >
      {bookmarks.length ? (
        <>
          {bookmarks.map((el) => (
            <BookmarkItem bookmark={el} key={el.id} />
          ))}
        </>
      ) : (
        <>
          <HiOutlineExclamationTriangle size={55} className="text-orange-500" />
          <p>No bookmarks yet. Find a nice recipe and bookmark it ;)</p>
        </>
      )}
    </div>
  );
};

export default DropDownBookmark;
