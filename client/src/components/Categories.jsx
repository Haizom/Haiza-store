import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

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
    width: 160px;
    height: 22px;
    background-color: #fbf;
    z-index: -1;
`;

const Categories = () => {
  return (
    <>
        <TitleContainer>
            <Title>Categories</Title>
            <TitleUnderline />
        </TitleContainer>
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    </>
  );
};

export default Categories;