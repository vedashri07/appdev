import React from 'react';
import { Card } from 'antd';

import './style.scss';

interface IconCardProps {
  children: any,
  className?: string,
}

const IconCard = ({ children, className = '', ...rest } : IconCardProps) => {

  return (
    <Card className={`${className} iconCard`} bordered={false} {...rest}>
      {children}
    </Card>
  )
};

export default IconCard;
