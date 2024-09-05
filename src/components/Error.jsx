import css from "./Error.module.css";

function Error() {
  return (
    <>
      <h2 className={css.error}>Congrats !</h2>
      <h2 className={css.error}>You have completed all your task</h2>
    </>
  );
}

export default Error;
