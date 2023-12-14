import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import NewsPage from "../pages/NewsPage";
import ServicesPage from "../pages/ServicesPage";
import AdminPage from "../pages/AdminPage";
import NewsSinglePage from "../pages/NewsSinglePage";
import StateSupportPage from "../pages/StateSupportPage";
import StateSupportPartSinglePage from "../pages/StateSupportPartSinglePage";
import AntikrizisModePage from "../pages/AntikrizisModePage";
import ContactsPage from "../pages/ContactsPage";
import EventsPage from "../pages/EventsPage";
import SelfEmploymentModePage from "../pages/SelfEmploymentModePage";
import AdminLoginPage from "../pages/AdminLoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.ABOUT_PAGE_ROUTE} element={<AboutPage />} />
      <Route path={ROUTER.CONTACTS_PAGE_ROUTE} element={<ContactsPage />} />
      <Route path={ROUTER.NEWS_PAGE_ROUTE} element={<NewsPage />} />
      <Route
        path={ROUTER.NEWS_SINGLE_PAGE_ROUTE}
        element={<NewsSinglePage />}
      />
      <Route
        path={ROUTER.STATE_SUPPORT_PAGE_ROUTE}
        element={<StateSupportPage />}
      />
      <Route
        path={ROUTER.STATE_SUPPORT_PAGE_SINGLE_ROUTE}
        element={<StateSupportPartSinglePage />}
      />
      <Route path={ROUTER.EVENTS_PAGE_ROUTE} element={<EventsPage />} />
      <Route path={ROUTER.SERVICES_PAGE_ROUTE} element={<ServicesPage />} />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
      <Route path={ROUTER.ADMIN_PAGE_ROUTE} element={<AdminPage />} />
      <Route
        path={ROUTER.ANTIKRIZIS_MODE_PAGE_ROUTE}
        element={<AntikrizisModePage />}
      />
      <Route
        path={ROUTER.SELFEMPLOYMENT_MODE_PAGE_ROUTE}
        element={<SelfEmploymentModePage />}
      />
      <Route path={ROUTER.CONTACTS_PAGE_ROUTE} element={<ContactsPage />} />
      <Route
        path={ROUTER.ADMIN_LOGIN_PAGE_ROUTE}
        element={<AdminLoginPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
