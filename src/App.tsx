import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/redux-store';
import {
  accessToken,
  // logout 
} from './utils/getAccessToken';
// import { catchErrors } from './utils/catchErrors';
// import { getUser } from './utils/getCurrentUser';
import { useMedia } from './hooks/ResponsiveHook';

import Logo from './assets/images/home/spotify-logo1.svg';

import Dashboard from './pages/Dashboard';

import './App.css';
import NotFoundPage from './pages/404NotFound';

const App: React.FC = (): JSX.Element => {
  const [token, setToken] = React.useState<string | false | null>(null);
  // const [user, setUser] = React.useState<any | null>(null);
  let isMobile = useMedia('(max-width: 768px)');


  React.useEffect(() => {
    setToken(accessToken);
    // console.log(accessToken);

    // const fetchUser = async () => {

    // const { data } = await getUser();
    // setUser(data);

    // console.log(data);
    //  };

    // catchErrors(fetchUser());

  }, []);

  return (
    <>
      {token ? (
        <>
          <Provider store={store}>
            <Routes>
              <Route path='/playlist/:id' element={<h1>Playlist</h1>} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path='/' element={
                <>
                  <Dashboard />
                  {/*user && (
                    <>
                      <h1>{user.display_name}</h1>
                      hey
                      <button onClick={() => logout()}>Logout</button>
                    </>
                  )*/}
                </>

              } />
            </Routes>
          </Provider>
        </>
      ) : (
        <Routes>
          <Route path='/' element={
            <div className='app'>
            <div className='login__div'>
              <a href="http://localhost:4003/login">
                <img aria-hidden='true' src={Logo} style={{ height: '80px', width: '80px' }} alt='spotify-logo' className='login__logo' />
                <span className={`spotify ${isMobile ? 'bg-dark' : ''} `}>Login with Spotify</span>
              </a>
            </div>
            <div className='wallpaper__div'></div>
          </div>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
