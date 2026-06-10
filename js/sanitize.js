export const sanitizeText = (text) => {
  return text
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
};