import styles from "./navbar.module.css";
import { Link } from "react-router";
function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_container}>
          <div className={styles.nav_header}>
            {" "}
            <h1 className={styles.nav_header_name}>
              SQU{" "}
              <svg
                className={styles.nav_header_logo}
                width="32"
                height="30"
                viewBox="0 0 44 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M1 26.9747L21.962 1L42.924 29.2532L19.6835 37L1 26.9747Z"
                  fill="white"
                />{" "}
                <path
                  d="M21.962 1L1 26.9747L19.6835 37M21.962 1L42.924 29.2532L19.6835 37M21.962 1L19.6835 37"
                  stroke="black"
                  strokeWidth="0.911392"
                />{" "}
              </svg>
              RE
            </h1>
            <div>
              <h4>-------Foundation-------</h4>
            </div>
          </div>
          <div></div>

          <div className={styles.nav_signup_container}>
            <Link to="/login" className={styles.nav_login}>
              Login
            </Link>
            <Link to="/signup" className={styles.nav_signup}>
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
