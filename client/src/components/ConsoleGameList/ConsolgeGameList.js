import React from "react";
import style from "./ConsoleGameList.css"
import Randomizer from './Randomizer'

class ConsoleGameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            GameList: [],
        }
    }

    componentDidMount() {
        this.callApi()
            .then(res => (this.setState({GameList: res})))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        let db = window.location;
        db = db.toLowerCase();
        console.log(db);
        const response = await fetch('/api' + db);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <div className="card text-center bg-dark">
                        <div className="card-header CatagoryText" href="#collapseOne">
                            {window.location.pathname}
                        </div>
                        <div className='card-body CatagoryMain'>
                            <table className="table table-bordered table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col"><b>Game</b></th>
                                        <th scope="col"><b>Randomizer</b></th>
                                        <th scope="col"><b>Creator</b></th>
                                        <th scope="col"><b>Last Update</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.GameList.map((game) => <Randomizer key={game.id} title={game.title} creator={game.creator} randotitle={game.randotitle} lastUpdate={game.lastupdate} link={game.link}></Randomizer>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConsoleGameList;