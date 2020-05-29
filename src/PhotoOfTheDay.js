import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';

const PictureOfTheDay = styled.img`
    max-width: 80%;
`;

function POTD({props, date, leftClick, rightClick}){
    const [picture, setPicture] = useState(props);
    
    useEffect(() => {
        setPicture(props.hdurl);
    }, [props.hdurl]);

    console.log(date);
    console.log(picture);

    const style = {
        height: '150px',
        width: '200px',
        margin: '0px 5%',
        backgroundColor: 'black',
        borderRadius: '300px',
        color: 'white'
    }

    if (!props.hdurl) return <h3>Loading...</h3>;
    else return (
        <div className='POTD'>
            <Button style={style} onClick={leftClick} >Left</Button>
            <PictureOfTheDay src={picture} alt='IOTD'></PictureOfTheDay>
            <Button style={style} onClick={rightClick} >Right</Button>
        </div>
    );
}

export default POTD;