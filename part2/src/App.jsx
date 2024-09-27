// import { createRoot } from 'react-dom/client'
import { Body } from './Components/Body';
import Header from './Components/Header';
import Weather from './Components/Weather';




function App() {
  return (
    <>
      <h3>Weather Component: </h3><Weather />
      <Header />
      <Body />
    </>

  )
}
export default App;