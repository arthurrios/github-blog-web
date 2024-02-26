import styled from 'styled-components'

export const IconTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    height: 1.125rem;
    width: 1.125rem;
    color: ${({ theme }) => theme.COLORS.BASE_LABEL};
  }

  span {
    color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  }
`
