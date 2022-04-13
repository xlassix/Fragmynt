import Link from "next/link";
import styles from "../styles/components/Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>
        <img
          src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/62069285acfd712e88b52676_Frame%209.png"
          alt="Logo"
        />
      </h1>
      <Link href="https://dapp.fragmynt.com">
        <a>Early Access</a>
      </Link>
    </nav>
  );
}

export default Nav;
