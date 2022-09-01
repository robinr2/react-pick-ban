import { useState } from 'react'
import { Champion } from '../types'
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
  ])
  const [pickedChampions, setPickedChampions] = useState<Champion[] | []>([])

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
    <ChampionPool
      champions={availableChampions}
      onChampionSubmit={pickChampion}
    />
  )
}

export default ChampionPickBanAndPoolWrapper
