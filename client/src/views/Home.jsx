import MeditationControl from '../components/MeditationControl';
import SoundControl from '../components/SoundControl';
import SoundProvider from '../providers/SoundProvider';

const Home = () => {

  return (
    <div>
      <h1>Calmly</h1>
      <SoundProvider>
        <SoundControl />
        <MeditationControl />
      </SoundProvider>
    </div>
  );
}

export default Home;
