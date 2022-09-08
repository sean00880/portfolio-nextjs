import React from 'react'

function Popup(props) {
  return ( props.trigger)? (
    <div className=''>
        <div className=''>
            <div className='' onClick={() => props.setTrigger(false)}>close</div>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup