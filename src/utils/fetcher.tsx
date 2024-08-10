export async function fetcher(url: string, options?: RequestInit) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const error = new Error("Error");
    throw error;
  }

  return res.json();
}
