import { css } from 'styled-components'

const mixins = {
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
}

export default mixins
