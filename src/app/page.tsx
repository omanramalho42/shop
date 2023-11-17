'use client'

import { 
  Button, 
  Input, 
  Typography 
} from "@/components"

import { HomeContainer } from "@/styles/Home"
import { ChartLine } from "phosphor-react"

export default function Home() {
  return (
    <HomeContainer>
      
      <Typography 
        content="Hello world 🌞"
        color="#333"
        align="center"
        size="large"
        strong
      />

      <Button />
      <Input
        icon={
          <ChartLine 
            style={{ marginRight: '10px' }}
            size={24} 
            color='white' 
          />
        }
        type="text"
        prefix={'R$'}
        sufix="cm"
      />
    </HomeContainer>
  )
}
