import JokeContent, { JokeContentType } from "@/components/joke/JokeContent";
import React from "react";

// const joke: JokeContentType = {
//   type: "FXCE",
//   id: 1,
//   punchline: "Dinh bo Linh",
//   setup: "Trading",
// };

export const generateStaticParams = async () => {
  const paramsArr = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
  return paramsArr.map((item: number) => ({ id: item.toString() }));
};

const getJokes = async (id: number): Promise<JokeContentType> => {
  const res = await fetch(`https://official-joke-api.appspot.com/jokes/${id}`);
  return res.json();
};

const JokePage = async ({ params: { id } }) => {
  console.log(`Joke page: ${id} is generating`.red.bgBlack);

  const joke = await getJokes(id);

  return (
    <div className="pt-5 w-75 mx-auto">
      <JokeContent joke={joke} />
    </div>
  );
};

export default JokePage;
