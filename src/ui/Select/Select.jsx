import scss from "./Select.module.scss";
const Select = ({ firstText, lastText, toggle, setToggle }) => {
  return (
    <div className={scss.select}>
      <button
        className={toggle ? scss.btn : ""}
        onClick={() => setToggle(true)}
      >
        {firstText}
      </button>
      <button
        className={toggle ? "" : scss.btn}
        onClick={() => setToggle(false)}
      >
        {lastText}
      </button>
    </div>
  );
};

export default Select;
