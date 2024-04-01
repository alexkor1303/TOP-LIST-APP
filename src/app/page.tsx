"use client";
import React from "react";
import { useState } from "react";
import { Htag, ButtonElem, Paragraph, Tag, Rating } from "../../components";
export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <main>
      <Htag tag="h1">text</Htag>
      <ButtonElem appearance="primary" arrow="right">
        click me
      </ButtonElem>
      <ButtonElem appearance="ghost" arrow="down">
        Кнопка
      </ButtonElem>
      <Paragraph size="small">Hopa!</Paragraph>
      <Paragraph size="medium">Hopa!</Paragraph>
      <Paragraph size="high">Hopa!</Paragraph>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </main>
  );
}
