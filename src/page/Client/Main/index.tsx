import { useEffect, useState } from 'react';
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
  return (
    <div>
      <h1>Home</h1>

      {items.map((photo) => {
        return (
          <div>
            {photo.title}
            <img src={photo.thumbnailUrl} alt="dd" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
