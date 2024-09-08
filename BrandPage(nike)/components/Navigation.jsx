const Navigation = () =>{
    return(
        <nav>
        <div className="logo">
          <img src="nike-logo.png" alt="logo" />
        </div>
        <ul className="list">
          <li href='#'  className="listItems">Menu</li>
          <li href="#"  className="listItems">Location</li>
          <li href="#"  className="listItems">About</li>
          <li href="#"  className="listItems">Contact</li>
        </ul>
        <button className="login-button">login</button>
      </nav>

    )
}

export default Navigation;