import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.select`
  background-color: ${COLORS.transparentGray15};
  border: 0px;
  border-radius: 4px;
  color: ${COLORS.gray700};
  padding: 8px 12px;
`;

export function Select({ label, value, onChange, children }) {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper value={value} onChange={onChange}>
      {children}
    </SelectWrapper>
  );
}
