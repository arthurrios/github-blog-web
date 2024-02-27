import styled from 'styled-components'

interface TextStyleProps {
  $variant: 'home' | 'post'
}

export const IconTitleContainer = styled.div<TextStyleProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    height: 1.125rem;
    width: 1.125rem;
    color: ${({ theme }) => theme.COLORS.BASE_LABEL};
  }

  span {
    color: ${(props) =>
      props.$variant === 'home'
        ? props.theme.COLORS.BASE_SUBTITLE
        : props.theme.COLORS.BASE_SPAN};
  }
`
