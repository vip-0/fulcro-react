import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Whatwedo from '../components/Whatwedo';
import Counter from '../components/Counter';
import Ourverticals from '../components/Ourverticals';
import Homeiconsec from '../components/Homeiconsec';
import Ourwork from '../components/Ourwork';
import Ourclients from '../components/Ourclients';
import Awards from '../components/Awards';
import Contactus from '../components/Contactus';
import Partners from '../components/Partners';
import Footer from '../components/Footer';


function Home() {
  return (
      <div>
        <Router>
          <Navigation />
          <Banner />
          <Whatwedo />
          <Counter />
          <Ourverticals />
          <Homeiconsec />
          <Ourwork />
          <Ourclients />
          <Awards />
          <Contactus />
          <Partners />
          <Footer />
        </Router>
      </div>
  );
}

export default Home;
