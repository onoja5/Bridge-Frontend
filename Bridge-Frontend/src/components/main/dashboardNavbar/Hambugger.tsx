const Hambugger = ({
  action,
  toggle,
}: {
  toggle: boolean;
  action: () => void;
}) => {
  return (
    <div onClick={action} className={toggle ? "open" : "ham"} id="navbar">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hambugger;
