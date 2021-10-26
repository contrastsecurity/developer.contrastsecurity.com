import React from 'react';

export default function({children}) { 
    return(
    <span
      style={{
        backgroundColor: 'black',
        borderRadius: '2px',
        color: '#39ff14',
        padding: '0.2rem',
      }}>
          <>{children}</>
    </span>
    )
}
  