import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  /* Hide the default chevron. */
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  background-color: ${COLORS.transparentGray15};
  border: 0px;
  border-radius: 4px;
  color: ${COLORS.gray700};
  padding: 8px 32px 8px 12px;
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

export function Select({ label, value, onChange, children }) {
  const displayedValue = getDisplayedValue(value, children);
  const iconSize = 20;

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon id="chevron-down" size={iconSize}></Icon>
      </IconWrapper>
    </SelectWrapper>
  );
}
