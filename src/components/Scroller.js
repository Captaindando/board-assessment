import React from 'react';

function Scroller(props) {
    return <div className={props.class}>
            <div className='Scroller'>
              <div className='ScrollerInner'></div>
            </div>  
          </div>;
  }

export default Scroller;