import styled from "styled-components"

const ProjectsHeaderContainer = styled.div`
  z-index: 999;

  @media only screen and (max-width: 479px) {
    .col1 {
      margin-left: 5vw;
    }

    .col2 {
      margin-right: 5vw;
      text-align: right;
    }
  }

  @media only screen and (min-width: 480px) {
    .col1 {
      margin: auto;
      text-align: center;
    }
  }
`

const ProjectsHeader = () => {
  const mediaQuery = window.matchMedia('(min-width: 480px)')
  if (mediaQuery.matches) {
    return (
      <ProjectsHeaderContainer>
        <h2 className="header col1">My project portfolio</h2>
      </ProjectsHeaderContainer>
    )
  } else {
    return (
      <ProjectsHeaderContainer>
        <h2 className="header col1">My project</h2>
        <h2 className="header col2">portfolio</h2>
      </ProjectsHeaderContainer>
    )
  }
}

export default ProjectsHeader