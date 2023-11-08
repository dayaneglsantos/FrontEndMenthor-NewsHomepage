import styled from "styled-components";

export const Container = styled.div`
  width: 1024px;
  max-width: 80%;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
