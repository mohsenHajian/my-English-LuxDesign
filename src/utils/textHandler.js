export const textHandler = (text,length) => {
  let showText = text.split("").slice(0, length).join("");
  if (text.length < length) {
    return text;
  } else {
    return `${showText}...`;
  }
};
