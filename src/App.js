import { useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import request from './request';

function App() {
  const { status, data} = useQuery('users', () => request.get('/users'), {
    // refetchOnReconnect: false,
    // refetchOnWindowFocus: false,
    staleTime: 5000,
  });
  console.log(status);
  if (status === 'loading') {
    return <div>loading...</div>
  }
  return (
    <div className="App">
      <ul>
        { (data || []).map(item => <li key={item.id}>{item.name + new Date()}</li>) }
      </ul>
      <ReactQueryDevtools initialIsOpen={true}/>
    </div>
  );
}

export default App;
