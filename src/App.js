import styled from "styled-components"

import Content from "./components/Content"
import Spacer from "./components/Spacer"
import Card from "./components/Card"
import HeroText from "./components/HeroText"
import ProjectsHeader from "./components/ProjectsHeader"
import Projects from "./components/Projects"

import sun from "./img/sun.svg"
import initials from "./img/initials.svg"
import olympic from "./img/olympic.jpg"

// 20px padding around cards
// Mobile: 30px padding within cards
// Desktop: 5vw padding within cards

const Sun = styled.img`
  position: fixed;
  top: 40px;
  right: 40px;

  z-index: 99;
`

const InitialsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: calc(100% - 2 * var(--within-cards));

  top: calc(50% + 15px);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -1;
`

const Initials = styled.img`
  min-width: calc(100px + 40vw);
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(10px + 3vw);

  border: 1px solid #74ACFF;
  border-radius: 100vw;
  box-shadow: -4px 4px #74ACFF;
  cursor: pointer;

  p {
    font-weight: normal;
  }
`

const HeadingNumber = styled.p`
  position: absolute;
  top: 10px;
  color: ${props => props.textColor};
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

const AboutImage = styled.img`
  width: 100%;
  border-radius: 20px;
`

// const App = () => {
//   return (
//     <Content>
//       <Sun src={sun} alt="sun" onMouseOver={() => console.log('sun!')} />
//       <Card>
//         <CenterContainer>
//           <Initials src={initials} alt="initials" onMouseOver={() => console.log('ez')} />
//           <Spacer height="50px" />
//           <HeroText>
//             <p>Howdy!</p>
//             <p className="col2">I'm Ethan.</p>
//             <p>And I love</p>
//             <p className="col2"><em>designing</em></p>
//             <p className="col4">and</p>
//             <p className="col3"><em>building.</em></p>
//           </HeroText>
//           <Spacer height="30px" />
//           <BioText>
//             <p className="sans">Studying business</p>
//             <p className="sans">at Penn/Wharton</p>
//           </BioText>
//         </CenterContainer>
//         <Spacer height="30px" />
//         <StyledButton onClick={() => console.log('clicked')}><p className="sans">SEE PORTFOLIO</p></StyledButton>
//       </Card>
//       <SunSpacer height="30px" zIndex={999} />
//       <Card>
//         <Spacer height="20px" />
//         <CenterContainer>
//           <HeadingNumber>01</HeadingNumber>
//           <HeaderText>
//             <h2 className="col2">My</h2>
//             <h2>project</h2>
//             <h2 className="col3 up">portfolio</h2>
//           </HeaderText>
//           <Spacer height="30px" />
//           <Project>
//             <ProjectImage src={playbook} />
//             <h3 className="project-title">Penn Playbook</h3>
//             <p className="sans">Design and data driven web exhibition of life at Penn</p>
//           </Project>
//           <Spacer height="30px" />
//           <Project>
//             <ProjectImage src={cohort} />
//             <h3 className="project-title">Cohort</h3>
//             <p className="sans">Group travel planning and itinerary generation app</p>
//           </Project>
//           <Spacer height="30px" />
//           <Project>
//             <ProjectImage src={penntix} />
//             <h3 className="project-title">PennTix</h3>
//             <p className="sans">Ticket resale platform for Penn students</p>
//           </Project>
//         </CenterContainer>
//       </Card>
//       <Spacer height="30px" />
//       <Card>
//       <AboutImage src={olympic}/>
//         <Spacer height="20px" />
//         <CenterContainer>
//           <HeadingNumber textColor="#F6F6F6">02</HeadingNumber>
//           <HeaderText textColor="#F6F6F6" >
//             <h2 className="col2">About</h2>
//             <h2>me</h2>
//           </HeaderText>
//         </CenterContainer>
//         <Spacer height="30px" />
//         <p>filler</p>
//       </Card>
//       <Card>

//       </Card>

//     </Content>
//   )
// }


const App = () => {

  return (
    <Content>
      <Sun src={sun} alt="sun" onMouseOver={() => console.log('sun!')} />
      <Card>
        <InitialsContainer>
          <Initials src={initials} alt="initials" />
        </InitialsContainer>
        <Spacer height="20px" />
        <HeroText />
        <Spacer height="20px" />
        <p className="sans">Studying business</p>
        <p className="sans">at Penn/Wharton</p>
        <Spacer height="30px" />
        <StyledButton onClick={() => document.querySelector('#portfolio').scrollIntoView()}>
          <p className="sans">SEE PORTFOLIO</p>
        </StyledButton>
      </Card>
      <Spacer height="5px" />
      <Spacer height="var(--around-cards)" id="portfolio" />
      <Card>
        <p>01</p>
        <ProjectsHeader />
        <Spacer height="calc(15px + 1vw)" />
        <Projects />
      </Card>
    </Content>

  )
}

export default App