import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm aspiring to be a full-time developer and help solve problems. I'm very interested in web3 and blockchain development
      </SectionText>
      <Button onClick={() => window.location = 'mailto:contrerastomas7@gmail.com'}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;