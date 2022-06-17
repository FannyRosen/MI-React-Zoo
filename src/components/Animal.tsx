import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../StyledComponenets/Button";
import { Images } from "../StyledComponenets/Images";
import {
  AnimalWrapper,
  ImgWrapper,
  SingleAnimalWrapper,
} from "../StyledComponenets/Wrappers";
import { IAnimal } from "./models/IAnimal";
import onErrorImg from "../assets/onErrorImg.jpg";

interface IParams {
  id: string;
}

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    name: "",
    latinName: "",
    yearOfBirth: 0,
    shortDescription: "",
    longDescription: "",
    imageUrl: "",
    medicine: "",
    isFed: false,
    lastFed: "",
  });

  const params = useParams<Partial<IParams>>();

  useEffect(() => {
    let stringFromLs = localStorage.getItem("animals");
    console.log(stringFromLs);

    if (!stringFromLs) return;

    let animals = JSON.parse(stringFromLs) as IAnimal[];

    let id = 0;
    if (params && params.id) {
      id = parseInt(params.id);
    }
    console.log(animals.length);

    for (let i = 0; i < animals.length; i++) {
      if (animals[i].id === id) {
        setAnimal(animals[i]);
      }
    }
  }, []);

  const handleClick = () => {
    let updatedAnimal = {
      ...animal,
      isFed: true,
      lastFed: new Date().toString(),
    };
    setAnimal(updatedAnimal);

    let stringFromLs = localStorage.getItem("animals");

    if (!stringFromLs) return;

    let animals = JSON.parse(stringFromLs) as IAnimal[];

    let id = 0;
    if (params && params.id) {
      id = parseInt(params.id);
    }

    for (let i = 0; i < animals.length; i++) {
      if (animals[i].id === id) {
        animals[i] = updatedAnimal;
      }
    }
    localStorage.setItem("animals", JSON.stringify(animals));
  };

  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = onErrorImg;
  };

  return (
    <>
      <SingleAnimalWrapper>
        <AnimalWrapper key={animal.id}>
          <h4>{animal.name}</h4>
          <em>({animal.latinName})</em>
          <p>{animal.shortDescription}</p>
          <p>{animal.longDescription}</p>
          <p>Född: {animal.yearOfBirth}</p>
          <p>Mediciner: {animal.medicine}</p>
          <ImgWrapper>
            <Images
              onError={imageOnErrorHandler}
              src={animal.imageUrl}
              alt={animal.name}
            />
          </ImgWrapper>
          {animal.isFed ? (
            <Button background="#575e57" color="white">
              Redan matat
            </Button>
          ) : (
            <Button onClick={handleClick}>Mata djuret</Button>
          )}
          <p>Fick senast mat: {new Date(animal.lastFed).toLocaleString()}</p>
          <Link to={"/"}>Tillbaka till startsidan</Link>
        </AnimalWrapper>
      </SingleAnimalWrapper>
    </>
  );
};
