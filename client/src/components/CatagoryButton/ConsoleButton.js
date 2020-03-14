import React from "react";
import style from "./CatagoryButton.css"

class ConsoleButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ConsoleName: props.ConsoleName,
            ConsoleLogo: props.ConsoleLogo
        }
    }

    render() {
        return (
            <img src={this.state.ConsoleLogo} draggable="false" alt="Console Logo" className="rounded LogoButton"></img>
        );
    }
}

export default ConsoleButton;