/**
 * 
 * @param {number} time represents the time in seconds.
 * @returns a string formatted to time. Ex. 5:00, 4:59, ...
 */
export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};