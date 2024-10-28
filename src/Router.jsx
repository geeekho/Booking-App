import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ListingDetailsPage from "./pages/ListingDetailsPage";
import ListingFavoritesPage from "./pages/ListingFavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

//old router method
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//     ],
//   },
// ]);
// const Router = () => <RouterProvider router={router} />;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings/:listingId" element={<ListingDetailsPage />} />
          <Route path="/favorites" element={<ListingFavoritesPage />} />
        </Route>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
