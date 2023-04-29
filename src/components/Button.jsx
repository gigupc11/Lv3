import React from 'react'
import styled, { css } from 'styled-components'


const ButtonFrame = ({ children, icon, ...restProps }) => {
    return (
        <StButton {...restProps}>
            {icon ? (
                <StBtninner>
                    {children}
                    {icon}
                </StBtninner>
                ) : (
                <>{children}</>
                )}
        </StButton>
            )
        }




const Primary = (props) => {
    return(
        <ButtonFrame
        {...props}
        bc = 'lightGreen'
        color = 'black'
        clickcolor = 'green'
        />
        )

    
}

const Nagative = (props) => {
    return(
        <ButtonFrame
        {...props}
        bc = 'lightPink'
        color = 'red'
        clickcolor = 'pink'
        />
        )

    
}


const Button = { Primary , Nagative}
export default Button;


const StButton = styled.button`
    background-color: ${({ bc }) => bc};
    border-radius: 10px;
    color: ${({ color }) => color};
    border: none;
    cursor: pointer;
    margin: 5px;
    :active {
    background-color: ${({ clickcolor }) => clickcolor};
  }


    ${({outline,bc})=>{
        if(outline) {
            return css`
                border: 3px solid ${bc};
                background-color: white;
                font-weight: 600;
            `
        }
    }}

    ${({type}) => {
        switch(type) {
            case "large":
                return css`
                    width: 200px;
                    height: 50px;
                    
                    `
            case "midium":
                return css`
                    width: 130px;
                    height: 45px;
                    `
            
            default:
                return css`
                    width: 100px;
                    height: 40px;
                `
        }
    }
}
`

const StBtninner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap : 3px


`
