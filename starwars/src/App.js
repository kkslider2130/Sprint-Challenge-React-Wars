import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Cards";
import SearchBar from "./components/SearchBar";
import PostWrapper, { Title } from "./components/styledComponents/MainStlyed";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);
  const [searchName, setSearchName] = useState();
  const [searchArray, setSearchArray] = useState([]);
  useEffect(() => {
    setSearchArray(
      people.filter(a =>
        a.name.toUpperCase().includes(searchName.toUpperCase())
      )
    );
    console.log(searchArray);
  }, [searchName]);

  const handleChange = event => {
    console.log(event.target.value);
    setSearchName(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://akabab.github.io/starwars-api/api/all.json")
      .then(res => setPeople(res.data));
  });

  return (
    <>
      <div className="title-con">
        <Title>React Wars</Title>
        <SearchBar function={handleChange} />
      </div>
      <PostWrapper>
        {searchArray.length === 0
          ? people.map(a => (
              <Card
                id
                key={a.id}
                name={a.name}
                homeworld={a.homeworld}
                species={a.species}
                image={a.image}
              />
            ))
          : searchArray.map(a => (
              <Card
                id
                key={a.id}
                name={a.name}
                homeworld={a.homeworld}
                species={a.species}
                image={a.image}
              />
            ))}
      </PostWrapper>
    </>
  );
};

export default App;
