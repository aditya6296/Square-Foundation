import styles from "./login.module.css";

function Login() {
  return (
    <>
      <div className={styles.login_page_main_container}>
        <div className={styles.login_page_picture_container}></div>
        <div className={styles.login_page_form_container}></div>
      </div>
    </>
  );
}

export default Login;
