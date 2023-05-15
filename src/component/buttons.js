import React from "react";
import BaseApp from "../baseApp";

export default function Buttons(){
    return(
            <BaseApp>
            <div className="container buttonsContent">
                <h1 className="text-start">Buttons</h1>
                <div className="row justify-content-evenly">
                    <div className="col-6 flex-column">
                    <div className="">
                        <div className="card text-start">
                            <h5 class="card-header">Circle Buttons</h5>
                            <div className="card-body">
                                <p className="card-text">Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
                                <p>.btn-circle</p>
                                <div className="mb-4">
                                <a href="#" className="btn bg-danger btn-icon  me-2">&#xF344;</a>
                                <a href="#" className="btn bg-success btn-icon me-2">✔</a>
                                <a href="#" className="btn bg-warning btn-icon me-2">🗓</a>
                                </div>
                                <p>.btn-circle .btn-sm</p>
                                <div className="mb-4">
                                <a href="#" className="btn bg-danger btn-icon btn-sm me-2">❌</a>
                                <a href="#" className="btn bg-success btn-icon btn-sm me-2">✔</a>
                                <a href="#" className="btn bg-warning btn-icon btn-sm me-2">🗓</a>
                                </div>
                                <p style={{color:"red"}}>.btn-circle .btn-lg</p>
                                <div className="mb-4">
                                <a href="#" className="btn bg-danger btn-icon btn-lg me-2">❌</a>
                                <a href="#" className="btn bg-success btn-icon btn-lg me-2">✔</a>
                                <a href="#" className="btn bg-warning btn-icon btn-lg me-2">🗓</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div class="card text-start">
                            <h5 class="card-header">Brand Buttons</h5>
                            <div class="card-body">
                                <p class="card-text">Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
                                <p>You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
                                <a href="#" class="btn btn-google w-100 mb-3 btn-icon-split" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                    </svg>  .btn-google
                                </a>
                                <a href="#" class="btn btn-facebook bg-primary w-100">.btn-facebook</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 text-start">
                        <div class="card">
                          <h5 class="card-header">Split Buttons with Icon</h5>
                          <div class="card-body">
                            <p class="card-text">Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.</p>

                            <a href="#" class="btn btn-primary btn-icon-split">

                                Go somewhere
                            </a>
                            <div>
                            <a href="#" class="btn btn-primary btn-icon-split">
                              <span  class="icon text-white-50">
                                <i class="fas fa-flag"></i>
                              </span>
                              <span class="text">  Split Button Primary</span>
                            </a>
                            </div>
                            <div>
                            <a href="#" class="btn btn-primary btn-icon-split">
                              <span  class="icon text-white-50">
                              <i class="fa-solid fa-check"></i>
                              </span>
                              <span class="text">  Split Button Primary</span>
                            </a>
                            </div>
                            
                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            </BaseApp>
    )
}