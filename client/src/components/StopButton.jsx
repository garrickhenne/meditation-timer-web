import PropTypes from 'prop-types';

const StopButton = ({ handleClick }) => {
  return (
    <button onClick={ handleClick }>
      <div className='flex items-center justify-center h-16 w-16 rounded-full bg-white'>
        <div className='h-1/3 w-1/3 bg-[#242424] rounded-sm'></div>
      </div>
    </button>
  );
}

StopButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default StopButton;
