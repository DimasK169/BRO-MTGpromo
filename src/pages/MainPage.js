import React from "react";
import download from "../assets/bro-logo.png";

export default function MainPage() {
  return (
    <div className="Main">
      <div className="my-5 container text-center">
        <div className="row">
          <div className="col">
            <div class="card">
              <img src={download} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">NEW EXPANSION HAS ARRIVED</h5>
                <p class="card-text">
                  Leap back in time for a war of epic proportion.
                </p>
              </div>
            </div>
          </div>
          <div className="col decs mb-5 mx-3 ">
            <h1>RETAKE THE FUTURE</h1>
            <p>
              Journey back and save Dominaria. A brutal clash of mechanical
              armies from Magic’s storied past, The Brothers' War will take you
              through a battle of titanic proportions. Innovation. Adaptation.
              Survival. Let's retake the future.
            </p>
            <p>
              This set is…More Than Meets the Eye! Find your favorite Autobots
              and Decepticons in The Brothers’ War Set boosters, Collector
              boosters, and Bundle products. Shattered Glass treatments
              available only in Collector boosters.
            </p>
            <p>
              Each pack contains a piece of Magic’s history: a Retro or
              Schematic artifact. Wield these artifacts alongside colossal war
              machines and forge your own future!
            </p>
            <h2>DECLARE YOUR ALLIAGEANCE</h2>
            <a class="btn btn-danger mt-2 mb-3" href="/cards" role="button">
              EXPLORE DOMINARIA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
