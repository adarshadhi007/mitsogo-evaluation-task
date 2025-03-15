import React from 'react';
import "../assets/css/platform.css"; 
import windowIcon from "../assets/images/windows.svg"; 
import iosIcon from "../assets/images/ios.svg"; 
import appleIcon from "../assets/images/apple-tv.svg"; 
import androidIcon from "../assets/images/android.svg"; 
import amazonIcon from "../assets/images/amazon-fire.webp"; 
import androidTvIcon from "../assets/images/android-tv.svg"
function Platform() {
    return (
        <div className='platform-parent'>

       <h2 className='platform-header'>Platforms supported</h2>
        <div class="container">
        <div class="box platform-box"><img src={windowIcon} alt=" window" /></div>
        <div class="box platform-box"><img src={iosIcon} alt="ios" /></div>
        <div class="box platform-box"><img src={appleIcon} alt="apple" /></div>
        <div class="box platform-box"><img src={androidIcon} alt="android" /></div>
        <div class="box platform-box"><img src={amazonIcon} alt="amazon  " /></div>
        <div class="box platform-box"><img src={androidTvIcon} alt=" androidTvIcon" /></div>
      </div>
      </div>
    );
}

export default Platform;