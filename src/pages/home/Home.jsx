

import { getAuth } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import Banner from '../header/banner';
import Services from '../services/Services';
import Footer from './Footer';
import Success from './Success';

import Why from './Why';

const Home = () => {
    
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <Services></Services>
            <Why></Why>
            <Success></Success>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;