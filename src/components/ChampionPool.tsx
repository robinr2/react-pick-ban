import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  Fragment,
  useState,
} from 'react'
import { Champion } from '../types'

type ChampionPoolProps = {
  champions: Champion[]
  onChampionSubmit: (championId: Champion['id']) => void
}

const ChampionPool: FC<ChampionPoolProps> = ({
  champions,
  onChampionSubmit,
}) => {
  const [currentChampionId, setCurrentChampionId] = useState<Champion['id']>()

  const handleChampionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentChampionId(e.target.value)
  }

  const handleChampionSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    currentChampionId && onChampionSubmit(currentChampionId)
  }

  return (
    <form onSubmit={handleChampionSubmit}>
      <fieldset>
        <legend>Pick a Champion!</legend>
        {champions.map((champion) => (
          <Fragment key={champion.id}>
            <label htmlFor={champion.id}>Champion {champion.id}</label>
            <input
              id={champion.id}
              type="radio"
              value={champion.id}
              name="champions"
              onChange={handleChampionChange}
            />
          </Fragment>
        ))}
        <br />
        <button type="submit">Lock in</button>
      </fieldset>
    </form>
  )
}

export default ChampionPool
