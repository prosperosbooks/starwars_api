import React, { Component } from "react";
import CardList from "../components/CardList";
import { starwarschars } from "../starwarschars";
import SearchBox from "../components/SearchBox";

class App extends Component {
    constructor() {
        super();
        this.state = {
            starwarschars: starwarschars,
            searchfield: ""
        };
    }

    onSearchChange = event => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const filteredChars = this.state.starwarschars.filter(char => {
            return char.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredChars);
        return (
            <div className="tc">
                <h1>{`Star Wars API`}</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList starwarschars={filteredChars} />
            </div>
        );
    }
}

// import { starwarschars } from "./starwarschars";
// is inextricable from and is required by
// <CardList starwarschars={starwarschars} />

export default App;

// props are simply things that come out of state
// child receives from parent
// state requires us to change
// const App = () => { return (<div></di>)}
// to
// class App extends Component { render() { return ( <div></div>)}}

// after we introduce state
// since this.state contains { starwarschars: starwarchars }
// <CardList starwarschars={starwarschars} />
// no longer requires importing module
// and becomes
// <CardList starwarschars={this.state.starwarschars} />
// now we can modify state and the props will inherit the changes
