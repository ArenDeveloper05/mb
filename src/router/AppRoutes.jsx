import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import NewsPage from "../pages/NewsPage";
import ServicesPage from "../pages/ServicesPage";
import AdminPage from "../pages/AdminPage";
import ContactsPage from "../pages/ContactsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.ABOUT_PAGE_ROUTE} element={<AboutPage />} />
      <Route path={ROUTER.CONTACTS_PAGE_ROUTE} element={<ContactsPage />} />
      <Route path={ROUTER.NEWS_PAGE_ROUTE} element={<NewsPage />} />
      <Route path={ROUTER.SERVICES_PAGE_ROUTE} element={<ServicesPage />} />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
      <Route path={ROUTER.ADMIN_PAGE_ROUTE} element={<AdminPage />} />
    </Routes>
  );
};

export default AppRoutes;
