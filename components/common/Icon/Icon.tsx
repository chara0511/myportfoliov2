import { FC } from 'react'
import {
  FirebaseIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  StyledComponentsIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from '@components/icons'

interface Props {
  name: string
}

const Icon: FC<Props> = ({ name }) => {
  switch (name) {
    case 'HTML':
      return <HtmlIcon />
    case 'javascript (es6+)':
      return <JavascriptIcon />
    case 'firebase':
      return <FirebaseIcon />
    case 'github':
      return <GithubIcon />
    case 'next.js':
      return <NextjsIcon />
    case 'node.js':
      return <NodejsIcon />
    case 'react':
      return <ReactIcon />
    case 'redux & redux-thunk':
      return <ReduxIcon />
    case 'styled components':
      return <StyledComponentsIcon />
    case 'tailwindcss':
      return <TailwindcssIcon />
    case 'typescript':
      return <TypescriptIcon />

    default:
      throw new Error()
  }
}

export default Icon
