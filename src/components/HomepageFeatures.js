import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('../../static/img/superhero-cat.svg').default,
    description: (
      <>
        <a href="docs/getting-started/where-do-i-start">Security results for your app in under 15 minutes.</a>
      </>
    ),
  },
  {
    title: 'Reference Documentation',
    Svg: require('../../static/img/detective-cat.svg').default,
    description: (
      <>
        <a href="https://docs.contrastsecurity.com" target="_blank">Tool Documentation</a><br/>
        <a href="https://api.contrastsecurity.com" target="_blank">API Documentation</a>
      </>
    ),
  },
  {
    title: 'Integrations',
    Svg: require('../../static/img/catty-boh.svg').default,
    description: (
      <>
        <a href="https://www.contrastsecurity.com/application-lifecycle-integrations">Connect security automation</a> with other tools: defect tracking, SIEM, Chat, workflow tools, and more.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
