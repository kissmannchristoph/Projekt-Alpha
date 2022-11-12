import { useState } from "react";
import "./styles.scss";

const ColorPicker = ({ enabled, OnColorClick }) => {
  return (
    <div className={enabled ? "ColorPicker enabled" : "ColorPicker"}>
      <ColorPickerButton color="blue" OnClick={OnColorClick} />
      <ColorPickerButton color="black" OnClick={OnColorClick} />
    </div>
  );
};

const ColorPickerButton = ({ color, OnClick }) => {
  return (
    <div
      className="ColorPickerButton"
      style={{
        backgroundColor: color
      }}
      onClick={() => OnClick(color)}
    ></div>
  );
};

const Button = () => {
  const [color, setColor] = useState("blue");
  const [colorPicker, setColorPicker] = useState(false);

  const OnColorClick = (color) => {
    setColor(color);
  };

  const OnClick = () => {
    setColorPicker(colorPicker ? false : true);
  };

  return (
    <div
      className="Button"
      onClick={OnClick}
      style={{
        backgroundColor: color
      }}
    >
      <ColorPicker enabled={colorPicker} OnColorClick={OnColorClick} />
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="Buttons">
      <div>
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <div>
        <Button />
        <Button />
        <Button />
      </div>
      <div>
        <Button />
        <Button />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="Table">
      <div>
        <Buttons />
      </div>
      <div></div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}
