import { HeaderTitle } from '@react-navigation/elements';
import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

const programming_skills = [
    {
        id: 'java',
        title: 'Java',
        level: 80
    },
    {
        id: 'csharp',
        title: 'C#',
        level: 70
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        level: 85
    },
    {
        id: 'html5',
        title: 'HTML5',
        level: 88
    },
    {
        id: 'css3',
        title: 'CSS3',
        level: 83
    },
    {
        id: 'cpp',
        title: 'C++',
        level: 60
    },
    {
        id: 'sql',
        title: 'SQL',
        level: 76
    },
    {
        id: 'nosql',
        title: 'NoSQL',
        level: 80
    },
    {
        id: 'pascal',
        title: 'Delphi (Pascal)',
        level: 40
    }
];

const devops_skills = [
    {
        id: 'git',
        title: 'Git',
        level: 75
    },
    {
        id: 'docker',
        title: 'Docker',
        level: 80
    },
    {
        id: 'npm',
        title: 'NPM',
        level: 70
    },
    {
        id: 'jest',
        title: 'Jest',
        level: 50
    },
    {
        id: 'junit',
        title: 'JUnit',
        level: 50
    },
    {
        id: 'yarn',
        title: 'Yarn',
        level: 30
    },
    {
        id: 'webpack',
        title: 'WebPack',
        level: 50
    },
    {
        id: 'travis-ci',
        title: 'Travis CI',
        level: 30
    },
    {
        id: 'jenkins',
        title: 'Jenkins',
        level: 30
    }
];

const soft_skills = [
    {
        id: 'public-speaking',
        title: 'Public Speaking',
        level: 45
    },
    {
        id: 'communication',
        title: 'Communication',
        level: 80
    },
    {
        id: 'flexibility',
        title: 'Flexibility',
        level: 90
    },
    {
        id: 'critical-thinking',
        title: 'Critical Thinking',
        level: 91
    },
    {
        id: 'professionalism',
        title: 'Professionalism',
        level: 100
    },
    {
        id: 'courtesy',
        title: 'Courtesy',
        level: 100
    },
    {
        id: 'integrity',
        title: 'Integrity',
        level: 100
    },
    {
        id: 'work-ethic',
        title: 'Work Ethic',
        level: 100
    },
    {
        id: 'team-work',
        title: 'Team Work',
        level: 100
    }
];

