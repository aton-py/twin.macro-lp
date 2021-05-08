import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Header from "../header/Header.js";
import DesignIllustration from "../../images/ufo2.svg";
// import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
// import reactn from "../../images/react.png";
// import github from "../../images/github.jpg";
// import node from "../../images/node.jpg";
// import { SectionHeading } from "components/misc/Headings.js";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt--16 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight text-4xl sm:text-6xl font-black tracking-wide`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// const CustomersLogoStrip = styled.div`
//   ${tw`mt-12 lg:mt-20`}
//   p {
//     ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
//   }
//   img {
//     ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
//   }
// `;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              A solução que sua <span tw="text-primary-500 text-green-100">Empresa</span> precisa
            </Heading>
            <Paragraph>
            Desenvolvemos Software sob medida para sua ideia, utilizando das principais tecnologias do mercado.
            </Paragraph>
            {/* <CustomersLogoStrip>
              <p>algumas das Tecnologias que utilizamos</p>
              <img src={CustomersLogoStripImage} alt="nossos clientes" />
            </CustomersLogoStrip> */}
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-lg" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
    </>
  );
};
