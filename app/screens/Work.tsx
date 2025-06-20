import React, { useCallback, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, View, TouchableOpacity, Text, StyleSheet, Dimensions, Platform, SafeAreaView } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import uuid from 'react-native-uuid';

export const Work = () => {
  const [items, setItems] = useState<any[]>([
    {
      id: 0,
      year: '2009',
      title: 'Rand Park High School (2009 - 2013)',
      subtitle: 'National Senior Certificate',
      description: 'This is where Casper would fall in love with the art of programming.',
      position: 'left',
      styles: {
        // marginLeft: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        // left: scale(5)
        left: '-27.7%'
      }
    },
    {
      id: 1,
      year: '2014',
      title: 'Univ. of Johannesburg (2014 - 2018)',
      subtitle: 'BSc Information Technology',
      description:
        'Majoring in Computer Science & Informatics and minoring in Mathematics (Calculus 1 & Discrete 1), Business Management 1 and Information Management 1.',
      position: 'right',
      styles: {
        // marginRight: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        // right: scale(-168)
        left: '25.4%'
        // backgroundColor: 'red'
      }
    },
  ]);

  const renderArrow = (position: string) => (
    <View
      style={
        position === 'left' ? styles.arrowLeft : styles.arrowRight
      }
    />
  );

  const renderItem = ({ item }: any) => (
    <SafeAreaView
      key={"work-timeline-view-container-" + item?.id}
      style={[styles.card, styles.gridItem, item.styles]}
    >
      <View style={{ alignItems: item.position === 'left' ? 'flex-end' : 'flex-start', paddingTop: '4%' }}>
        <View style={{ position: 'relative' }}>
          {/* Year Circle */}
          <View
            style={[
              styles.circle,
              {
                left: item.position === 'left' ? scale(34) : scale(-34),
                // left: item.position === 'left' ? '45%' : '-10%',
                // justifyContent: item.position === 'left' ? 'flex-end' : 'flex-start',
              },
            ]}
          >
            <Text style={styles.circleText}>{item.year}</Text>
          </View>
  
          {/* Arrow */}
          {
            (Platform.OS === 'web') ? renderArrow(item?.position) : <View />
          }
          
          {/* {renderArrow(item?.position)} */}
          
        </View>
  
        {/* Content */}
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );   

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: 'transparent', paddingTop: 0 }]}
    >
      <View style={styles.timelineContainer}>
        {/* Vertical timeline line */}
        <View style={styles.verticalLine} />
  
        {/* Timeline items */}
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item: any) => item?.id.toString()}
          numColumns={1}
          contentContainerStyle={styles.gridContainer}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 40,
    // backgroundColor: 'red', // '#4ca1af', // gradient top
    flexGrow: 1,
  },
  timeline: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  entryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    width: '47%', // scale(140),
    elevation: 3,
  },
  cardLeft: {
    alignItems: 'flex-end',
    marginLeft: scale(-2),
    marginTop: verticalScale(-130),
    width: scale(150),
    // backgroundColor: 'red'
    // borderRightWidth: 5,
    // borderRightColor: 'red'
  },
  cardRight: {
    alignItems: 'flex-start',
    marginLeft: scale(184),
    marginTop: verticalScale(-90),
    width: scale(150),
  },

  gridContainer: {
    padding: 30,
    // backgroundColor: 'red',
    width: '98%', // scale(400)
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  gridItem: {
    flex: 1,
    // margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 20,
    elevation: 3,
  },

  arrowRight: {
    position: 'absolute',
    top: -7,
    left: scale(-11),
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#ff7400',
  },
  
  arrowLeft: {
    position: 'absolute',
    top: -7,
    right: scale(-11.7),
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#ff7400',
  },

  timelineContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
  },
  
  verticalLine: {
    position: 'absolute',
    width: 2,
    backgroundColor: '#ff7400',
    top: 0,
    bottom: 0,
    left: '49%',
    marginLeft: -1,
    zIndex: -1,
  },  

  centerColumn: {
    width: 5,
    height: 300,
    // marginTop: '70%',
    // marginTop: -40,
    // alignItems: 'center',
    alignContent: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red'
  },

  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#ff7400',
    marginTop: -25,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: -20,
    marginLeft: scale(2),
    // backgroundImage: 'url(/assets/media/images/arrow-right-solid.svg)',
    // backgroundSize: 'fill',
    // backgroundPosition: '10'
  },

  circleText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // arrowRight: {
  //   width: 0,
  //   height: 0,
  //   borderTopWidth: 10,
  //   borderBottomWidth: 10,
  //   borderLeftWidth: 15,
  //   borderTopColor: 'transparent',
  //   borderBottomColor: 'transparent',
  //   borderLeftColor: '#f2f2f2',
  //   alignSelf: 'flex-start',
  //   right: scale(-5),
  //   // marginRight: 5,
  //   // marginBottom: 5,
  //   marginTop: -290,
  //   // backgroundColor: 'red'
  // },

  // arrowLeft: {
  //   width: 0,
  //   height: 0,
  //   borderTopWidth: 10,
  //   borderBottomWidth: 10,
  //   borderRightWidth: 15,
  //   borderTopColor: 'transparent',
  //   borderBottomColor: 'transparent',
  //   borderRightColor: '#f2f2f2',
  //   alignSelf: 'flex-start',
  //   left: scale(25),
  //   // marginLeft: 55,
  //   marginBottom: -7,
  //   marginTop: -280,
  // },

  cardSpacer: {
    // width: scale(190)// '45%',
    // width: scale(10)// '45%',
  },

  cardSpacerLeft: {
    // width: '0.5%'//scale(25)// '45%',
    // width: '90.5%'//scale(25)// '45%',
  },

  cardSpacerRight: {
    // width: '44.5%' //scale(190)// '45%',
    // width: '48.5%' //scale(190)// '45%',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },

  subtitle: {
    fontWeight: '600',
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    lineHeight: 18,
  },
});


export default Work;
