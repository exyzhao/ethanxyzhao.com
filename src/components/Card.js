import styled from "styled-components"

const Card = styled.div`
  position: relative;
  padding: calc(40px + 2vw) var(--within-cards);
  width: calc(100% - 2 * var(--within-cards));
  border-radius: var(--border-radius);
  background-color: var(--white);

  z-index: 1;
`

export default Card