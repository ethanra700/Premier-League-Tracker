import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import CategoryListPage from './pages/CategoryListPage'
import CategoryDetailPage from './pages/CategoryDetailPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/teams"
            element={<CategoryListPage field="team" label="Teams" basePath="/teams" />}
          />
          <Route
            path="/teams/:value"
            element={<CategoryDetailPage field="team" label="Teams" basePath="/teams" />}
          />

          <Route
            path="/nations"
            element={<CategoryListPage field="nation" label="Nation" basePath="/nations" />}
          />
          <Route
            path="/nations/:value"
            element={<CategoryDetailPage field="nation" label="Nation" basePath="/nations" />}
          />

          <Route
            path="/positions"
            element={<CategoryListPage field="pos" label="Positions" basePath="/positions" />}
          />
          <Route
            path="/positions/:value"
            element={<CategoryDetailPage field="pos" label="Positions" basePath="/positions" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
