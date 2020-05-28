import React from 'react';
import {Button} from 'reactstrap';

function Btn(){

    const style = {
        height: '150px',
        width: '200px',
        margin: '0px 5%',
        backgroundColor: 'black',
        borderRadius: '300px',
        color: 'white'
    }

    return(
        <Button style={style} />
    )
}

export default Btn;