export const SkillsView = ({ navigation }: any) => {
    return (
        <View id="skills-container" style={{ padding: 10 }}>
            <HeaderTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>Skills Matrix</HeaderTitle>
            <SafeAreaView
                id="skill-bars-container"
                className="row"
                style={{ width: '98%', margin: 'auto' }}>

                {/* <SafeAreaView id="programming-skillss" className="col-lg-6" style={{ top: 20, borderBottomColor: '#343434', borderWidth: 5 }}> */}
                <SafeAreaView id="programming-skills" className="col-lg-6" style={[ styles.card, { marginBottom: 50, padding: 20 } ]}>
                    <View className='skill-bar-container'>
                        {/* <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Programming Skills</h3> */}
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Programming Skills</Text>
                        {/* <View style={{ display: 'block' }}> */}
                        <View>
                            {
                                programming_skills.map((skill, index) => (
                                    <View key={skill.id} className='row'>
                                        <View className='col-lg-4'>
                                            <Text style={{
                                                marginTop: 0,
                                                marginRight: 10,
                                                marginBottom: 0,
                                                marginLeft: 0,
                                                textAlign: 'left',
                                                // float: 'left'
                                                }}>
                                                    {skill.title}
                                            </Text>
                                        </View>
                                        <View className='col-lg-4'>
                                            <View id={`skill-bar-${index}`} className='skill-bar'>
                                                <View id={`skill-level-${index}`} style={{ width: `${skill.level}%`, height: 5, backgroundColor: '#ff7400', borderRadius: '5px' }} />
                                                {/* <View style={{ width: 20, height: 20, backgroundColor: '#ff7400', borderRadius: '20px', margin: `-13px 0px 0px ${skill.level - 1}%` }} /> */}
                                                <View style={{
                                                    width: 20,
                                                    height: 20,
                                                    backgroundColor: '#ff7400',
                                                    borderRadius: 20,
                                                    marginTop: -13,
                                                    marginRight: 0,
                                                    marginBottom: 0,
                                                    marginLeft: `${skill.level - 1}%`
                                                    }} />
                                            </View>
                                        </View>
                                        <View className='col-lg-4'>
                                            <Text
                                                className='skill-level'
                                                style={{
                                                textAlign: 'right',
                                                // float: 'right'
                                                }}>
                                                    {skill.level}%
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </SafeAreaView>

                <SafeAreaView id="devops-skills" className="col-lg-6" style={[ styles.card, { marginBottom: 50, padding: 20 } ]}>
                    <View className='skill-bar-container'>
                        <HeaderTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>DevOps Skills</HeaderTitle>
                        {/* <View style={{display: 'block' }}> */}
                        <View>
                            {
                                devops_skills.map((skill, index) => (
                                    <View key={skill.id} className='row'>
                                        <View className='col-lg-4'>
                                            <Text
                                                style={{
                                                    marginTop: 0,
                                                    marginRight: 10,
                                                    marginBottom: 0,
                                                    marginLeft: 0,
                                                    textAlign: 'left',
                                                    // float: 'left'
                                                }}>
                                                    {skill.title}
                                            </Text>
                                        </View>
                                        <View className='col-lg-4'>
                                            <View id={`skill-bar-${index}`} className='skill-bar'>
                                                <View id={`skill-level-${index}`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        height: 5,
                                                        backgroundColor: '#ff7400',
                                                        borderRadius: 5
                                                    }} />
                                                <View style={{
                                                    width: 20,
                                                    height: 20,
                                                    backgroundColor: '#ff7400',
                                                    borderRadius: 20,
                                                    marginTop: -13,
                                                    marginRight: 0,
                                                    marginBottom: 0,
                                                    marginLeft: `${skill.level - 1}%`
                                                }}/>
                                            </View>
                                        </View>
                                        <View className='col-lg-4'>
                                            <Text
                                                className='skill-level'
                                                style={{
                                                    textAlign: 'right',
                                                    // float: 'right'
                                                }}>
                                                    {skill.level}%
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </SafeAreaView>
                
                <SafeAreaView id="soft-skills" className="col-lg-6" style={[ styles.card, { padding: 20 } ]}>
                    <View className='skill-bar-container'>
                        <HeaderTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>Soft Skills</HeaderTitle>
                        {/* <View style={{ display: 'block' }}> */}
                        <View>
                            {
                                soft_skills.map((skill, index) => (
                                    <View key={skill.id} className='row'>
                                        <View className='col-lg-4'>
                                            <Text style={{
                                                marginTop: 0,
                                                marginRight: 10,
                                                marginBottom: 0,
                                                marginLeft: 0,
                                                textAlign: 'left',
                                                // float: 'left'
                                            }}>
                                                {skill.title}
                                            </Text>
                                        </View>

                                        <View className='col-lg-4'>
                                            <View id={`skill-bar-${index}`} className='skill-bar'>
                                                <View
                                                    id={`skill-level-${index}`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        height: 5,
                                                        backgroundColor: '#ff7400',
                                                        borderRadius: 5
                                                    }} />
                                                <View
                                                    style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundColor: '#ff7400',
                                                        borderRadius: 20,
                                                        marginTop: -13,
                                                        marginRight: 0,
                                                        marginBottom: 0,
                                                        marginLeft: `${skill.level - 1}%`
                                                    }} />
                                            </View>
                                        </View>

                                        <View className='col-lg-4'>
                                            <Text
                                                className='skill-level'
                                                style={{
                                                    textAlign: 'right',
                                                    // float: 'right'
                                                }}>
                                                    {skill.level}%
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    width: '77%', // scale(140),
    elevation: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default SkillsView;
