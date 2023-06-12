// libraries
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { HOMEPAGE } from "@utils/routes";
import { AppFrame } from "@components/app_frame/AppFrame";

const Protected = () => {
  const auth = true;
  const location = useLocation();
  return auth ? (
    <AppFrame>
      <Outlet />
    </AppFrame>
  ) : (
    <Navigate to={HOMEPAGE} state={{ from: location }} replace />
  );
};

export default Protected;
