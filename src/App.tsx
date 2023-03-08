import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export const App: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello Mobile Reality</h1>

      <button onClick={() => navigate('/votes')}>Go to logic part</button>
    </div>
  )
}

export default App
