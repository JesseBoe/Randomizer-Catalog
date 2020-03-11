import React from "react";
import style from "./Home.css"
import ConsoleButton from "../CatagoryButton/ConsoleButton";
import collapseIcon from "../CatagoryButton/Logos/collapse.png";
import expandIcon from "../CatagoryButton/Logos/expand.png";

import {BrowserRouter as Router, Link, Route,} from 'react-router-dom';

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
                                    <ConsoleButton imageName="NesLogo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/GB") }} className="col-sm">
                                    <ConsoleButton imageName="GameboyLogo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/SNES") }} className="col-sm">
                                    <ConsoleButton imageName="SnesLogo" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/N64") }} className="col-sm">
                                    <ConsoleButton imageName="N64Logo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/GBC") }} className="col-sm">
                                    <ConsoleButton imageName="GameboyColorLogo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/GBA") }} className="col-sm">
                                    <ConsoleButton imageName="GameboyAdvanceLogo" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/GC") }} className="col-sm">
                                    <ConsoleButton imageName="GamecubeLogo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/NDS") }} className="col-sm">
                                    <ConsoleButton imageName="NDSLogo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/3DS") }} className="col-sm">
                                    <ConsoleButton imageName="N3DSLogo" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/WiiU") }} className="col-sm">
                                    <ConsoleButton imageName="WiiULogo" />
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
                                    <ConsoleButton imageName="PS1Logo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/PS2") }} className="col-sm">
                                    <ConsoleButton imageName="PS2Logo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/PSP") }} className="col-sm">
                                    <ConsoleButton imageName="PSPLogo" />
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
                                    <ConsoleButton imageName="PCLogo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/Atari") }} className="col-sm">
                                    <ConsoleButton imageName="Atari2600Logo" />
                                </div>
                                <div onClick={() => { this.props.history.push("/SG") }} className="col-sm">
                                    <ConsoleButton imageName="SegaGenesisLogo" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div onClick={() => { this.props.history.push("/SMS") }} className="col-sm">
                                    <ConsoleButton imageName="SegaMasterSystemLogo" />
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