import { useState } from 'react'

const choices = ['Rock', 'Paper', 'Scissors']
const emoji = { Rock: '\u270a', Paper: '\u270b', Scissors: '\u270c\ufe0f' }

const beats = { Rock: 'Scissors', Paper: 'Rock', Scissors: 'Paper' }

function whoWins(player, cpuPick) {
  if (player === cpuPick) return 'draw'
  if (beats[player] === cpuPick) return 'win'
  return 'lose'
}

function pickCpuMove() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function App() {
  const [playerPick, setPlayerPick] = useState(null)
  const [cpuPick, setCpuPick] = useState(null)
  const [turn, setTurn] = useState(0)
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 })

  function play(pick) {
    const cpu = pickCpuMove()
    const result = whoWins(pick, cpu)
    setPlayerPick(pick)
    setCpuPick(cpu)
    setTurn(turn + 1)
    setScore({ ...score, [result]: score[result] + 1 })
  }

  function reset() {
    setPlayerPick(null)
    setCpuPick(null)
    setTurn(0)
    setScore({ win: 0, lose: 0, draw: 0 })
  }

  const resultText =
    turn === 0 ? 'Pick your move!' :
    turn > 0 && playerPick === cpuPick ? 'Draw 🤝' :
    beats[playerPick] === cpuPick ? 'You win! \ud83c\udf89' : 'CPU wins \ud83e\udd16'

  return (
    <div className="card rps-card">
      <span className="badge">Mini Project</span>
      <h1 className="ev-title">Rock Paper Scissors</h1>
      <p className="desc">Everything combined: state, events, conditional — one tiny game.</p>

      <div className="row rps-scores">
        <span className="pill pill-green">You {score.win}</span>
        <span className="pill pill-red">CPU {score.lose}</span>
        <span className="pill pill-yellow">Draw {score.draw}</span>
      </div>

      <div className="rps-fight">
        <div className="rps-side">
          <div className="rps-emoji">{playerPick ? emoji[playerPick] : '?'}</div>
          <span className="rps-name">You</span>
        </div>
        <span className="rps-vs">vs</span>
        <div className="rps-side">
          <div className="rps-emoji">{cpuPick ? emoji[cpuPick] : '?'}</div>
          <span className="rps-name">CPU</span>
        </div>
      </div>

      <p className="status rps-result">{resultText}</p>

      <div className="row rps-choices">
        {choices.map((pick) => (
          <button key={pick} className="rps-choice" onClick={() => play(pick)}>
            <span className="rps-choice-emoji">{emoji[pick]}</span>
            <span>{pick}</span>
          </button>
        ))}
      </div>

      <button className="btn btn-auto rps-reset" onClick={reset}>Reset game</button>
    </div>
  )
}

export default App