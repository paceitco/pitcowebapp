import React from 'react'
import Skill from '../types/Skill'

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

export const SkillsPartial = ({ navigation }: any) => {
    return (
        <div id="skills-container">
            <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>My current progress in my skill-set</h2>
            <div
                id="skill-bars-container"
                className="row"
                style={{ width: '90%', margin: 'auto' }}>
                <div id="programming-skills" className="col-lg-6">
                    <Skill skills_category='Programming Skills' skills={programming_skills} />
                </div>
                <div id="devops-skills" className="col-lg-6">
                    <Skill skills_category='DevOps Skills' skills={devops_skills} />
                </div>

                <div id="soft-skills" className="col-lg-6">
                    <Skill skills_category='Soft Skills' skills={soft_skills} />
                </div>
            </div>
        </div>
    );
};

export default SkillsPartial;
