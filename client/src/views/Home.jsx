import Timer from '../components/Timer';
import PlayButton from '../components/PlayButton';
import StopButton from '../components/StopButton';
import { useState } from 'react';

const FIVE_MINUTES = 5 * 60;
const ONE_SECOND = 1000;

const Home = () => {
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
    <div>
      <h1>Meditation Timer</h1>
      <Timer countdown={ countdown } />
      <div className='container inline-flex gap-x-3 w-auto'>
        <PlayButton handleClick={ startTimer } />
        <StopButton handleClick={ stopTimer } />
      </div>
    </div>
  );
}

export default Home;
