import React, {useState} from 'react';

function POTD({props}){
    console.log(props);
    const [picture, setPicture] = useState(props);
    console.log(picture);

    if (!props.hdurl) return <h3>Loading...</h3>;
    else return (
        <div className='POTD'>
            <img src={picture} alt='IOTD'></img>
        </div>
    );
}

export default POTD;