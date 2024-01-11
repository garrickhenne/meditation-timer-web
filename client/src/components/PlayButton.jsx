import playSVG from '../assets/play-fill.svg';

const PlayButton = () => {
  return (
    <button className='flex items-center justify-center h-16 w-16 rounded-full bg-white'><img className='h-1/2 w-1/2' src={ playSVG } alt='play'/></button>
  );
}

export default PlayButton;
