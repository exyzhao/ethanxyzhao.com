import styled from "styled-components"

import sun from "./img/sun.svg"
import initials from "./img/initials.svg"
import playbook from "./img/playbook-mockups.png"
import cohort from "./img/cohort-mockups-nologo.png"
import penntix from "./img/penntix-mockups.png"
import olympic from "./img/olympic.jpg"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const Spacer = styled.div`
  height: ${props => props.height};
`

const SunSpacer = styled(Spacer)`
  width: 100%;
  max-width: 600px;
  background-color: #74ACFF;
  z-index: ${props => props.zIndex};
`

const Card = styled.div`
  position: relative;
  width: calc(100vw - 100px);
  max-width: 600px;
  padding: 30px 30px 60px; ${'' /* TOP SIDES BOT */}
  ${'' /* border: 1px solid black; */}
  border-radius: 20px;
  background-color: #F6F6F6;

  z-index: -1;

  @media only screen and (min-width: 768px) {
    width: calc(100vw - 120px);
  }
`

const CenterContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
`

const Sun = styled.img`
  position: fixed;
  top: 40px;
  right: 40px;

  z-index: 99;
`

const Initials = styled.img`
  position: absolute;
  top: 160px;
  left: -60px;
  
  @media only screen and (min-width: 768px) {
    left: 0;
    right: 0;
    top: 160px;
    margin: auto;
  }
  
  z-index: -1;
`

const HeroText = styled.div`
  font-weight: normal;

  p {
    font-size: 2.2em;
    margin: 0.1em;
  }

  .col2 {
    margin-left: min(max(60px, 10vw), 150px);
  }
  .col3 {
    margin-left: min(max(120px, 20vw), 300px);
  }
  .col4 {
    margin-left: min(max(160px, 24vw), 400px);
  }

  z-index: 999;

  @media only screen and (min-width: 768px) {
  p {
    font-size: 3em;
  }
}
`

const BioText = styled.div`
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  border: 1px solid #74ACFF;
  border-radius: 40px;
  box-shadow: -4px 4px #74ACFF;

  p {
    font-weight: normal;
  }
`

const HeadingNumber = styled.p`
  position: absolute;
  top: 10px;
  color: ${props => props.textColor};
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 40px 20px;
  max-width: 600px;

  background-color: #F6F6F6;
  border: 1px solid #8EC2F5;
  border-radius: 40px;
  box-shadow: -4px 4px #8EC2F5;

  h1, h2, h3, h4, h5, h6, p {
    color: black;
  }

  .project-title {
    font-size: 1.5em;
    font-weight: normal;
    margin: 40px 0px 20px;
  }
`

const HeaderText = styled.div`

  h2 {
    color: ${props => props.textColor};
    font-size: 2.2em;
    font-weight: normal;
    margin: 0.1em;
  }

  .col2 {
    margin-left: min(max(60px, 10vw), 100px);
  }
  .col3 {
    margin-left: min(max(100px, 15vw), 150px);
  }

  .up {
    margin-top: -0.15em;
  }

  z-index: 999;

  @media only screen and (min-width: 768px) {
  h2 {
    font-size: 3em;
  }
}
`

const ProjectImage = styled.img`
  width: 200px;
  border-radius: 10px;
`

const AboutImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 20px;
`

const App = () => {
  return (
    <Content>
      <Sun src={sun} alt="sun" onMouseOver={() => console.log('sun!')} />
      <Card>
        <CenterContainer>
          <Initials src={initials} alt="initials" onMouseOver={() => console.log('ez')} />
          <Spacer height="50px" />
          <HeroText>
            <p>Hey there!</p>
            <p className="col2">I'm Ethan.</p>
            <p>And I love</p>
            <p className="col2"><em>designing</em></p>
            <p className="col4">and</p>
            <p className="col3"><em>building.</em></p>
          </HeroText>
          <Spacer height="30px" />
          <BioText>
            <p className="sans">Studying business</p>
            <p className="sans">at Penn/Wharton</p>
          </BioText>
        </CenterContainer>
        <Spacer height="30px" />
        <StyledButton onClick={() => console.log('clicked')}><p className="sans">SEE PORTFOLIO</p></StyledButton>
      </Card>
      <SunSpacer height="30px" zIndex={999} />
      <Card>
        <Spacer height="20px" />
        <CenterContainer>
          <HeadingNumber>01</HeadingNumber>
          <HeaderText>
            <h2 className="col2">My</h2>
            <h2>project</h2>
            <h2 className="col3 up">portfolio</h2>
          </HeaderText>
          <Spacer height="30px" />
          <Project>
            <ProjectImage src={playbook} />
            <h3 className="project-title">Penn Playbook</h3>
            <p className="sans">Design and data driven web exhibition of life at Penn</p>
          </Project>
          <Spacer height="30px" />
          <Project>
            <ProjectImage src={cohort} />
            <h3 className="project-title">Cohort</h3>
            <p className="sans">Group travel planning and itinerary generation app</p>
          </Project>
          <Spacer height="30px" />
          <Project>
            <ProjectImage src={penntix} />
            <h3 className="project-title">PennTix</h3>
            <p className="sans">Ticket resale platform for Penn students</p>
          </Project>
        </CenterContainer>
      </Card>
      <Spacer height="30px" />
      <Card>
        <AboutImage src={olympic} />
        <Spacer height="20px" />
        <CenterContainer>
          <HeadingNumber textColor="#F6F6F6">02</HeadingNumber>
          <HeaderText textColor="#F6F6F6" >
            <h2 className="col2">About</h2>
            <h2>me</h2>
          </HeaderText>
        </CenterContainer>
        <Spacer height="30px" />
        <p>filler</p>
      </Card>

    </Content>
  )
}

export default App