# Household: 가계부

2019년도 인하공업전문대학 컴퓨터정보과 3학년 2학기 Front-end 과제

**[Demo Page](https://chojonghoon.github.io/household/)**

**[Blog Post](https://chojonghoon.github.io/react/report/household/report-household/)**

# Install: 설치

파일 설치

```bash
$ git clone https://github.com/ChoJongHoon/household.git
```

의존성 설치

```bash
$ yarn
```

개발 서버 시작

```bash
$ yarn start
```

# Tech Stack: 기술 스택

- React
- TypeScript
- styled-components
- material-ui

# 추가 구현 사항

- 추가 기능
  > 화면 오른쪽에 추가 폼을 통해 지출을 생성할 수 있습니다.
- 삭제 기능
  > 지출 목록에 마우스를 올리면 우측에 나타나는 `x` 표시를 눌러 지출을 삭제할 수 있습니다.
- 수정 기능
  > 수입 칸에 마우스를 올리면 우측에 나타나는 `수정`버튼을 눌러 수입 금액을 수정하고 `Enter`키를 입력해 수정을 완료할 수 있습니다.
- 저장 기능
  > `local storage`를 이용해 새로고침을 해도 데이터가 유지됩니다.
