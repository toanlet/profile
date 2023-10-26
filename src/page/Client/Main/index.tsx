import React, { ReactElement, useEffect, useState } from 'react';
import './style.scss';
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

  return (
    <div>
      <h1>Home</h1>
      {counter}

      <input value={search} onChange={handleChange} />
      <button onClick={handleCount}>+3</button>

      {/* {items.map((photo) => {
        return (
          <div>
            {photo.title}
            <img src={photo.thumbnailUrl} alt="dd" />
          </div>
        );
      })} */}
    </div>
  );
};

export default Home;
