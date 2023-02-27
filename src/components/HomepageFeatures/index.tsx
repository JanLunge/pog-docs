import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import pog_screen from '@site/static/img/pog_screen.png'
type FeatureItem = {
  title: string;
  img: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    img: require('@site/static/img/easytouse.gif').default,
    description: (
      <>
        Does not require any coding knowledge, but gets you started on your First custom Firmware
      </>
    ),
  },
  {
    title: 'Creator focused',
    img: require('@site/static/img/creator.gif').default,
    description: (
      <>
        Pog lets you enjoy building Firmware files again, no repetitive tasks. even porting keyboards can be fun.
      </>
    ),
  },
  {
    title: 'Setup new Keyboards',
    img: require('@site/static/img/newsetup.gif').default,
    description: (
      <>
        The setup guide walks you through every step that is required for a working firmware.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
