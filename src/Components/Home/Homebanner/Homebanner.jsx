import React from 'react';
import Button from 'react-bootstrap/Button';
import './Homebanner.css';


function Homebanner() {
  return (
    <>
      <div className='Homebanner'>
        <img src="logo192.png" alt=""width={120} />
        <h1>React in CNC </h1>
        <h2 className='mb-4'>The library for web and native user interfaces</h2>
        <Button id="btn1">Learn React</Button> &nbsp; &nbsp;
        <Button  id="btn2">API Reference</Button>
    </div>
    </>
  )
}


export default Homebanner