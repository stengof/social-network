import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
  const redirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to='/login'/>
    return <Component {...props}/>
  }
  return connect(mapStateToProps)(redirectComponent);;
}
