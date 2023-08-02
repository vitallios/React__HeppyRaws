import './Footer.modules.scss'

const Feader = () => {
 return ( 
  <section className='footer'>
   <div className="container">
    <div className="footer__wrap">
    <img src="/el.png" alt="" className="footer__el el_1 image" />
      <ul className="footer__list flex">
        <li className="footer__item">
          <a href="#" className="footer__link">
            <img src="/fb.svg" alt="" />
          </a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">
            <img src="/inst.svg" alt="" />
          </a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">
            <img src="/wats.svg" alt="" />
          </a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">
            <img src="/tvit.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
   </div>
  </section>
  );
}
 
export default Feader;