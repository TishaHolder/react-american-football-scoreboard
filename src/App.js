//TODO: STEP 1 - Import the useState hook.
import {useState} from "react";
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //home/lions score hook
  let [homeLionsScore, increaseHomeLionsScore] = useState(0);

  //away/tigers score hook
  let [awayTigersScore, increaseAwayTigersScore] = useState(0);

  /****************STRETCH TASK ***********************/
  const clickHandler = ((team, score)  => {
    if(team === "Lions") {
      increaseHomeLionsScore(homeLionsScore += score);
    }
    if(team === "Tigers") {
      increaseAwayTigersScore(awayTigersScore += score);
    }
  });

  return (

    <div className="container">
      <section className="scoreboard">
        <div className="topRow">

          {/* LIONS SCORE BOARD */}
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            {/*<div className="home__score">32</div>*/}
            <div className = "home__score">{homeLionsScore}</div>
          </div>

          {/* TIMER DIV */}
          <div className="timer">00:03</div>

          {/* TTGERS SCORE BOARD */}
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTigersScore}</div>
          </div>
        </div>

        <BottomRow />
      </section>
      <section className="buttons">

        {/* HOME BUTTONS */}
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. 
          <button onClick = {() => increaseHomeLionsScore(homeLionsScore += 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => increaseHomeLionsScore(homeLionsScore += 3)} className="homeButtons__fieldGoal">Home Field Goal</button>*/}

          {/****************STRETCH TASK ***********************/}
          <button onClick = {()=> clickHandler("Lions", 7)} className="homeButtons__touchdown">Home Touchdown</button>         
          <button onClick = {()=> clickHandler("Lions", 3)} className="homeButtons__fieldGoal">Home Field Goal</button>

        </div>

        {/* AWAY BUTTONS */}
        <div className="awayButtons">
          {/*<button onClick = {() => increaseAwayTigersScore(awayTigersScore += 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => increaseAwayTigersScore(awayTigersScore += 3)} className="awayButtons__fieldGoal">Away Field Goal</button>*/}

          {/****************STRETCH TASK ***********************/}
          <button onClick = {()=> clickHandler("Tigers", 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {()=> clickHandler("Tigers", 3)} className="awayButtons__fieldGoal">Away Field Goal</button> 

         

        </div>
      </section>
    </div>

    
  );
}

export default App;
