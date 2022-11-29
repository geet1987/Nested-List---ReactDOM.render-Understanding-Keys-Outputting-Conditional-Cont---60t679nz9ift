import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  let toggleSelectedState = (index) => {
    setSelectedCity(null);
    if (index == selectedState) {
      setSelectedState(null);
      return;
    }
    setSelectedState(index);
  };

  let toggleSelectedCity = (e, cityIndex) => {
    e.stopPropagation();
    if (cityIndex == selectedCity) {
      setSelectedCity(null);
      return;
    }
    setSelectedCity(cityIndex);
  };
  return (
    <div id="main">
      <ul>
        {states.map((state, index) => {
          return (
            <li
              id={"state" + (index + 1)}
              key={index}
              onClick={() => toggleSelectedState(index)}
            >
              {state.name}
              {selectedState == index && (
                <ul>
                  {states[index]["cities"].map((city, cityIndex) => {
                    return (
                      <li
                        id={"city" + (cityIndex + 1)}
                        key={cityIndex}
                        onClick={(e) => toggleSelectedCity(e, cityIndex)}
                      >
                        {city.name}
                        {selectedCity == cityIndex && (
                          <ul>
                            {states[index]["cities"][cityIndex]["towns"].map(
                              (town, townIndex) => {
                                return (
                                  <li
                                    key={townIndex}
                                    id={"town" + (townIndex + 1)}
                                  >
                                    {town.name}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
