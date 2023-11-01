import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <div className="logo">
          <p>logo</p>
        </div>
        <div className="tag">
          <p lang="zh-Hant">
            民國<span className="num">105</span>年<span className="num">4</span>
            月<span className="num">29</span>日
          </p>
        </div>
      </div>
      <div className="between">
        <div className="item">
          <p>2000</p>
        </div>
        <div className="item">
          <p className="box-shadow">
            <span>2</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </p>
        </div>
      </div>

      <p>T1</p>
    </div>
  );
};

export default Home;
