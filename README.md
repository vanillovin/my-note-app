# Mini Task Manager 📋

[배포 링크](https://mini-task-manager-git-master-vanillovin.vercel.app/)

## 프로젝트 소개

이 프로젝트는 간단한 일정 관리 앱을 제작한 것입니다. 날씨와 시간, 투 두 리스트 등의 정보를 확인할 수 있습니다. 또한, 오늘의 기분에 대한 일기를 작성하거나 캘린더를 통해 날짜별 스케줄을 관리하는 것도 가능합니다.

## 사용된 기술 스택

React.js, TypeScript, Redux, Tailwind CSS

## 기능 소개

### 홈

- 투 두 리스트의 생성, 조회, 수정, 삭제(CRUD) 기능을 구현하였습니다.
- 오늘의 날씨와 투 두 리스트 진행 상황를 확인할 수 있습니다.
- 오늘의 일정을 확인하고, 스케줄을 추가할 수 있습니다.

![chrome-capture-2024-0-3 (1)](https://github.com/vanillovin/my-task-manager/assets/70941696/d2dc0d0f-2716-42e3-abab-1d8b0db45fa0)

![chrome-capture-2024-0-3](https://github.com/vanillovin/my-task-manager/assets/70941696/2e2209ea-7236-41b8-af89-bb97b8076c73)

### 다이어리

- 다이어리 카테고리와 아이템에 대한 검색 및 CRUD 기능을 구현하였습니다.

![chrome-capture-2024-0-3](https://github.com/vanillovin/my-task-manager/assets/70941696/49bdc698-207f-46b6-ad80-2d314b98de9c)

![chrome-capture-2024-0-3 (2)](https://github.com/vanillovin/my-task-manager/assets/70941696/466a4f85-6ea4-4d77-b661-aa9772de6a75)

![chrome-capture-2024-0-3 (1)](https://github.com/vanillovin/my-task-manager/assets/70941696/5c592d1d-cba5-4cd1-8bb2-d424f144313c)

### 캘린더

- 캘린더의 CRUD 기능을 구현했습니다.
- 각 달의 기념일 스케줄을 확인할 수 있습니다.

![chrome-capture-2024-0-3 (2)](https://github.com/vanillovin/my-task-manager/assets/70941696/1bada8cd-b16b-4d7e-81b7-78f1397c858f)

### 다크모드

- 눈 건강과 편의성을 위해 다크모드를 지원합니다.

![chrome-capture-2024-0-3](https://github.com/vanillovin/my-task-manager/assets/70941696/39a51e3f-b04d-40b0-9145-8c0b99e5d5d4)

### 반응형 디자인

- 스마트폰, 태블릿 등 기기의 다양한 화면 크기에 대응하기 위해 반응형 디자인을 적용했습니다.

![chrome-capture-2024-0-3 (1)](https://github.com/vanillovin/my-task-manager/assets/70941696/f94e3b21-7552-4bd2-bf8c-7197911da0a6)

## 프로젝트 실행 방법

### 프로젝트 클론

```bash
$ git clone https://github.com/vanillovin/my-task-manager.git
````

### 설치 및 실행

```bash
$ npm install
$ npm run dev
```

## 폴더 구조

```
src
 ┣ apis
 ┃ ┣ getLocation.ts
 ┃ ┗ weather.ts
 ┣ components
 ┃ ┣ calendar
 ┃ ┃ ┣ Calendar.tsx
 ┃ ┃ ┣ CalendarContainer.tsx
 ┃ ┃ ┗ CalendarForm.tsx
 ┃ ┣ diary
 ┃ ┃ ┣ CategoryForm.tsx
 ┃ ┃ ┣ DiaryContainer.tsx
 ┃ ┃ ┣ DiaryDetailContainer.tsx
 ┃ ┃ ┗ ItemForm.tsx
 ┃ ┣ layout
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┗ Layout.tsx
 ┃ ┣ modal
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ ModalPortal.tsx
 ┃ ┣ todo
 ┃ ┃ ┣ Todo.tsx
 ┃ ┃ ┣ TodoForm.tsx
 ┃ ┃ ┣ TodoList.tsx
 ┃ ┃ ┗ TodoProgress.tsx
 ┃ ┣ weather
 ┃ ┃ ┗ Weather.tsx
 ┃ ┣ Clock.tsx
 ┃ ┣ Loading.tsx
 ┃ ┣ Router.tsx
 ┃ ┗ ThemeToggle.tsx
 ┣ contexts
 ┃ ┗ ThemeContext.tsx
 ┣ hooks
 ┃ ┣ service
 ┃ ┃ ┣ useCalendar.ts
 ┃ ┃ ┣ useDiary.ts
 ┃ ┃ ┗ useTodos.ts
 ┃ ┣ getLocation.ts
 ┃ ┣ useModal.ts
 ┃ ┗ useWeather.ts
 ┣ modules
 ┃ ┣ calendar
 ┃ ┃ ┣ actions.ts
 ┃ ┃ ┣ calendarData.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ reducer.ts
 ┃ ┃ ┗ types.ts
 ┃ ┣ diary
 ┃ ┃ ┣ actions.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ reducer.ts
 ┃ ┃ ┗ types.ts
 ┃ ┣ todos
 ┃ ┃ ┣ actions.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ reducer.ts
 ┃ ┃ ┗ types.ts
 ┃ ┗ index.ts
 ┣ pages
 ┃ ┣ CalendarPage.tsx
 ┃ ┣ DiaryDetailPage.tsx
 ┃ ┣ DiaryItemPage.tsx
 ┃ ┣ DiaryPage.tsx
 ┃ ┗ NotFoundPage.tsx
 ┣ store
 ┃ ┗ index.ts
 ┣ utils
 ┃ ┗ utils.ts
 ┣ App.test.tsx
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```
