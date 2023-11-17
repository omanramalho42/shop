import { VARIANTS } from "@/@types/variants"
import { COLORS } from "@/constants/color"
import styled from "styled-components"

interface ButtonProps {
  color: VARIANTS['colors'];
  bg: VARIANTS['colors'];
  text: VARIANTS['text'];
  round: boolean;
  size: VARIANTS['sizes'];
  fullWidth: boolean;
  align: VARIANTS['align'];
  shadow: boolean;
  scale: boolean;
  gap: number;
}

export const ContainerButton = styled.button<ButtonProps>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  width: ${({ fullWidth }) => fullWidth 
    ? '100%' 
    : 'auto'
  };

  background-color: ${({ bg }) => 
    COLORS[bg] ?? 'transparent'
  };
  color: ${({ text }) => 
    COLORS[text] ?? '#333' 
  };

  border-radius: ${({ round }) => 
    round 
    ? '8px' 
    : '0'
  };

  justify-content: ${({ align }) => 
    align
  };
  align-items: center;
  gap: 1  0px;

  box-shadow: ${({ shadow }) => shadow 
    ? '0 0 12px 3px rgba(0,0,0,0.4)' 
    : 'transparent' 
  };

  border: none;
  padding: 10px;
  cursor: pointer;

  transition: all 0.325s;
  &:hover {
    scale: ${({ scale }) => scale 
      ? '1.002' 
      : '0'
    };
    opacity: .9;
  }
`;