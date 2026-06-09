export const initReply = (comments, addFormTextEl) => {
  const commentsElements = document.querySelectorAll(".comment");

  commentsElements.forEach((commentElement) => {
    commentElement.addEventListener("click", () => {
      const index = commentElement.dataset.index;
      const comment = comments[index];

      const quote = `> ${comment.name}:\n> ${comment.text}`;

      addFormTextEl.value = quote;
    });
  });
};