import React from 'react';
import { Typography } from 'antd';

import './style.scss';

const { Text, Link } = Typography;

interface TextProps {
  children?: any;
  className?: string,
  rest?: any,
}

export function DefaultText ({ children, className, ...rest }: TextProps) {
  return (
    <Text className={`${className} defaultText`} {...rest}>
      {children}
    </Text>
  )
}
