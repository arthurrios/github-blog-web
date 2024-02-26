import styled from 'styled-components'

export const PostCardContainer = styled.button`
  width: 26rem;
  height: 16.25rem;
  position: relative;
  overflow: hidden;
  padding: 2rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BASE_POST};
  border: 2px solid transparent;

  h2 {
    position: absolute;
    left: 32px;
    top: 32px;
    width: 17.68rem;
    text-align: left;
    ${({ theme }) => theme.FONTS.TITLE_M}
    color: ${({ theme }) => theme.COLORS.BASE_TITLE};
  }

  span {
    position: absolute;
    right: 32px;
    top: 37px;
    ${({ theme }) => theme.FONTS.TEXT_S}
    color: ${({ theme }) => theme.COLORS.BASE_SPAN};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.COLORS.BASE_LABEL};
    transition: 0.2s;
  }
`
export const Description = styled.p`
  text-align: left;
  margin-top: 5.25rem;

  max-height: 7rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
