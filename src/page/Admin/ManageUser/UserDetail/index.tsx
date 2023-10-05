import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  console.log('id', id);
  return (
    <div className="home">
      <h1>UserDetail {id}</h1>
    </div>
  );
};

export default UserDetail;
