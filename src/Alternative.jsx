import React from "react";
import { useState } from "react";
import people from "./data";
import {
  FaQuoteRight,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  const prevPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const randomPeople = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3 className="author">{name}</h3>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button onClick={randomPeople} className="btn">
          suprise me
        </button>
      </article>
    </main>
  );
};

export default App;
