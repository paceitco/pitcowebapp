import { HeaderTitle } from '@react-navigation/elements';
import React from 'react'
import { SafeAreaView, View } from 'react-native';

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
        <View id="skills-containers">
            <HeaderTitle style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Skills Matrix</HeaderTitle>
            <SafeAreaView
                id="skill-bars-container"
                className="row"
                style={{ width: '98%', margin: 'auto' }}>

                <SafeAreaView id="programming-skills" className="col-lg-6">
                    <div className='skill-bar-container'>
                        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Programming Skills</h3>
                        <div style={{ display: 'block' }}>
                            {
                                programming_skills.map((skill, index) => (
                                    <div key={skill.id} className='row'>
                                        <div className='col-lg-4'>
                                            <p style={{ margin: '0px 10px 0px 0px', textAlign: 'left', float: 'left' }}>{skill.title}</p>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div id={`skill-bar-${index}`} className='skill-bar'>
                                                <div id={`skill-level-${index}`} style={{ width: `${skill.level}%`, height: '5px', backgroundColor: '#ff7400', borderRadius: '5px' }} />
                                                <div style={{ width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: `-13px 0px 0px ${skill.level - 1}%` }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <p className='skill-level' style={{ textAlign: 'right', float: 'right' }}>{skill.level}%</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </SafeAreaView>

                <SafeAreaView id="devops-skills" className="col-lg-6">
                    <div className='skill-bar-container'>
                        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>DevOps Skills</h3>
                        <div style={{ display: 'block' }}>
                            {
                                devops_skills.map((skill, index) => (
                                    <div key={skill.id} className='row'>
                                        <div className='col-lg-4'>
                                            <p style={{ margin: '0px 10px 0px 0px', textAlign: 'left', float: 'left' }}>{skill.title}</p>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div id={`skill-bar-${index}`} className='skill-bar'>
                                                <div id={`skill-level-${index}`} style={{ width: `${skill.level}%`, height: '5px', backgroundColor: '#ff7400', borderRadius: '5px' }} />
                                                <div style={{ width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: `-13px 0px 0px ${skill.level - 1}%` }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <p className='skill-level' style={{ textAlign: 'right', float: 'right' }}>{skill.level}%</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </SafeAreaView>
                
                <SafeAreaView id="soft-skills" className="col-lg-6">
                    <div className='skill-bar-container'>
                        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Soft Skills</h3>
                        <div style={{ display: 'block' }}>
                            {
                                soft_skills.map((skill, index) => (
                                    <div key={skill.id} className='row'>
                                        <div className='col-lg-4'>
                                            <p style={{ margin: '0px 10px 0px 0px', textAlign: 'left', float: 'left' }}>{skill.title}</p>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div id={`skill-bar-${index}`} className='skill-bar'>
                                                <div id={`skill-level-${index}`} style={{ width: `${skill.level}%`, height: '5px', backgroundColor: '#ff7400', borderRadius: '5px' }} />
                                                <div style={{ width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: `-13px 0px 0px ${skill.level - 1}%` }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <p className='skill-level' style={{ textAlign: 'right', float: 'right' }}>{skill.level}%</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    );
};

export default SkillsView;
