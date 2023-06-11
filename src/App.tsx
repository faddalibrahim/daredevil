// libraries
import { ChangeEvent } from "react";

// components
import Button from "@components/button/Button";
import Input from "@components/input/Input";

// styles
import AppStyles from "./App.module.css";

function App() {
  return (
    <div className={AppStyles.app}>
      <Input
        label="name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => alert(e.target.value)}
      />
      <Input
        type="radio"
        label="banana"
        name="same"
        value="banana"
        onChange={(e: ChangeEvent<HTMLInputElement>) => alert(e.target.value)}
      />
      <Input
        type="radio"
        label="sausage"
        name="same"
        value="sausage"
        onChange={(e: ChangeEvent<HTMLInputElement>) => alert(e.target.value)}
      />

      <br />

      <Button onClick={() => alert("hello world")}>solid button</Button>
      <br />
      <br />
      <Button type="outlined" onClick={() => alert("hello world")}>
        outlined button
      </Button>
    </div>
  );
}

export default App;
