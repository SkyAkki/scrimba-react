import DieBox from "./DieBox"
export default function App(){
  return (
    <main className="main--container">
      <div className="game--container">
        <h2 className="game--heading">Tenzies</h2>
        <p className="game--instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <DieBox/>
      </div>
    </main>
  )
}