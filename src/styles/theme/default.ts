import { css } from 'styled-components'

export const defaultTheme = {
  COLORS: {
    BLUE: '#3294F8',
    BASE_TITLE: '#E7EDF4',
    BASE_SUBTITLE: '#C4D4E3',
    BASE_TEXT: '#AFC2D4',
    BASE_SPAN: '#7B96B2',
    BASE_LABEL: '#3A536B',
    BASE_BORDER: '#1C2F41',
    BASE_POST: '#112131',
    BASE_PROFILE: '#0B1B2B',
    BASE_BACKGROUND: '#071422',
    BASE_INPUT: '#040F1A',
    BLUR: '#14589C',
  } as const,

  FONTS: {
    TITLE_L: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 700;
    `,
    TITLE_M: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 700;
    `,
    TITLE_S: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: 700;
    `,
    TEXT_M: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
    `,
    TEXT_S: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 400;
    `,
    LINK: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 700;
    `,
  } as const,
}
