import AmbitionPage from "../AmbitionPage/ambitionPage";
import styles from "./ongoingScholar.module.css";

function OngoingScholarPage() {
  return (
    <>
      <div className={styles.scholarpage_main_box}>
        <div className={styles.scholarpage_header_text_box}>
          <h2 className={styles.scholarpage_header_text_1}>
            Ongoing <br /> Scholarships
          </h2>
        </div>
        <div className={styles.scholarpage_list_text_box}>
          <div className={styles.scholarpage_list_text_box_1}>
            <h2>1. Bright Futures Scholarship</h2>
            <span className={styles.scholarpage_date}>
              start: 24/01/2025
            </span>{" "}
            <span className={styles.scholarpage_date}>
              Deadline: 31/01/2025
            </span>
          </div>

          <div className={styles.scholarpage_list_text_box_2}>
            {" "}
            <h2>2. NextGen Leaders Grant</h2>
            <span className={styles.scholarpage_date}>
              start: 24/01/2025
            </span>{" "}
            <span className={styles.scholarpage_date}>
              Deadline: 31/01/2025
            </span>
          </div>
          <div className={styles.scholarpage_list_text_box_3}>
            {" "}
            <h2>3. Empower Education Scholarship</h2>
            <span className={styles.scholarpage_date}>
              start: 24/01/2025
            </span>{" "}
            <span className={styles.scholarpage_date}>
              Deadline: 31/01/2025
            </span>
          </div>
          <div className={styles.scholarpage_list_text_box_4}>
            {" "}
            <h2>4. Global Visionary Award</h2>
            <span className={styles.scholarpage_date}>
              start: 24/01/2025
            </span>{" "}
            <span className={styles.scholarpage_date}>
              Deadline: 31/01/2025
            </span>
          </div>
          <div className={styles.scholarpage_list_text_box_5}>
            {" "}
            <h2>5. Achieve Eccelence Followship</h2>
            <span className={styles.scholarpage_date}>
              start: 24/01/2025
            </span>{" "}
            <span className={styles.scholarpage_date}>
              Deadline: 31/01/2025
            </span>
          </div>
        </div>
      </div>
      <AmbitionPage />
    </>
  );
}

export default OngoingScholarPage;
