import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Integrations</h1>
        <p className="hero__subtitle">INFUSE SECURITY INTO YOUR APPLICATIONS USING
OUR INTEGRATIONS AND PLATFORM EXTENSIBILITY TOOLS</p>
      </div>
    </header>
  );
}

const IntegrationItems = [
    {
      title: 'Cloud Integrations',
      description: (<>Run your application with Contrast while still deploying on your favorite PaaS.</>
      ),
      integrations: [
        {
            title: 'Cloud Foundry',
            Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
            links: [{text: 'MyText', to: '/somewhere'}, {text: 'Second', to: '/elsewhere'}]
        },
        {
            title: 'Microsoft Azure',
            Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
            links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
        },
        {
            title: 'Google App Engine',
            Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
            links: [{text: 'For Java', to: '/somewhere'}]
        },
        {
            title: 'Elastic Beanstalk',
            Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
            links: [{text: 'For Java', to: '/somewhere'}]
        }
      ]
    },
    {
        title: 'Chat Tools',
        description: (<>Be the first to know about new vulnerabilities in or active attacks against your application as Contrast discovers these security issues in real-time.</>
        ),
        integrations: [
            {
                title: 'Microsoft Teams',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'MyText', to: '/somewhere'}, {text: 'Second', to: '/elsewhere'}]
            },
            {
                title: 'Slack',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
            }
        ]
    },
    {
        title: 'Continuous Integration and Build Tools',
        description: (<>Add application security gates into your automated pipelines to prevent vulnerabilities from getting deployed into production environments.</>
        ),
        integrations: [
            {
                title: 'Jenkins',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'MyText', to: '/somewhere'}, {text: 'Second', to: '/elsewhere'}]
            },
            {
                title: 'Azure DevOps',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
            },
            {
                title: 'Circle CI',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
            },
            {
                title: 'Bamboo',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
            },
            {
                title: 'Maven',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
            },
            {
                title: 'Gradle',
                Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
                links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
            }
        ]
    },
]

function IntegrationItem({title, Svg, links}) {
    return (
      <div className={clsx('col col--4', styles.integration)}>
        <h4>{title}</h4>
        <div className={clsx('links')}>
            {links.map((props, idx) => (
                <><a href={props.to}>{props.text}</a><br/></>
                ))}
        </div>
      </div>
    );
  }

function IntegrationCategory({title, description, integrations}) {
    return (
      <div className={clsx('col col--4 row', styles.fullWidth)}>
        <div className={clsx("text--center padding-horiz--md", styles.fullWidth)}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={clsx(styles.category, styles.fullWidth)}>
            {integrations.map((props, idx) => (
                <IntegrationItem key={idx} {...props} />
                ))}
            </div>
        </div>
      </div>
    );
  }

function IntegrationList() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div>
            {IntegrationItems.map((props, idx) => (
              <IntegrationCategory key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Contrast Security - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <IntegrationList />
      </main>
    </Layout>
  );
}
