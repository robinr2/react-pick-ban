import { useState } from 'react'
import { champions } from '../data'
import { Champion } from '../types'
import ChampionPicks from './ChampionPicks'
import ChampionPool from './ChampionPool'

const ChampionPickBanAndPoolWrapper = () => {
  const [pickedChampionIds, setPickedChampionIds] = useState<Champion['id'][]>([])
  const [opponentPickedChampionIds, setOpponentPickedChampionIds] = useState<Champion['id'][]>([])
  const [availableChampionIds, setAvailableChampionIds] = useState<Champion['id'][]>(
    champions.map((champion) => champion.id)
  )

  const handleChampionSubmit = (championId: Champion['id']) => {
    setPickedChampionIds([...pickedChampionIds, championId])

    const updatedAvailableChampionIds = availableChampionIds.filter(
      (availableChampionId) => availableChampionId !== championId
    )

    const randomAvailableChampionIndex = Math.floor(
      Math.random() * updatedAvailableChampionIds.length
    )
    const randomAvailableChampionId = updatedAvailableChampionIds[randomAvailableChampionIndex]
    setOpponentPickedChampionIds([...opponentPickedChampionIds, randomAvailableChampionId])

    const furtherUpdatedAvailableChampionIds = updatedAvailableChampionIds.filter(
      (updatedAvailableChampionId) => updatedAvailableChampionId !== randomAvailableChampionId
    )
    setAvailableChampionIds(furtherUpdatedAvailableChampionIds)
  }

  return (
    <>
      {availableChampionIds.length > 0 ? (
        <ChampionPool championIds={availableChampionIds} onChampionSubmit={handleChampionSubmit} />
      ) : (
        <div>No champions available.</div>
      )}
      <ChampionPicks championIds={pickedChampionIds} />
      <ChampionPicks championIds={opponentPickedChampionIds} />
    </>
  )
}

export default ChampionPickBanAndPoolWrapper
