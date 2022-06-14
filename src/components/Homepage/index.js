import React from "react";

function Homepage(){
    return (
        <div className="container p-3 my-3 bg-primary text-white">
    <h1>Welcome to the Users Account</h1>
    <p>This app will let you explore and have a chance to expand your connections.</p>
    <nav className="navbar navbar-expand-sm bg-light">
    <div class="d-inline-flex p-3 bg-secondary text-white">
  <div class="p-2 bg-info">Flex item 1</div>
  <div class="p-2 bg-warning">Flex item 2</div>
  <div class="p-2 bg-primary">Flex item 3</div>
</div>
</nav>
</div>
    )
}
export default Homepage;
