import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ProductListingScreen from './ProductListingScreen';
import IntroductionScreen, { IntroductionView } from './IntroductionView';
import SkillsPartial, { SkillsView } from './SkillsView';
import CareerTimeline, { CareerTimelineView } from './CareerTimelineView';
import StackView from './StackView';
import ProjectsView from './ProjectsView';
import PetProjectsView from './PetProjectsView';
import FooterView from './FooterView';
import NavView from './NavView';
import Work from './Work';
import TimelineView from './TimelineViewComponent';
import MapView, { Marker, Provider } from 'react-native-maps';
// import PriceMarker from './common/PriceMarker';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -25.962626;
const LONGITUDE = 28.164955;
const LATITUDE_DELTA = 0.0999;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const IMAGES = [
  // 'assets/media/slideshow/aurora.jpg',
  'assets/media/slideshow/cover_photo.jpg',
  // 'assets/media/slideshow/galaxies.jpg',
  // 'assets/media/slideshow/oriens-belt.jpg',
  'assets/media/slideshow/output_320x240.png',
  'assets/media/slideshow/pc_scaled.png',
  // 'assets/media/slideshow/rockets-in-the-sky.jpg',
  'assets/media/slideshow/slide-0.jpg',
  'assets/media/slideshow/slide-1.jpg',
  'assets/media/slideshow/slide-2.jpg',
  'assets/media/slideshow/slide-3.jpg',
  'assets/media/slideshow/slide-4.jpg',
  'assets/media/slideshow/slide-5.jpg',
  'assets/media/slideshow/slide-6.jpg',
  'assets/media/slideshow/slide-7.jpg',
  'assets/media/slideshow/slide-8.jpg',
  'assets/media/slideshow/slide-9.jpg'
];

const IMAGE_RATINGS = [4, 3, 5, 2, 5, 4, 3, 5, 1, 4];

const CATEGORY_CARDS = [
  { name: 'Restaurant', icon: 'https://img.icons8.com/ios-filled/50/000000/restaurant.png' },
  { name: 'Night Club', icon: 'https://img.icons8.com/ios-filled/50/000000/cocktail.png' },
  { name: 'Car Show', icon: 'https://img.icons8.com/ios-filled/50/000000/car.png' },
  { name: 'Farmers Market', icon: 'https://img.icons8.com/ios-filled/50/000000/market-square.png' },
  { name: 'Child Friendly', icon: 'https://img.icons8.com/ios-filled/50/000000/children.png' },
  { name: 'Go Karting', icon: 'https://img.icons8.com/ios-filled/50/000000/go-kart.png' },
  { name: 'Extreme Sports', icon: 'https://img.icons8.com/ios-filled/50/000000/parachute.png' },
  { name: 'Sports', icon: 'https://img.icons8.com/ios-filled/50/000000/football.png' },
  { name: 'Fan Park', icon: 'https://img.icons8.com/ios-filled/50/000000/stadium.png' },
  { name: 'Bar', icon: 'https://img.icons8.com/ios-filled/50/000000/bar.png' },
  { name: 'Outdoors', icon: 'https://img.icons8.com/ios-filled/50/000000/trekking.png' },
  { name: 'Mount Biking', icon: 'https://img.icons8.com/ios-filled/50/000000/bicycle.png' },
  { name: 'Community Service', icon: 'https://img.icons8.com/ios-filled/50/000000/helping-hand.png' },
  { name: 'Popup Store', icon: 'https://img.icons8.com/ios-filled/50/000000/shop.png' },
];

const renderStarRating = (rating = 4.5) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

  return (
    <SafeAreaView  style={styles.starRating}>
      {[...Array(fullStars)].map((_, i) => (
        <Image
          key={`full-${i}`}
          source={{ uri: 'https://img.icons8.com/ios-filled/20/faad14/star.png' }}
          style={styles.star}
        />
      ))}
      {hasHalfStar && (
        <Image
          key="half"
          source={{ uri: 'https://img.icons8.com/ios-filled/20/faad14/star-half-empty.png' }}
          style={styles.star}
        />
      )}
      {[...Array(5 - totalStars)].map((_, i) => (
        <Image
          key={`empty-${i}`}
          source={{ uri: 'https://img.icons8.com/ios-filled/20/cccccc/star.png' }}
          style={styles.star}
        />
      ))}
    </SafeAreaView>
  );
};

