import { RoutePaths } from "./RoutePaths";
import { LandingPage } from "../../pages";

import {
  Login,
  Register,
  ResetPassword,
  ChangePassword,
  VerifyMailSent,
  AccountVerified,
} from "../../components/auth";
import Onboarding from "../../components/auth/register/OnBoarding";

export const PublicRoutes = [
  {
    route: RoutePaths.PAGE_BASE_URL,
    page: <LandingPage />,
  },
  {
    route: RoutePaths.SIGN_IN,
    page: <Login />,
  },
  {
    route: RoutePaths.SIGN_UP,
    page: <Onboarding />,
    // page: <Register />
  },
  {
    route: RoutePaths.RESET_PASSWORD,
    page: <ResetPassword />,
  },
  {
    route: RoutePaths.RESET_ACCOUNT,
    page: <ChangePassword />,
  },
  {
    route: RoutePaths.VERIFY_MAIL_SENT,
    page: <VerifyMailSent />,
  },
  {
    route: RoutePaths.ACCOUNT_VERIFIED,
    page: <AccountVerified />,
  },
];
