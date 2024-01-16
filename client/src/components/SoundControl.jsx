import { FILE_MAP } from '../util/SoundUtil';
import { useContext } from 'react';
import { soundContext } from '../providers/SoundProvider';

const SoundControl = () => {
  // Default to  in FILE_MAP, TODO: change later to whatever user has set.
  // Contains the file paths for the sounds.
  const { selectedSound, changeSound } = useContext(soundContext);

  return (
    <>
      <label htmlFor='sounds'>Sounds: </label>
      <select name='sounds' id='sounds' className='bg-transparent' onChange={ e => changeSound(e.target.value) } value={ selectedSound }>
        { Object.keys(FILE_MAP).map(sound => {
          return <option key={sound} value={FILE_MAP[sound]}>{ sound }</option>
        }) }
      </select>
    </>
  );
}

export default SoundControl;
