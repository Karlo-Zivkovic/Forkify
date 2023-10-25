import { FC } from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
interface ErrorCompProps {
  errorMsg: string | undefined;
}

const ErrorComp: FC<ErrorCompProps> = ({ errorMsg }) => {
  return (
    <div className="flex items-center justify-center  gap-2 mt-14">
      <HiOutlineEmojiSad size={50} color="#f97316" />
      <p className="text-orange-500 font-semibold text-lg">{errorMsg}</p>
    </div>
  );
};

export default ErrorComp;
