// element import
import { Divider } from 'antd';

// component imports
import Body from '../components/Body';
import Header from '../components/Header';
import SecondBody from '../components/SecondBody';

const Dashboard = () => {

  return (
    <div>
    <Header />
    <Body />
    <Divider />
    <SecondBody />
    </div>
  )
}

export default Dashboard;
