import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

  return (
    <div class="row">
    <div class="col border-bottom mr-2 text-center" ><div class="header btn selected">Projects</div></div>
    <div class="col border-bottom mr-2 text-center"><div class="header btn">Resume</div></div>
    <div class="col border-bottom mr-2 text-center"><div class="header btn">LinkedIn</div></div>
    <div class="col border-bottom mr-2 text-center"><div class="header btn">GitHub</div></div>
</div>
  );
}

export default NavBar;
