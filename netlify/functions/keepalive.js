export async function handler() {
  const url = process.env.RENDER_HEALTH_URL;

  try {
    const res = await fetch(url);
    const data = await res.text();

    return {
      statusCode: 200,
      body: `Pinged Render app (${url}), got: ${data}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `Failed to ping ${url}: ${err.message}`,
    };
  }
}
