import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 0.7,
    iconSize: 16 * 0.8,
    paddingLeft: 16
  },
  large: {
    fontSize: 0.8,
    iconSize: 16 * 1,
    paddingLeft: 20
  }
};

const InputWrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${COLORS.gray700};
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  height: var(--height);
  outline-offset: 2px;
  padding: 4px;
  padding-left: var(--padding-left);
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray300};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  bottom: 0;
  height: var(--size);
  margin: auto;
  position: absolute;
  top: 0;
  width: var(--size);

  &:hover {
    color: ${COLORS.black};
  }
`;

export function IconInput({
  icon,
  label,
  placeholder = '',
  size,
  width = 250
}) {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Invalid size: ${size}\nsize must be 'small' or 'large.'`);
  }
  if (width <= 0) {
    throw new Error(`Invalid width: ${width}\nwidth must be greater than 0.`);
  }

  const { fontSize, iconSize, paddingLeft } = style;

  return (
    <InputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize}></Icon>
      </IconWrapper>
      <Input
        placeholder={placeholder}
        style={{
          '--font-size': fontSize + 'rem',
          '--padding-left': paddingLeft + 'px',
          '--width': width + 'px'
        }}
        type="text"
      ></Input>
    </InputWrapper>
  );
}
