"use client";
import React, { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { handleClientScriptLoad } from "next/script";

//RatingElement
export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  //RatingElement start state : JSX.Element type array with 5 empty react fragments
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  //component will mount/update if rating was changed
  useEffect(() => {
    arrayConstructor(rating);
  }, [rating]);

  //Component constructor function
  const arrayConstructor = (currentRating: number) => {
    const newRatingArray = ratingArray.map((el: JSX.Element, index: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplayRating(index + 1)}
          onMouseLeave={() => changeDisplayRating(rating)}
          onClick={() => changeRating(index + 1)}>
          <StarIcon />
        </span>
      );
    });
    setRatingArray(newRatingArray);
  };

  const changeDisplayRating = (i: number) => {
    if (!isEditable) {
      return;
    }
    arrayConstructor(i);
  };

  const changeRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  //what our functional component must returned
  return (
    <div>
      {ratingArray.map((star: JSX.Element, index: number) => {
        return <span key={index}>{star}</span>;
      })}
    </div>
  );
};
