import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
//<ul className={"menu_list"}>
//                     <li>Home</li>
//                     <li>Moments</li>
//                     <li>Notifications</li>
//                     <li>Messages</li>
//                 </ul>
function Nav() {
    return (
        <div className="nav_bar">
            <div id={"left-part"} className={"menu1"}>
                Home
            </div>
            <div id={"left-part"} className={"menu2"}>
                Moments
            </div>
            <div id={"left-part"} className={"menu3"}>
                Notifications
            </div>
            <div id={"left-part"} className={"menu4"}>
                Messages
            </div>

            <div id={"logo"} className={'logo'}><img id={"tw_logo"} src={"./tw_logo.svg"} alt={"img"}/></div>
                <div className={"search_bar"}>
                    <input className={"search"} type={"text"} placeholder={"Search"}/>
                </div>

            <div className={"user_photo"}><span>Pic</span></div>
            <div className={"post"}><span>Post</span></div>
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


ReactDOM.render(<App/>, document.getElementById('root'));

//registerServiceWorker();
