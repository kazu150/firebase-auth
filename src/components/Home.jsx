import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { app } from '../base';

const Home = props => {
    const { currentUser, updatePass } = useContext(AuthContext);
    const [ changePass, setChangePass ] = useState(false);
    const [ newPass, setNewPass ] = useState('');

    return(
        <div>
            <h2>HomePage</h2>
            <p>ようこそ{currentUser.email}さん</p>
            <button onClick={() => app.auth().signOut()}>SignOut</button>
            <button onClick={() => setChangePass(!changePass)}>ChangePassword</button>
            {changePass ? 
                <div>
                    <input 
                        value={newPass} 
                        onChange={(e) => setNewPass(e.target.value)} 
                        type="text" 
                    />
                    <button onClick={() => updatePass(newPass)}>Change!</button>
                </div>
                : ''
            }
        </div>
    );
}

export default Home;