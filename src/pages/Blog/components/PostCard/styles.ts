import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BASE_TEXT};

  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BASE_POST};
  border: 2px solid transparent;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    h2 {
      max-width: 14.5rem;
      text-align: left;
      ${({ theme }) => theme.FONTS.TITLE_M}
      color: ${({ theme }) => theme.COLORS.BASE_TITLE};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      text-align: right;
      ${({ theme }) => theme.FONTS.TEXT_S}
      color: ${({ theme }) => theme.COLORS.BASE_SPAN};
    }
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.COLORS.BASE_LABEL};
    transition: 0.2s;
  }
`
export const Description = styled.p`
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
