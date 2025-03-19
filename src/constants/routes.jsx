// src/routes.js
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Blogs from "../pages/Blogs";
import BlogView from "../pages/BlogView";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import CheatSheetPage from "../pages/CheatSheets";
import PdfView from "../pages/PdfView";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/signin", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/about", element: <About /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blog/:id", element: <BlogView /> },
  { path: "/contacts", element: <Contacts /> },
  {path:"/pdf", element: <PdfView/>},
  { path: "/cheatsheets", element: <CheatSheetPage /> },


];

export default routes;
