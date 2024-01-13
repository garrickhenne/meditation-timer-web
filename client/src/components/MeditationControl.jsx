import { useState } from 'react';
import Timer from './Timer';
import PlayButton from './PlayButton';
import StopButton from './StopButton';

const FIVE_MINUTES = 5 * 60;
const ONE_SECOND = 1000;

const MeditationControl = () => {
  // countdown is in seconds.
  // TODO: This could be refactored into a custom hook.
  const [countdown, setCountdown] = useState(FIVE_MINUTES);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    if (timerId) clearInterval(timerId);
    const id = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, ONE_SECOND);
    setTimerId(id);
  };

  const stopTimer = () => {
    if (timerId) clearInterval(timerId);
    setCountdown(FIVE_MINUTES);
  };

  return (
    <>
      <Timer countdown={ countdown } />
        <div className='container inline-flex gap-x-3 w-auto'>
          <PlayButton handleClick={ startTimer } />
          <StopButton handleClick={ stopTimer } />
        </div>
    </>
  );
}

export default MeditationControl;
