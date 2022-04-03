import React from 'react'
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading'
import { Fragment } from 'react';
export default function LoadingScreen() {
  return <Fragment>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <UseAnimations animation = {loading} size = {200} className = "loading" strokeColor = 'white'/>
      </div>
  </Fragment>
}
