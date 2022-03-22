import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin: 1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: inline-block;
  width: 20%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgrey;
  &:focus {
    outline: none;
    border-bottom: 1px solid blueviolet;
  }
  width: 70%;
`;

export const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid lightgrey;
  &:focus {
    outline: none;
    border-bottom: 1px solid blueviolet;
  }
  width: 70%;
`;

export const SubmitContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: end;
`;

export const SubmitInput = styled.input`
  background-color: aliceblue;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export const Total = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
