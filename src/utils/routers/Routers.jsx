import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map((routeItem, index) => (
          <Route key={index} path={routeItem.route} element={routeItem.page} />
        ))}

        {PrivateRoutes.map((routeItem, index) => (
          <Route key={index} path={routeItem.route} element={routeItem.page} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
