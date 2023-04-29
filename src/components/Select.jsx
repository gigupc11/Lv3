import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom'

const Root =  document.getElementById('root')


const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('리액트');

  const outside = useRef()

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);

  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (outside.current && !outside.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outside]);

  return ( 
    <div>
      <StSelect type="button" onClick={toggleSelectBox}>
        {selectedOption && ` ${selectedOption}`}
      </StSelect>
      {isOpen && ReactDOM.createPortal(
        <Option ref={outside}>
          <Stbtntop type="button"  onClick={() => handleOptionClick('리액트')}>리액트</Stbtntop>
          <Stbtn type="button"  onClick={() => handleOptionClick('자바')}>자바</Stbtn>
          <Stbtn type="button"  onClick={() => handleOptionClick('스프링')}>스프링</Stbtn>
          <Stbtnbottom type="button"  onClick={() => handleOptionClick('리액트네이티브')}>리액트네이티브</Stbtnbottom>
        </Option>,
        Root
      )
    }
    </div>

  );
}

const SelectB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('리액트');

  const outside = useRef()


  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (outside.current && !outside.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outside]);


  return ( 
    <div>
      <StSelect type="button" onClick={toggleSelectBox}>
        {selectedOption && ` ${selectedOption}`}
      </StSelect>
      {isOpen && (
        <OptionB ref = {outside}>
          <Stbtntop type="button"  onClick={() => handleOptionClick('리액트')}>리액트</Stbtntop>
          <Stbtn type="button"  onClick={() => handleOptionClick('자바')}>자바</Stbtn>
          <Stbtn type="button"  onClick={() => handleOptionClick('스프링')}>스프링</Stbtn>
          <Stbtnbottom type="button"  onClick={() => handleOptionClick('리액트네이티브')}>리액트네이티브</Stbtnbottom>
        </OptionB>
        
      )
    }
    </div>

  );
}

const SelectBox = {Select,SelectB}

export default SelectBox;


const StSelect = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: white;
  

`
const Stbtn = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid lightgray;
  border-bottom: none;
  border-top: none;
  background-color: white;
  &:hover{
    background-color: lightgray;
  }
 

`
const Stbtntop = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid lightgray;
  border-bottom: none;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  &:hover{
    background-color: lightgray;
  }
 

`
const Stbtnbottom = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid lightgray;
  border-top: none;

  background-color: white;
  border-radius: 0px 0px 10px 10px;
  &:hover{
    background-color: lightgray;
  }


`

const Option =styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 5px;
  position: relative;
  top: -82px;
  
`
const OptionB =styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  
`