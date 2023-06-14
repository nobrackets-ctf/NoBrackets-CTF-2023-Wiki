import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Capture The Flag',
    Svg: require('@site/static/img/flag.svg').default,
    description: (
      <>
        Un Capture The Flag est une compétition de cybersécurité offensive où un joueur doit résoudre des challenges de hacking pour obtenir des points.
      </>
    ),
  },
  {
    title: 'NoBrackets',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Le NoBrackets CTF est un CTF organisé par GCC à destination des collégiens et lycéens.
      </>
    ),
  },
  {
    title: 'GCC ENSIBS',
    Svg: require('@site/static/img/Logo_GCC.svg').default,
    description: (
      <>
        Galette Cidre CTF (GCC) est une association de l'ENSIBS qui aide les étudiants à s'initier, participer et créer des CTFs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
