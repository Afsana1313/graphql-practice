import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { loadData } from "../graphql/loadData";
function ShowData() {
  const { error, loading, data } = useQuery(loadData);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div></div>;
}

export default ShowData;
