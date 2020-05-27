import React, {useState, useEffect} from 'react';

function POTD({props, date}){
    const [picture, setPicture] = useState(props);
    
    useEffect(() => {
        setPicture(props.hdurl);
    }, [props.hdurl]);

    console.log(date);
    console.log(picture);

    if (!props.hdurl) return <h3>Loading...</h3>;
    else return (
        <div className='POTD'>
            <img src={picture} alt='IOTD'></img>
        </div>
    );
}

export default POTD;