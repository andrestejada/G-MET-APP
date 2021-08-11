import React from 'react'
import './Spinner.scss'
import Logo from '../../components/logo/Logo'

const SpinnerScreen = () => {
    return (
      <div className='spinner-container' >
          <Logo/>
        <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
        </div>
      </div>
    )
}

export default SpinnerScreen
