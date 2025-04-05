// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
      
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        style: 'primary',
        items: [
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          
          {
            position: 'left',
            label: 'Project',
            items: [
              
            
              {
                label: 'Description',
                to: '/description',
              },
              
              {
                label: 'Results',
                to: '/results',
              },
              {
                label: 'Modeling',
                to: '/model',
              },
              {
                label: 'Contribution',
                to: '/contribution',
              }
            ]
          },
          {
            position: 'left',
            label: 'Lab',
            items: [
              {
                label: 'Safety',
                to: '/safety',
              },
              {
                label: 'Experiments',
                to: '/experiments',
              },
              {
                label: 'Part Collection',
                to: '/part-collection',
              },
            
            ]

            
          },
          {
            position: 'left',
            label: 'Engineering',
            items: [
              {
                label: 'Engineering Success',
                to: '/engineering',
              },
              {
                label: 'Scaling',
                to: '/scaling',
              },
            ]
          },
          {
            position: 'left',
            label: 'Human Practices',
            items: [
              {
                label: 'Integrated Human Practices',
                to: '/human-practices',
              },
              {
                label: 'Entrepreneurship',
                to: '/entrepreneurship',
              },
              {
                label: 'Education',
                to: '/education',
              },

            ]
            
          },
          {
            position: 'left',
            label: 'Team',
            items: [
              {
                label: 'Team',
                to: '/team',
              },
              {
                label: 'Attributions',
                to: '/attributions',
              },
              {
                label: 'Collaborations',
                to: '/collaborations',
              },
            ]
          },
          {
            position: 'left',
            label: 'Competition',
            items: [
              {
                label: 'Medal Criteria',
                to: '/medals',
              },
              {
                label: 'Awards',
                to: '/awards',
              },
            ]
          }

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More information',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com',
              },
              {
                label: 'Wiki Source',
                href: 'https://gitlab.com',
              },
            ],
          },
        ],
        copyright: `Created by iGEM 2025 Team Lund. The contents of this website are free to use under the <a href='https://creativecommons.org/licenses/by/4.0/' target='_blank'><b>Creative Commons Attribution 4.0 international</b></a> license. Built with Docusaurus.`,
      },
    }),
};

export default config;
