import React from 'react'

import TabPanel from './TabPanel'

import Img1 from '../../images/Hero-bg3.png' 

function MyProjects() {
    
    const parallex = {
        backgroundImage: `url(${Img1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
        <section className='py-5' id='project' style={parallex}>
            <div className='text-center'>
                <h4 style={{color: '#cbb26a'}}>CASE STUDIES</h4>
                <h2>Project Work</h2>
                <TabPanel />
            </div>
        </section>
        </>
    )
}

export default MyProjects
