import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Button, HeadingXL, Layout, SEO, TextBody } from '../components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonCentered = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
`;

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <Layout>
        <Wrapper>
          <HeadingXL>Takiej strony nie ma :(.</HeadingXL>
          <TextBody style={{ textAlign: 'center' }}>
          Takiej strony nie ma...{' '}
            <span role="img" aria-label="duh">
              😓
            </span>
          </TextBody>
          <Link to="/">
            <ButtonCentered>Wracaj na główną</ButtonCentered>
          </Link>
        </Wrapper>
      </Layout>
    </>
  );
};

export default NotFoundPage;
