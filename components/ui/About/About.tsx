import Image from 'next/image'
import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;

  ${mixins.flexLeft};

  & .formatted {
    margin: 3rem auto;
    width: 200px;
    filter: drop-shadow(2px 4px 6px #17375b);

    @media (min-width: 768px) {
      width: 300px;
    }
  }

  & .rounded {
    border-radius: 50%;
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
          <h5>Bachelor of Systems Engineering.</h5>
          <p>Here are a few technologies, I&apos;ve been working with recently:</p>
          <ul>
            <li>HTML & (S)CSS</li>
            <li>JavaScript (ES6+) </li>
            <li>TypeScript </li>
            <li>Angular</li>
            <li>React </li>
            <li>Node.js </li>
          </ul>
        </div>
      </div>
    </StyledContent>
  )
}

export default About
