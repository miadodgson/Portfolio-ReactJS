import React from 'react';
import './Education.css';
import '../../Components/Cards/Cards.css';
import CardComponent from '../../Components/Cards/Cards'
import plant from '../../Assets/Images/Plant.png'

const Education = () => {
  return (
    <div>
      <h1 className='h1'>Education</h1>
      <h1 className='h1'>Memorial University of Newfoundland</h1>
	  
		<CardComponent
        title="Molecular Biology"
        subtitle="Card subtitle"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        imgUrl="https://picsum.photos/300/200"
        buttonText="Button"
      />

		<CardComponent
        title="Medicine"
        subtitle="Card subtitle"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        imgUrl="https://picsum.photos/300/200"
        buttonText="Button"
      />

		<CardComponent
        title="Immunology"
        subtitle="Card subtitle"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        imgUrl="https://picsum.photos/300/200"
        buttonText="Button"
      />
   
    </div>
  );
};

export default Education;
