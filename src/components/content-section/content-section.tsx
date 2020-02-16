import React, { ReactNode, FunctionComponent } from 'react';
import './content-section.scss';

export interface IContentSectionProps {
    sectionName: string;
    children: ReactNode;
}

export const ContentSection: FunctionComponent<IContentSectionProps> = props => {
  return (
    <div className="content-section">
      <div id={props.sectionName}></div>
      {props.children}
    </div>
  );
};

export default ContentSection;