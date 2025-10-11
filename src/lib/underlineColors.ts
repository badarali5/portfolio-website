// Central palette for dynamic underline colors
// Colors chosen for good contrast on dark background
export const UNDERLINE_COLORS = [
  '#ff6b6b', // soft red
  '#f9ca24', // warm yellow
  '#4ecdc4', // teal
  '#45b7d1', // cyan
  '#a29bfe', // soft indigo
  '#fd79a8', // pink
  '#ff9f43', // orange
  '#6c5ce7', // purple
  '#00b894', // emerald
  '#e056fd', // violet
];

export const getColorByIndex = (index: number) => {
  return UNDERLINE_COLORS[index % UNDERLINE_COLORS.length];
};

export const getRandomColor = () => {
  return UNDERLINE_COLORS[Math.floor(Math.random() * UNDERLINE_COLORS.length)];
};
