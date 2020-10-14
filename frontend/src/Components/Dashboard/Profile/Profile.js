import React from 'react';
import './Profile.css';
import '../Forms/Form.css';
import ProfileInfo from './ProfileInfo';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangeMail from './ChangeMail';
import {Switch, Route, useRouteMatch} from 'react-router-dom';

const Profile = () => {
    let { path } = useRouteMatch();

    return(
        <React.Fragment>
        <h2 className="profile-title">Profile</h2>
        <Switch>
            <Route path={`${path}/changeName`} component={ChangeName} />
            <Route path={`${path}/changePassword`} component={ChangePassword} />
            <Route path={`${path}/changeMail`} component={ChangeMail} />
            <Route path={`${path}/`} exact component={ProfileInfo} />
        </Switch>
        </React.Fragment>
    )
}
export default Profile;