import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;
