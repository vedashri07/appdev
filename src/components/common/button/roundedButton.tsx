import React from 'react';
import { Button } from 'antd';

import '../../../styles/common/button.scss';

interface iButton{
  btnname: string,
  btntype?: string,
  icon?: any,
}

function RoundedButton(props:iButton) {
  const { btnname, btntype, icon, ...restProps } = props;
  return (
    <button className={`rounded-button ${btntype}`} {...restProps}>{icon}{btnname}</button>
  );
}

export default RoundedButton;
