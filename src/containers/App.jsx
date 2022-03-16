import React from 'react'
import Home from './Home'
import Loading from '../components/Loading'
import '../assets/stylesheets/App.scss'

const App = () => {
  // eslint-disable-next-line
  const littleCat = `%c \/\\_\/\\\r\n( o.o )\r\n > ^ <`
  const font = `font-family: monospace`
  const signature = 'agreloe'
  console.log(littleCat,font,signature);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    setTimeout(() => setLoading(false), 2000)
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  },[])

  return (
    <section className='app'>
      {
        loading === true ? (
          <Loading />
        ) : (
            <Home />
        )
      }
    </section>
  )
}

export default App;