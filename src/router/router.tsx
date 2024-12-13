import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/inicio" />} />
      <Route path="club" element={<Navigate to="/club" />} />
      <Route path="contacto" element={<Navigate to="/contacto" />} />
      <Route path="calendario" element={<Navigate to="/calendario" />} />
    </Route>,
  ),
);
export default router;
