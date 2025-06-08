import { HeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { verticalScale } from 'react-native-size-matters';
import styled from 'styled-components';

// const GithubLink = styled.a`
//     width: 30px;
//     height: 30px;
//     margin: 0px auto 0px auto;
//     background: url(/assets/media/footer/github-logo.svg);
//     backgroundSize: contain
//     &:hover
//     {
//         background-color: #fff;
//         border-radius: 30px;
//     }
// `;

// const LinkedinLink = styled.a`
//     width: 30px;
//     height: 30px;
//     margin: 0px auto 0px auto;
//     background: url(/assets/media/footer/linkedin-logo.svg);
//     backgroundSize: contain
//     &:hover
//     {
//         background-color: #fff;
//         border-radius: 5px;
//     }
// `;

export const FooterView = ({ navigation, style }: any) => {
    return (
        <SafeAreaView style={[{ bottom: verticalScale(-180), backgroundColor: '#56b4d3', }, style]}>
            <View>
                {/*
                    <Text style={{ width: '80%', textAlign: 'center', margin: '10px auto 0px auto', borderRadius: '10px', paddingTop: '10px', color: '#fff', backgroundColor: 'rgba(0,0,0,.4)' }}>
                        At some point in the near future I'd like to work with Virtual Reality <span role="img" aria-label="VR Emoji">🌋</span> and/or Augmented Reality systems, 🗺 use big data 🗄 (and neural nets 🕸) to make the lives of people easier/happier 🌍 🙂 and maybe embedded systems, robots anyone? 🤖
                    </Text> 
                */}

                <Text style={{ textAlign: 'center', color: '#fff', marginTop: 20 }}>
                    You can also find a printer friendly version of my CV here (TODO: link)
                    {/* <a href='http://resume.casper.ndlovu.website/' target="_blank" rel="noreferrer">here</a> */}
                </Text>

                {/* <br /> */}
                
                <SafeAreaView style={{ display: 'flex' }}>
                    {/* <GithubLink href="https://github.com/Cazs" target="_blank" rel="nofollow noopener noreferrer" style={{ marginRight: '-100px' }} /> */}
                    <Text style={{ textAlign: 'center', color: '#fff', marginTop: 20 }} role="img" aria-label="Ghost Emoji">👻</Text>
                    {/* <LinkedinLink href="https://www.linkedin.com/in/casper-ndlovu" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: '-100px' }} /> */}
                </SafeAreaView>
            </View>
        </SafeAreaView>
        
    );
}

export default FooterView;
