import "./App.css";
import { useContext } from "react";
import { Html5Qrcode } from "html5-qrcode";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./Layouts/PageLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route Path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="about us" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="properties" element={<Properties />} />
        <Route path="Contact us" element={<Contact />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
