"use client";

import { useState, useEffect } from "react";
import { trpc } from "./trpc";

export default function Clienside() {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpc.hello
      .query({ name: "Client Side Name" })
      .then(setGreeting)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return <div>Client Side - {greeting}</div>;
}
