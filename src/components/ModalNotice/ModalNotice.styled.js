import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
`;

export const BoxImage = styled.div`
  position: relative;
  margin-top: 60px;
  margin-bottom: 16px;
`;

export const Image = styled.img`


  width: 240px;
  height: 240px;
  /* object-fit: cover; */
  border-radius: 0px 0px 20px 20px;
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
  align-items: center;
  width: 158px;
  padding: 6px;
  padding-left: 20px;
  border-radius: 0px 40px 40px 0px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  letter-spacing: 0.04em;

  color: var(--black);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  color: var(--black);
  margin-bottom: 16px;
`;

export const List = styled.ul`
  margin-bottom: 28px;
`;

export const ListItem = styled.li`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--black);
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SpanName = styled.span`
  margin-left: 74px;
`;
export const SpanBirthday = styled.span`
  margin-left: 57px;
`;
export const SpanBreed = styled.span`
  margin-left: 74px;
`;
export const SpanPlace = styled.span`
  margin-left: 55px;
`;
export const SpanTheSex = styled.span`
  margin-left: 61px;
`;
export const SpanEmail = styled.span`
  margin-left: 77px;
`;
export const SpanPhone = styled.span`
  margin-left: 70px;
`;
export const SpanPrice = styled.span`
  margin-left: 79px;
`;

export const Comments = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: var(--black);
`;

export const SpanComments = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--black);
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const CancelBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-bottom: 12px;
  text-align: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #111111;
  background-color: white;
  transition: 0.5s;

  @media ${device.tablet} {
    width: 180px;
    height: 44px;
  }
  @media ${device.desktop} {
    width: 180px;
    height: 44px;
  }

  &:hover {
    color: white;
    background: #f59256;
  }

  @media ${device.tablet} {
    margin-right: 24px;
    margin-bottom: 0px;
  }
  @media ${device.desktop} {
    margin-right: 24px;
    margin-bottom: 0px;
  }
`;

export const NextBtn = styled.button`
  width: 100%;
  height: 44px;
  text-align: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: white;
  background: #f59256;

  transition: 0.5s;

  &:hover {
    color: #111111;
    background: white;
  }

  @media ${device.tablet} {
    width: 180px;
    height: 44px;
  }
  @media ${device.desktop} {
    width: 180px;
    height: 44px;
  }
`;

