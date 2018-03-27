import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Nav() {
    return (
        <div className="nav_bar">
            <div className="width">
                <a href="#"><i className="fas fa-home"> </i> Home</a>
                <a href="#"><i className="fas fa-bolt"> </i> Moments</a>
                <a href="#"><i className="far fa-bell"> </i> Notifications</a>
                <a href="#"><i className="far fa-envelope"> </i> Messages</a>
                <span id="tw_logo"><i className="fab fa-twitter"> </i></span>
                <button className="dweet_btn float-right">Dweet</button>
                <img src="./avatar.png" className="pic float-right"/>
                <img className="small-icon float-right" src="./search.svg"/>
                <input className="search float-right" type="text" placeholder="Search devine"/>
            </div>
        </div>
    );


}

class App extends React.Component {
    render() {
        return (
            <Nav/>
        );
    }
}


ReactDOM.render(
    <App/>
    , document.getElementById('root'));