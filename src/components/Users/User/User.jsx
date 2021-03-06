import React from 'react';
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import userIcon from "../../../assets/images/user.png";
import {Button} from "@material-ui/core";

const User = (props) => {
  return (
    <div className={style.userWrap} key={props.user.id}>
      <div className={style.photoBtnWrap}>
        <div>
          <NavLink to={`/profile/${props.user.id}`}>
            <img className={style.userPhoto}
                 src={props.user.photos.small
                   ? props.user.photos.small
                   : userIcon}
                 alt={props.user.name}/>
          </NavLink>
        </div>
        <div>
          {props.user.followed
            ? <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                      className={style.btn}
                      onClick={() => {
                        props.unfollow(props.user.id)

                      }}
                      variant="contained">Unfollow</Button>
            : <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                      className={style.btn}
                      onClick={() => {
                        props.follow(props.user.id)
                      }}
                      variant="contained">Follow</Button>}
        </div>
      </div>
      <div className={style.textWrap}>
        <div className={style.mainText}>
          <p>{props.user.name}</p>
          <p>{props.user.status}</p>
        </div>
      </div>
    </div>
  )
}

export default User;
