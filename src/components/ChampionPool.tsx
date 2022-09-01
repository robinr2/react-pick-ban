import React, { useState } from 'react'
import { Champion } from '../types'

type ChampionPoolProps = {
  champions: Champion[]
  onChampionSubmit: (championId: Champion['id']) => void
}

const ChampionPool: React.FC<ChampionPoolProps> = ({
  champions,
  onChampionSubmit,
}) => {
  const [currentChampionId, setCurrentChampionId] = useState<Champion['id']>(
    champions[0].id
  )

  const handleChampionChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setCurrentChampionId(e.target.value)
  }

  const handleChampionSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onChampionSubmit(currentChampionId)
  }

  return (
    <form onSubmit={handleChampionSubmit}>
      <fieldset>
        <legend>Pick a Champion!</legend>
        {champions.map((champion) => (
          <React.Fragment key={champion.id}>
            <label htmlFor={champion.id}>Champion {champion.id}</label>
            <input
              id={champion.id}
              type="radio"
              value={champion.id}
              name="champions"
              defaultChecked={champion.id === champions[0].id}
              onChange={handleChampionChange}
            />
          </React.Fragment>
        ))}
        <br />
        <button type="submit">Lock in</button>
      </fieldset>
    </form>
  )
}

export default ChampionPool
