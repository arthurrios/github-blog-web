import styled from 'styled-components'

export const SearchFormContainer = styled.form`
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

  input {
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 6px;
    width: 100%;

    background: ${({ theme }) => theme.COLORS.BASE_INPUT};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BASE_LABEL};
    }
  }
`
