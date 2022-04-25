import styled from 'styled-components'

const PageContent = styled.div`
  width: calc(100% - 3rem);
  padding: 1.5rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;

  p {
    line-height: 1.5em;
  }

  Nametag {
    display: none;
  }
`

export default PageContent