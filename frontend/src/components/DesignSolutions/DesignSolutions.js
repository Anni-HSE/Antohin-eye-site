import React from "react";
import Solution from "./Solution";

const DesignSolutions = () => {
  const solutions = [
    {
      id: "1",
      img: ["img", "img2"],
      name: "Design",
      desc: "description",
      cost: 100,
    },
    {
      id: "2",
      img: ["img", "img2"],
      name: "Design",
      desc: "description",
      cost: 200,
    },
    {
      id: "3",
      img: ["img", "img2"],
      name: "Design",
      desc: "description",
      cost: 300,
    },
  ];

  return (
    <div id="designsolutions">
      <h1>h1</h1>
      <h3>h3</h3>
      {solutions.map((solution) => (
        <Solution
          key={solution.id}
          img={solution.img}
          name={solution.name}
          desc={solution.desc}
          cost={solution.cost}
        />
      ))}
    </div>
  );
};

export default DesignSolutions;
