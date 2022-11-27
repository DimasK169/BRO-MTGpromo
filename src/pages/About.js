import React, { useEffect, useState } from "react";

export default function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: 40, color: "white" }}>
        ABOUT
      </h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1 style={{ textAlign: "center", color: "white" }}>Tools</h1>
            <div class="card text-center w-75">
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  Scryfall
                </h5>
                <p class="card-text text-center">
                  MTG API which powered this App
                </p>
                <a href="https://scryfall.com/docs/api" class="btn btn-primary">
                  Checkout Scryfall
                </a>
              </div>
            </div>
            <div className="card text-center w-75">
              <div className="card-body">
                <h5 className="card-title text-center">Bootstrap</h5>
                <p className="card-text">
                  Without Bootstrap this app will not able to be deployed in
                  time
                </p>
                <a href="https://getbootstrap.com/" className="btn btn-primary">
                  Checkout Bootstrap
                </a>
              </div>
            </div>
          </div>
          <div className="col aboutleft text-left mt-5">
            <p>
              This app is made for Mobile Device Programming study at Computer
              Engineering at Diponegoro University
            </p>
            <p> Hope you're find it helpful and infomative</p>
            <p> Thanks </p>
            <p style={{ textAlign: "right" }}> Sincerely,</p>
            <p style={{ textAlign: "right" }}> Dimas Kenang Surya Ardani</p>
          </div>
        </div>
      </div>
    </div>
  );
}
