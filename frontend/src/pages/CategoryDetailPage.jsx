import { Link, useParams } from 'react-router-dom'
import { usePlayers } from '../hooks/usePlayers'
import PlayerTable from '../components/PlayerTable'

function CategoryDetailPage({ field, label, basePath }) {
  const { value } = useParams()
  const decodedValue = decodeURIComponent(value)
  const { players, loading, error } = usePlayers({ [field]: decodedValue })

  return (
    <div className="page">
      <Link to={basePath} className="back-link">← {label}</Link>
      <h1>{decodedValue}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <PlayerTable players={players} />}
    </div>
  )
}

export default CategoryDetailPage
