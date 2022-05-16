import { useQuery } from "react-query";
import request from './request';

function App() {
  const { status, data} = useQuery('users', () => request.get('/users'));
  console.log(status);
  if (status === 'loading') {
    return <div>loading...</div>
  }
  return (
    <div className="App">
      <ul>
        { (data || []).map(item => <li key={item.id}>{item.name}</li>) }
      </ul>
    </div>
  );
}

export default App;
