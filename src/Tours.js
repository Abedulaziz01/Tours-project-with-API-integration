import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeToours}) => {
  return (
    <section>
      <div className='title'>
        <h2>our tour</h2>
          <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour)=>{
          return <Tour  key={tour.id} {...tour}
          removeToours = {removeToours}
          />
        })}
      </div>
    </section>
  )
};

export default Tours;
