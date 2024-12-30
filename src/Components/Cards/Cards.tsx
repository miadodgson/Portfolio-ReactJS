import React from 'react'
import styles from './Cards.module.css'

const CardComponent = () => {


return(
/* From Uiverse.io by MuhammadHasann */ 
<div class={styles.card}>
  <div class={styles.card__border}></div>
  <div class={styles.card_title__container}>
    <span class={styles.card_title}>Molecular Biology</span>
  </div>
  <hr class={styles.line} />
  <ul class={styles.card__list}>
    <li class={styles.card__list_item}>
      <span class={styles.check}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class={styles.check_svg}
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class={styles.list_text}>10 Launch Weeks</span>
    </li>
    <li class={styles.card__list_item}>
      <span class={styles.check}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class={styles.check_svg}
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class={styles.list_text}>10 Influencers Post</span>
    </li>
    <li class={styles.card__list_item}>
      <span class={styles.check}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class={styles.check_svg}
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class={styles.list_text}>100.000 Views</span>
    </li>
    <li class={styles.card__list_item}>
      <span class={styles.check}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class={styles.check_svg}
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class={styles.list_text}>10 Reddit Posts</span>
    </li>
    <li class={styles.card__list_item}>
      <span class={styles.check}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class={styles.check_svg}
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class={styles.list_text}>2 Hours Marketing Consultation</span>
    </li>
  </ul>
  <button class={styles.button}>Contact Me</button>
</div>
)
}
	
export default CardComponent
