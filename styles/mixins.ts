import { css } from 'styled-components'

const mixins = {
  flexAround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexLeft: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,
  flexEvenly: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  smallLink: css`
    color: var(--curious-blue);
    border: 2px solid var(--blue-zodiac);
    padding: 0.5rem 1.25rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 600;
    text-transform: capitalize;
    font-family: var(--font-mono);
    border-radius: ${({ theme }) => theme.borderRadius.default};
  `,
  bigLink: css`
    width: 220px;
    color: var(--curious-blue);
    border: 2px solid var(--blue-zodiac);
    padding: 1.25rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 600;
    text-transform: capitalize;
    font-family: var(--font-mono);
    border-radius: ${({ theme }) => theme.borderRadius.default};
  `,
}

export default mixins
