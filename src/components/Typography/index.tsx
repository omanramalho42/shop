import React, { FC } from 'react'
import { Text } from './styled'

interface TypographyProps {
  content: string;
  color: string;
  align?: 'center' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  strong?: boolean;
}

const Typography:FC<TypographyProps> = ({ 
  content, 
  align = 'center', 
  color,
  size = 'small',
  strong = false
}: TypographyProps ) => {
  return (
    <Text 
      color={color} 
      align={align} 
      size={size} 
      strong={strong}
    >
      { content }
    </Text>
  )
}

export default Typography