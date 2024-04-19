import { HeroEdit, Form } from "./components/edit-profile";

export const EditProfilePage = () => {
  return (
    <>
      <div className="w-full h-screen montserrat-regular px-2 py-6">
        <HeroEdit />
        <Form />
      </div>
    </>
  );
};
