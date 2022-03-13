# Node js and React project

## 프로젝트 사용법

이 템플릿 사용은 압축 파일을 다운로드해서 사용하거나 아래 명령어를 터미널에 입력해서 사용한다.

```shell
git clone https://github.com/nowgnas/project-template.git
```

### 패키지 설치

먼저 root 경로 터미널에서 `yarn install`로 backend에 필요한 의존성을 설치해 준다. 다음으로 `cd client`로 터미널 경로를 `/client`로 변경 후 동일한 명령어로 frontend에 필요한 의존성을 설치해 준다.

backend는 middleware가 추가된 3계층 구조를 사용한다. backend 부분은 `server`폴더에 있다.

## Backend

<img height="25px" src="https://img.shields.io/badge/Express-000000?style=flat&amp;logo=Express&amp;logoColor=white" alt="Python Badge">
<img height="25px" src="https://img.shields.io/badge/Node js-339933?style=flat&amp;logo=Node.js&amp;logoColor=white" alt="Python Badge">

## Frontend

<img height="25px" src="https://img.shields.io/badge/React-61DAFB?style=flat&amp;logo=React&amp;logoColor=white" alt="Python Badge">

[Frontend README를 확인해주세요.](/client/README.md)

## Database

<img height="25px" src="https://img.shields.io/badge/MongoDB-47A248?style=flat&amp;logo=MongoDB&amp;logoColor=white" alt="Python Badge">

## Localhost에서 서버 열기

`yarn dev`를 사용하여 개발용 서버를 연다.

local 환경에서 backend 서버와 frontend 서버를 동시에 열어 작업할 수 있습니다.

`yarn dev`를 이용해 backend 5000번, frontend 3000번을 각각 열지만 `localhost:3000`를 열어 백엔드와 통신이 가능하다.
