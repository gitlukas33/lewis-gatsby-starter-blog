import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="O Łukaszu" />
      <HeaderBack />
      <Layout>
        <HeadingXL>O Łukaszu</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
            Zawód wyuczony mam taki, że piszę od lat. No ale nie kod. A podobno jak się umie pisać, to i kod się napisze.
            Chcesz zobaczyć, jak blisko czterdziestoletni facet poznaje świat programowania? Zapraszam - może i Ty 
            zaczniesz kodować. Albo przynajmniej pośmiejesz się ze mnie :).
          <br />
          <br />
          
        </TextBody>
        <Button href="mailto:lukasz&#64;lukaszsawicki.pl">Możesz do mnie napisać.</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
