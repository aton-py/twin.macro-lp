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
  const Subheading = tw.span`uppercase tracking-widest font-bold text-orange-400`;
  const HighlightedText = tw.span`text-orange-400`;

  return (
    <AnimationRevealPage>
    
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>serviços</Subheading>}
        heading={
          <>
            Solução <HighlightedText>Completa</HighlightedText>
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
            heading: "Otimo atendimento",
            quote:
              "Equipe está sempre pronta para identificar as necessidades e apresentar soluções inovadoras adequadas à realidade de cada cliente. Experts em otimizar processos, ampliar a produtividade da sua equipe e gerar mais retorno financeiro.",
            customerName: "Marcela Silva",
            customerTitle: "CEO, Unimed"
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Além do esperado",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cup",
            customerTitle: "CTO, GRUPO MBM"
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
            question: "Vocês dão manutenção em sistemas Legado ?",
            answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Quanto tempo eu tenho meu projeto pronto ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Quais tecnlogias vocês usam ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Quantos anos de mercado ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "O que é software e por que preciso de um ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "E ai, me contratam agora ?",
            answer:
              "Ao clicar no elemento acima você declarou SIM para a pergunta ;)"
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>    
  );
}
