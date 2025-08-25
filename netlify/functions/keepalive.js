export async function handler() {
  try {
    const res = await fetch("https://reciperealm-1.onrender.com/alive"); 
    // replace with your API endpoint

    const text = await res.text();
    console.log("Ping response:", text);

    return {
      statusCode: 200,
      body: `Ping successful: ${text}`,
    };
  } catch (error) {
    console.error("Ping failed:", error);
    return {
      statusCode: 500,
      body: `Ping failed: ${error.message}`,
    };
  }
}
