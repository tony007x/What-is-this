import React from 'react'

type Props = {
    data: String[];
    func: any
};

const About = (props: Props) => {

    return <>
        <button onClick={() => {props.func("Gun is Gay!")}}>Gun is Gay!</button>
        <div className='about'>about</div>
    </>
};

export default About;