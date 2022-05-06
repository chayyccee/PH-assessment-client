import { message } from 'antd';

export const loginSuccess = () => {
  message.success('login success');
};

export const logoutSuccess = () => {
    message.success('logout success');
};

export const addToLibrarySuccess = () => {
    message.success('successfully added to library');
};

export const removeFromLibrarySuccess = () => {
    message.success('successfully removed from library');
};

export const loggingUserOut = () => {
    message.info('logging you out');
};

export const error = () => {
  message.error('This is an error message');
};

export const warning = () => {
  message.warning('This is a warning message');
};