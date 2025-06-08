import { HeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { Animated, Image, View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export const ProjectsView = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{
            width: 90,
            //color: '#fff',
            backgroundColor: 'rgba(255,255,255,.6)',
            // marginTop: -40,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
            padding: 30,
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#fff'
        }}>
            <HeaderTitle style={{ textAlign: 'center', paddingBottom: 30, fontWeight: 'bold' }}>Project History</HeaderTitle>
            <View className='row'>
                <View className='col-lg-6'>
                    {/* <a href="http://www.pioneerdesigns.co.za/">Pioneer Designs</a> */}
                    <Text>Pioneer Designs</Text>
                </View>
                <View className='col-lg-6'>
                    {/* <a href="https://patrishnails.herokuapp.com/">Patrish Nails</a> */}
                    <Text>Patrish Nails</Text>
                </View>
                <View className='col-lg-6'>
                    {/* <a href="http://airotek.herokuapp.com/">Airotek Engineering</a> */}
                    <Text>Airotek Engineering</Text>
                </View>
                <View className='col-lg-6'>
                    {/* <a href="http://casper.ndlovu.website/">Casper's Resume</a> */}
                    <Text>Casper's Resume</Text>
                </View>
                <View className='col-lg-6'>
                    {/* <a href="http://icebreak.azurewebsites.net/">My group's 3rd year webapp's server and parts of the Android app.</a> */}
                    <Text>My group's 3rd year webapp's server and parts of the Android app.</Text>
                </View>
                <View className='col-lg-6'>
                    {/* <p style={{ color: '#000' }}>Also checkout some of my other projects on <a href="https://github.com/Cazs" target='_blank' rel="nofollow noopener noreferrer">GitHub</a></p> */}
                    <Text>
                        You can checkout some of my other projects on GitHub
                        {/* <a href="https://github.com/Cazs" target='_blank' rel="nofollow noopener noreferrer">GitHub</a></p> */}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProjectsView;
