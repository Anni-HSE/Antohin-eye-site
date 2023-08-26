import React from "react";
import "./DesignSolutions.css"; // Подключаем файл со стилями

const Solution = ({ img, name, desc, cost }) => {
  return (
    <div className="solution-container">
      <div className="image-pagination">
        {/* TODO: пагинация картинок */}
        <img src={img} alt={name} />
        {/* Здесь может быть ваш пагинатор */}
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>Стоимость: + {cost} руб к формату</p>
        <button>Click me</button>
      </div>
    </div>
  );
};

export default Solution;
