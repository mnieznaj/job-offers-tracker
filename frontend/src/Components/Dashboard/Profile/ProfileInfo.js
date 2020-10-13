import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


const ProfileInfo = () => {
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("dbId");
        window.location.reload();
    }
    let { url } = useRouteMatch();
    return(
        <div className="profile">
            <div className="profile__info">
                <section className="profile__section">
                    <p className="form-label">Name</p>
                    <p className="profile__info-text">lorem ipsum</p>
                    <Link className="profile__edit-btn-link" to={`${url}/changeName`}><button className="profile__edit-btn">Edit</button></Link>
                </section>
                <section className="profile__section">
                    <p className="form-label">E-mail</p>
                    <p className="profile__info-text">my_mail@mail.com</p>
                    <Link className="profile__edit-btn-link" to={`${url}/changeMail`}><button className="profile__edit-btn">Edit</button></Link>
                </section>
                <section className="profile__section">
                    <p className="form-label">Password</p>
                    <Link className="profile__edit-btn-link" to={`${url}/changePassword`}><button className="profile__edit-btn">Edit</button></Link>
                </section>
            </div>
            {/* <DragAndDrop /> */}
            <button onClick={logout} className="profile__form-button">Logout</button>
        </div>
    )
}

export default ProfileInfo;