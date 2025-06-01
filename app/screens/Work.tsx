import React from 'react';

export const Work = ({ navigation }: any) => {
  return (
    <div
      id="work-history-container"
      className="work-history-container">
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
        <p style={{ fontSize: '18px', paddingTop: '10px', color: '#fff', fontWeight: 'bolder', textAlign: 'center' }}>2015</p>
      </div>
      <div className="xp-info-left">
        <div
          style={{
            width: '86%',
            marginTop: '-10px',
            borderRadius: '5px',
            backgroundColor: '#eeeeee',
            padding: '10px'
          }}>
          <p style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bolder' }}>Patrish Mobile Nails (2015 ­- 2016)</p>
          <p style={{ textAlign: 'left' }}>
            My role at PMN was to help uplift the company’s online presence by developing and maintaining a modern, responsive and SEO compliant web application.
          </p>
          <p style={{ textAlign: 'left' }}>
            For this project I initially used pHp with MySQL, and eventually rewrote the project in NodeJS.
          </p>
        </div>
      </div>
      <div
        id='career-timeline-vbar-2015'
        className='career-timeline-vbar'
        style={{
          width: '2px',
          height: '150px',
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
        <p style={{ fontSize: '18px', paddingTop: '10px', color: '#fff', fontWeight: 'bolder', textAlign: 'center' }}>2016</p>
      </div>
      <div className="xp-info-right">
        <div style={{
          width: '87%',
          margin: '-10px 0px 0px 14%',
          borderRadius: '5px',
          backgroundColor: '#eeeeee',
          padding: '10px'
        }}>
          <p style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bolder' }}>
            Omega Fire &amp; Security (2016 - 2018)</p>
          <p style={{ textAlign: 'left' }}>
            My primary role at Omega was to develop an internal tool to help the company better manage various aspects
            of its business operations such as, human resource management, project management, quoting, invoicing, task
            management, time &amp; attendance as well as a policy/regulatory document ­management system - essentially a
            miniature ERP system.
          </p>
        </div>
      </div>
      <div
        id='career-timeline-vbar-2016'
        className='career-timeline-vbar'
        style={{
          width: '2px',
          height: '150px',
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
          marginTop: '-10px',
          border: '1px solid #fff'
        }}
      >
        <p style={{ fontSize: '18px', paddingTop: '10px', color: '#fff', fontWeight: 'bolder', textAlign: 'center' }}>2018</p>
      </div>
      <div className="xp-info-left">
        <div
          style={{
            width: '86%',
            marginTop: '-10px',
            borderRadius: '5px',
            backgroundColor: '#eeeeee',
            padding: '10px'
          }}>
          <p style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bolder' }}>
            Investec Bank (2018 - present)</p>
          <p style={{ textAlign: 'left' }}>
            My primary role at Investec is to write and maintain the code/applications that are used by different communities within the business (Private Bankers, Property Bankers, Credit Officers, Legal Risk Officers, the Operations Support team and sometimes the development/engineering team) while also adhering to the code quality standards (TDD, SOLID, DRY, documentation, naming conventions, maintaining our applications and making sure that they're up-to-date and don't have any security vulnerabilities etc.) set by the team and industry.
          </p>
          <p style={{ textAlign: 'left' }}>
            My secondary role is to mentor/guide new joiners & team members, innovating and keeping up with the ever-changing world of software development (learning new technologies etc.) and assist the Operations Support team with resolving production issues.
          </p>
        </div>
      </div>
      <div
        id='career-timeline-vbar-2018'
        className='career-timeline-vbar'
        style={{
          width: '2px',
          height: '50vh',
          borderRadius: '10px',
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '60px',
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <p style={{ fontSize: '18px', paddingTop: '18px', color: '#fff', fontWeight: 'bolder', textAlign: 'center' }}>Now</p>
      </div>
    </div>
  );
}

export default Work;
