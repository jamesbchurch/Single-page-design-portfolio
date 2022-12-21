import styled from "styled-components";

//#eb7565
export default function Button({ text, colour, hoverColour }) {
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
    &:hover {
      cursor: pointer;
      background-color: ${hoverColour};
      transition: 0.3s;
    }
  `;

  return <ButtonStyle>{text}</ButtonStyle>;
}
