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
    align-items: left;
  `,
  flexEvenly: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  bigLink: css`
    color: #0178d7;
    border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 600;
    cursor: pointer;

    ::before,
    ::after,
    span::before,
    span::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      transition: ${({ theme }) => theme.transition};
    }

    ::before {
      top: -2px;
      left: -2px;
      border-top: 2px solid #0178d7;
      border-left: 2px solid #0178d7;
    }

    ::after {
      top: -2px;
      right: -2px;
      border-top: 2px solid #0178d7;
      border-right: 2px solid #0178d7;
    }

    span::before {
      bottom: -2px;
      left: -2px;
      border-bottom: 2px solid #0178d7;
      border-left: 2px solid #0178d7;
    }

    span::after {
      bottom: -2px;
      right: -2px;
      border-bottom: 2px solid #0178d7;
      border-right: 2px solid #0178d7;
    }

    :hover::before,
    :hover::after,
    :hover span::before,
    :hover span::after {
      width: 100%;
      height: 100%;
    }
  `,
}

export default mixins
