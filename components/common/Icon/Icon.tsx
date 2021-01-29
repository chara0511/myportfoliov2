import { FC } from 'react'
import {
  ArrowIcon,
  ErrorIcon,
  ExternalIcon,
  FirebaseIcon,
  GithubIcon,
  HtmlIcon,
  InstagramIcon,
  JavascriptIcon,
  LinkedInIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  StyledComponentsIcon,
  TailwindcssIcon,
  TwitterIcon,
  TypescriptIcon,
} from '@components/icons'

interface Props {
  name: string
}

const Icon: FC<Props> = ({ name }) => {
  switch (name) {
    case 'arrow':
      return <ArrowIcon />
    case 'external link':
      return <ExternalIcon />
    case 'HTML':
      return <HtmlIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'javascript (ES6+)':
      return <JavascriptIcon />
    case 'firebase':
      return <FirebaseIcon />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      return <LinkedInIcon />
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
    case 'twitter':
      return <TwitterIcon />
    case 'typescript':
      return <TypescriptIcon />

    default:
      return <ErrorIcon />
  }
}

export default Icon
