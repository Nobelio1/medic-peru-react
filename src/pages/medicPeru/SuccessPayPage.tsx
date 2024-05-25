import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const SuccessPayPage = () => {
  return (
    <div className="w-full px-4 mb-4">
      <div className="bg-white rounded-md h-[768px] py-2 px-4 flex flex-col justify-center items-center ">
        <CircleCheck color="green" size={100} />
        <h1 className="mt-4 text-xl font-bold">
          Su compra se relizo con exito
        </h1>
        <Link
          to={"/medic-peru/"}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold text-xl"
        >
          Volver al Home
        </Link>
      </div>
    </div>
  );
};
