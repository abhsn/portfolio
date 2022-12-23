import styles from './Footer.module.css'

function Footer() {
	return (
		<footer>
			<section>
				<span className={styles.socailIcons}><a href="https://github.com/abhsn"></a></span>
				<span className={styles.socailIcons}><a href="https://linkedin.com/in/ab1dhasan"></a></span>
				<span className={styles.socailIcons}><a href="mailto:ab1dh4san@gmail.com"></a></span>
			</section>
			<span>🄯 2022 Abid Hasan | Email: ab1dh4san@gmail.com</span>
		</footer>
	);
}

export default Footer;