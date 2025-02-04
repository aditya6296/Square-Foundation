import { useState } from "react";
import styles from "./testimonialPage.module.css";
import { testmonialCardData } from "./testmonialData.js";
import FaqPage from "../FaqPage/faqPage.jsx";

function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const handlePrevClick = () => {
    setShowCard(true);
    setTimeout(() => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setShowCard(false);
      }
    }, 300);
  };

  const handleNextClick = () => {
    setShowCard(true);
    setTimeout(() => {
      if (currentIndex < testmonialCardData.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setShowCard(false);
      }
    }, 300);
  };

  return (
    <>
      <div className={styles.testimonial_page_main_container}>
        <div className={styles.testimonial_page_header_container}>
          <div>
            <h2 className={styles.testimonial_page_header_text}>
              Testimonials
            </h2>
          </div>
          <div className={styles.testimonial_page_header_btn}>
            <button
              className={styles.testimonial_page_header_back_btn}
              onClick={handlePrevClick}
            >
              <span className="material-icons" id="rev_next_btn">
                arrow_backward
              </span>
            </button>
            <button
              className={styles.testimonial_page_header_forward_btn}
              onClick={handleNextClick}
            >
              <span className="material-icons" id="rev_prev_btn">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        {/* <div className={styles.testimonial_page_show_container}>
          <div
            className={styles.testimonial_page_card_container}
          
          >
            <div className={styles.testimonial_page_first_card_container}>
              <img
                src={testmonialCardData[currentIndex].url}
                className={styles.testimonial_page_first_card_img}
              />
            </div>
            <div className={styles.testimonial_page_second_card_container}>
              <img
                src={testmonialCardData[currentIndex].src}
                className={styles.testimonial_page_second_card_img}
              />
            </div>
          </div>
        </div> */}

        <div className={styles.testimonial_page_card_container}>
          <div className={styles.testimonial_page_first_card_container}>
            <div className={styles.testimonial_page_first_card_text_box}>
              <p>{testmonialCardData[currentIndex].text}</p>
            </div>
            <div className={styles.testimonial_page_first_card_image_box}>
              <img src={testmonialCardData[currentIndex].url} />
              <h3>{testmonialCardData[currentIndex].name}</h3>
            </div>
          </div>
          <div className={styles.testimonial_page_second_card_container}>
            <div className={styles.testimonial_page_second_card_text_box}>
              <p>{testmonialCardData[currentIndex].text}</p>
            </div>
            <div className={styles.testimonial_page_second_card_image_box}>
              <img src={testmonialCardData[currentIndex].src} />
              <h3>{testmonialCardData[currentIndex].title}</h3>
            </div>
          </div>
        </div>
      </div>
      <FaqPage />
    </>
  );
}

export default TestimonialPage;
