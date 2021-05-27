import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';

function Navigation({onRouteChange, isSignedIn, userInfo}){
    if(isSignedIn){
        return (
            <header className="bg-black-90 w-100 ph3 ph4-m padding-left-right-2">
                <nav className="db dt-l w-100 border-box padding-left-right-2">
                    <Logo />
                    <div className="db dtc-l v-mid w-100 w-75-l tr-l">
                     <p className='link dim white f6 f5-l dib mr3 mr4-l pointer' onClick={()=> onRouteChange('signin')}>
                         Sign Out &nbsp;<i className="fa fa-power-off" aria-hidden="true"></i></p>
                         <p className='white f6 f5-l dib mr3 mr4-l'>Welcome {userInfo.name}!  </p> 
                     </div>
            </nav>
            </header>
           );
    }else{
        return(
            <header className="bg-black-90 w-100 ph3 ph4-m padding-left-right-2">
                <nav className="db dt-l w-100 border-box padding-left-right-2">
                    <Logo />
                    <div className="db dtc-l v-mid w-100 w-75-l tr-l">
                        <p className='link dim white f6 f5-l dib mr3 mr4-l pointer' onClick={() => onRouteChange('signin')}>
                            Sign In &nbsp;<i className="fa fa-sign-in" aria-hidden="true"></i>
                        </p>
                        <p className='link dim white f6 f5-l dib mr3 mr4-l pointer' onClick={() => onRouteChange('register')}>
                            Register &nbsp;<i className="fa fa-address-book" aria-hidden="true"></i></p>
                    </div>
                </nav></header>
        );
    }
    
}

export default Navigation;