import React from 'react'
import Education from './Education'
import Work from './Work'

export const CareerTimeline = ({ navigation }: any) => {
  return (
    <div
      id="career-timeline-container"
      style={{ marginTop: '5vh' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Career Timeline</h2>
      <Education key="education-component" />
      <Work key="work-component" />
    </div>
  );
}

export default CareerTimeline;
