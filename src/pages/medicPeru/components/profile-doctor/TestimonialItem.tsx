import { UserPhoto } from "../../../../assets";
import { Opinions } from "../../../../interfaces/medicPeru.interface";

interface TestimonialItemProps {
  opinion: Opinions;
}

export const TestimonialItem = ({ opinion }: TestimonialItemProps) => {
  return (
    <>
      <div>
        <div className="bg-gray-100 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600">{opinion.comment}</p>
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={UserPhoto}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-2">
              <span className="text-sm font-semibold text-gray-600">
                {opinion.author}
              </span>
              <span className="flex items-center text-xs dark:text-gray-400">
                {opinion.lastDay}
                <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
