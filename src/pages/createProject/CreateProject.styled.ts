import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.heading.medium};
  font-weight: bold;
  margin-bottom: 50px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DateInput = styled.input`
  flex: none;
  padding: 10px 9px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.heading.small};
  background-color: #ffffff;
  color: #aaa;
  font-family: 'Arial', sans-serif;

  &::placeholder {
    color: #aaa;
  }

  input[type='date']::-webkit-datetime-edit-text {
    -webkit-appearance: none;
    display: none;
  }
  input[type='date']::-webkit-datetime-edit-month-field {
    -webkit-appearance: none;
    display: none;
  }
  input[type='date']::-webkit-datetime-edit-day-field {
    -webkit-appearance: none;
    display: none;
  }
  input[type='date']::-webkit-datetime-edit-year-field {
    -webkit-appearance: none;
    display: none;
  }
`;

export const Separator = styled.span`
  font-size: ${({ theme }) => theme.heading.small};
  color: #ccc;
`;

export const SectionTitle = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.heading.small};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionInput = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  label {
    font-size: 0.8rem;
    font-weight: bold;
    color: #333;
    flex: 0.08;
  }

  input {
    flex: 0.3;
    border: none;
    font-size: 0.8rem;
  }
  ,
  select {
    flex: 0.6;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 0.5rem;
    background-color: #f9f9f9;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.heading.small};
  resize: none;
`;

export const SubmitButton = styled.button`
  width: 10%;
  padding: 15px;
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.heading.small};
  font-weight: bold;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
