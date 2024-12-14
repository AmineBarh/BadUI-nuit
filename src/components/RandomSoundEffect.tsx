import { useEffect } from 'react';
import useSound from 'use-sound';

const sounds = [
  '/static-noise.mp3',
  '/glitch.mp3',
  '/beep.mp3',
  '/buzz.mp3'
];

export const RandomSoundEffect = () => {
  const [playStatic] = useSound('/static-noise.mp3', { volume: 0.3 });
  const [playGlitch] = useSound('/glitch.mp3', { volume: 0.3 });
  const [playBeep] = useSound('/beep.mp3', { volume: 0.3 });
  const [playBuzz] = useSound('/buzz.mp3', { volume: 0.3 });

  useEffect(() => {
    const playRandomSound = () => {
      const sounds = [playStatic, playGlitch, playBeep, playBuzz];
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      randomSound();

      // Schedule next sound
      setTimeout(playRandomSound, Math.random() * 10000 + 5000);
    };

    playRandomSound();
  }, [playStatic, playGlitch, playBeep, playBuzz]);

  return null;
};