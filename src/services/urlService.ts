// urlService.ts

export const shortenUrl = async (originalUrl: string) => {
  const res = await fetch(
    `https://api.1pt.co/addURL?long=${encodeURIComponent(originalUrl)}`
  );

  if (!res.ok) throw new Error("Failed to shorten URL");

  const data = await res.json();

  return {
    originalUrl,
    shortUrl: `https://1pt.co/${data.short}`,
  };
};
