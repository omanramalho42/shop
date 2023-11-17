import React from 'react'
import { ContainerButton } from './styled'
import { ChartLine } from 'phosphor-react'
const Button:React.FC = () => {
  return (
    <ContainerButton
      fullWidth
      align='center'
      shadow
      scale
      bg='error'
      color='primary'
      round
      size='big'
      text='light'
      gap={10}
    >
      <ChartLine size={24} color='white' />
      Button
    </ContainerButton>
  )
}

export default Button