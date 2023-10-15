import styled from "styled-components";


export default function SectionTitle({title, color ='#f5fa', underlineWidth }) {
    const TitleContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 0;
  text-align: center;
  position: relative;
`;
const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 0;
  text-align: center;
  z-index: 2;
`;

const TitleUnderline = styled.div`
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: ${underlineWidth};
    height: 22px;
    background-color: ${color};
    z-index: -1;
`;

  return (
        <TitleContainer>
            <Title>{title}</Title>
            <TitleUnderline />
        </TitleContainer>
  )
}
