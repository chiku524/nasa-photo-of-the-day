import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const PictureOfTheDay = styled.img`
    max-width: 80%;
`;

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
            <PictureOfTheDay src={picture} alt='IOTD'></PictureOfTheDay>
        </div>
    );
}

export default POTD;