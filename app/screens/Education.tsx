import React from 'react';
import { View, Text } from 'react-native';

export const Education = ({ navigation }: any) => {
  return (
    <View
      id="education-info-container"
      className="education-info-container">
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#fff'
        }}
      >
        <Text style={{ fontSize: 18, paddingTop: 10, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>2009</Text>
      </View>

      <View className='education-info-left'>
        <View style={{
          width: '86%',
          marginTop: -10,
          borderRadius: 5,
          backgroundColor: '#eeeeee',
          padding: 10
        }}>
          <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Rand Park High School ( 20­09 - 2013)</Text>
          <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>Nation Senior Certificate</Text>
          <Text style={{ textAlign: 'left' }}>
            This is where Casper would fall in love with the art of programming.
          </Text>
        </View>
      </View>

      <View
        id='career-timeline-vbar-2009'
        className='career-timeline-vbar'
        style={{
          width: 2,
          height: 70,
          borderRadius: 10,
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />

      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#fff'
        }}
      >
        <Text style={{ fontSize: 18, paddingTop: 10, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>2014</Text>
      </View>

      <View className='education-info-right'>
        <View style={{
          width: 95,
          marginTop: -10,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 14,
          borderRadius: 5,
          backgroundColor: '#eeeeee',
          padding: 10
        }}>
          <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Univ. of Johannesburg (2014 - 2018)</Text>
          <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>BSc Information Technology</Text>
          <Text style={{ textAlign: 'left' }}>
            Majoring in Computer Science &amp; Informatics and minoring in Mathematics (Calculus 1 &amp; Discrete 1), Business Management 1 and Information Management 1.
          </Text>
        </View>
      </View>

      <View
        id='career-timeline-vbar-2014'
        className='career-timeline-vbar'
        style={{
          width: 2,
          height: 18,
          borderRadius: 10,
          backgroundColor: '#ff7400',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
    </View>
  );
}

export default Education;
