import { Logo } from '../../../assets/index'

export const Panel = () => {
  return (
    <div className="w-full lg:w-3/4 md:w-1/2 h-full sm:block hidden">
      <div
        className="flex flex-row md:flex-col lg:flex-row w-full h-full justify-center items-center font-bold text-centermontserrat-bold"
      >
        <img src={Logo} alt="logo-coco" className="w-48" />
        <h1 className="text-5xl">MedicPeru</h1>
      </div>
    </div>
  )
}
