import lowBowlPad from '../assets/sounds/low-bowl-pad.mp3';
import prayerBowl1 from '../assets/sounds/prayer-bowl-1.mp3';
import prayerBowl2 from '../assets/sounds/prayer-bowl-2.mp3';
import singingBowl from '../assets/sounds/singing-bowl.mp3';

export const FILE_MAP = {
  'Low Bowl': lowBowlPad,
  'Prayer Bowl 1': prayerBowl1,
  'Prayer Bowl 2': prayerBowl2,
  'Singing Bowl': singingBowl
};

export const playSound = (fileName) => {
  const audio = new Audio(fileName);
  audio.play();
};