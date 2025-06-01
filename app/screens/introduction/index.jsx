import React from 'react';

class Introduction extends React.Component {
    render() {
        return (
            <div id="app-intro">
                <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Introduction</h2>

                <p style={{ width: '80%', margin: 'auto', color: '#fff' }}>
                    I'm a 28 year old tech enthusiast who grew up in Randburg, Johannesburg, South Africa.
                    I first learned to code using Borland Delphi 7 (Pascal), 12 years ago. I primarily design & develop applications for the Web but I do also work on applications for Windows, Android & Linux - I occasionally dabble in a bit of MacOS and iOS pet-projects although that's not my primary stack/market - unless it's a WORA/WORE implementation of course. I've worked with most of the common methodologies of the Software Development Life Cycle, mainly the Agile, Extreme Programming & Waterfall methodology along with SCRUM.
                    I'm proficient in JavaScript/Typescript (Front-end using Angular, React, Vue and Back-end using Express, Axios and Nest - along with TypeORM), Java (SpringBoot & Hibernate), C#.NET, PL/SQL and  Bash. I'd describe myself as a curious individual who likes to experiment with a wide range of technologies such as Python, C (mainly for electronics programming - currently Arduino Uno & Mega and the Nordic nRF52) and occasionally some C++ usually only for experimenting with Unreal Engine.
                </p>
                <br />
                <p style={{ width: '80%', margin: 'auto', color: '#fff' }}>My day-to-day stack includes:</p>
                <div style={{ width: '25%', margin: 'auto', color: '#fff' }}>
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.oracle.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Java SE
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.spring.io/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Spring Boot API
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                rel="nofollow noopener noreferrer">
                                TypeScript
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.reactjs.org/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                ReactJS
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.electronjs.org/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                ElectronJS
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.getbootstrap.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Bootstrap
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.expressjs.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                ExpressJS
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="http://www.jade-lang.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Jade Template Engine
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="http://www.keystonejs.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                KeystoneJS
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.nginx.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Nginx
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.docker.org/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Docker
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.heroku.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Heroku
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'underline', color: '#fff' }}
                                href="https://www.letsencrypt.org/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Let's Encrypt
                            </a>
                        </li>
                        <li>Bash</li>
                        <li>SSH</li>
                        <li>and Mac OS X.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Introduction;
