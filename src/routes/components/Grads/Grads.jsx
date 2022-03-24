import React from "react";
import styled from "styled-components";

const Grads = () => {
  return (
    <WhiteFlexColumnRoot>
      <Text1>
        Where our Grads Work
        <br />
      </Text1>
      <CompaniesLogos>
        <FlexColumn>
          <Image1 src={"https://file.rendit.io/n/7hCMnjY8XHFsRaTH1LC3.png"} />
          <Image2 src={"https://file.rendit.io/n/xf91BFqle6VXnRnkoMQX.png"} />
        </FlexColumn>
        <FlexColumn1>
          <FlexRow>
            {[
              {
                src: "https://file.rendit.io/n/NxUx17hQw5HdUNWEOEkm.png",
              },
              {
                src: "https://file.rendit.io/n/xPIAJ9cZLUkSrasB3XZM.png",
              },
              {
                src: "https://file.rendit.io/n/KSkYJy9vrSnko5IGTSk1.png",
              },
            ].map((data) => (
              <Image1 src={data.src} />
            ))}
          </FlexRow>
          <FlexRow1>
            <Image1 src={"https://file.rendit.io/n/lAsBXGNaiSZGmQm5PJAM.png"} />
            <Image1 src={"https://file.rendit.io/n/CQkrzhPMz4rtizcfz7PC.png"} />
          </FlexRow1>
        </FlexColumn1>
        <FlexColumn2>
          <Image2 src={"https://file.rendit.io/n/BAbMd97hgsbZJsbDEfH5.png"} />
          <Image9 src={"https://file.rendit.io/n/T4HA1UAk9zpjr4sNzOBP.png"} />
        </FlexColumn2>
      </CompaniesLogos>
    </WhiteFlexColumnRoot>
  );
};
const WhiteFlexColumnRoot = styled.div`
  height: 394px;
  background-color: #f8fdf9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 9px;
  margin: auto;
  min-width: 874px;
  align-items: center;
  padding: 50px 312px 50px 253px;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  align-self: flex-end;
  margin: 0px 130px 60px 0px;
`;
const CompaniesLogos = styled.div`
  width: 874px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn = styled.div`
  width: 142px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  justify-content: center;
  align-items: flex-start;
  margin: 0px auto 0px 0px;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  justify-content: center;
  margin: 0px 38px 0px 0px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  justify-content: space-between;
  align-items: center;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 71px;
`;
const FlexColumn2 = styled.div`
  width: 151px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 56px;
  align-items: flex-start;
`;
const Image9 = styled.img`
  width: 135px;
  height: 72px;
`;
const Image1 = styled.img`
  width: 119px;
  height: 80px;
`;
const Image2 = styled.img`
  width: 119px;
  height: 80px;
  align-self: flex-end;
`;
export default Grads;