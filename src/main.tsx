import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import CalendarQuickStartPage from "./pages/CalendarQuickStart.tsx";

const router = createBrowserRouter([
  { path: "/", element: <CalendarQuickStartPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
