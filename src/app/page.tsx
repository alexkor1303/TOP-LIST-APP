"use client";
import React from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, ButtonElem, Paragraph, Rating } from "../../components";
import { MenuItem } from "../../interfaces/menu.interface";

export default function Home({ menu }: HomeProps) {
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
      <Paragraph size="small">Hopa!</Paragraph>
      <Paragraph size="medium">Hopa!</Paragraph>
      <Paragraph size="high">Hopa!</Paragraph>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <ul>
        list of items :
        {menu && menu.map((el, i) => <li key={i}>{el._id.secondCategory}</li>)}
      </ul>
    </>
  );
}
export const getData: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
