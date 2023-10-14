import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./SingleProduct";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
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
    width: 135px;
    height: 22px;
    background-color: #f5fa;
    z-index: -1;
`;

const Products = () => {
  return (
    <>
        <TitleContainer>
            <Title>Trending</Title>
            <TitleUnderline />
        </TitleContainer>
        <Container>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
        </Container>
    </>
  );
};

export default Products;