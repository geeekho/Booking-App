import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
