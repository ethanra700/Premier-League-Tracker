function PlayerTable({ players }) {
  if (players.length === 0) return <p>No players found.</p>

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Pos</th>
          <th>Nation</th>
          <th>Age</th>
          <th>Gls</th>
          <th>Ast</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={`${player.name}-${player.team}`}>
            <td>{player.name}</td>
            <td>{player.team}</td>
            <td>{player.pos}</td>
            <td>{player.nation}</td>
            <td>{player.age}</td>
            <td>{player.gls}</td>
            <td>{player.ast}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PlayerTable
