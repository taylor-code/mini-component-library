/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  }
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export function ProgressBar({ value, size }) {
  const styles = STYLES[size];

  if (value < MIN_VALUE || value > MAX_VALUE) {
    throw new Error(
      `Invalid value: ${value}\nvalue must be between ${MIN_VALUE} and ${MAX_VALUE}.`
    );
  }
  if (!styles) {
    throw new Error(
      `Invalid size: ${size}\nsize must be 'small,' 'medium,' or 'large.'`
    );
  }

  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={MIN_VALUE}
      aria-valuemax={MAX_VALUE}
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px'
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px'
          }}
        />
      </BarWrapper>
    </ProgressBarWrapper>
  );
}
