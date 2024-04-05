import { UserPhoto } from "../../../../assets";

export const TestimonialItem = () => {
  return (
    <>
      <div>
        <div className="bg-gray-100 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600">
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
          </p>
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
                Jean Miguel
              </span>
              <span className="flex items-center text-xs dark:text-gray-400">
                Hace 3 días
                <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
