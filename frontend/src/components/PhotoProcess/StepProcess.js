const StepProcess = ({ img, name, desc }) => {
  return (
    <div className="step_precess__item">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <div>{desc}</div>
    </div>
  );
};

export default StepProcess;
