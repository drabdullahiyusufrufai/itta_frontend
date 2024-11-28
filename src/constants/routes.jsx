// src/routes.js
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Courses from "../pages/Courses";
import Blogs from "../pages/Blogs";
import BlogView from "../pages/BlogView";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Team from "../pages/Team";
import CheatSheetPage from "../pages/CheatSheets";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/signin", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/about", element: <About /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blog/:id", element: <BlogView /> },
  { path: "/courses", element: <Courses /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/team", element: <Team /> },
  { path: "/cheatsheets", element: <CheatSheetPage /> },
];

export default routes;
