import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div>
            <img src="logo.png" alt="logo" />
        </div>
        <ul className="list">
            <li className="list-itmes">Home</li>
            <li className="list-itmes">Contact</li>
            <li className="list-itmes">About</li>
            <li className="list-itmes">Help</li>
        </ul>
    </nav>
  )
}

export default Navigation;
