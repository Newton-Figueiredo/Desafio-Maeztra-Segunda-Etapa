import Image from 'next/image'
import React from "react";
import Facebook from "../../public/facebook.png";
import Linkedin from "../../public/linkedin.png";
import Instagram from "../../public/instagram.png";
import Youtube from "../../public/youtube.png";
import Visa from "../../public/visa.png";
import Mastercard from "../../public/mastercard.png";
import VtexLogo from "../../public/vtex.png";
import MaeztraLogo from "../../public/maeztra-logo-white.png";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  padding: 24px 80px 32px;
  background: #353535;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 19px 161px 17px;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 900px) {
    align-items: center;
    column-gap: 22px;
  }
`;

export const SocialNetworks = styled(Row)`
  margin-bottom: 36px;
  @media screen and (min-width: 900px) {
    margin-bottom: 0;
  }
`;

export const PaymentMethods = styled(Row)`
  margin-bottom: 32px;
  @media screen and (min-width: 900px) {
    margin-bottom: 0;
  }
`;

export const DevelopedBy = styled(Row)`
  color: #ffffff;
  .vtex,
  .maeztra {
    display: flex;
    flex-direction: column;
    font-size: 0.625rem;
    font-family: "Open Sans", sans-serif;
    > span {
      margin-bottom: 6px;
    }
  }
`;

export default function Footer() {
  return (
    <div className=' bg-[#353535] h-[240px] py-5 flex flex-col justify-evenly' >
      <div className='flex flex-row justify-evenly'>
        <Image src="/facebook.png" width={32} height={32} alt="Facebook icon" />
        <Image src="/linkedin.png" width={32} height={32} alt="Facebook icon" />
        <Image src="/instagram.png" width={32} height={32} alt="Facebook icon" />
        <Image src="/youtube.png" width={32} height={22} alt="Facebook icon" />

      </div>

      <div className='flex flex-row justify-evenly'>
        <Image src="/visa.png" width={32} height={25} alt="Facebook icon" />
        <Image src="/mastercard.png" width={32} height={25} alt="Facebook icon" />
        <Image src="/visa.png" width={32} height={25} alt="Facebook icon" />
        <Image src="/mastercard.png" width={32} height={25} alt="Facebook icon" />
      </div>

      <div className='flex flex-row justify-evenly'>
        <div className="vtex flex flex-col">
          <span className=' text-[10px] text-white'>Powered by</span>
          <Image src="/vtex.png" width={68} height={25} alt="Facebook icon" />
        </div>

        <div className="maeztra flex flex-col">
          <span className=' text-[10px] text-white'>Developed by</span>
          <Image src="/maeztra-logo-white.png" width={120} height={28} alt="Facebook icon" />
        </div>
      </div>
    </div>
  );
};