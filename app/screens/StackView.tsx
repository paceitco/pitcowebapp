import React, { useCallback, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { HeaderTitle } from '@react-navigation/elements';
import { Animated, FlatList, Image, View, TouchableOpacity, Text, StyleSheet, Dimensions, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

export const StackView = ({ navigation }: any) => {
    const route = useRoute();
    const { renderCustomBackground = false } = route.params || {} as any;
    const [items, setItems] = useState<any[]>([
        [
            {
                id: 0,
                imageName: "Mac OS X",
                imageUrl: "/assets/media/stack/macosx.png",
                imageWidth: 200,
                imageHeight: 150,
            },
            {
                id: 1,
                imageName: "Windows 11",
                imageUrl: "/assets/media/stack/windows-11.png",
                imageWidth: 350,
                imageHeight: 55,
                marginTop: 60,
            },
            {
                id: 2,
                imageName: "Linux",
                imageUrl: "/assets/media/stack/linux.png",
                imageWidth: 200,
                imageHeight: 130,
                marginTop: 20,
            },
            {
                id: 3,
                imageName: "Android",
                imageUrl: "/assets/media/stack/android.png",
                imageWidth: 135,
                imageHeight: 150,
            },
        ],
        // TODO: JavaFX & Hibernate
        [
            {
                id: 4,
                imageName: "Java",
                imageUrl: "/assets/media/stack/java.png",
                imageWidth: 170,
                imageHeight: 150,
            },
            {
                id: 5,
                imageName: "Spring Boot",
                imageUrl: "/assets/media/stack/spring.png",
                imageWidth: 200,
                imageHeight: 65,
                marginTop: 50,
            },
            {
                id: 6,
                imageName: "Maven",
                imageUrl: "/assets/media/stack/maven.png",
                imageWidth: 150,
                imageHeight: 50,
                marginTop: 50,
            },
            {
                id: 7,
                imageName: "JUnit",
                imageUrl: "/assets/media/stack/junit.png",
                imageWidth: 130,
                imageHeight: 80,
                marginTop: 50,
            },
        ],
        [
            {
                id: 8,
                imageName: "MongoDB",
                imageUrl: "/assets/media/stack/mongo.png",
                imageWidth: 350,
                imageHeight: 90,
                marginTop: 50,
            },
            {
                id: 9,
                imageName: "NodeJS",
                imageUrl: "/assets/media/stack/node.png",
                imageWidth: 190,
                imageHeight: 120,
                marginTop: 20,
            },
            {
                id: 10,
                imageName: "ReactJS",
                imageUrl: "/assets/media/stack/reactjs.png",
                imageWidth: 200,
                imageHeight: 150,
            },
            {
                id: 11,
                imageName: "ElectronJS",
                imageUrl: "/assets/media/stack/electronjs.png",
                imageWidth: 127,
                imageHeight: 139,
            },
        ],
        // TODO: Angular
        [
            {
                id: 12,
                imageName: "Microsoft C#.NET",
                imageUrl: "/assets/media/stack/csharp.png",
                imageWidth: 140,
                imageHeight: 140,
            },
            {
                id: 13,
                imageName: "Microsoft VB.NET",
                imageUrl: "/assets/media/stack/vb.png",
                imageWidth: 140,
                imageHeight: 140,
            },
            {
                id: 14,
                imageName: "Microsoft ASP.NET",
                imageUrl: "/assets/media/stack/asp.png",
                imageWidth: 200,
                imageHeight: 150,
            },
            {
                id: 15,
                imageName: "Microsoft SQL Server",
                imageUrl: "/assets/media/stack/sqlserver.png",
                imageWidth: 200,
                imageHeight: 150,
            },
        ],
        [
            {
                id: 16,
                imageName: "Microsoft Access",
                imageUrl: "/assets/media/stack/msaccess.png",
                imageWidth: 150,
                imageHeight: 120,
                marginTop: 20,
            },
            {
                id: 17,
                imageName: "Microsoft Azure",
                imageUrl: "/assets/media/stack/azure.png",
                imageWidth: 200,
                imageHeight: 120,
                marginTop: 30,
            },
            {
                id: 18,
                imageName: "Gitlab",
                imageUrl: "/assets/media/stack/gitlab.png",
                imageWidth: 300,
                imageHeight: 65,
                marginTop: 80,
            },
            {
                id: 19,
                imageName: "Github",
                imageUrl: "/assets/media/stack/github.png",
                imageWidth: 300,
                imageHeight: 60,
                marginTop: 80,
            },
        ],
        [
            {
                id: 20,
                imageName: "Atlassian Jira",
                imageUrl: "/assets/media/stack/jira.png",
                imageWidth: 300,
                imageHeight: 90,
                marginTop: 50,
            },
            {
                id: 21,
                imageName: "Atlassian Confluence",
                imageUrl: "/assets/media/stack/confluence.png",
                imageWidth: 325,
                imageHeight: 40,
                marginTop: 110,
            },
            {
                id: 22,
                imageName: "HTML5",
                imageUrl: "/assets/media/stack/html5.png",
                imageWidth: 140,
                imageHeight: 140,
                marginTop: 5,
            },
            {
                id: 23,
                imageName: "CSS3",
                imageUrl: "/assets/media/stack/css3.png",
                imageWidth: 90,
                imageHeight: 140,
                marginTop: 10,
            },
        ],
        // TODO: Typescript
        [
            {
                id: 24,
                imageName: "JavaScript",
                imageUrl: "/assets/media/stack/js.jpeg",
                imageWidth: 130,
                imageHeight: 120,
                marginTop: 20,
            },
            {
                id: 25,
                imageName: "Sass & Scss",
                imageUrl: "/assets/media/stack/sass.png",
                imageWidth: 200,
                imageHeight: 150,
                marginTop: 5,
            },
            {
                id: 26,
                imageName: "SQLite",
                imageUrl: "/assets/media/stack/sqlite.jpeg",
                imageWidth: 220,
                imageHeight: 110,
                marginTop: 20,
            },
            {
                id: 27,
                imageName: "SQL",
                imageUrl: "/assets/media/stack/sql.png",
                imageWidth: 140,
                imageHeight: 140,
                marginTop: 10,
            },
        ],
        [
            {
                id: 28,
                imageName: "C++",
                imageUrl: "/assets/media/stack/cpp.png",
                imageWidth: 140,
                imageHeight: 150,
                marginTop: 2,
            },
            {
                id: 29,
                imageName: "Delphi",
                imageUrl: "/assets/media/stack/delphi.png",
                imageWidth: 220,
                imageHeight: 150,
                marginTop: 5,
            },
            {
                id: 30,
                imageName: "pHp",
                imageUrl: "/assets/media/stack/php.png",
                imageWidth: 250,
                imageHeight: 130,
                marginTop: 20,
            },
            {
                id: 31,
                imageName: "pHp My Admin",
                imageUrl: "/assets/media/stack/phpmyadmin.png",
                imageWidth: 280,
                imageHeight: 150,
            },
        ],
        // TODO: GCP
        // [
        //     {
        //         id: 32,
        //         imageName: "MySQL",
        //         imageUrl: "/assets/media/stack/mysql.png",
        //         imageWidth: 200,
        //         imageHeight: 120,
        //         marginTop: 20,
        //     },
        //     {
        //         id: 33,
        //         imageName: "Digital Ocean",
        //         imageUrl: "/assets/media/stack/digitalocean.png",
        //         imageWidth: 200,
        //         imageHeight: 170,
        //     },
        //     {
        //         id: 34,
        //         imageName: "cPanel",
        //         imageUrl: "/assets/media/stack/cpanel.png",
        //         imageWidth: 180,
        //         imageHeight: 50,
        //         marginTop: 60,
        //     },
        //     {
        //         id: 35,
        //         imageName: "Google Maps API",
        //         imageUrl: "/assets/media/stack/maps.png",
        //         imageWidth: 200,
        //         imageHeight: 50,
        //         marginTop: 60,
        //     },
        // ],
        // [
        //     {
        //         id: 36,
        //         imageName: "Google Firebase",
        //         imageUrl: "/assets/media/stack/firebase.png",
        //         imageWidth: 200,
        //         imageHeight: 100,
        //         marginTop: 25,
        //     },
        //     {
        //         id: 37,
        //         imageName: "Google Analytics",
        //         imageUrl: "/assets/media/stack/analytics.png",
        //         imageWidth: 200,
        //         imageHeight: 150,
        //     },
        //     {
        //         id: 38,
        //         imageName: "Google Firebase",
        //         imageUrl: "/assets/media/stack/firebase.png",
        //         imageWidth: 200,
        //         imageHeight: 100,
        //         marginTop: 25,
        //     },
        //     {
        //         id: 39,
        //         imageName: "Google Analytics",
        //         imageUrl: "/assets/media/stack/analytics.png",
        //         imageWidth: 200,
        //         imageHeight: 150,
        //     },
        // ],
        // TODO: Quartz Scheduler, REST, SOAP, Event Sourcing, Microservices, Monoliths, Legacy Systems, Authentication, HTTPS/SSL, NestJS, NextJS, TypeORM, Postman, AWS, Kubernetes, Docker, Bash
    ]);

    const renderItem = ({ item }: any) => (
        // <View key={ "stack-view-container-" + item[0]?.id } className='row' style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        // <SafeAreaView key={ "stack-view-container-" + item[0]?.id } style={styles.gridItem}>
        <SafeAreaView key={ "stack-view-container-" + item[0]?.id } style={styles.gridContainer}>
            <View key={"container-column-a-" + item[0]?.id} className='col-lg-3' style={styles.gridItem}>
                {/* <Image key={"image-column-a-" + item[0]?.id} source={{ uri: item[0]?.imageUrl }} alt={ item[0]?.imageName } style={{ width: item[0]?.imageWidth, height: item[0]?.imageHeight }} /> */}
                <Image key={"image-column-a-" + item[0]?.id} source={{ uri: item[0]?.imageUrl }} alt={ item[0]?.imageName } style={[ styles.gridImage, { width: item[0]?.imageWidth, height: item[0]?.imageHeight, marginTop: item[0]?.marginTop || 0 }]} />
                <HeaderTitle key={"header-column-a-" + item[0]?.id} style={{ textAlign: 'center' }}>{ item[0]?.imageName }</HeaderTitle>
            </View>

            <View key={"container-column-b-" + item[1]?.id} className='col-lg-3' style={styles.gridItem}>
                <Image key={"image-column-b-" + item[1]?.id} source={{ uri: item[1]?.imageUrl }} alt={ item[1]?.imageName } style={[ styles.gridImage, { width: item[1]?.imageWidth, height: item[1]?.imageHeight, marginTop: item[1]?.marginTop || 0 }]} />
                <HeaderTitle key={"header-column-b-" + item[1]?.id} style={{ textAlign: 'center' }}>{ item[1]?.imageName }</HeaderTitle>
            </View>

            <View key={"container-column-c-" + item[2]?.id} className='col-lg-3' style={styles.gridItem}>
                <Image key={"image-column-c-" + item[2]?.id} source={{ uri: item[2]?.imageUrl }} alt={ item[2]?.imageName } style={[ styles.gridImage, { width: item[2]?.imageWidth, height: item[2]?.imageHeight, marginTop: item[2]?.marginTop || 0}]} />
                <HeaderTitle key={"header-column-c-" + item[2]?.id} style={{ textAlign: 'center' }}>{ item[2]?.imageName }</HeaderTitle>
            </View>

            <View key={"container-column-d-" + item[3]?.id} className='col-lg-3' style={styles.gridItem}>
                <Image key={"image-column-d-" + item[3]?.id} source={{ uri: item[3]?.imageUrl }} alt={ item[3]?.imageName } style={[ styles.gridImage, { width: item[3]?.imageWidth, height: item[3]?.imageHeight, marginTop: item[3]?.marginTop || 0 }]} />
                <HeaderTitle key={"header-column-d-" + item[3]?.id} style={{ textAlign: 'center' }}>{ item[3]?.imageName }</HeaderTitle>
            </View>
        </SafeAreaView>
    );

    {/* <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 30, borderRadius: '10px' }}> */}
    return (
        // <View style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', backgroundColor: '#fff', padding: 30, borderRadius: '10px' }}>
        // <View style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', padding: 30, borderRadius: '10px' }}>
        <View>
            <HeaderTitle style={{ textAlign: 'center', paddingBottom: 30, fontWeight: 'bold' }}>Stack History</HeaderTitle>
            
            <FlatList
                data={items}
                renderItem={renderItem}
                // keyExtractor={(item: any) => item?.id}
                keyExtractor={(item: any) => uuid.v4()}
                numColumns={ Platform.OS === 'web' ? 4 : 2 }
                contentContainerStyle={styles.gridImage}
                scrollEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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

    productListingHeadingText: {
        fontSize: 40,
        color: '#556B2F',
        fontWeight: '600',
        marginTop: 10,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    greenBar: {
        height: 20,
        backgroundColor: '#556B2F',
        marginTop: 25,
        width: '90%',
        borderRadius: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    exploreText: {
        fontSize: 14,
        color: '#556B2F',
    },

    backText: {
        position: 'absolute',
        left: 30,
        top: -22,
        fontSize: 14,
        color: '#556B2F',
    },

    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
    },

    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        marginBottom: 5,
        marginTop: 25,
    },

    menuItem: {
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },

    menuItemSelected: {
        backgroundColor: 'olive',
    },

    menuText: {
        fontSize: 14,
        color: '#333',
    },

    menuTextSelected: {
        color: '#fff',
    },

    subText: {
        fontSize: 12,
        color: 'gray',
        paddingHorizontal: 10,
        marginBottom: 8,
        marginTop: 20,
    },

    gridContainer: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'cyan',
        // borderWidth: 10,
        // borderStyle: 'solid',
    },

    gridItem: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: Platform.OS === 'web' ? 360 : 200, // width: '90%',
        height: 90,
        // borderColor: 'red',
        // borderWidth: 10,
        // borderStyle: 'solid',
    },

    gridImage: {
        // width: 'auto',
        // height: 'auto',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 8,
    },

    descriptionText: {
        color: 'grey',
        fontSize: 14,
        marginBottom: 6,
    },

    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    cartButton: {
        borderColor: 'olive',
        borderStyle: 'solid',
        borderCurve: 'circular',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 20,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StackView;