import { VARIANTS } from '@/@types/variants';
import { COLORS } from '@/constants/color';
import styled from 'styled-components'

interface InputContainerProps {
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

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;

  align-items: center;
  justify-content: ${({ align }) => 
    align
  };

  width: ${({ fullWidth }) => fullWidth 
    ? '99%' 
    : 'auto'
  };
  padding: 10px;
  color: ${({ color }) => 
    COLORS[color]
  };
  background-color: ${({ bg }) => 
    COLORS[bg]
  };
  box-shadow: ${({ shadow }) => shadow 
    ? '0 0 12px 3px rgba(0,0,0,0.4)' 
    : 'transparent' 
  };

  border: none;
  border-radius: ${({ round }) => round 
    ? '8px' 
    : '0px'
  };

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

export const InputBox = styled.input`
  all: unset;
  width: 100%;

  &&:placeholder {
    color: #fff;
  }
`;