import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 54rem;
  margin: 0 auto;
`
export const SearchForm = styled.div`
  width: 100%;
  margin-top: 4.5rem;

  > div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 12px;

    h3 {
      ${({ theme }) => theme.FONTS.TITLE_S}
      color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
    }

    span {
      ${({ theme }) => theme.FONTS.TEXT_S}
      color: ${({ theme }) => theme.COLORS.BASE_SPAN};
    }
  }
`
