import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import cardImg from '../../assets/metro-app-card.png'

const Logincard = () => {
    return (
      <div className='card-container d-sm-none d-md-block d-none ' >
      <Card inverse  >
        <CardImg src={cardImg} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h2">Metro App</CardTitle>
          <CardText tag='p' >Lleva la gestion metrologica a otro nivel.</CardText>
        </CardImgOverlay>
      </Card>
    </div>
    )
}

export default Logincard
