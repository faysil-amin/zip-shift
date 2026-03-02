import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
  },
  {
    index: true,
    Component: Home,
  },
]);
