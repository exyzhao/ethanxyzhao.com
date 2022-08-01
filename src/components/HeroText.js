import styled from "styled-components"

const HeroTextContainer = styled.div`
  z-index: 999;

  @media only screen and (max-width: 479px) {
    .col2 {
      margin-left: 15vw;
    }

    .col3 {
      margin-left: 0;
    }

    .col4 {
      margin-right: 20vw;
      text-align: right;
    }

    .col5 {
      margin-right: 15vw;
      text-align: right;
    }

    .col6 {
      margin-right: 0;
      text-align: right;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 639px) {
    .col2 {
      margin-left: 20vw;
    }

    .col3 {
      margin-left: 10vw;
    }

    .col4 {
      margin-right: 15vw;
      text-align: right;
    }

    .col5 {
      margin-right: 15vw;
      text-align: right;
    }

    .col6 {
      margin-right: 0;
      text-align: right;
    }
  }

  @media only screen and (min-width: 640px) and (max-width: 909px) {
    .col1 {
      margin-left: 5vw;
    }

    .col2 {
      margin-left: 15vw;
    }

    .col3 {
      margin-right: 15vw;
      text-align: right;
    }

    .col4 {
      margin-right: 25vw;
      text-align: right;
    }

    .col5 {
      margin-right: 17vw;
      text-align: right;
    }

    .col6 {
      margin-right: 5vw;
      text-align: right;
    }
  }

  @media only screen and (min-width: 910px) {
    .col1 {
      margin-left: 0;
    }

    .col3 {
      margin-left: 18vw;
    }

    .col5 {
      margin-right: 0;
      text-align: right;
    }
  }
`

const HeroText = () => {
  const mediaQuery = window.matchMedia('(min-width: 910px)')
  if (mediaQuery.matches) {
    return (
      <HeroTextContainer>
        <p className="header col1">Howdy! I'm Ethan.</p>
        <p className="header col3">And I love <em>designing</em></p>
        <p className="header col5">and <em>building.</em></p>
      </HeroTextContainer>
    )
  } else {
    return (
      <HeroTextContainer>
        <p className="header col1">Howdy!</p>
        <p className="header col2">I'm Ethan.</p>
        <p className="header col3">And I love</p>
        <p className="header col4"><em>designing</em></p>
        <p className="header col5">and</p>
        <p className="header col6"><em>building.</em></p>
      </HeroTextContainer>
    )
  }
}

export default HeroText