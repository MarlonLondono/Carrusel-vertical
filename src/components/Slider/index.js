import React, { useEffect, useState } from "react";

const Slider = ({ children }) => {
  const [positionActual, setPositionActual] = useState(1);
  const [limit, setLimit] = useState(false);
  const [prev, setPrev] = useState(true);
  const [arrayImages, setArrayImages] = useState([]);
  const Quantity = 2;
  console.log(children.length);

  useEffect(() => {
    if (children) {
      const ArrayImgs = [];
      for (let imgs = 0; imgs <= Quantity; imgs++) {
        ArrayImgs.push(imgs);
      }
      setArrayImages(ArrayImgs);
    }
  }, []);

  const NextPage = () => {
    arrayImages.shift();
    if (positionActual === children.length - 3) {
      setLimit(true);
    } else {
      setLimit(false);
      setPrev(false);
      setPositionActual(positionActual + 1);
    }
    arrayImages.push(arrayImages[arrayImages.length - 1] + 1);
    console.log(arrayImages);
    console.log(positionActual);
    console.log(limit);
  };

  const PreviewPage = () => {
    arrayImages.pop();
    if (positionActual === 1) {
      setPrev(true);
    } else {
      setPrev(false);
      setLimit(false);
      setPositionActual(positionActual - 1);
    }
    arrayImages.unshift(arrayImages[0] - 1);
    console.log(arrayImages);
    console.log(positionActual);
  };

  const imagesChildren = children.map((child, index) => {
    if (arrayImages.includes(index)) {
      return <li key={index}>{child}</li>;
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
