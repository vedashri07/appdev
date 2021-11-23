import React from 'react';
import '../../../styles/common/imagecontainer.scss'

interface IImageContainer { 
  text: string, 
  type: string;
} 

function ImageContainer(props:IImageContainer) {
  return ( 
  <div> 
    <div className={props.type}>
      {props.text}
    </div>
  </div>
  )
}

export default ImageContainer;