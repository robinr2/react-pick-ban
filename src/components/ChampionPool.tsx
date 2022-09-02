import { ChangeEventHandler, FC, FormEventHandler, Fragment, useMemo, useState } from 'react'
import { champions } from '../data'
import { Champion } from '../types'

type ChampionPoolProps = {
  championIds: Champion['id'][]
  onChampionSubmit: (championId: Champion['id']) => void
}

const ChampionPool: FC<ChampionPoolProps> = ({ championIds, onChampionSubmit }) => {
  const [currentChampionId, setCurrentChampionId] = useState<Champion['id'] | null>(null)

  const availableChampions = useMemo(() => {
    return champions.filter((champion) => championIds.includes(champion.id))
  }, [championIds])

  const handleChampionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentChampionId(e.target.value)
  }

  const handleChampionSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setCurrentChampionId(null)
    currentChampionId && onChampionSubmit(currentChampionId)
  }

  return (
    <form onSubmit={handleChampionSubmit}>
      <fieldset>
        <legend>Pick a Champion!</legend>
        {availableChampions.map((availableChampion) => (
          <Fragment key={availableChampion.id}>
            <label htmlFor={availableChampion.id}>Champion {availableChampion.id}</label>
            <input
              id={availableChampion.id}
              type="radio"
              value={availableChampion.id}
              name="champions"
              onChange={handleChampionChange}
            />
          </Fragment>
        ))}
        <br />
        <button type="submit" disabled={currentChampionId === null}>
          Lock in
        </button>
      </fieldset>
    </form>
  )
}

export default ChampionPool
