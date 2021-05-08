import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/Hero.js";
import Features from "components/features/Features.js";
import Testimonial from "components/testimonials/Testimonials.js";
import FAQ from "components/faq/Faq.js";
import Footer from "components/footer/Footer.js";



export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-green-100`;
  const HighlightedText = tw.span`text-green-100`;

  return (
    <AnimationRevealPage>
    
      <Hero roundedHeaderButton={true} />
      <Features
        id="about"
        subheading={<Subheading>serviços</Subheading>}
        heading={
          <>
            Nós vivemos <HighlightedText>Tecnologia</HighlightedText>
          </>
        }
      />
      
      <Testimonial
        subheading={<Subheading>Testemunhos</Subheading>}
        heading={
          <>
            Nossos clientes <HighlightedText>Sabem</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Ótimo atendimento e suporte ao cliente",
            quote:
              "Equipe está sempre pronta para identificar as necessidades e apresentar soluções inovadoras adequadas à realidade de cada cliente. Experts em otimizar processos, ampliar a produtividade da sua equipe e gerar mais retorno financeiro.",
            customerName: "Daniela Obregon",
            customerTitle: "CEO, Costa Brazil Receptivo Internacional"
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Além do esperado",
            quote:
              "Entregas de qualidade e respeitando os prazos delimitados. Reis e Bertini foram a melhor escolha que fizemos para concretizar nossa ideia.",
            customerName: "Nuno Cabruja",
            customerTitle: "CEO, Airbandbees Trancoso"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            Você tem alguma <HighlightedText>Pergunta ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Quais são as tecnologias que vocês trabalham ?",
            answer:
            "Trabalhamos com Javascript, Typescript, GraphQL, MongoDB, Expo, React, React Native, Flutter, NodeJs, NestJs, Python e muito mais."
          },
          {
            question: "Quanto tempo eu tenho meu projeto pronto ?",
            answer:
              "O tempo de entrega do projeto pode variar à depender da quantidade de Features, ou seja, de implementações requisitadas pelo cliente. Após a análise de seu projeto lhe daremos um roadmap com todos milestones."
          },
          {
            question: "Minha empresa precisa de uma aplicação web ?",
            answer:
              "Sim, uma aplicação web pode ser um fator de destaque para sua empresa perante a concorrencia."
          },
          {
            question: "Posso parcelar o valor do projeto ?",
            answer:
              "Sim, o projeto pode ser parcelado no cartão ou boleto à depender do valor e do projeto."
          },
          {
            question: "Qual a diferença de uma aplicação web e um aplicativo de celular ?",
            answer:
              "Uma aplicação web oferece os mesmos recursos que um aplicativo de celular, sem a necessidade de instalação do mesmo no aparelho."
          },
          {
            question: "Como fazer minha marca aparecer no Google ?",
            answer:
              "Não se preocupe, trabalhamos com as melhores ferramentas de SEO, ou seja, seu proejto tem tudo para escalar globalmente."
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>    
  );
}
