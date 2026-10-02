import { Link } from 'react-router-dom'
import { useFieldOptions } from '../hooks/useFieldOptions'

function CategoryListPage({ field, label, basePath }) {
  const { options, loading, error } = useFieldOptions(field)

  return (
    <div className="page">
      <Link to="/" className="back-link">← Home</Link>
      <h1>{label}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div className="option-grid">
          {options.map((value) => (
            <Link key={value} to={`${basePath}/${encodeURIComponent(value)}`} className="option-button">
              {value}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryListPage
