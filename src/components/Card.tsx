'use client'
import React from 'react';
import Image from 'next/image';
import "../app/styles/card.css";


interface propsType {
  title: string
  description: string
  image: string
  tags: string[];
}
const Card: React.FC<propsType> = ({title, description, image, tags}) => {
  return (
    <div className={`card ${window.innerWidth >= 640 ? 'card-sm' : ''}`} data-aos="zoom-in-up">
<div>
  <Image className={`card-image ${window.innerWidth >= 640 ? 'card-image-sm' : ''}`}
  src={image}
  width={350}
  height={350}
   alt={title} 
   />
</div>
<div className='card-content'>
  <div className='card-title'>{title}</div>
  <div>{description}</div>
  <div>
    {tags.map((el) => (<div className='tags' key={el}>
     {el}
    </div>
      
    ))}
  </div>
</div>
    </div>
  )
}

export default Card