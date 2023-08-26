import React from "react";
import CardItem from "./CardItem";

const Catalog = () => {
  const items = [
    {
      id: "1",
      img: "1",
      alt: "1",
      name: "Фото формата 30 на 30 см",
      params: [
        "Ваши радужки в квадрате 30 на 30",
        "Матовая бумага высокого качества",
        "Одна - две радужки на фото",
        "Эстетичный формат в ваш интерьер",
      ],
      price: 1990,
    },
    {
      id: "2",
      img: "2",
      alt: "2",
      name: "Фото формата 20 на 20 см",
      params: [
        "Ваши радужки в квадрате 30 на 30",
        "Матовая бумага высокого качества",
      ],
      price: 1990,
    },
    {
      id: "3",
      img: "2",
      alt: "2",
      name: "Фото формата 10 на 10 см",
      params: ["Ваши радужки в квадрате 30 на 30"],
      price: 1990,
    },
  ];

  return (
    <div id="catalog">
      <h1>ВЫБЕРИТЕ ФОРМАТ С РАДУЖКОЙ</h1>
      {/* TODO: сделать сдесь фильтр*/}

      <div className="catalog">
        {items.map((item) => (
          <CardItem
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            params={item.params}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
