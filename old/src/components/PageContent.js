import styled from 'styled-components'

const PageContent = styled.div`
  padding: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 15%;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  p {
    line-height: 1.5em;
  }

  Nametag {
    display: none;
  }
`

export default PageContent