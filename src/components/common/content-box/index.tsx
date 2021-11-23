import React from 'react';
import Button from '../button';
import '../../../styles/common/contentbox.scss';


interface iContentBox {
  imagePos: string,
  imageClassName: string,
  imageUrl:string,
  boxEyeBrow :string,
  boxH1 : string,
  boxDescription: string
}

function ContentBox(props: iContentBox) {
  const { imagePos, imageClassName, imageUrl, boxEyeBrow, boxH1, boxDescription } = props;
  return (

    <div className="box-wrapper">
        {(imagePos === 'left') && (
          <div className="contant-box-left">
            <div className="content-image">
              <img className="imageClassName" src={(`${imageUrl}`)} alt=''/>
            </div>
            <div className="content-message">
              <span className="eyebrow-label">{boxEyeBrow} </span>
              <h2>{boxH1}</h2>
              <div className="content-label">{boxDescription} </div>
              <div className="content-cta">
                <Button btnname="Button" btntype="primary-btn-icon" />
              </div>
            </div>
          </div>
            
        )}
          {(imagePos === 'right') && (
          <div className="contant-box-right">
            <div className="content-image">
              <img className="imageClassName" src={(`${imageUrl}`)} alt=''/>
            </div>
            <div className="content-message">
              <span className="eyebrow-label">{boxEyeBrow} </span>
              <h2>{boxH1}</h2>
              <div className="content-label">{boxDescription} </div>
              <div className="content-cta">
                <Button btnname="Button" btntype="primary-btn-icon" />
              </div>
            </div>
          </div>
            
        )}
     </div>
  );
}

export default ContentBox;
