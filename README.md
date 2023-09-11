# HTML 학습용 저장소

> 이 저장소는 프론트엔드 관련 개발을 위해서 HTML 및 CSS를 학습한 결과를 저장해둔 곳 입니다. 학습용 저장소이기 때문에 사용 및 참조에 주의를 요합니다.

## HTML 및 CSS 주요 내용

### 개발환경을 구성

- Chrome
  - 기본 브라우저 설정
- VSCode
  - Live Server
- Git 설치 - GihHub 가입 및 저장소 생성
- VSCode를 사용해서 워킹 디렉토리 설정
- `README.md`` 파일 생성 및 저장소 업로드

### HTML과 CSS

- HTML(Hyper Text Markup Language)
  - 시맨틱 태그를 활용한 문서 구조 설계
  - CSS 적용 및 활용을 위한 그룹 태그 활용
- CSS
  - 선택자 활용
  - 마진과 패딩을 활용한 레이아웃 설계
  - 컬러, 폰트 등을 활용한 시각적 표현

## git 사용법

### Git 설정

```
$ git config --global user.name "Sangkon Han"
$ git config --global user.email djangobusan@gmail.com
```

### GitHub에 저장소 등록

```
$ git init
$ git add README.md
$ git commit -m "init"
$ git branch -M main
$ git remote add origin https://github.com/djangobusan/cards-blog.git
$ git push -u origin main
```

### Git에 생성된 로그인 정보 삭제

```
$ git config --global -l
$ git config --global --unset credential.helper
# git config --local --unset credential.helper
# git config --system --unset credential.helper
```

## Ref.

- [수업교안](https://sigmadream.notion.site/Web-824bb90a616f46dcb7c24bf7e07416ce?pvs=4)
- [MDN](https://developer.mozilla.org/ko/)
- [부산 관련 사진](https://unsplash.com/ko/s/%EC%82%AC%EC%A7%84/busan)

## LICENSE

MIT