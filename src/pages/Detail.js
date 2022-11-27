import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://api.scryfall.com/cards/${id}`)
        .then((response) => setData(response.data));
    };
    fetchData();
  }, [id]);

  return data ? (
    <div className="container ">
      <div className="col image" align="center">
        <img src={data.image_uris.png} width="300px" />
      </div>
      <div className="col data">
        <p align="center">Card Infomation</p>
        <p>Card Name : {data.name}</p>
        <p>Converted Mana Cost : {data.cmc}</p>
        <p>Type : {data.type_line}</p>
        <p>Set : {data.set_name}</p>
        <p>Artist :{data.artist}</p>
      </div>
    </div>
  ) : null;
}
