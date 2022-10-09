import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
   
      <nav className="navbar navbar-expand-lg fixed-top " style={{backgroundColor:"rgb(100% 100% 100%)", color:"black"}}>
        <div className=" mx-auto fontCSS" style={{ fontSize: "1.36rem" , fontWeight:"bold"}}>
        {/* <Link className="navbar-brand" to="/" style={{textAlign:"center"}}>Navbar</Link> */}
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                {" "}
                <Link className="nav-link " aria-current="page" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link " aria-current="page" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link " aria-current="page" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link " aria-current="page" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link " aria-current="page" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
