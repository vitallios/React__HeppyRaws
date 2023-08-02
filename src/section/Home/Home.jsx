import './Home.modules.scss'
const Home = () => {
 return ( 
  <section className="home">
   <div className="container">
    <div className="home__wrap flex">
      <div className="home__text">
        <h1 className="home__title">
        Get  Your  Organic Pet  Food
        <img src="./korm.png" alt="korm" />
        </h1>
        <p className="home__descripsion">
        Your Pet deserves a best quality food and healthy  snacks. So, we have the best pet food to offer with affordable price.
        </p>
        <img src="./el.png" alt="imgKost" className="home__el el_1 image" />
        <button className="home__btn btn">
          shop now
        </button>
        <img src="./el.png" alt="imgKost" className="home__el el_2 image" />
      </div>
      <div className="home__image">
      <img src="./el.png" alt="imgKost" className="home__el el_3 image" />
        <img src="./dog_bg.png" className='home__image-dog' alt="image dog" />
      </div>
    </div>
   </div>
  </section>
  );
}
 
export default Home;