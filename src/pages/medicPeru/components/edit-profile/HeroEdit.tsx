import { Edit, UserPersona } from "../../../../assets";

export const HeroEdit = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Editar Perfil</h1>
        <button className="flex justify-center items-center gap-2 btn bg-teal-500 hover:bg-teal-600 text-lg text-white">
          <span>Editar</span>{" "}
          <img src={Edit} alt="editar-icon" className="w-5" />
        </button>
      </header>
      <main className="w-full mt-6 px-4 py-1">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-2 justify-center items-center m-4">
            <picture>
              <div className="avatar">
                <div className="w-36 rounded-full">
                  <img src={UserPersona} />
                </div>
              </div>
            </picture>
            <h2 className="text-xl font-semibold ">Diego Garcia</h2>
          </div>
          <div className="col-span-3 flex flex-col justify-center gap-3">
            <h2 className="text-xl font-semibold">Sobre mí</h2>
            <p className="text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              repudiandae ea delectus repellat, deleniti reprehenderit, culpa
              temporibus libero cupiditate quod numquam, rerum sit magnam ipsam
              reiciendis. Eligendi officia tenetur, recusandae aperiam in itaque
              ullam vero at! Est voluptas ex earum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Autem repudiandae ea delectus
              repellat, deleniti reprehenderit, culpa temporibus libero
              cupiditate quod numquam, rerum sit magnam ipsam reiciendis.
              Eligendi officia tenetur, recusandae aperiam in itaque ullam vero
              at! Est voluptas ex earum.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
