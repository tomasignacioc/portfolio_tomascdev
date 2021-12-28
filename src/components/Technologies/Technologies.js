import React from 'react';
import { DiFirebase, DiReact, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned a range of technologies that are used in the web development world.
      From the basics of JS, FrontEnd, BackEnd and Database.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React and Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="4rem" />
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br/>
            SQL, PostreSQL and <br/>
            Sequelize as ORM
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
