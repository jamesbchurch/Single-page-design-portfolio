import styled from "styled-components";

//#eb7565
export default function Button({ text, colour }) {
  const ButtonStyle = styled.button`
    color: white;
    background-color: ${colour};
    border-radius: 50px;
    width: 200px;
    height: 46px;
    border: none;
    font-weight: bold;
    margin-top: 1rem;
    margin: auto;
  `;

  return <ButtonStyle>{text}</ButtonStyle>;
}
