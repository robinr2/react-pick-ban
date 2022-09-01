import { useState } from 'react'
import { Champion } from '../types'
import ChampionPicks from './ChampionPicks'
import ChampionPool from './ChampionPool'

const ChampionPickBanAndPoolWrapper = () => {
  const [availableChampions, setAvailableChampions] = useState<Champion[]>([
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
    {
      id: '10',
    },
  ])
  const [pickedChampions, setPickedChampions] = useState<Champion[] | []>([])
  const [opponentPickedChampions, setOpponentPickedChampions] = useState<
    Champion[] | []
  >([])

  const removeAvailableChampion = (championId: Champion['id']) => {
    const updatedAvailableChampions = availableChampions.filter(
      (availableChampion) => availableChampion.id !== championId
    )
    setAvailableChampions(updatedAvailableChampions)
  }

  const addPickedChampion = (championId: Champion['id']) => {
    const pickedChampion = availableChampions.find(
      (availableChampion) => availableChampion.id === championId
    )
    pickedChampion && setPickedChampions([...pickedChampions, pickedChampion])
  }

  const pickChampion = (championId: Champion['id']) => {
    removeAvailableChampion(championId)
    addPickedChampion(championId)
  }

  return (
    <>
      {availableChampions.length > 0 ? (
        <ChampionPool
          champions={availableChampions}
          onChampionSubmit={pickChampion}
        />
      ) : (
        <div>No champions available.</div>
      )}
      <ChampionPicks champions={pickedChampions} />
      <ChampionPicks champions={opponentPickedChampions} />
    </>
  )
}

export default ChampionPickBanAndPoolWrapper
