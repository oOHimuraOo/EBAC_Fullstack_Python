import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState([])
  const [tarefatemp, setTarefaTemp] = useState('')

  function cadastrarTarefa() {
    setTarefa([...tarefa, tarefatemp])
    setTarefaTemp('')
  }

  return (
  <div className="App">
    <input data-testid="campo-tarefa" type="text" onChange={(e) => setTarefaTemp(e.target.value)} value={tarefatemp} />
    <button data-testid="btn-tarefa" type="button" onClick={cadastrarTarefa}> cadastrar</button>
    <ul>
      {tarefa.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
      ))}
    </ul>
  </div>
  );
}

export default App;