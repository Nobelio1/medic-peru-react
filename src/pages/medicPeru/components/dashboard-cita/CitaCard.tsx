import { UserPersona } from "../../../../assets";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

export const CitaCard = () => {
  return (
    <>
      <tr className="bg-white ">
        <td
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
        >
          <img
            className="w-10 h-10 rounded-full"
            src={UserPersona}
            alt="user-name"
          />
          <div className="pl-4">
            <div className="text-base font-semibold">Carlos Barrera</div>
            <div className="font-normal text-gray-500">Vacunacion</div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold">87654321</td>
        <td className="px-6 py-4 font-semibold">33366699</td>
        <td className="px-6 py-4 font-semibold">Lima - Breña</td>
        <td scope="row">
          <div className="ps-3 ">
            <div className="text-base font-semibold">14/Marzo/2024</div>
            <div className="font-normal text-gray-500">13:00 PM</div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold">30 minutos</td>

        <td className="px-6 py-4">
          <Link to={"/medical-history"}>
            <button className="btn bg-transparent border-none shadow-none">
              <SlArrowRight />
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};
