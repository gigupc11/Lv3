import React from 'react'
import Button from '../components/Button'
import styled from 'styled-components'
import { useState } from 'react';


function Input() {
    const [number, setNumber] = useState('');
    const [name,setName] = useState('')

    const NumberChangehandler = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자는 제거
        const num = parseInt(value, 10); // 문자열을 숫자로 변환
        if (isNaN(num)) { // 비어있을때 NaN이 출력되지 않게한다
            setNumber('');
          } else {
            setNumber(num.toLocaleString());
          }
      };

    const save = () => {
        if (number === '') {
            alert('가격을 입력해 주세요');
        } else if(name === ''){
            alert('이름을 입력해 주세요');
        } else {
            alert(`Name : ${name} Price : ${number}`);
        }
      }
      
      

  return (
    <>
    <h1>Input</h1>
    <Stlayout>
        <div>
            이름 <Stinput value={name} onChange={(event)=>{setName(event.target.value)}}/>
        </div>
        <div>
            가격 <Stinput type='text' value={number} onChange={NumberChangehandler}/>
        </div>
            <Button.Primary onClick={save}>저장</Button.Primary>
    </Stlayout>

    </>
  )
}

export default Input

const Stinput = styled.input`
    height : 40px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid black;
    padding-left: 10px;
`
const Stlayout = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`