import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { FILE_MAP } from '../util/SoundUtil';

export const soundContext = createContext();

const SoundProvider = ({ children }) => {
  const [selectedSound, setSelectedSound] = useState(FILE_MAP['Prayer Bowl 2']);

  /**
   * 
   * @param {string} sound the name of the sound to change to.
   */
  const changeSound = (sound) => {
    setSelectedSound(FILE_MAP[sound]);
  };

  return (
    <soundContext.Provider value={{ selectedSound, changeSound }}>
      { children }
    </soundContext.Provider>
  );
};

SoundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SoundProvider;