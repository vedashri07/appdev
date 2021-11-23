import React from 'react';
import { Button } from 'antd';

import '../../../styles/common/button.scss';

interface iButton{
  btnname: string,
  btntype?: string,
}

function WhiteButton(props:iButton) {
  const { btnname, btntype, ...restProps } = props;
  return (
    <button className={`white-button ${btntype}`} {...restProps}>{btnname}</button>
  );
}

export default WhiteButton;
