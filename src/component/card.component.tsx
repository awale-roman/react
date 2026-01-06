import CardDescription from "./card.description";
import { useState } from "react";

const CardComponent = () => {
  const [userName, setUserName] = useState<string>("golden");

  return (
    <div>
      <h1 className="text-center">Roman Awale</h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <CardDescription productName={userName}> discount </CardDescription>
          <CardDescription productName={userName}> discount </CardDescription>
          <CardDescription productName={userName}> discount </CardDescription>
          <CardDescription productName={userName}> discount </CardDescription>
          <CardDescription productName={userName}> discount </CardDescription>
          <CardDescription productName={userName}> discount </CardDescription>
          <CardDescription productName="necklace"> discount </CardDescription>
          <CardDescription productName="necklace"> discount </CardDescription>
          <CardDescription productName="necklace"> discount </CardDescription>
          <CardDescription productName="necklace"> discount </CardDescription>
        </div>

        <p>without discount</p>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <CardDescription productName="earing"> </CardDescription>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
