import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";

import {
  // HiOutlinePencilSquare,
  HiOutlineBookmark,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { useRecipesContext } from "./ContextApi";
import DropDownBookmark from "./DropDownBookmark";

const Header: FC = () => {
  const { queryRef, setRecipesFetching, setCurrentPage } = useRecipesContext();
  const [dropDownActive, setDropDownActive] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRecipesFetching(true);
    setCurrentPage(1);
  }

  function handleClick() {
    setDropDownActive((cur) => !cur);
  }
  return (
    <div className="px-12 py-6 h-[6rem] rounded-t-lg bg-gray-100 flex justify-between ">
      <img className="h-12" src="logo.png" alt="fork and spoon" />
      <form onSubmit={handleSubmit} className="flex">
        <input
          ref={queryRef as React.RefObject<HTMLInputElement>}
          className="w-96 rounded-full px-6 outline-none focus:shadow-lg  placeholder:text-stone-350 translate-x-10"
          placeholder="Search over 1,000,000 recipes...
        "
        />
        <button className="w-40 bg-gradient-to-br from-orange-200 to-orange-500 -translate-x-10 rounded-full flex items-center justify-center text-stone-200 font-semibold gap-1.5 hover:scale-110 ">
          <HiMagnifyingGlass size={25} />
          <span>SEARCH</span>
        </button>
      </form>
      <div className="flex gap-3 items-center relative">
        {/* <button className="flex items-center hover:bg-gray-200 py-[33px] px-4">
          <HiOutlinePencilSquare size={30} className="text-orange-400" />
          <span className="text-sm font-semibold">ADD RECIPE</span>
        </button> */}
        <button
          onClick={handleClick}
          className="flex items-center gap-1.5 hover:bg-gray-200 py-[33px] px-4"
        >
          <HiOutlineBookmark size={30} className="text-orange-400" />
          <span className="text-sm font-semibold">BOOKMARKS</span>
        </button>

        <CSSTransition
          in={dropDownActive}
          timeout={5000}
          classNames="drop-down"
          unmountOnExit
        >
          <DropDownBookmark />
        </CSSTransition>
      </div>
    </div>
  );
};

export default Header;
