import React from 'react';

import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';


const CharacterCard = ({ picture, name, description, origin }) => {
    return(
        <div>
        <Card>
            <CardBody>
                <CardTitle> {name} </CardTitle>
                <CardImg width='100' src={picture} />
                <CardSubtitle><em>{origin}</em></CardSubtitle>
                {/* <CardText>{description}</CardText> */}
            </CardBody>
        </Card>
        </div>
    )
}
export default CharacterCard;

