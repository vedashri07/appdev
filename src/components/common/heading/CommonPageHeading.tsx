import React from 'react';

import { DefaultText } from '../typography'

import './CommonPageHeading.style.scss';

interface commonPageHeadingProps {
  children?: any;
  className?: string;
}

export function CommonPageHeading ({ children, className = '', ...rest }: commonPageHeadingProps) {
  return (
    <DefaultText className={`${className} commonHeading`} {...rest}>
      {children}
    </DefaultText>
  )
}
