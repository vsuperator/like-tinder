import React from 'react';
import '../styles/App.css';

export default function App({children}) {
  return (
      <div className='container'>
        {children}
      </div>
  );
}