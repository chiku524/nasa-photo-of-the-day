import React from 'react';

function Title({title, date}) {

    return (
        <div>
            <h1>{title}</h1>
            <h6>{date}</h6>
        </div>
    )
}

export default Title;