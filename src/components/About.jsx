import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Sobre Nós</h1>
                        <p className="lead mb-4">
                        A Apple está comprometida a levar a melhor experiência de computação pessoal a estudantes, educadores, profissionais criativos e consumidores do mundo todo através de seu hardware, software e serviços de internet inovadores.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contatos</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
