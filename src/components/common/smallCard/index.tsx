import React from 'react';
import { Card } from 'antd';

import './style.scss';

interface SmallCardProps {
  children: any,
  className?: string,
}

const SmallCard = ({ children, className, ...rest } : SmallCardProps) => {

  return (
    <Card className={`${className} smallCard`} bordered={false} {...rest}>
      {children}
    </Card>
  )
};

export default SmallCard;
