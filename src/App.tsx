import { useState } from 'react'
import { Button } from './components/ui/button'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Hello Dev</h1>
        <Button>teste</Button>
    </>
  )
}
