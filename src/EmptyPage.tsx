import { FC } from "react";
import { HiOutlineFaceSmile } from "react-icons/hi2";

const EmptyPage: FC = () => {
  return (
    <div className="flex items-center gap-2 mt-14 w-full justify-center pt-[20]">
      <HiOutlineFaceSmile size={50} color="#f97316" />
      <p className="text-orange-500 font-semibold text-xl">
        Start by searching for a recipe or an ingredient. Have fun!
      </p>
    </div>
  );
};

export default EmptyPage;
