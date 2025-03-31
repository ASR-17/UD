import React from "react";
import Dictionary from "../assets/Dictionary.json";

function CardItem({ item }) {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm justify-center m-10 mx-auto">
      <figure>
        <img src="https://th.bing.com/th/id/OIP.26bjzR-14Y5KawuPfEdMygHaH5?rs=1&pid=ImgDetMain" alt="DICTIONARY" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{item.word}</h2>
        <p className="m-7 mt-12 f-xl bold">{item.definition}</p>
        <div className="card-actions justify-end">
          <button className="bg-transparent font-2xl m-5">Read More ...</button>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p=8">
      {Object.entries(Dictionary).map(([word, definition], index) => (
        <CardItem key={index} item={{ word, definition }} />
      ))}
    </div>
  );
}

export default Cards;
