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
}

export default mixins
