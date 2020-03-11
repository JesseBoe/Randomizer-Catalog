import React from "react";
import style from "./CatagoryButton.css"
const images = importAll(require.context('./Logos', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

class ConsoleButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ConsoleImageName: props.imageName,
            ConsoleName: props.name,
        }
    }

    render() {
        return (
            <img src={images[this.state.ConsoleImageName + ".png"]} draggable="false" alt={this.props.name} className="rounded LogoButton"></img>
        );
    }
}

export default ConsoleButton;