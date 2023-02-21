import React, { useEffect } from "react";

import "./style.scss";

import DetailsBanner from "../details/detailsBanner/DetailsBanner";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Details = () => {
  // const { mediaType, id } = useParams();

  // const { data, loading } = useFetch(`/${mediaType}/${id}`);

  return (
    <div>
      <DetailsBanner />
    </div>
  );
};

export default Details;
