import styled from 'styled-components'

export const InputContainer = styled.input`
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 6px;
  width: 100%;

  background: ${({ theme }) => theme.COLORS.BASE_INPUT};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BASE_LABEL};
  }
`
