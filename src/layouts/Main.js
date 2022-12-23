import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";

function Main() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<Header />
			<div style={{ flexGrow: 1 }}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default Main;
