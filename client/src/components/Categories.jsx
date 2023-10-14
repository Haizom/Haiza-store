import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

// const Title = styled.h1`
//   margin-top: 50px;
//   margin-bottom: 0px;
//   text-align: center;
// `;

const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 0;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Underline = styled.div`
    content: "";
    position: absolute;
    bottom: -180px;
    left: 50%;
    transform: translateX(-50%);
    width: 165px;
    height: 22px;
    background-color: #f5fafd;
    z-index: 0;
`;

const Categories = () => {
  return (
    <>
        <Title>Categories</Title>
        <Underline />
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    </>
  );
};

export default Categories;