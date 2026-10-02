import { useMemo } from 'react'
import { usePlayers } from './usePlayers'

export function useFieldOptions(field) {
  const { players, loading, error } = usePlayers()

  const options = useMemo(() => {
    const unique = new Set(players.map((player) => player[field]))
    return Array.from(unique).sort()
  }, [players, field])

  return { options, loading, error }
}
