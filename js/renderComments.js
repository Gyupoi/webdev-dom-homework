import { initLikes } from "./initLikes.js";
import { initReply } from "./initReply.js";

export const renderComments = (
  comments,
  commentsListEl
) => {
  const commentsHtml = comments
    .map((comment, index) => {
      return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date}</div>
          </div>

          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>

          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>

              <button
                data-index="${index}"
                class="like-button ${
                  comment.isLiked ? "-active-like" : ""
                }">
              </button>
            </div>
          </div>
        </li>
      `;
    })
    .join("");

  commentsListEl.innerHTML = commentsHtml;

  renderCommentsCallback();
};

let renderCommentsCallback = () => {};

export const setRenderCallback = (callback) => {
  renderCommentsCallback = callback;
};

export const initCommentHandlers = (
  comments,
  addFormTextEl,
  renderComments
) => {
  initLikes(comments, renderComments);
  initReply(comments, addFormTextEl);
};