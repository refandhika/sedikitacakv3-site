"use client"

import { useEffect, useState } from 'react';
import styles from '@/app/ui/splashscreen.module.scss';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return oldProgress;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`${styles.splashscreen} ${progress === 100 ? "invisible opacity-0" : "visible opacity-100" } transition-all transition transition-500`}>
      <div className={styles.loadingtext}>Typing</div>
      <div className={styles.loader}>
        <div className={styles.progressbar} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
