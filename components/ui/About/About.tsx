import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { breakpoints, mixins } from 'styles'
import { StyledTitle } from 'styles/utils'

const StyledContent = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 5rem 0;
`

const StyledWrapper = styled.div`
  margin: 2rem 0;
  flex-direction: column;

  ${mixins.flexCenter};

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }

  & .formattedImg {
    flex: 0 200px;
    width: 200px;
    filter: drop-shadow(0px 8px 16px #17375b);

    @media (min-width: ${breakpoints.md}) {
      width: 225px;
      flex: 0 225px;
    }

    @media (min-width: ${breakpoints.xl}) {
      width: 250px;
      flex: 0 250px;
    }

    & .rounded {
      border-radius: 50%;
    }
  }

  & .description {
    flex: 1;
    width: 100%;
    margin: 2rem 0 0;

    @media (min-width: ${breakpoints.lg}) {
      margin: 0 4rem;
    }
  }
`
interface Props {
  about: DataModel
}

const About: FC<Props> = ({ about }) => {
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent id="about" ref={ref}>
      <StyledTitle>
        <h2>{about.header}</h2>
        <div className="borders">
          <span className="border" />
          <span className="border" />
        </div>
      </StyledTitle>
      <StyledWrapper>
        <div className="formattedImg">
          <Image
            loading="eager"
            className="rounded"
            alt="Avatar"
            unoptimized
            src="/me.jpg"
            width={300}
            height={300}
          />
        </div>

        <div className="description">
          <div>
            <p>{`${about.headerBefore} ${about.headerAfter}`}</p>
            <br />
            <p>
              {`${about.bodyBefore} ${about.keyword1} - 🎓 Actualmente, tengo el
              grado de Bachiller.`}
            </p>
            <br />
            {/* From reading documentation, taking courses on */}
            {/* watching tutorials on Youtube, and running tests on */}
            <p>
              {`${about.bodyPrev} Desde leer
              documentaciones, tomar cursos en ${about.keyword2}, ver tutoriales en Youtube y ejecutar pruebas
              en ${about.keyword3}. 💻 Hasta completar desafíos en ${about.keyword4} & ${about.keyword5}.`}
            </p>
            <br />
            <p>{about.body}</p>
            <br />
            <p>Estoy orgulloso de decir que siempre trabajo duro. 😎</p>
          </div>
        </div>
      </StyledWrapper>
    </StyledContent>
  )
}

export default About
