import styles from './Header.module.css';
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/" className={styles.logo}>Abid Hasan</Link>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/projects">Projects</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="assets/documents/Abid_Hasan_resume.pdf" download>Resume</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
