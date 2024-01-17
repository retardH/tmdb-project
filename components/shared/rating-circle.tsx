import { generateColorsByPercent } from '@/lib/utils';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
  percent: number;
  size?: string;
}
const RatingCircle: React.FC<Props> = ({ percent, size = 'medium' }) => {
  return (
    <CircularProgressbar
      value={percent}
      text={`${percent.toFixed(0)}%`}
      className="w-[35px] h-[35px]"
      background
      backgroundPadding={5}
      styles={{
        root: {
          width: size === 'large' ? '45px' : '35px',
          height: size === 'large' ? '45px' : '35px',
          position: 'relative',
        },
        path: {
          stroke: generateColorsByPercent(percent),
        },
        trail: {
          stroke: '#0f172a',
        },
        text: {
          fill: 'white',
          fontSize: '28px',
        },
        background: {
          fill: '#020617',
        },
      }}
    />
  );
};

export default RatingCircle;
