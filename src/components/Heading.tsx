import React from 'react'

interface propsType {
    title: string;
}
const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='head-container'>
        <p className='head-title'>{title}</p>

    </div>
  )
}

export default Heading