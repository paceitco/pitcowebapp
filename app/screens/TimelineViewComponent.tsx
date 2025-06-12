import { HeaderTitle } from '@react-navigation/elements';
import React, { useCallback, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, View, TouchableOpacity, Text, StyleSheet, Dimensions, Platform, SafeAreaView } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import uuid from 'react-native-uuid';

export type TimelineViewProps = {
  items: any[];
  showPresentMarker?: boolean;
  presentMarkerText?: string;
  headerText?: string;
  showHeaderText?: boolean;
  headerStyles?: object;
};

export const TimelineView = ( props: TimelineViewProps ) => {
  // const [items, setItems] = useState<any[]>([
  const [items, setItems] = useState<any[]>(props.items);

  const renderArrow = (position: string) => (
    <View
      style={
        position === 'left' ? styles.arrowLeft : styles.arrowRight
      }
    />
  );

  const renderItem = (item : any, index: number) => (
    <SafeAreaView
      key={"work-timeline-view-container-" + item?.id}
    >
      {/* <View style={{ alignItems: item.position === 'left' ? 'flex-end' : 'flex-start', paddingTop: '4%' }}> */}
      <View style={[styles.card, styles.gridItem, item.styles, { alignItems: item.position === 'left' ? 'flex-end' : 'flex-start' }]}>
        <View style={{ position: 'relative' }}>
          {/* Year Circle */}
          <View
            style={[
              styles.circle,
              {
                left: item.position === 'left' ? scale(42) : scale(-44),
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

      {/* Present Circle */}
      {
        index === items.length - 1 && props.showPresentMarker ? 
        (
          <View
            style={[
              styles.circle,
              {
                // position: 'absolute',
                // width: 70,
                // height: 70,
                borderRadius: 40,
                backgroundColor: '#ff7400',
                left: item.position === 'left' ? scale(Platform.OS === 'web' ? -9 : -4) : scale(Platform.OS === 'web' ? -9 : -4), // TODO: fix messy logic
                // left: item.position === 'left' ? scale(125) : scale(-44),
                top: 50,
                // bottom: 0,
                // left: item.position === 'left' ? scale(105) : scale(-40),
                // left: item.position === 'left' ? '46.6%' : '40.3%',
                
                // left: '46.6%',

                // left: scale(-34),
                // left: '47.7%',
                // left: '47.7%',
                // right: '47.7%',
                // marginLeft: -1,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: Platform.OS === 'web'? verticalScale(-56.7) : verticalScale(13.5), // TODO: fix messy logic
                zIndex: 10,
              }]}>
            <Text style={styles.circleText}>{ props.presentMarkerText }</Text>
          </View>
        ) : <View />
      }
      
    </SafeAreaView>
  );

  const renderHeaderText = (text?: string, styles?: object) => (
    <HeaderTitle style={[styles]}>{text}</HeaderTitle>
  );

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: 'transparent', paddingTop: 0 }]}>
      {
        props.showHeaderText ? renderHeaderText(props?.headerText, props?.headerStyles) : <View />
      }
      
      <View style={styles.timelineContainer}>
        {/* Vertical timeline line */}
        <View style={styles.verticalLine} />
  
        {/* Timeline items */}
        <FlatList
          data={items}
          renderItem={({item, index}) => renderItem(item, index)}
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
    padding: 20,
    elevation: 3,
  },

  arrowRight: {
    position: 'absolute',
    top: -7,
    left: scale(-21),
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
    right: scale(-19.7),
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
    borderTopColor: '#ff7400',
    borderTopWidth: 2,
    borderRadius: 20,
  },
  
  verticalLine: {
    position: 'absolute',
    width: 2,
    backgroundColor: '#ff7400',
    top: 0,
    bottom: 0,
    // bottom: 140,
    left: '49%',
    marginLeft: -1,
    zIndex: -1,
  },  

  centerColumn: {
    width: 5,
    // height: 300,
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


export default TimelineView;
