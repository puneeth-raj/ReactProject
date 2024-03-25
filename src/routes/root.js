import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import { Footer } from '../components/Footer';

function RootLayout() {
  return (
    <>
      <Header/>
      <main className=''>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default RootLayout;