"use client";
import React from "react";
import { useState } from "react";
import { Htag, ButtonElem, Paragraph, Rating } from "../../components";
import { withLayout } from "../../layout/Layout";

function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">hello</Htag>
      <ButtonElem appearance="primary" arrow="right">
        click me
      </ButtonElem>
      <ButtonElem appearance="ghost" arrow="down">
        Кнопка
      </ButtonElem>
      <Paragraph size="small">sopa!</Paragraph>
      <Paragraph size="medium">Hopa!</Paragraph>
      <Paragraph size="high">Hopa!</Paragraph>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);
