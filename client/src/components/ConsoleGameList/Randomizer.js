import React from "react";
import style from './Randomizer.css'

class Randomizer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id : props.id,
            title : props.title,
            randotitle : props.randotitle,
            link : props.link,
            creator : props.creator,
            description : props.description,
            series : props.series,
            lastUpdate : props.lastUpdate
        }
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.state.title}</th>
                <td> 
                    <a href={this.state.link}>{this.state.randotitle}</a>
                </td>
                <td>{this.state.creator}</td>
                <td>{this.state.lastUpdate}</td>
            </tr>
        );
    }
}

export default Randomizer;