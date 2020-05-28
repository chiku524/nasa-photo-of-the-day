import React from 'react';
import styled from 'styled-components';

const H6 = styled.h6`
    margin: 3% 15%;
`;

function Explanation({explanation}) {
    
    return (
        <div className='explanationContainer'>
            <H6>{explanation}</H6>
        </div>
    )
}

export default Explanation;