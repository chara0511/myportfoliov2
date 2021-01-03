import { FC } from 'react'
import {
  ErrorIcon,
  FirebaseIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
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
    case 'javascript (ES6+)':
      return <JavascriptIcon />
    case 'firebase':
      return <FirebaseIcon />
    case 'github':
      return <GithubIcon />
    case 'mongoDB':
      return <MongoDBIcon />
    case 'next.js':
      return <NextjsIcon />
    case 'node.js':
      return <NodejsIcon />
    case 'react':
      return <ReactIcon />
    case 'redux & redux-thunk':
      return <ReduxIcon />
    case 'sass':
      return <SassIcon />
    case 'styled components':
      return <StyledComponentsIcon />
    case 'tailwindcss':
      return <TailwindcssIcon />
    case 'typescript':
      return <TypescriptIcon />

    default:
      return <ErrorIcon />
  }
}

export default Icon
