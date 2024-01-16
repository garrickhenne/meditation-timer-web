import MeditationControl from '../components/MeditationControl';
import SoundControl from '../components/SoundControl';
import SoundProvider from '../providers/SoundProvider';

const Home = () => {

  return (
    <div className='min-h-[80vh] inline-flex flex-col justify-center'>
      <SoundProvider>
        <SoundControl />
        <MeditationControl />
      </SoundProvider>
    </div>
  );
}

export default Home;
