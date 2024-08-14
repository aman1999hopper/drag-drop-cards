import React from 'react';
import { Arrow } from 'react-konva';

const ConnectorArrow = ({ fromX, fromY, toX, toY }) => {
  return (
    <Arrow
      points={[fromX, fromY, toX, toY]}
      pointerLength={10}
      pointerWidth={10}
      fill="black"
      stroke="black"
    />
  );
};

export default ConnectorArrow;
