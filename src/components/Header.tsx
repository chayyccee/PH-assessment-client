import React from 'react';

// Elements import
import { MenuOutlined } from '@ant-design/icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchBox from '../elements/HeaderElements/SearchBox';
import Logout from '../elements/HeaderElements/Logout';
import { loggingUserOut, logoutSuccess } from '../elements/Messages';

//hooks import
import { useDesktopMedia } from '../hooks/ResponsiveHook';

// functions
import { getUser } from '../utils/getCurrentUser';
import { logout } from '../utils/getAccessToken';
import { catchErrors } from '../utils/catchErrors';

// nav bar data
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account','Help'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [user, setUser] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const isLoggedOut = () => {
    setLoading(true);
    catchErrors(logout());
    setLoading(false);

    const message = loading ? loggingUserOut() : logoutSuccess();
    return message;
};


  const handleOpenNavMenu = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    }, []);

  const handleOpenUserMenu = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);


  const handleCloseNavMenu = React.useCallback(() => {
    setAnchorElNav(null);
    }, []);

  const handleCloseUserMenu = React.useCallback(() => {
    setAnchorElUser(null);
    }, []);


    React.useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const { data } = await getUser();
            setUser(data);
            setLoading(false);
        };

        catchErrors(fetchUser());
    }, []);

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {loading ? 'Welcome' : user?.display_name.toUpperCase()}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOutlined />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {loading ? 'Welcome' : user?.display_name.toUpperCase()}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', ":hover": { color: '#096dd9' } }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title="logout">
          <IconButton
              size="large"
              aria-label="logout button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
            <Logout />
            </IconButton>
            </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <SearchBox />
            </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!useDesktopMedia() ? (
                  <div>
                  <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Account</Typography>
                    </MenuItem>
                    <MenuItem  onClick={isLoggedOut}>
                    <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                    <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Help</Typography>
                    </MenuItem>
                    </div>
                ) : settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
