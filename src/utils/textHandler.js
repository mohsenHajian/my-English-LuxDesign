export const textHandler = (text) => {
  let showText = text.split("").slice(0, 25).join("");
  if (text.length < 25) {
    return text;
  } else {
    return `${showText}...`;
  }
};
