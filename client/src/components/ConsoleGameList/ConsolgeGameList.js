import React from "react";
import style from "./ConsoleGameList.css"
import Randomizer from './Randomizer'

class ConsoleGameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            GameList: [],
            LastSort: ""
        }
    }

    componentDidMount() {
        this.callApi()
            .then(
                res => (
                    this.sortByNameFirst(res)
                )
            )
            .catch(err => console.log(err));
    }

    callApi = async () => {
        let db = window.location.pathname.toLowerCase();
        console.log(db);
        const response = await fetch('/api' + db);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    sortByNameFirst = (toSort) => {
        toSort.sort(function (a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.setState({ GameList: toSort, LastSort: "TitleAsc" });
    }

    sortByName = () => {
        if (this.state.LastSort == "TitleAsc") {
            let sorted = this.state.GameList;
            sorted.sort(function (a, b) {
                var textA = a.title.toUpperCase();
                var textB = b.title.toUpperCase();
                return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
            });
            this.setState({ GameList: sorted, LastSort: "TitleDsc" });
        }
        else {
            let sorted = this.state.GameList;
            sorted.sort(function (a, b) {
                var textA = a.title.toUpperCase();
                var textB = b.title.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            this.setState({ GameList: sorted, LastSort: "TitleAsc" });
        }
    }

    sortByCreator = () => {
        if  (this.state.LastSort == "CreatorAsc") {
            let sorted = this.state.GameList;
            sorted.sort(function (a, b) {
                var textA = a.creator.toUpperCase();
                var textB = b.creator.toUpperCase();
                return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
            });
            this.setState({ GameList: sorted, LastSort: "CreatorDsc" });
        }
        else {
            let sorted = this.state.GameList;
            sorted.sort(function (a, b) {
                var textA = a.creator.toUpperCase();
                var textB = b.creator.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            this.setState({ GameList: sorted, LastSort: "CreatorAsc" });
        }
    }

    sortByLastUpdate = () => {
        if (this.state.LastSort == "UpdateAsc") {
            let sorted = this.state.GameList;
            sorted.sort(function (a, b) {
                var textA = a.lastupdate.toUpperCase();
                var textB = b.lastupdate.toUpperCase();
                return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
            });
            this.setState({ GameList: sorted, LastSort: "UpdateDsc" });
        }
        else {
            let sorted = this.state.GameList;
            sorted.sort(function (a, b) {
                var textA = a.lastupdate.toUpperCase();
                var textB = b.lastupdate.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            this.setState({ GameList: sorted, LastSort: "UpdateAsc" });
        }
    }
    
    getSortClasses = (colName) => {
        if (colName == "Update") {
            if (this.state.LastSort.includes(colName)) {
                if (this.state.LastSort.includes("Asc")) {
                    return "fas fa-sort-numeric-down sortIcon";
                }
                else {
                    return "fas fa-sort-numeric-up sortIcon";
                }
            }
            else {
                return "fas fa-sort-numeric-down sortIcon sortIconFade";
            }
        }
        else {
            if (this.state.LastSort.includes(colName)) {
                if (this.state.LastSort.includes("Asc")) {
                    return "fas fa-sort-alpha-down sortIcon";
                }
                else {
                    return "fas fa-sort-alpha-up sortIcon";
                }
            }
            else {
                return "fas fa-sort-alpha-down sortIcon sortIconFade";
            }
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <div className="card text-center bg-dark">
                        <div className="card-header CatagoryText" href="#collapseOne">
                            {window.location.pathname.replace("/", "")}
                        </div>
                        <div className='card-body CatagoryMain'>
                            <table id="datatable" className="table table-bordered table-dark">
                                <thead>
                                    <tr>
                                        <th onClick={() => { this.sortByName() }} scope="col" className="data-table-head"><b>Game</b><i className={this.getSortClasses("Title")}></i></th>
                                        <th scope="col"><b>Randomizer</b></th>
                                        <th onClick={() => { this.sortByCreator() }} scope="col" className="data-table-head"><b>Creator</b> <i className={this.getSortClasses("Creator")}></i></th>
                                        <th onClick={() => { this.sortByLastUpdate() }} scope="col" className="data-table-head"><b>Last Update</b> <i className={this.getSortClasses("Update")}></i></th>
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