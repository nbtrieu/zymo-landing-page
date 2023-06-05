import { useRef, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import Hero from '../Hero';
import banner from '../../assets/banner.jpg';
import bullseyeIcon from '../../assets/bullseye_icon.jpg';
import checkmarkIcon from '../../assets/checkmark_icon.jpg';
import graphsIcon from '../../assets/graphs_icon.jpg';

function Header(props) {
  const scollToRef = useRef();

  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);

  return (
    <div>
        <section>
          <div className='banner'>
            <img src={banner} alt='scientists and equipment for lab work'></img>
          </div>
          <div className='text-center title'>
            <h1>Header Text</h1>
            <h2>Lorem ipsum</h2>
            <div className='flex-row mt-3 mb-2 flex-center'>
              <div className='col-3 header-icons'>
                <img src={checkmarkIcon} alt='check mark icon'></img>
                <h2 className='my-2'>Lorem ipsum</h2>
              </div>
              <div className='col-3 header-icons'>
                <img src={graphsIcon} alt='graphs icon'></img>
                <h2 className='my-2'>Lorem ipsum</h2>
              </div>
              <div className='col-3 header-icons'>
                <img src={bullseyeIcon} alt='bullseye icon'></img>
                <h2 className='my-2'>Lorem ipsum</h2>
              </div>
            </div>
            <div className='flex-row flex-center'>
              <button onClick={() => scollToRef.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"})}>
                Inquire Now
              </button>
            </div>
          </div>
        </section>

        <section>
          <Hero></Hero>
        </section>

        <section>
          <div ref={scollToRef}>
          {props.children}
        </div>
        </section>
    </div>
  ) 
}

export default Header;