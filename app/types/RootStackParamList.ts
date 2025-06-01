export interface ScreenProps {
    navigation?: any;
    provider?: any;
}

export type RootStackParamList = {
    Home: ScreenProps;
    Landing: ScreenProps;
    // Register: ScreenProps;
    // MainTabs: ScreenProps;
    Explore: ScreenProps;
    // other screens...
};

export default RootStackParamList;
