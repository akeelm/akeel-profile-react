import React, { FunctionComponent } from 'react';
import './banner.scss';

export interface IBannerProps {
  mainText: string;
  secondaryText: string;
}

export const Banner: FunctionComponent<IBannerProps> = props => {
  return (
    <div className="banner">
      <span className="banner__maintext">{props.mainText}</span>
      <span className="banner__secondarytext">{props.secondaryText}</span>
    </div>
  );
};