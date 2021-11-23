import React from 'react';

import { DefaultText } from '../typography';

import './style.scss';

const BatchTag = ({
  children, title, className = '', active,
}: any) => {
  return(
    <div className={`hashTagItem ${active ? 'active' : ''}`}>
      {children}
      <DefaultText className="hashTagItem__text">{title}</DefaultText>
    </div>
  )
};

export default BatchTag;
