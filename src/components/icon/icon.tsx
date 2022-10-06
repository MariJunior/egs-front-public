import React from 'react';

import { CommonIconProps } from '../../types';
import Image from 'next/image';

export interface IconProps
  extends CommonIconProps,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  icon: string;
  width: number;
  height: number;
}

export function Icon({ className, icon, alt = '', width = 0, height = 0 }: IconProps) {
  return (
    <div className={className}>
      <Image src={icon} width={width} height={height} alt={alt} />
    </div>
  );
}
