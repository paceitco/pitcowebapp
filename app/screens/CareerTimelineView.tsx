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
      <LinearGradient
        id="career-timeline-view-gradient"
        colors={renderCustomBackground ? ['#56b4d3', '#348f50', '#192f6a'] : ['inherit', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View style={{ paddingTop: 1 }} className="career-timeline-view-container">
          <HeaderTitle style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Career Timeline</HeaderTitle>
          <Education key="education-component" />
          <Work key="work-component" />
        </View>
      </LinearGradient>
  );
}

export default CareerTimelineView;
