import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import dev from "images/engineer.svg";
import software from "images/ufo.svg";
import prop from "images/automated-process.svg";
import robot from "images/robot.svg";

import { Element } from 'react-scroll'

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-10 md:py-8`}
`;
const Subheading = tw(SubheadingBase)`mb-2`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-20 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/4 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-col items-center sm:items-center text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`text-center p-6 flex-shrink-0`}
    img {
      ${tw`w-32 h-32`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;


export default ({ cards = null, heading = "Solução Completa", subheading = "Serviços", description = "Somos uma equipe de Desenvolvedores que compartilha da paixão de transformar ideias brilhantes em sites e aplicativos incríveis. " }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: prop,
      title: "Prototipagem de Software",
      description: "Tem uma ideia brilhante de StartUp e precisa de um Mvp? Você está à um passo de ser financiado."
    },
    { 
      imageSrc: software, 
      title: "Desenvolvimento de Software", 
      description: "Desenvolvemos aplicativos web e mobile utilizando das principais tecnologias do mercado." 
    },
    {
      imageSrc: robot,
      title: "Bots de What's App",
      description: "Fica louco de tanto responder mensagens? Vamos automatizar isso para você"
    },
    { 
      imageSrc: dev, 
      title: "Programadores sob Demanda", 
      description: "Disponibilizamos do profissional que falta para seu projeto arrancar de vez." 
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
