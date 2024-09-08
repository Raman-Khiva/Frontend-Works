// import { MdOutlineMessage } from "react-icons/md";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.formBody}>
      <div className={styles.formUpper}>
        <div className={styles.buttons}>
          <button>
            <img
              width="24"
              src="https://img.icons8.com/material-rounded/48/ffffff/comments--v1.png"
              alt="comments--v1"
            />
            MESSAGE
          </button>
          <button>
            <img
              width="24"
              src="https://img.icons8.com/forma-thin-filled/48/ffffff/ringer-volume.png"
              alt="ringer-volume"
            />
            CALL
          </button>
        </div>
        <button className={styles.email}>
          <img
            width="24"
            src="https://img.icons8.com/ios-filled/50/apple-mail.png"
            alt="apple-mail"
          />
          EMAIL
        </button>
      </div>
      <div className={styles.formLower}>
        <input type="number" />
        <input type="text" />
        <input className={styles.text} type="text" />
        <button className={styles.submit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Form;
