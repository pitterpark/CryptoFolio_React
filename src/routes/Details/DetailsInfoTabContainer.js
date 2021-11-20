import React, { useRef, useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { CryptoDataContext } from "../Details";
import { fadeIn } from "../../Styles/Animation";
import {
  AnimatedDiv,
  Expanded,
  GrayText,
  SizedBox,
  YellowTitleCircle,
  Row,
  Column,
  Text,
} from "../../Components/GlobalComponents";
import useWindowDimensions from "../../useWindowDimensions";
import { Chart } from "../../Components/TradingViewChart";

export const DetailsInfoTabContainer = () => {
  const { data } = useContext(CryptoDataContext);

  const MarketCapBox = () => (
    <InfoElementContainer>
      <YellowTitleCircle>Market Cap</YellowTitleCircle>
      <Text>{"$" + data.marketCap.toLocaleString()}</Text>
      <SizedBox height="4px" />
      <GrayText>{"Rank. #" + data.marketCapRank}</GrayText>
    </InfoElementContainer>
  );

  const SupplyAmountBox = () => (
    <InfoElementContainer>
      <YellowTitleCircle>Supply Amount</YellowTitleCircle>

      <Row justify_content="space-between">
        <Text>Current</Text>
        <SizedBox width="12px" />
        <Text>{data.currentSupply.toLocaleString()}</Text>
      </Row>

      <SizedBox height="4px" />
      <Row justify_content="space-between">
        <GrayText>Max</GrayText>
        <SizedBox width="12px" />
        <GrayText>
          {data.maxSupply ? data.maxSupply.toLocaleString() : "♾️"}
        </GrayText>
      </Row>
    </InfoElementContainer>
  );

  const VolumeBox = () => (
    <InfoElementContainer>
      <YellowTitleCircle>Volume(24h)</YellowTitleCircle>
      <Text> {"$" + data.volume.toLocaleString()}</Text>
    </InfoElementContainer>
  );

  return (
    <Container>
      <RowCustom justify_content="flex-start" align_items="flex-start">
        <MarketCapBox />

        <VolumeBox />
        <SupplyAmountBox />
      </RowCustom>
      <SizedBox height="16px" />
      <Chart coin={data.tradingViewCoinId} />
    </Container>
  );
};

const RowCustom = styled(Row)`
  flex-wrap: wrap;
`;

const InfoElementContainer = styled(Column)`
  justify-content: flex-start;
  align-items: flex-end;
  height: fit-content;
  margin-right: 32px;
  margin-bottom: 16px;
`;

const Container = styled(AnimatedDiv)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100px;
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;
