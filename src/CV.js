import React from 'react';
import Resume from 'react-cv';

export const CV = () => {
  return (
    <Resume
      personalData={{
        name: 'Luis Hiram Díaz Sánchez',
        title: 'Web Developer',
        image:
          'https://res.cloudinary.com/db4t7rgdp/image/upload/v1603927010/jcnggdgr6l94ixlkxmmf.png',
        contacts: [
          { type: 'email', value: 'luishiram.ds@gmail.com' },
          { type: 'phone', value: '+52 (312) 150 88 19' },
          { type: 'location', value: 'Colima-Guadalajara, México' },
          {
            type: 'linkedin',
            value: 'linkedin.com/in/luis-hiram-díaz-sánchez-1b762a86',
          },
          { type: 'github', value: 'github.com/404' },
        ],
      }}
      sections={[
        {
          type: 'text',
          title: 'Career Profile',
          content:
            'Self-taught web developer, passionate about front-end technology and continuous learning in any area. Preference towards JavaScript as a programming language. Proactive. Teamwork. Foreign clients treatment. In search of new professional challenges.',
          icon: 'usertie',
        },

        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'Web Developer JR',
              company: 'Robert Bosch',
              description: (
                <ul>
                  <li>
                    Create and maintain services in an application from CISCO
                    (Cisco Prime Service Catalog), for customers all over the
                    world inside Bosch.
                  </li>
                  <li>Create and modify services inside the application.</li>
                  <li>Use of Javascript for validations and customizations.</li>
                  <li>
                    Integrate those services with external systems like:
                    databases, APIs, web services.
                  </li>
                  <li>
                    Create workflows for services from ordering, authorization
                    phase and delivery process.
                  </li>
                  <li>
                    Support of those services with the tool from BMC: Service
                    Management Tool. Communication directly with end user.
                  </li>
                </ul>
              ),

              datesBetween: 'Jul, 2019 - Present',
              descriptionTags: ['Javascript', 'React'],
            },
            {
              title: '3D Architectural Visualizer',
              company: 'Andres Escobar Arquitectos',
              datesBetween: 'Mar, 2017 - Jul, 2019',
            },
          ],
        },
        {
          type: 'tag-list',
          title: 'Skills Proficiency',
          icon: 'rocket',
          items: ['React', 'Javascript', 'CSS', 'SQL', 'SomeTech', 'CoolTech'],
        },
        {
          type: 'common-list',
          title: 'Languages',
          icon: 'language',
          items: [
            {
              authority: 'English',
              authorityMeta: 'Professional',
            },
            {
              authority: 'Spanish',
              authorityMeta: 'Native',
            },
          ],
        },
        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: 'Technical Analyst Programmer',
              authority: 'Universidad de Colima',
              rightSide: '2005 - 2008',
            },
            {
              title: 'Architect',
              authority: 'Instituto Tecnológico de Colima',
              rightSide: '2008 - 2013',
            },
          ],
        },
      ]}
      branding={false}
    />
  );
};
