import React from 'react';

// elements import
import { LogoutOutlined } from '@ant-design/icons';
import { logoutSuccess, loggingUserOut } from '../Messages';

// functions import 

import { logout } from '../../utils/getAccessToken';
import { catchErrors } from '../../utils/catchErrors';

const Logout = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const userLogout = () => {
    setLoading(true);
    catchErrors(logout());
    setLoading(false);

    const message = loading ? loggingUserOut() : logoutSuccess();
    return message;
    };

  return (
     <LogoutOutlined style={{ color: '#096dd9' }}  onClick={userLogout} />
  )
}

export default Logout;
