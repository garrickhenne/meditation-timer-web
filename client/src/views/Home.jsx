import PlayButton from '../components/PlayButton';
import StopButton from '../components/StopButton';

const Home = () => {
  return (
    <div>
      <h1>Meditation Timer</h1>
      <div className='container inline-flex gap-x-3 w-auto'>
        <PlayButton handleClick={ () => console.log('play clicked') } />
        <StopButton handleClick={ () => console.log('stop clicked') } />
      </div>
    </div>
  );
}

export default Home;
