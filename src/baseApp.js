import React from "react";
import { useHistory } from "react-router-dom";


export default function BaseApp(props){
    const history = useHistory()
    return(
        <div className="layout">
            <div className="sideBar container">
                <div className="m-3 row">
                    <div className="col">
                        <h4>SD ADMIN</h4>
                        <hr></hr>
                        <p onClick={()=>history.push("/")} className="pointer">DashBoard</p>
                        <hr></hr>
                        <div className="flex-start sideBar-btn">
                        <h6>Interface</h6>
                        <div class="dropdown drop-down">
                            <button class="btn btn-secondary dropdown-toggle drop-down-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Components
                            </button>
                            <ul class="dropdown-menu">
                            <li><h6 class="dropdown-header">Custom Components</h6></li>
                            <li><a class="dropdown-item pointer" onClick={()=>history.push("/button")}>Buttons</a></li>
                            <li><a class="dropdown-item pointer" onClick={()=>history.push("/card")}>Cards</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="flex-start sideBar-btn">
                        
                        <div class="dropdown drop-down">
                            <button class="btn btn-secondary dropdown-toggle drop-down-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Utilite
                            </button>
                            <ul class="dropdown-menu">
                            <li><h6 class="dropdown-header">Custom Utilite</h6></li>
                            <li><a class="dropdown-item pointer" onClick={()=>history.push("/border")}>Borders</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="contentArea">
                <div className="header container-fluid">
                <div className="row justify-content-between">
                    <div className="col-4 m-3">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            <span class="input-group-text" id="basic-addon2">&#128269;</span>
                        </div>
                    </div>
                    <div className="col-4 m-3">
                    <span class="dropdown">
                        <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        &#128276;
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </span>
                    <span class="dropdown message">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        &#128231;
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </span>
                    <span class="btn-group dropstart profile-drop">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Jayasuriya 
                        </button><i className='bx bx-user-circle bx-lg'></i>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </span>
                    </div>
                </div>
                </div>
                <div className="content">
                    {props.children}
                </div>
                <div className="footer">
                    <p className="mt-3">Copyright © Your Website {new Date().getFullYear()}</p>
                </div>
                
            </div>
        </div>
    )
} 