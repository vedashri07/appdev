import React from 'react';
import { Card } from 'antd';

import './style.scss';

interface CardProps {
  children: any,
  className?: string,
}

const SimpleCard = ({ children, className = '', ...rest } : CardProps) => {
  return (
    <Card className={`${className} simpleCard`} bordered={false} {...rest}>
      {children}
    </Card>
  )
};

export default SimpleCard;
