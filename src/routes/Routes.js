import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";

export const Routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/projects',
				element: <Projects />
			},
			{
				path: '/about',
				element: <About />
			}
		]
	}
])
