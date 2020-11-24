import React from 'react';

import styled from 'styled-components';

const Head = styled.div`
  color: red;
`;

const Index: React.FC = () => {
  return (
    <div>
      <Head>head</Head>
      <Head>head</Head>
      <div>测试</div>
    </div>
  );
};

export default Index;
