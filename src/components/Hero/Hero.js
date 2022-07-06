import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProfilePic } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi! My name is Tomás
      </SectionTitle>
      <SectionTitle>
        And I am a
      </SectionTitle>
      <SectionTitle>
        Fullstack web developer
      </SectionTitle>
      <SectionText>
        I have 1 year of experience working on both Frontend and Backend. I love to bring solutions
        and pursue optimization and organization
      </SectionText>
      <Button onClick={() => window.location = 'mailto:contrerastomas7@gmail.com'}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;