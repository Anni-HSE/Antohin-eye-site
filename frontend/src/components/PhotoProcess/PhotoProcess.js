import StepProcess from "./StepProcess";
import "./PhotoProcess.css";

const PhotoProcess = () => {
  const steps = [
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
    <div className="photo_process__container" id="photoprocess">
      <h1>Процесс фотографирования радужек</h1>
      <div className="photo_process__list">
        {steps.map((step) => (
          <StepProcess
            key={step.id}
            img={step.img}
            name={step.name}
            desc={step.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoProcess;
