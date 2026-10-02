import { useEffect, useState } from 'react'
import { getPlayers } from '../api'

export function usePlayers(filters = {}) {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getPlayers(filters)
      .then(setPlayers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [JSON.stringify(filters)])

  return { players, loading, error }
}
