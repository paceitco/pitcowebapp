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
import IntroductionScreen from './IntroductionScreen';
import SkillsPartial from './SkillsPartial';
import CareerTimeline from './CareerTimeline';
import StackView from './StackView';
import ProjectsView from './ProjectsView';
import PetProjectsView from './PetProjectsView';
import FooterView from './FooterView';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -25.962626;
const LONGITUDE = 28.164955;
const LATITUDE_DELTA = 0.0999;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const IMAGES = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/238/200/300',
  'https://picsum.photos/id/239/200/300',
  'https://picsum.photos/id/240/200/300',
  'https://picsum.photos/id/241/200/300',
  'https://picsum.photos/id/242/200/300',
  'https://picsum.photos/id/243/200/300',
  'https://picsum.photos/id/244/200/300',
  'https://picsum.photos/id/255/200/300',
  'https://picsum.photos/id/233/200/300',
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
  const [searchText, setSearchText] = useState('');

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

      <SafeAreaView style={styles.centeredCompanyName}>
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
      </SafeAreaView>

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
      )}
      />
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

  return (
    <LinearGradient
        colors={['#56b4d3', '#348f50', '#192f6a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
      <ScrollView style={{ paddingTop: 1 }} className="landing-view-container">
        {
          (Platform.OS !== 'web') ? renderMobileTopNav() : ''
        }

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

        {renderImageSlide()}

        {
          (Platform.OS !== 'web') ? renderCategoryCards() : ''
        }
        {/* {renderCategoryCards()} */}
        {/* <ProductListingScreen style={{ marginTop: verticalScale(20), marginBottom: verticalScale(30) }} /> */}
        {/* <Nav key="nav-component" />
        <Slideshow key="slideshow-component" images={images} /> */}
        <IntroductionScreen key="introduction-component" style={{ marginTop: verticalScale(70) }} />
        <SkillsPartial key="skills-component" />
        <CareerTimeline key="career-timeline-component" />
        <StackView key="stack-component" />
        <ProjectsView key="projects-component" />
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
    height: verticalScale(200),
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
