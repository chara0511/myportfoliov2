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
    color: #3a96dd;
    border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
    padding: 1.25rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 600;
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.fontMono};

    ::before,
    ::after,
    span::before,
    span::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      transition: ${({ theme }) => theme.transition};
    }

    ::before {
      top: -2px;
      left: -2px;
      border-top: 2px solid #3a96dd;
      border-left: 2px solid #3a96dd;
      border-top-left-radius: 4px;
    }

    ::after {
      top: -2px;
      right: -2px;
      border-top: 2px solid #3a96dd;
      border-right: 2px solid #3a96dd;
      border-top-right-radius: 4px;
    }

    span::before {
      bottom: -2px;
      left: -2px;
      border-bottom: 2px solid #3a96dd;
      border-left: 2px solid #3a96dd;
      border-bottom-left-radius: 4px;
    }

    span::after {
      bottom: -2px;
      right: -2px;
      border-bottom: 2px solid #3a96dd;
      border-right: 2px solid #3a96dd;
      border-bottom-right-radius: 4px;
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
