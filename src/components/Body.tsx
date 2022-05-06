

// elements import
import { Tabs } from 'antd';
import SearchBox from '../elements/HeaderElements/SearchBox';
import NewReleasesElement from '../elements/BodyElements/NewReleasesElement';
import FeaturedPlaylists from '../elements/BodyElements/FeaturedPlaylists';

//hooks import
import { useDesktopMedia } from '../hooks/ResponsiveHook';


// styles import
import './components.css';
const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

const Body = () => {

  return (
    <>

      {!useDesktopMedia() ? (
        <div
          style=
          {{
            width: '50%',
            marginTop: '2rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <SearchBox />
        </div>) : (null)
      }
      <div className='mt-3 body__tab'>
        <h2>Partner Hero</h2>
        <hr style={{ width: '9%' }} />
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="New Releases" key="1">
            <NewReleasesElement />
          </TabPane>
          <TabPane tab="All New Releases" key="2">
            <FeaturedPlaylists />
          </TabPane>
          <TabPane tab="My Library" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}

export default Body;
