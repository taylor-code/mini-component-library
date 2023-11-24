import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 0.7,
    height: 25,
    padding: 0,
    radius: 4
  },
  large: {
    fontSize: 0.8,
    height: 40,
    padding: 4,
    radius: 8
  }
};

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  font-size: var(--font-size);
  height: var(--height);
  padding: 12px 32px;
  width: var(--width);
`;

const IconWrapper = styled.div`
  bottom: 0;
  height: var(--size);
  margin: auto;
  position: absolute;
  right: 8px;
  top: 0;
  width: var(--size);
`;

export function IconInput({ icon, label, placeholder, size, width = 250 }) {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Invalid size: ${size}\nsize must be 'small' or 'large.'`);
  }
  if (width <= 0) {
    throw new Error(`Invalid width: ${width}\nwidth must be greater than 0.`);
  }

  const { fontSize, height, padding } = style;

  return (
    <InputWrapper
      style={{
        '--height': height + 'px'
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': height + 'px' }}>
        <Icon id="search" size={height}></Icon>
      </IconWrapper>
      <Input
        placeholder={placeholder}
        style={{
          '--font-size': fontSize + 'rem',
          '--width': width + 'px'
        }}
        type="text"
      ></Input>
    </InputWrapper>
  );
}
