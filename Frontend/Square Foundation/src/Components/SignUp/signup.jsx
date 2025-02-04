import styles from "./signup.module.css";

function Signup() {
  return (
    <>
      <div className={styles.signup_page_main_container}>

        <div className={styles.signup_page_image_container}>
          <div className={styles.signup_page_image_text_container}>
            <h4>Square Foundation</h4>
          </div>
          <div>
          <img
            src="/src/assets/signup_images/signup.svg"
            className={styles.signup_page_image}
          />
          </div>
        </div>


        <div className={styles.signup_page_form_main_container}>
          <div className={styles.signup_page_from_btn}>
            <button>
              <span className="material-icons" id="rev_prev_btn">
                arrow_back
              </span>
            </button>
          </div>

          <div className={styles.signup_page_from_header_txt}>
            <h3>Continue with your email</h3>
          </div>

          <div className={styles.signup_page_input_container}>
            <form className={styles.signup_page_form_container}>
              <div className={styles.signup_page_input_email_container}>
                <p>Email Address</p>
                <input type="email" />
              </div>
              <div className={styles.signup_page_input_password_container}>
                <p>Password</p>
                <input type="password" />
              </div>
              <div className={styles.signup_page_input_password_match_container}>
                <h4>Password must have</h4>
                <ul>
                  <li>At least 8 characters</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one number</li>
                  <li>At least one special character</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
