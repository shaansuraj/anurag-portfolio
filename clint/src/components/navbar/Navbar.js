import React from 'react'

import Logo from '../../images/favicon.png'

import './Navbar.css';

import Img1 from '../../images/Hero-bg1.png'
import Modal from '../contact/Modal';

function Navbar(props) {

    // const navigate = useNavigate();
    // const smoothDirect = () => {
    //     window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: "smooth",
    //     });
    // }

    const parallex = {
        backgroundImage: `url(${Img1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
            <section style={parallex}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg py-4 head fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand mx-5" style={{ color: 'whitesmoke' }} href="/"> <img src={Logo} alt="" style={{height: '3rem'}} /> Anurag Kumar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-lg-0">
                                    <li className="nav-item">
                                        <div className="nav-link active" aria-current="page" style={{ color: 'whitesmoke' }} onClick={() => window.location.replace("/#about")} >About Me</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" style={{ color: 'whitesmoke' }} onClick={() => window.location.replace("/#bio")} >My Bio</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" style={{ color: 'whitesmoke' }}   data-bs-toggle="modal" data-bs-target="#exampleModal" >Contact Me</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" style={{ color: 'whitesmoke' }} onClick={() => window.location.replace("/#project")} >My Projects</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <Modal />
        </>
    )
}

export default Navbar
