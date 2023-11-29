import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";


export default class AppClass extends Component {

  // code here
  render() {
    const data = this.props.imageData();
    console.log(data);
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div id="grid">
          {data.map((el) => {
            return (
              <div key={el.id}>
                <img src={el.img} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}