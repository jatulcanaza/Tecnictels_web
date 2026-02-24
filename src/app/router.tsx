import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";

import { HomePage } from "../pages/Home/HomePage";
import { ServicesPage } from "../pages/Services/ServicesPage";
import { ProjectsPage } from "../pages/Projects/ProjectsPage";
import { AboutPage } from "../pages/About/AboutPage";
import { ContactPage } from "../pages/Contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "servicios", element: <ServicesPage /> },
      { path: "proyectos", element: <ProjectsPage /> },
      { path: "nosotros", element: <AboutPage /> },
      { path: "contacto", element: <ContactPage /> },
    ],
  },
]);