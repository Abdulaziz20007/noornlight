import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 400px;
  padding: 0 150px;
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 0 50px;
  border-radius: 15px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
`;

const MainTitle = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0%;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PromotionSpan = styled.span`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 8px 15px;
  font-family: Manrope;
  font-weight: 700;
  font-size: 64px;
  line-height: 100%;
  letter-spacing: 0%;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: #000;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LampsImage = styled.img`
  height: 120px;
  object-fit: contain;
  width: 500px;
  height: 500px;
  position: relative;
  top: -100px;
`;

function Header() {
  return (
    <HeaderContainer>
      <BannerContent>
        <TextContainer>
          <MainTitle>
            Скидка 15%
            <br />
            на все подвесные
            <br />
            светильники
            <PromotionSpan>до 5 февраля</PromotionSpan>
          </MainTitle>
        </TextContainer>
        <ImageContainer>
          <LampsImage
            src="https://s3-alpha-sig.figma.com/img/9a18/730b/8aea519853fb3f396a82d65251806668?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVZLSkQ8WQ~HlCn9H7TLtyXoT5nAxIxfmgxKJeSO5Vyza6nyRLpFdWBMfFigaj3r6QISWVb786OWGbjxETxzwVY2MdaAFztGBlj-PKovqRDYNO0rBVTKtvi5rk9pX2ep8OfjgqJtfybfhAFKk8dEmqAptnLymNpIrBjRGlwJa4HjR0hrIJNBqACC85xlC63Juz3gMo-F39y9v4j-WlnmED8w1VoUpI9oEFNBDyPUrJd0NTk-0L0-uNm2ZANQrryOYCLlKsOgGB7Ps7SZOMp3IpDLUsMNxOtP-1ooon9lFSrV3s5mOEjCnVo~K5-6tORG16HGFMykCZS0AukdzCW0mw__"
            alt="Подвесные светильники"
          />
        </ImageContainer>
      </BannerContent>
    </HeaderContainer>
  );
}

export default Header;
