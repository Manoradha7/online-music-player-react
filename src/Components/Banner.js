import React from 'react';
import Artist from '../img/Banner.jpg'
import VerifiedIcon from '@mui/icons-material/Verified';

function Banner(){
    return(
        <div className='banner'>
            <img src={Artist} alt='' className='bannerImg' />
            <div className='artist'>
                <p> <VerifiedIcon color='primary'/> <span>Verified Artist</span></p>
                <h1>Mano Radha</h1>
               <p> <span >48,987,876</span> monthly listner</p>
            </div>
        </div>
    )
}
export {Banner}