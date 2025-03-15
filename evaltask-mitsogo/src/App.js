import { lazy, Suspense } from 'react';

import './App.css';

const Header = lazy(() => import('./components/Header'));
const Herocomponent = lazy(() => import('./components/Herocomponent'));
const Description = lazy(() => import('./components/Description'));
const Usecases = lazy(() => import('./components/usecase.jsx')); 
const Offers=lazy(() =>import("./components/Offers.jsx"));
const TestimonialCarousel=lazy(()=>import('./components/Carousel.jsx'))
const Platform = lazy(() => import('./components/platform.jsx'));
const Signup = lazy(() => import('./components/signup.jsx'));
const Footer = lazy(() => import('./components/footer.jsx'));

function App() {
  return (

    <Suspense fallback={<div>Loading...</div>}>
      <div className='wrapper-parent'>

     
      <Header />
      <Herocomponent />
      <Description /> 
       <Usecases />  
      <Offers />
      <TestimonialCarousel />
      <Platform />
      <Signup />
      <Footer />
</div>
    </Suspense>
  );
}

export default App;
