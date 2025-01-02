import React from 'react';
import * as S from './CreateProject.styled';

const CreateProject = () => {
  const projectData = [
    {
      name: 'recruitment',
      label: '모집 인원',
      type: 'text',
      placeholder: '인원을 적어주세요.',
    },
    {
      name: 'startDate',
      label: '시작 예정',
      type: 'text',
      placeholder: 'YYYY. MM. DD',
    },
    {
      name: 'field',
      label: '모집 분야',
      type: 'text',
      placeholder: '모집 분야를 적어주세요.',
    },
    {
      name: 'duration',
      label: '예상 기간',
      type: 'text',
      placeholder: '예상 기간을 적어주세요. ex. 5개월.',
    },
    {
      name: 'method',
      label: '진행 방식',
      type: 'text',
      placeholder: '온라인 / 오프라인 / 온오프라인',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()); // FormData -> Object 변환
    console.log(data); // 제출된 데이터를 확인
  };

  return (
    <S.Container>
      <S.Title>프로젝트 생성</S.Title>

      <form onSubmit={handleSubmit}>
        <S.Section>
          <S.SectionTitle>프로젝트 모집 일정</S.SectionTitle>
          <S.DateContainer>
            <S.DateInput name="startDate" type="date" placeholder="시작 날짜" />
            <S.Separator>-</S.Separator>
            <S.DateInput name="endDate" type="date" placeholder="종료 날짜" />
          </S.DateContainer>
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 제목</S.SectionTitle>
          <S.Input
            name="title"
            type="text"
            placeholder="프로젝트 제목을 입력해주세요."
          />
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 정보</S.SectionTitle>
          <S.SectionInput>
            {projectData.map((input, index) => (
              <S.InfoRow key={index}>
                <label htmlFor={input.name}>{input.label}</label>
                <input
                  id={input.name}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </S.InfoRow>
            ))}
            <S.InfoRow>
              <label htmlFor="newMember">새싹 여부</label>
              <S.CheckboxContainer>
                <input id="newMember" name="newMember" type="checkbox" />
              </S.CheckboxContainer>
            </S.InfoRow>

            <S.InfoRow>
              <label htmlFor="languages">사용 언어</label>
              <S.Input
                name="languages"
                type="text"
                placeholder="사용 언어를 입력해주세요."
              />
            </S.InfoRow>
          </S.SectionInput>
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 내용</S.SectionTitle>
          <S.TextArea
            name="description"
            placeholder="프로젝트 상세 정보를 입력해주세요."
          />
        </S.Section>

        <S.SubmitButton type="submit">제출</S.SubmitButton>
      </form>
    </S.Container>
  );
};

export default CreateProject;
