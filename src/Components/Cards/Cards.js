import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


const CardComponent = ({ title, subtitle, text, imgUrl, buttonText }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <img alt="Sample" src={imgUrl} />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle}
        </CardSubtitle>
        <CardText>{text}</CardText>
        <Button>{buttonText}</Button>
      </CardBody>
    </Card>
  );
};

export default CardComponent
