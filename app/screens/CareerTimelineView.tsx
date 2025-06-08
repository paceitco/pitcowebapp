import React from 'react'
import Education from './Education'
import Work from './Work'
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { HeaderTitle } from '@react-navigation/elements';
import { LinearGradient } from 'expo-linear-gradient';

export const CareerTimelineView = ({ navigation }: any) => {
  const route = useRoute();
  const { renderCustomBackground = false } = route.params || {} as any;

  return (
      <View style={{ paddingTop: 1 }} className="career-timeline-view-container">
        <HeaderTitle style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Career Timeline</HeaderTitle>
        {/* <Education key="education-component" /> */}
        <Work key="work-component" />
      </View>
  );
}

export default CareerTimelineView;
