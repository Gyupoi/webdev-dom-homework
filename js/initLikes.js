export const initLikes = (comments, renderComments) => {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const index = button.dataset.index;
      const comment = comments[index];

      comment.isLiked = !comment.isLiked;

      if (comment.isLiked) {
        comment.likes++;
      } else {
        comment.likes--;
      }

      renderComments();
    });
  });
};