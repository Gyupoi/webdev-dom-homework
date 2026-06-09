import { comments } from "./data.js";
import { sanitizeText } from "./sanitize.js";
import {
  renderComments,
  initCommentHandlers,
} from "./renderComments.js";

const addFormNameEl = document.querySelector(".add-form-name");
const addFormTextEl = document.querySelector(".add-form-text");
const addFormButtonEl = document.querySelector(".add-form-button");
const commentsListEl = document.querySelector(".comments");

const render = () => {
  renderComments(
    comments,
    commentsListEl,
    addFormTextEl
  );

  initCommentHandlers(
    comments,
    addFormTextEl,
    render
  );
};

addFormButtonEl.addEventListener("click", () => {
  const name = addFormNameEl.value.trim();
  const text = addFormTextEl.value.trim();

  if (!name || !text) {
    return;
  }

  const formattedDate =
    new Date().toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }) +
    " " +
    new Date().toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });

  comments.push({
    name: sanitizeText(name),
    text: sanitizeText(text),
    date: formattedDate,
    likes: 0,
    isLiked: false,
  });

  addFormNameEl.value = "";
  addFormTextEl.value = "";

  render();
});

render();

console.log("It works!");