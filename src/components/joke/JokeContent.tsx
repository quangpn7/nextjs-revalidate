import Link from "next/link";
import React, { FC } from "react";

export type JokeContentType = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

type JokeContentProps = {
  joke: JokeContentType;
};

const JokeContent: FC<JokeContentProps> = ({
  joke = {
    id: 1,
    setup: "",
    punchline: "",
    type: "",
  },
}) => {
  return (
    <div className="w-100 mx-auto">
      <h1>JOKE ID: {joke.id}</h1>
      <h2>Type: {joke.type}</h2>
      <p>Setup: {joke.setup}</p>
      <p>Punchline:{joke.punchline}</p>
      <div className="w-50 mx-auto d-flex">
        <div>
          <Link href={`/joke/${joke.id === 1 ? 1 : joke.id - 1}`}>
            <button>Prev joke</button>
          </Link>
        </div>
        <div>
          <Link href={`/joke/${joke.id + 1}`}>
            <button>Next joke</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JokeContent;
