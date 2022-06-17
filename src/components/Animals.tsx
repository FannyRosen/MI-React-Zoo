import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Images } from "../StyledComponenets/Images";
import {
  AnimalWrapper,
  ImgWrapper,
  StyledWrapper,
  TextWrapper,
} from "../StyledComponenets/Wrappers";
import { IAnimal } from "./models/IAnimal";
import onErrorImg from "../assets/onErrorImg.jpg";
import { Header } from "../StyledComponenets/Header";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  function getData() {
    let stringFromLs = localStorage.getItem("animals");

    if (stringFromLs) {
      let parsedValue = JSON.parse(stringFromLs);
      setAnimals(parsedValue);
    } else {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals(response.data);
          localStorage.setItem("animals", JSON.stringify(response.data));
        });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = onErrorImg;
  };

  return (
    <>
      <Header>Fanny's Zoo</Header>
      <StyledWrapper>
        {animals.map((animal) => (
          <AnimalWrapper key={animal.id}>
            <TextWrapper>
              <Link to={"/animal/" + animal.id}>
                <h4>{animal.name}</h4>
              </Link>
              <p>{animal.shortDescription}</p>
            </TextWrapper>
            <ImgWrapper>
              <Images
                onError={imageOnErrorHandler}
                src={animal.imageUrl}
                alt="Poster"
              />
            </ImgWrapper>
          </AnimalWrapper>
        ))}
      </StyledWrapper>
    </>
  );
};
