import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.scryfall.com/cards/search?order=cmc&q=set%3Am21")
        .then((response) => setData(response.data));
    };
    fetchData();
  }, []);

  let card;
  if (data) {
    card = data.data.map((c) => {
      return (
        <React.Fragment key={c.id}>
          {c.image_uris && (
            <a href={`/detail/${c.id}`} className="col">
              <img src={c.image_uris.png} alt="" width="250px" loading="lazy" />
            </a>
          )}
        </React.Fragment>
      );
    });
  }
  return (
    <div className="card-list container text-center">
      <div className="row g-4">{card}</div>
    </div>
  );
}
