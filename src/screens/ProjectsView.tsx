import React from 'react';

export const ProjectsView = ({ navigation }: any) => {
    return (
        <div style={{
            width: '90%',
            color: '#fff',
            backgroundColor: 'rgba(255,255,255,.6)',
            margin: '40px auto 0px auto',
            padding: '30px',
            borderRadius: '10px',
            border: '1px solid #fff'
        }}
        >
            <h2 style={{ textAlign: 'center', paddingBottom: '30px', fontWeight: 'bold' }}>Project History</h2>
            <div className='row'>
                <div className='col-lg-6'>
                    <a href="http://www.pioneerdesigns.co.za/">Pioneer Designs</a>
                </div>
                <div className='col-lg-6'>
                    <a href="https://patrishnails.herokuapp.com/">Patrish Nails</a>
                </div>
                <div className='col-lg-6'>
                    <a href="http://airotek.herokuapp.com/">Airotek Engineering</a>
                </div>
                <div className='col-lg-6'>
                    <a href="http://casper.ndlovu.website/">Casper's Resume</a>
                </div>
                <div className='col-lg-6'>
                    <a href="http://icebreak.azurewebsites.net/">My group's 3rd year webapp's server and parts of the Android app.</a>
                </div>
                <div className='col-lg-6'>
                    <p style={{ color: '#000' }}>Also checkout some of my other projects on <a href="https://github.com/Cazs" target='_blank' rel="nofollow noopener noreferrer">GitHub</a></p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;
