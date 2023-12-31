import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from "./ProductCard";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProductsList = () => {
  return (
        <Container>
          {popularProducts.map((item) => (
              <ProductCard item={item} key={item.id} />
          ))}
        </Container>
  );
};

export default ProductsList;