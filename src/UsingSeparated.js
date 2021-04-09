import GPUOnly from './components/GPU'
import CPUOnly from './components/CPU'

function Separated() {
  return (
    <>
      <GPUOnly />
      <CPUOnly />
    </>
  )
}

export default Separated
