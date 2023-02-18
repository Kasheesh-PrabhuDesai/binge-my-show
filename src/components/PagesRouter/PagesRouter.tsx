import { Route, Routes } from "react-router-dom";
import CategoryPage from "../../pages/CategoryPage";
import DetailsPage from "../../pages/DetailsPage";
import HomePage from "../../pages/HomePage";

export default function PagesRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/movie" element={<DetailsPage />} />
    </Routes>
  );
}
