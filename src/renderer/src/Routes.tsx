import { Route } from 'react-router-dom'
import { Router } from '../src/lib/electron-router-dom'

import { Home } from '../pages/home'
import { About } from '../pages/about'
import { Create } from '../pages/create'
import { Detail } from '../pages/detail'
import { Layout } from '../components/Layout'

export default function Routes() {
  return (
    <Router
        main={
          <Route path="/" element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/customer/:id" element={<Detail />} />
          </Route>
        }
    />
  )
}