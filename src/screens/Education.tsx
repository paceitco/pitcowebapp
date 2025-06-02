import React from 'react';

export const Education = ({ navigation }: any) => {
  return (
    <div
      id="education-info-container"
      className="education-info-container">
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50px',
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid #fff'
        }}
      >
        <p style={{ fontSize: '18px', paddingTop: '10px', color: '#fff', fontWeight: 'bolder', textAlign: 'center' }}>2009</p>
      </div>
      <div className='education-info-left'>
        <div style={{
          width: '86%',
          marginTop: '-10px',
          borderRadius: '5px',
          backgroundColor: '#eeeeee',
          padding: '10px'
        }}>
          <p style={{ fontSize: '15px', textAlign: 'center', fontWeight: 'bolder' }}>Rand Park High School ( 20­09 - 2013)</p>
          <p style={{ fontSize: '15px', textAlign: 'left', fontWeight: 'bolder' }}>Nation Senior Certificate</p>
          <p style={{ textAlign: 'left' }}>
            This is where Casper would fall in love with the art of programming.
          </p>
        </div>
      </div>
      <div
        id='career-timeline-vbar-2009'
        className='career-timeline-vbar'
        style={{
          width: '2px',
          height: '70px',
          borderRadius: '10px',
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50px',
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid #fff'
        }}
      >
        <p style={{ fontSize: '18px', paddingTop: '10px', color: '#fff', fontWeight: 'bolder', textAlign: 'center' }}>2014</p>
      </div>
      <div className='education-info-right'>
        <div style={{
          width: '95%',
          margin: '-10px 0px 0px 14%',
          borderRadius: '5px',
          backgroundColor: '#eeeeee',
          padding: '10px'
        }}>
          <p style={{ fontSize: '15px', textAlign: 'center', fontWeight: 'bolder' }}>Univ. of Johannesburg (2014 - 2018)</p>
          <p style={{ fontSize: '15px', textAlign: 'left', fontWeight: 'bolder' }}>BSc Information Technology</p>
          <p style={{ textAlign: 'left' }}>
            Majoring in Computer Science &amp; Informatics and minoring in Mathematics (Calculus 1 &amp; Discrete 1), Business Management 1 and Information Management 1.
          </p>
        </div>
      </div>
      <div
        id='career-timeline-vbar-2014'
        className='career-timeline-vbar'
        style={{
          width: '2px',
          height: '18vh',
          borderRadius: '10px',
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
    </div>
  );
}

export default Education;
