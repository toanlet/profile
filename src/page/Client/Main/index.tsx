import React, {
  ReactElement,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './style.scss';
import exp from 'constants';
interface PhotoProps {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

const Home = () => {
  return (
    <div>
      <p>Develop change</p>
    </div>
  );
};

export default Home;
