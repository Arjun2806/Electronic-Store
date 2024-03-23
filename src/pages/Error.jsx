import styled from "styled-components"
import { Button } from "../styles/Button"
import { NavLink } from "react-router-dom"

const Error = () => {
  return (
   <Wrapper>
  <div className="container">
        <div>
          <img src="../images/error.jpg" alt="" />
          <NavLink to="/">
            <Button>HOME</Button>
          </NavLink>
        </div>
      </div>
   </Wrapper>
  )
}

const Wrapper = styled.section`
.container {
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 9rem 0;
  text-align: center;
  
  img{
    max-width: 40rem;
    max-height: 100%;
  }
}
`;

export default Error