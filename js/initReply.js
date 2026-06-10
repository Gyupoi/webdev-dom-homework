import { comments } from "./data.js";

export const initReply = () => {
  const addFormTextEl = document.querySelector(".add-form-text");
  const commentsElements = document.querySelectorAll(".comment");

  commentsElements.forEach((commentElement) => {
    commentElement.addEventListener("click", () => {
      const index = commentElement.dataset.index;
      const comment = comments[index];

      addFormTextEl.value = `> ${comment.name}:\n> ${comment.text}`;
    });
  });
};