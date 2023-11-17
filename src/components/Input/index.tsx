import React, { FC, Fragment } from 'react'
import { InputBox, InputContainer } from './styled'

interface InputProps {
  icon: React.ReactNode;
  prefix: string;
  sufix: string;
  type: 'numeric' | 'text';
}

const Input:FC<InputProps> = ({ 
  icon, 
  prefix, 
  sufix, 
  type = 'text' 
}: InputProps ) => {
  return (
    <InputContainer 
      bg='info'
      color='primary'
      fullWidth
      round
      shadow
      align='center'
      gap={0}
      scale
      size='small'
      text='light'
    >
      <Fragment>
        { icon }
      </Fragment>

      { prefix }
      <InputBox 
        type={type}
        placeholder='Pesquise aqui'
      />
      { sufix }

    </InputContainer>
  )
}

export default Input