import css from "./Output.module.css";
import { FaDeleteLeft } from "react-icons/fa6";

function Output({ name, date, onDeleteClick }) {
  return (
    <center>
      <div className={`container ${css["container-input"]}`}>
        <div className={`row ${css["row-center"]}`}>
          <div className="col-6">{name}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button
              type="button"
              className={`btn btn-danger ${css["btn-akshat"]}`}
              onClick={() => onDeleteClick(name)}
            >
              <FaDeleteLeft />
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Output;
