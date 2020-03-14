import React from "react";
import style from "./Home.css"
import ConsoleButton from "../CatagoryButton/ConsoleButton";
import collapseIcon from "../CatagoryButton/Logos/collapse.png";
import expandIcon from "../CatagoryButton/Logos/expand.png";

import {BrowserRouter as Router, Link, Route,} from 'react-router-dom';

const images = importAll(require.context('../CatagoryButton/Logos', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse1 : false,
            collapse2: false,
            collapse3: false,
        }
    }

    render() {

        return (
            <div>
                <div className="container mt-4">
                    <div className="card text-center bg-dark">
                        <div className="card-header CatagoryText" href="#collapseOne">
                            Nintendo
                            <img className="collapseIcon" alt="Collapse" onClick={() => {this.setState({ collapse1: !this.state.collapse1 })}} src={this.state.collapse1 ? expandIcon : collapseIcon} height="32"/>
                        </div>
                        <div id="collapseOne" className={this.state.collapse1 ? "card-body CatagoryMain collapse" : "card-body CatagoryMain collapse show"}>
                            <div className="row">
                                <div onClick={() => { this.props.history.push("/NES") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["NesLogo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/GB") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["GameboyLogo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/SNES") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["SnesLogo.png"]} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/N64") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["N64Logo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/GBC") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["GameboyColorLogo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/GBA") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["GameboyAdvanceLogo.png"]} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/GC") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["GamecubeLogo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/NDS") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["NDSLogo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/3DS") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["N3DSLogo.png"]} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/WiiU") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["WiiULogo.png"]} />
                                </div>
                                <div className="col-sm"></div>
                                <div className="col-sm"></div>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                <div className="container mt-4">
                    <div className="card text-center bg-dark">
                        <div className="card-header CatagoryText" href="#collapseTwo">
                            Sony
                            <img className="collapseIcon" alt="Collapse" onClick={() => { this.setState({ collapse2: !this.state.collapse2 }) }} src={this.state.collapse2 ? expandIcon : collapseIcon} height="32"></img>
                        </div>
                        <div id="collapseTwo" className={this.state.collapse2 ? "card-body CatagoryMain collapse" : "card-body CatagoryMain collapse show"}>
                            <div className="row">
                                <div onClick={() => { this.props.history.push("/PS1") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["PS1Logo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/PS2") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["PS2Logo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/PSP") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["PSPLogo.png"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="card text-center bg-dark">
                        <div className="card-header CatagoryText" href="#collapseThree">
                            Other
                            <img className="collapseIcon" alt="Collapse" onClick={() => { this.setState({ collapse3: !this.state.collapse3})}} src={this.state.collapse3 ? expandIcon : collapseIcon} height="32"></img>
                        </div>
                        <div id="collapseThree" className={this.state.collapse3 ? "card-body CatagoryMain collapse" : "card-body CatagoryMain collapse show"}>
                            <div className="row">
                                <div onClick={() => { this.props.history.push("/PC") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["PCLogo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/Atari") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["Atari2600Logo.png"]} />
                                </div>
                                <div onClick={() => { this.props.history.push("/SG") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["SegaGenesisLogo.png"]} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/SMS") }} className="col-sm">
                                    <ConsoleButton ConsoleLogo={images["SegaMasterSystemLogo.png"]} />
                                </div>
                                <div className="col-sm"></div>
                                <div className="col-sm"></div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;