import styled from "styled-components";

// Stylizowany kontener dla ciała aplikacji
export const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
// Stylizowany formularz uwierzytelniania
export const StyledAuthBody = styled.form`
  align-items: center;
  margin-top: 5rem;
  border-radius: 8%;
  padding: 1rem;
  display: flex;
  width: 20rem;
  height: 20rem;
  gap: 2rem;
  flex-direction: column;
  background-color: #9aa88e;
  justify-content: space-between;
  -webkit-box-shadow: 8px 8px 0px -3px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 0px -3px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 0px -3px rgba(66, 68, 90, 1);
`

  

export const StyledH1 = styled.h1`
color: #e6dad1;
  font-size: 3rem;
  user-select: none;
`;

export const Fields = styled.div`
display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  width: 100%;
`

export const StyledInput = styled.input`
background-color: aliceblue;
border: 1px solid transparent;
border-radius: 0.2rem;
color: black;
height: 2rem;
font-size: 100%;
&:focus {
    outline: none;
  }
`

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1rem;
  width: 100%;
  font-weight: 500; 
  color: #fff;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #c79470;
  }

`;