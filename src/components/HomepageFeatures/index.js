import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "A Web3 Native Network State",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Dean's List connects Web3 expertise to Solana protocols for ecosystem
        enhancement and user experience refinement.
      </>
    ),
  },
  {
    title: "Our Citizenship Model",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        We are guided in our thinking by Dunbar's number which is the
        theoretical limit to the amount of meaningful societal relationships
        that one person can maintain. We do not intend to have more than 100
        citizens.
      </>
    ),
  },
  {
    title: "The Business Visa Program",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The best way to get a feel of our Network State is to apply for a
        Business Visa which allows you
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
