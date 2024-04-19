import { BodyDetail } from "./BodyDetail";
import { HeaderDetail } from "./HeaderDetail";
import { RecipeTable } from "./RecipeTable";

export const DetailMedical = () => {
  return (
    <main className="bg-white w-full height-per border-2 rounded-2xl border-gray-300 px-9 py-10 mt-4 overflow-y-auto space-y-8">
      <HeaderDetail />
      <BodyDetail />
      <RecipeTable />
    </main>
  );
};
