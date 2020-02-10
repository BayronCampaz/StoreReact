import React, { Component } from 'react';
import Game from './Game';


export default class GameList extends Component {
    render() {
        let gameList = this.props.games.map((item) =>
            (<Game key={item.id} game={item} />
            ));
        console.log(this.props.games)
        return (
            <div>
                <h1>{this.props.owner} Store</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameList}
                    </tbody>
                </table>
            </div>
        );
    }
}