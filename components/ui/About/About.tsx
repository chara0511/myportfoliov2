import Image from 'next/image'
import styled from 'styled-components'
import {
  FirebaseIcon,
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
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;

  ${mixins.flexLeft};

  & .formatted {
    margin: 2rem auto;
    width: 200px;
    filter: drop-shadow(0px 8px 16px #17375b);

    @media (min-width: ${breakpoints.md}) {
      width: 250px;
    }

    @media (min-width: ${breakpoints.xl}) {
      width: 300px;
    }
  }

  & .rounded {
    border-radius: 50%;
  }
`

const StyledSkills = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  row-gap: 1rem;
  margin: 1.5rem auto;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  & li {
    display: flex;
    align-items: center;

    & span {
      margin-right: 0.5rem;

      & svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const About = () => {
  return (
    <StyledContent id="about">
      <h2>about me</h2>
      <div className="formatted">
        <Image
          loading="eager"
          className="rounded"
          unoptimized
          src="/me.jpg"
          layout="intrinsic"
          width={300}
          height={300}
        />
      </div>

      <div>
        <div>
          <h3>Bachelor of Systems Engineering.</h3>
          <p>Here are a few technologies, I&apos;ve been working with recently :</p>
          <StyledSkills>
            <li>
              <span>
                <HtmlIcon />
              </span>
              HTML & (S)CSS
            </li>
            <li>
              <span>
                <JavascriptIcon />
              </span>
              Javascript (ES6+)
            </li>
            <li>
              <span>
                <FirebaseIcon />
              </span>
              Firebase
            </li>
            <li>
              <span>
                <NextjsIcon />
              </span>
              Next.js
            </li>
            <li>
              <span>
                <NodejsIcon />
              </span>
              Node.js
            </li>
            <li>
              <span>
                <ReactIcon />
              </span>
              React
            </li>
            <li>
              <span>
                <ReduxIcon />
              </span>
              Redux & Redux-thunk
            </li>
            <li>
              <span>
                <StyledComponentsIcon />
              </span>
              Styled Components
            </li>
            <li>
              <span>
                <TailwindcssIcon />
              </span>
              Tailwindcss
            </li>
            <li>
              <span>
                <TypescriptIcon />
              </span>
              Typescript
            </li>
          </StyledSkills>
        </div>
      </div>
    </StyledContent>
  )
}

export default About
