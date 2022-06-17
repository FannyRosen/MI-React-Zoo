import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const AnimalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 480px) {
    max-width: 400px;
  }
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 20px;
`;

export const TextWrapper = styled.div`
  height: 150px;
  text-align: center;
`;

export const SingleAnimalWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
`;
