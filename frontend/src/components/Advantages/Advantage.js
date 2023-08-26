const Advantage = ({ img, name, desc }) => {
  return (
    <div className="advantage__item">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <div>{desc}</div>
    </div>
  );
};

export default Advantage;
