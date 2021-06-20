import { useEffect } from "react";

export default function ({ userId }) {
  useEffect(() => {
    if (userId) {
      //get info from graphql query
      //don't show edit buttons
    } else {
      //get userId from Auth
      //show edit buttons
    }
  }, []);
  return <section>Info</section>;
}
