import React from 'react';
import Gmet from '../../assets/logo.png';

const Logo = ({width='50'}) => {

    const styles={
        width: `${width}px`
    }
    return (
        <div style={styles} >
            <img
                src={Gmet}
                alt='logo'
                style={styles}
            />
        </div>
    )
}

export default Logo
