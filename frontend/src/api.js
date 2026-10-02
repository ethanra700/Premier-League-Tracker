const BASE_URL = 'http://localhost:8080/api/v1/player'

export async function getPlayers(filters = {}) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(filters)) {
    if (value) params.set(key, value)
  }

  const url = params.toString() ? `${BASE_URL}?${params}` : BASE_URL
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed to fetch players: ${response.status}`)
  return response.json()
}
