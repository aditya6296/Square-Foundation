import styles from "./footer.module.css";
import { Link } from "react-router";

function Footer() {
  return (
    <>
      <footer className={styles.footer_page_main_container}>
        <div className={styles.footer_page_main_box}>
          <div className={styles.footer_page_info_box}>
            <div className={styles.footer_page_title_box}>
              <div className={styles.footer_header}>
                {" "}
                <h1 className={styles.footer_header_name}>
                  SQU{" "}
                  <svg
                    className={styles.footer_header_logo}
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
                <div className={styles.footer_page_info_title_text}>
                  <p>Empowering talent, breaking barriers.</p>
                </div>
              </div>
            </div>
            <div className={styles.footer_page_quick_links_box}>
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Apply for Scholarship</Link>
                </li>
                <li>
                  <Link to="">Testimonials</Link>
                </li>
                <li>
                  <Link to="">FAQs</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_page_legal_box}>
              <h2>Legal</h2>
              <ul>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_page_contack_information_box}>
              <h2>Contact Information</h2>
              <p>Email: adittyakumar721@gmail.com</p>
              <p>Phone: +91 6296226262</p>
              <p>Address: 123 Square Avenue,City,Country</p>
              <ul>
                <div
                  className={
                    styles.footer_page_contack_information_box_social_icons
                  }
                >
                  <Link to="">
                    <img src="/src/assets/footer_images/Youtube.svg" />
                  </Link>
                  <Link to="">
                    <img src="/src/assets/footer_images/Instagram.svg" />
                  </Link>
                  <Link to="">
                    <img src="/src/assets/footer_images/Twitter.svg" />
                  </Link>
                  <Link to="">
                    <img src="/src/assets/footer_images/Facebook.svg" />
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <div className={styles.footer_page_copy_right_box}>
            <span> @ 2025 Square Foundatiuon</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
