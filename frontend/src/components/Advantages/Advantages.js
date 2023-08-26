import Advantage from "./Advantage";
import "./Advantages.css";

const Advantages = () => {
  const advantages = [
    {
      id: "1",
      img: "t",
      name: "Макро-кадр",
      desc: "Технология макро-съемки покажет вашу радужку в детальном масштабе. Оригинальность, созданную природой",
    },
    {
      id: "2",
      img: "a",
      name: "Дополнение к интерьеру",
      desc: "Фото радужки в матовой деревянной раме со стеклом создаст эстетику в интерьере вашего дома",
    },
    {
      id: "3",
      img: "c",
      name: "Модный аксессуар",
      desc: "Браслет с вашей радужкой глаза на запястье или кулон с радужкой глаза близкого? Оригинальный стильный аксессуар для себя или второй половинки",
    },
  ];

  return (
    <div className="advantage__container" id="advantages">
      <h1>Фото радужки глаза в Москве и Спб</h1>
      <div className="advantage__list">
        {advantages.map((adv) => (
          <Advantage
            key={adv.id}
            img={adv.img}
            name={adv.name}
            desc={adv.desc}
          />
        ))}
      </div>

      <button className="advantage__btn">Click me</button>
    </div>
  );
};

export default Advantages;
