import React from "react";
import BaseApp from "../baseApp";

export default function Card(){
    return (
      <BaseApp>
        <div>
          <div>
            <h1>Cards</h1>
          </div>
          <div className="card-component-container">
            <div className="card-container">
              <div class="card">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div class="card">
                <div class="card-header">Quote</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                    <footer class="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div class="card text-center">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
                <div class="card-footer text-body-secondary">2 days ago</div>
              </div>
            </div>
            <div className="card-container">
              <div class="card w-75 mb-3">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseApp>
    );
}