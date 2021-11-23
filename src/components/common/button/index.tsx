import React from 'react';
import { Button as AntdButton } from 'antd';
import '../../../styles/common/button.scss';

interface iButton{
  btnname: string,
  btntype?: string,
}

function Button(props:iButton) {
  const { btnname, btntype, ...restProps } = props;
  return (
      <AntdButton className={btntype} {...restProps}>{btnname}</AntdButton>
  );
}

export default Button;
