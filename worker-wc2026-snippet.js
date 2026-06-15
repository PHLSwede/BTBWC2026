// Add this block inside your existing worker's fetch handler,
// alongside your existing /espn and / (Anthropic proxy) routes.

if (url.pathname === '/wc2026') {
  const dates = url.searchParams.get('dates') || '20260611-20260719';
  const espnUrl = `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?limit=200&dates=${dates}`;

  const resp = await fetch(espnUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const data = await resp.json();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
