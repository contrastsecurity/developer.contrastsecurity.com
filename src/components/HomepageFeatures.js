import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Simple Self-Service',
    icon: require('../../static/img/icon1.png').default,
    description: (
      <>
        Easy to <a href="/learn/getting-started/contrast-cli">get started</a> with Contrast's friendly setup process.
      </>
    ),
  },
  {
    title: 'Unparalleled Speed and Accuracy',
    icon: require('../../static/img/icon2.png').default,
    description: (
      <>
        Recognized as the fastest, most accurate scanning solution.
      </>
    ),
  },
  {
    title: 'Quick and Seamless Integration',
    icon: require('../../static/img/icon3.png').default,
    description: (
      <>
        Quick and easy integration into existing serverless environments.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <img src={icon} />
      <div className="text--center padding-horiz--md">
        <h1>{title}</h1>
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
