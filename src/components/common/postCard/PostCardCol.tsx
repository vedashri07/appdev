import React from 'react';
import { Col } from 'antd';

import { DefaultText } from '../typography';

import { ReactComponent as SmallLogo } from '../../../assets/logo/small-logo.svg';
import savePuppy from '../../../assets/images/save-puppy.png';


interface postCard {
  image?: any,
  title: string,
  content: string,
  currency: string,
}

const PostCardCol = (props: postCard) => {
  return (
    <Col className="projectColWrapper" sm={24} xs={24} md={12} lg={8} xl={8}>
      <div className="image-wrapper">
        {/*<div className="img" style={{ backgroundImage: `url(${props.image})` }} />*/}
        <div className="img" style={{ backgroundImage: `url(${savePuppy})` }} />
      </div>
      <div className="content-wrapper">
        <DefaultText>
          <div className="title">{props.title}</div>
        </DefaultText>
        <DefaultText>
          <div className="sub-title" title={props.content}>{props.content}</div>
        </DefaultText>
        <DefaultText>
          <div className="tag"><SmallLogo /> {props.currency}</div>
        </DefaultText>
      </div>
    </Col>
  )
};

export default PostCardCol;
