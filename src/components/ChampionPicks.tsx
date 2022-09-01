import { FC } from 'react'
import { Champion } from '../types'

type ChampionPicksProps = {
  champions: Champion[]
}

const ChampionPicks: FC<ChampionPicksProps> = ({ champions }) => {
  return (
    <>
      <h2>Picks</h2>
      {champions.map((champion) => (
        <div key={champion.id}>{champion.id}</div>
      ))}
    </>
  )
}

export default ChampionPicks
