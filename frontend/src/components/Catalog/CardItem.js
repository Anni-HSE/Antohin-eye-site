import "./CardItem.css";

const CardItem = ({ img, name, price, params }) => {
  const listParams = params.map((param) => <li key={param}>{param}</li>);

  return (
    <div className="card">
      <img src={img} alt={name} />

      <h3 className="name">{name}</h3>

      <p className="price">{price} руб.</p>

      <ul>{listParams}</ul>

      <div className="card__buttons">
        <button>Кнопка 1</button>
        <button>Кнопка 2</button>
      </div>
    </div>
  );
};

export default CardItem;
