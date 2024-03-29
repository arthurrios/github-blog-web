import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 54rem;
  margin: 0 auto;
`
export const SearchForm = styled.form`
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
export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 3rem 0 14.625rem;
`
