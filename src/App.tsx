import React from 'react';
import { accessToken, logout } from './utils/getAccessToken';
import { catchErrors } from './utils/catchErrors';
import { getUser } from './utils/getCurrentUser';
import Logo from './assets/images/home/spotify-logo1.svg';

import './App.css';

const App: React.FC = () => {
  const [token, setToken] = React.useState<string | false | null>(null);
  const [user, setUser] = React.useState<any | null>(null);


  React.useEffect(() => {
    setToken(accessToken);
    console.log(accessToken);

  const fetchUser = async () => {

      const { data } = await getUser();
      setUser(data);

      console.log(data);
    };

  catchErrors(fetchUser());

  }, []);

  return (
    <div className='app'>
      <div className='login__div'>
        {
          !token ? (
            <a href="http://localhost:4003/login">
        <img aria-hidden='true' src={Logo} style={{height: '100px', width: '100px'}} alt='spotify-logo' className='login__logo'/>
        Login with Spotify
        </a>) : (
          <>
          {user && <h1>{user.display_name}</h1>}
          <h1>LOGGED IN</h1>
          <button onClick={() => logout()}>Logout</button>
          </>
        )
        }
      </div>
      <div className='wallpaper__div'></div>
    </div>
  );
}

export default App;
