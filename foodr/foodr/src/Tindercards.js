import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Tindercards.css";
import axios from './axios';

function Tindercards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/foodr/cards');
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, person) => {
    console.log("removing: " + person.name);
    //setLastDirection(direction);
    // useEffect(() => {
    //   async function sendData() {
    //     axios.post('foodr/swiperight', person);
    //   }
    //   sendData();
    // }, []);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  }

  return (
    <div className="tindercards">
      <div className="tindercard_container">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person)} onCardLeftScreen={() => outOfFrame(person.name)}>
            <div style={{ backgroundImage: "url(" + person.url + ")" }} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )

}

export default Tindercards;
