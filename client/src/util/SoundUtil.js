export const FILE_MAP = {
  'Low Bowl': '../assets/sounds/low-bowl-pad.mp3',
  'Prayer Bowl 1': '../assets/sounds/prayer-bowl-1.mp3',
  'Prayer Bowl 2': '../assets/sounds/prayer-bowl-2.mp3',
  'Singing Bowl': '../assets/sounds/singing-bowl.mp3'
};

export const playSound = (fileName) => {
  const audio = new Audio(fileName);
  audio.play();
};