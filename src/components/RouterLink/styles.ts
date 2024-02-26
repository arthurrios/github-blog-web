import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BLUE};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  }

  svg {
    height: 0.75rem;
    width: 0.75rem;
  }

  h4 {
    color: ${({ theme }) => theme.COLORS.BLUE};
    ${({ theme }) => theme.FONTS.LINK}
    text-transform: uppercase;
  }
`
