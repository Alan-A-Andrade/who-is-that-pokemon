import React from 'react';
import VerticalHingerStyle from './style';

const VerticalHinger: React.FC<{}> = () => {
  return (
    <VerticalHingerStyle>
      <VerticalHingerEnd/>
      <VerticalHingerGap/>
      <div className="vertical-hinger-body">
        <HingerBody/>
      </div>
      <VerticalHingerGap/>
      <VerticalHingerEnd/>
    </VerticalHingerStyle>
  );
};

export default VerticalHinger;

const HingerBody: React.FC<{}> = () => {
  return (
    <>
      <div className="vertical-hinger-end-highlight"></div>
      <div className="vertical-hinger-end-body">
        <div className='flexbox-row'>
          <div className="vertical-hinger-end-body-vertical-highlight"></div>
          <div className="vertical-hinger-end-body-vertical-body"></div>
        </div>
        <div className="vertical-hinger-end-body-body">
          <div className="vertical-hinger-end-body-highlight"></div>
          <div className="vertical-hinger-end-body-shadow"></div>
        </div>
        <div className='flexbox-row'>
          <div className="vertical-hinger-end-body-vertical-body"></div>
          <div className="vertical-hinger-end-body-vertical-shadow"></div>
        </div>
      </div>
      <div className="vertical-hinger-end-shadow"></div>
    </>
  );
};

const VerticalHingerEnd: React.FC<{}> = () => {
  return (
    <div className="vertical-hinger-end">
      <HingerBody/>
    </div>
  );
};

const VerticalHingerGap: React.FC<{}> = () => {
  return (
    <div className="vertical-hinger-gap"></div>
  );
};
