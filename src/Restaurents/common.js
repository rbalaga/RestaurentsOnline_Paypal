const getProperties = (bgColor, txtColor) => ({
  backgroundColor: bgColor,
  color: txtColor,
});

export const ratingColors = {
  "Dark Green": getProperties("darkgreen", "#FFFFFF"),
  Green: getProperties("green", "#FFFFFF"),
  Yellow: getProperties("yellow", "#37474f"),
  Orange: getProperties("orange", "#eceff1"),
  White: getProperties("#e0e0e0", "#37474f"),
};
