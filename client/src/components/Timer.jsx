import PropTypes from 'prop-types';
import { formatTime } from "../util/TimerUtil";

const Timer = ({ countdown }) => {
  return (
    <h1>
      { formatTime(countdown) }
    </h1>
  );
}

Timer.propTypes = {
  countdown: PropTypes.number.isRequired,
};

export default Timer;
