import React from "react";
import Setup from "./src/boot/setup";
import { Root } from "native-base";
export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Setup />
      </Root>
    );
  }
}
