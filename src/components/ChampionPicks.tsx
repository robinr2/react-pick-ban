import { FC, useMemo } from 'react'
import { champions } from '../data'
import { Champion } from '../types'

type ChampionPicksProps = {
  championIds: Champion['id'][]
}

const ChampionPicks: FC<ChampionPicksProps> = ({ championIds }) => {
  const pickedChampions = useMemo(() => {
    return championIds.map(
      (championId) => champions.filter((champion) => champion.id === championId)[0]
    )
  }, [championIds])

  return (
    <>
      <h2>Picks</h2>
      {pickedChampions.map((pickedChampion) => (
        <div key={pickedChampion.id}>{pickedChampion.id}</div>
      ))}
    </>
  )
}

export default ChampionPicks
