import { SIZES } from "@/constants/sizes";
import styled from "styled-components";

interface TextProps {
  align: 'center' | 'left' | 'right';
  color: string;
  size: 'small' | 'medium' | 'large';
  strong: boolean;
}

export const Text = styled.p<TextProps>`
  text-align: ${({ align }) => 
    align
  };
  color: ${({ color }) => 
    color
  };
  
  font-size: ${({ size }) => 
    SIZES[size]
  };
  font-weight: ${({ strong }) => strong 
    ? 'bold' 
    : 'normal'
  };
`;