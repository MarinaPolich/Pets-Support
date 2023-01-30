import styled from "styled-components";

export const UserPageBox = styled.div`
  position: relative;
  display: flex;
  padding-top: 58px;
`;

export const UserInfoBox = styled.div`
  margin-right: 12px;
`;

export const UserHeader = styled.h2`
  margin-bottom: 24px;
  font-family: var(--font-manrope);
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.35;
  color: var(--black);
`;

export const UserPetsBox = styled.div`
  position: relative;
`;
export const AddBtnLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;
export const AddBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: var(--primary);
  margin-left: 12px;
  cursor: pointer;
`;
