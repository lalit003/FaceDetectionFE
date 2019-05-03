import React from 'react';
import 'tachyons';

const Navigation = ({onRouteChange, isSignIn}) => {
	if(isSignIn){
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='tr pa3 f3 link underline-hover dim black pointer' >Sign Out</p>
			</nav>
		);
	}
	else{
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('register')} className='tr pa3 f3 link underline-hover dim black pointer' >Register</p>
				<p onClick={() => onRouteChange('signin')} className='tr pa3 f3 link underline-hover dim black pointer' >SignIn</p>
			</nav>
		);
	}
}

export default Navigation;