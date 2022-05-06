import React from 'react';
import CarouselElement from '../elements/SecondBodyElements/CarouselElement';
import './components.css';

const SecondBody = () => {
  return (
    <div className='body__tab second_body'>
        <div className='w__75'>
            <h2>Trending this Week</h2>
            <hr style={{ width: '10%' }} />
            <CarouselElement />
        </div>
        <div className='w__25'>
            <h2>Top picks</h2>
            <hr style={{ width: '20%' }} />
        </div>
    </div>
  )
}

export default SecondBody;
