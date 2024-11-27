import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.div`
  margin-bottom: 16px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 8px;
`;

export const ProductPrice = styled.span`
  color: #0070f3;
  font-weight: bold;
`;