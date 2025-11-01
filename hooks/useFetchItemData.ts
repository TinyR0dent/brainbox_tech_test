import { ItemData } from "@/types/ItemData";
import { useEffect, useState } from "react";

export function useFetchItemData(id: string) {
  const [data, setData] = useState<ItemData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json() as Promise<ItemData[]>;
      })
      .then((json) => {
        setData(json.find((item) => String(item.id) === String(id)) || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
