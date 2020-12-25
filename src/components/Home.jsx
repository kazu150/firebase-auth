import React from 'react';
import { app } from '../base';

const Home = props => {
    return(
        <div>
            <h2>HomePage</h2>
            <button onClick={() => app.auth().signOut()}>SignOut</button>
        </div>
    );
}

export default Home;