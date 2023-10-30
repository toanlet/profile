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
  const [items, setItems] = useState<PhotoProps[]>([]);

  const getListPhotos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => json);

    console.log(res);
    if (res.length > 0) {
      setItems(res);
    }
  };

  useEffect(() => {
    getListPhotos();
  }, []);

  const [counter, setCounter] = useState(0);
  const handleCount = () => {
    setCounter(counter + 5);
    setCounter((n) => n + 1);

    console.log('counter', counter);
  };

  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const inputRef = useRef<any>(null);

 

  return (
    <div>
      <h1>Home</h1>
      {counter}

      <input value={search} onChange={handleChange} />
      <button onClick={handleCount}>+3</button>

   
    </div>
  );
};

export default Home;


