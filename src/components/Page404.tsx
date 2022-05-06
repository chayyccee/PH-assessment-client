import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './components.css';

const NotFound = () => {
  return (
    <div className='image-404 container-fluid'>
      <div className="text-404">
        <p className="bold-text">404</p>
        <p className="light-text mx-2">
          Oops! There seem <br /> to be just <br /> flamingos here.
        </p>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Link to="/"><Button>Back to home</Button></Link>
      </div>
    </div>
  )
}

export default NotFound;