// const LandingScreen: React.FC = () => {
export const LandingScreen = ({ navigation, style }: any) => {
  // const navigation = useNavigation<any>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [
    searchText,
    setSearchText,
    region = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    coordinate = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    amount = 99,
    provider = 'google'
  ] = useState('');

  // const intervalId = useRef<NodeJS.Timeout | null>(null);
  // let intervalId: number = 0;
  let intervalId: string | number | NodeJS.Timeout | undefined; //: NodeJS.Timeout;

  useEffect(() => {
    intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (_evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        const SWIPE_THRESHOLD = 50;
        if (gestureState.dx > SWIPE_THRESHOLD) {
          setCurrentImageIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }
      },
    })
  ).current;

  const renderImageSlide = () => (
    <SafeAreaView  style={styles.slideshowContainer} {...panResponder.panHandlers}>
      <Image
        source={{ uri: IMAGES[currentImageIndex] }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* <SafeAreaView style={styles.centeredCompanyName}>
        <Text style={styles.companyNameText}>Company Name {currentImageIndex}</Text>
      </SafeAreaView>

      {renderStarRating(IMAGE_RATINGS[currentImageIndex])}

      <SafeAreaView style={styles.distanceBadge}>
        <Text style={styles.distanceText}>1.2 km</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.popularityTag}>
        <Text style={styles.popularityText}>Featured</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.vipTag}>
        <Text style={styles.vipText}>VIP</Text>
      </SafeAreaView> */}

      <SafeAreaView  style={styles.indicatorContainer}>
        {IMAGES.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentImageIndex(index)}
            style={[
              styles.indicatorDot,
              index === currentImageIndex && styles.activeDot,
            ]}
          />
        ))}
      </SafeAreaView>
    </SafeAreaView>
  );

  const renderCategoryCards = () => (
      <FlatList
        horizontal
        data={CATEGORY_CARDS}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        style={styles.categoryListContainer}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.categoryCard}>
              <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </SafeAreaView>
          )} />
  );

  const renderMobileTopNav = () => (
    <SafeAreaView  style={styles.topRow}>
      <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Register')}>
        <Ionicons name="chevron-back" size={24} color="#556B2F" />
        <Text style={styles.topButtonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.topButtonText}>Filter</Text>
        <Ionicons name="options-outline" size={24} color="#556B2F" />
      </TouchableOpacity>
    </SafeAreaView>
  );

  const renderMobileSearch = () => (
    <SafeAreaView  style={styles.searchBar}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png' }}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#666"
        />
      </SafeAreaView>
  );

  const items = [
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
  ]
  
  const workHistoryItems = [
    {
      id: 0,
      year: '2015',
      title: 'Patrish Mobile Nails (2015/03/01 ­- 2016/04/31)',
      subtitle: '',
      description: 'My role at PMN was to help uplift the company’s online presence by developing and maintaining a modern, responsive and SEO compliant web application. For this project I initially used pHp with MySQL, and eventually rewrote the project in NodeJS.',
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
      year: '2016',
      title: 'Omega Fire & Security (2016/05/01 - 2018/03/31)',
      subtitle: '',
      description:
        'My primary role at Omega was to develop an internal tool to help the company better manage various aspects of its business operations such as, human resource management, project management, quoting, invoicing, task management, time &amp; attendance as well as a policy/regulatory document ­management system - essentially a miniature ERP system.',
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
    {
      id: 2,
      year: '2018',
      title: 'Investec Bank (2018/04/01 - 2023/12/31)',
      subtitle: '',
      description: 'My primary role at Investec is to write and maintain the code/applications that are used by different communities within the business (Private Bankers, Property Bankers, Credit Officers, Legal Risk Officers, the Operations Support team and sometimes the development/engineering team) while also adhering to the code quality standards (TDD, SOLID, DRY, documentation, naming conventions, maintaining our applications and making sure that they\'re up-to-date and don\'t have any security vulnerabilities etc.) set by the team and industry. My secondary role is to mentor/guide new joiners & team members, innovating and keeping up with the ever-changing world of software development (learning new technologies etc.) and assist the Operations Support team with resolving production issues.',
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
      id: 3,
      year: '2024',
      title: 'Sanlam (2024/01/01 - 2024/12/31)',
      subtitle: '',
      description: `
        My primary role at Sanlam is to write and maintain the code/applications that are used by 
        different communities within the business while also adhering to the code quality standards 
        (TDD, SOLID, DRY, ETL, documentation, naming conventions, maintaining our applications and 
        making sure that they're up-to-date and don't have any security vulnerabilities etc.) set by 
        the team and industry.
        My day-to-day activities involve building and maintaining internal applications & APIs to 
        facilitate the client onboading, retention and assistance processes - which includes various 
        client-facing and internal applications for individuals & corporations, regulatory/compliance 
        systems, decomissioning/upgrading legacy systems and/or components/frameworks (e.g VB.NET to C#, 
        Angular upgrades, on-premises to cloud upgrades etc.), and to support of aforementioned systems.
      `,
      position: 'right',
      styles: {
        // marginLeft: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        // left: scale(5)
        left: '25.4%'
      }
    },
  ]

  return (
    <LinearGradient
        colors={['#56b4d3', '#348f50', '#192f6a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
      <ScrollView style={{ paddingTop: 1 }} className="landing-view-container">
        {/* <NavView key="nav-component" /> */}
        
        {
          (Platform.OS !== 'web') ? renderMobileTopNav() : <View />
        }
        
        {
          (Platform.OS !== 'web') ? renderMobileSearch() : <View />
        }

        { renderImageSlide() }

        {
          (Platform.OS !== 'web') ? renderCategoryCards() : <View />
        }

        {/* <ProductListingScreen style={{ marginTop: verticalScale(20), marginBottom: verticalScale(30) }} /> */}
        {/* <Nav key="nav-component" />
        <Slideshow key="slideshow-component" images={images} /> */}
        <IntroductionView key="introduction-component" style={{ marginTop: verticalScale(70) }} />

        {/* <View style={{ paddingTop: verticalScale(630) }}>
          <MapView
            provider={provider}
            style={styles.map}
            initialRegion={region}
          >
            <Marker coordinate={coordinate}>
              {/* <PriceMarker amount={amount} /> *
            </Marker>
          </MapView>
        </View> */}

        <SkillsView key="skills-component" />
        <TimelineView key="education-timeline-component" items={items} showHeaderText={true} headerText='Career Timeline' headerStyles={{ color: '#fff', textAlign: 'center', paddingBottom: 30, fontWeight: 'bold' }}/>
        <TimelineView key="work-timeline-component" items={workHistoryItems} showPresentMarker={true} presentMarkerText="Now" />
        <StackView key="stack-component" />
        {/* <ProjectsView key="projects-component" /> */}
        <PetProjectsView key="pet-projects-component" />
        <FooterView key="footer-component" />
      </ScrollView>
    </LinearGradient>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(5),
    backgroundColor: '#fff',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  // landingViewContainer: {
  //   backgroundColor: (145deg, #56b4d3, #348f50);
  //   maxWidth: 100%;
  //   overflowX: hidden;
  // },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  
  topButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  
  topButtonText: {
    fontSize: 14,
    color: '#556B2F',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBar: {
    position: 'absolute',
    top: verticalScale(40),
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    zIndex: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(45),
  },
  searchIcon: {
    width: 20,
    height: 20,
    // tintColor: '#555',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  slideshowContainer: {
    borderRadius: scale(10),
    overflow: 'hidden',
    marginBottom: verticalScale(20),
    position: 'relative',
    top: verticalScale(70),
  },
  centeredCompanyName: {
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  companyNameText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: verticalScale(300),
    borderRadius: scale(10),
  },
  centeredTextContainer: {
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starRating: {
    flexDirection: 'row',
    position: 'absolute',
    top: verticalScale(10),
    left: scale(10),
    backgroundColor: '#fff',
    padding: scale(4),
    borderRadius: scale(6),
  },
  star: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(2),
  },
  distanceBadge: {
    position: 'absolute',
    top: verticalScale(10),
    right: scale(10),
    backgroundColor: '#000000aa',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(6),
  },
  distanceText: {
    color: '#fff',
    fontSize: moderateScale(12),
  },
  popularityTag: {
    position: 'absolute',
    bottom: verticalScale(10),
    left: scale(10),
    backgroundColor: '#ff8800',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(6),
  },
  popularityText: {
    color: '#fff',
    fontSize: moderateScale(12),
  },
  vipTag: {
    position: 'absolute',
    bottom: verticalScale(10),
    right: scale(10),
    backgroundColor: '#ff8800',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(6),
  },
  vipText: {
    color: '#fff',
    fontSize: moderateScale(12),
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: verticalScale(10),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  indicatorDot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: '#ccc',
    marginHorizontal: scale(3),
  },
  activeDot: {
    backgroundColor: '#000',
  },
  categoryListContainer: {
    top: verticalScale(60),
    maxHeight: verticalScale(75),
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  categoryList: {
    // paddingVertical: verticalScale(50),
    // height: verticalScale(15),
    // backgroundColor: 'red',
  },
  categoryCard: {
    alignItems: 'center',
    marginHorizontal: scale(8),
    width: scale(60),
  },
  categoryIcon: {
    marginTop: verticalScale(4),
    width: scale(20),
    height: scale(20),
    marginBottom: verticalScale(4),
  },
  categoryText: {
    fontSize: moderateScale(10),
    textAlign: 'center',
  },
});
