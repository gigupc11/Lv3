import React, { useRef } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { createPortal } from 'react-dom'

const ModalA = ({onClose}) => {

    return createPortal(
        <Stlayout>
            <StBox>
                <div>
                    닫기와 확인 버튼 2개가 있고,외부 영역을 눌러도 모달이 닫히지 않아요.
                </div>
                <div>
                    <Button.Nagative onClick ={() => {
                    onClose(false);}
                    }>닫기</Button.Nagative>
                    <Button.Primary onClick ={() => {
                    onClose(false);}
                    }>확인</Button.Primary>
                </div>
            </StBox>
        </Stlayout>,
        document.getElementById('modal')
        )
}

const ModalB = ({onClose}) => {
    const outside = useRef()
    return createPortal(
        <Stlayout
        ref = {outside}
        onClick={(event) => {
            if(event.target === outside.current) onClose(false)}}>
            <StBoxb>
                <div>
                    닫기 버튼 1개가 있고,
                    외부 영역을 누르면 모달이 닫혀요.
                </div>
                <div>
                    <Stbtn onClick ={() => {
                    onClose(false);}
                    }>X</Stbtn>
                    
                </div>
            </StBoxb>
        </Stlayout>,
        document.getElementById('modal')
        )
}
        
    
    

    
const Modal = { ModalA, ModalB}
export default Modal
  
        

const StBox = styled.div`
    width: 450px;
    height: 450px;
    background-color: white;
    border-radius: 30px;
    padding: 20px;
    z-index: 9999;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: first baseline
    
    `
const Stlayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999;


    `
const StBoxb = styled.div`
    width: 270px;
    height: 170px;
    background-color: white;
    border-radius: 30px;
    padding: 20px;
    z-index: 9999;
    position: fixed;
    display: flex;
    gap:20px;
    justify-content: space-between;
    align-items: first baseline

    `
const Stbtn = styled.button`
    border-radius: 100%;
    width: 45px;
    height: 45px;
    border: 1px solid white;
    :hover {
        border: 3px solid black;
    }
    `

   

    

    




