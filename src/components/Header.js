import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg  header">
      <div class="container">
        <h6 class="navbar-brand" >
          MEAL PLANET MANAGEMENT
        </h6>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <h1 class="nav-link" >
                Home
              </h1>
            </li>
            <li class="nav-item">
              <h1 class="nav-link" >
                About
              </h1>
            </li>
            <li class="nav-item">
              <h1 class="nav-link" >
                Services
              </h1>
            </li>
            <li class="nav-item">
              <h1 class="nav-link">
                Contact
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
