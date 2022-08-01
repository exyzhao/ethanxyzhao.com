import styled from "styled-components"

import Spacer from "./Spacer"
import playbook from "../img/playbook-mockups.png"
import cohort from "../img/cohort-mockups-nologo.png"
import penntix from "../img/penntix-mockups.png"

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${'' /* column-gap: 5vw; */}
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: var(--within-cards) calc(0.7 * var(--within-cards));
  width: calc(200px + 12vw);

  background-color: var(--white);
  border: 1px solid var(--blue);
  border-radius: var(--border-radius);
  box-shadow: -4px 4px var(--blue);

  h1, h2, h3, h4, h5, h6, p {
    color: black;
  }

  .project-title {
    font-weight: normal;
    margin: calc(0.8 * var(--within-cards)) 0px calc(0.5 * var(--within-cards)); ${'' /* top sides bot */}
  }
`

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
`

const Projects = () => {
  return (
    <ProjectContainer>
      <Project>
        <ProjectImage src={playbook} />
        <h3 className="project-title">Penn Playbook</h3>
        <p className="sans">Design and data driven web</p>
        <p className="sans">exhibition of life at Penn</p>
      </Project>
      <Spacer height="30px" />
      <Project>
        <ProjectImage src={cohort} />
        <h3 className="project-title">Cohort</h3>
        <p className="sans">Group travel planning and</p>
        <p className="sans">itinerary generation app</p>
      </Project>
      <Spacer height="30px" />
      <Project>
        <ProjectImage src={penntix} />
        <h3 className="project-title">PennTix</h3>
        <p className="sans">Ticket resale platform</p>
        <p className="sans">for Penn students</p>
      </Project>
    </ProjectContainer>
  )
}

export default Projects