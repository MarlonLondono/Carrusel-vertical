import React, { useEffect, useState } from "react";

const Slider = ({ children }) => {
  const [positionActual, setPositionActual] = useState(1);
  const [limit, setLimit] = useState(false);
  const [prev, setPrev] = useState(true);
  const [arrayImages, setArrayImages] = useState([]);
  const Quantity = 2;
  console.log(positionActual);

  useEffect(() => {
    if (children) {
      const ArrayImgs = [];
      for (let imgs = 0; imgs <= Quantity; imgs++) {
        ArrayImgs.push(imgs);
      }
      setArrayImages(ArrayImgs);
    }
  }, []);

  useEffect(() => {
    if (positionActual === children.length - 2) {
      setLimit(true);
    } else {
      setLimit(false);
    }
    if (positionActual === 1) {
      setPrev(true);
    } else {
      setPrev(false);
    }
  }, [positionActual, setPositionActual]);

  const NextPage = () => {
    arrayImages.shift();
    setPositionActual(positionActual + 1);
    arrayImages.push(arrayImages[arrayImages.length - 1] + 1);
    console.log(arrayImages);
    console.log(positionActual);
  };

  const PreviewPage = () => {
    arrayImages.pop();
    setPositionActual(positionActual - 1);
    arrayImages.unshift(arrayImages[0] - 1);
    console.log(arrayImages);
    console.log(positionActual);
  };

  const imagesChildren = children.map((child, index) => {
    if (arrayImages.includes(index)) {
      return (
        <li
          style={{ borderWidth: 1, borderColor: "#000", borderStyle: "solid" }}
          key={index}
        >
          {child}
        </li>
      );
    }
  });

  return (
    <div style={{ width: "300px", height: "200px" }}>
      {!prev && <button onClick={PreviewPage}>Anterior</button>}
      {console.log(imagesChildren)}
      <ul>{imagesChildren}</ul>
      {!limit && <button onClick={NextPage}>Siguiente</button>}
    </div>
  );
};

export default Slider;
