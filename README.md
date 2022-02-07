## 프로젝트 소개

> 소고기 판매 플랫폼의 관리자 페이지를 가정하여 상품 등록 페이지를 구현했습니다.

| 이름   | 담당                                        |
| ------ | ------------------------------------------- |
| 박훈주 | 상품 옵션 섹션, 사이드 메뉴바               |
| 이현호 | 상품 정보 고시, 필터 태그(자동 완성)        |
| 이주영 | 공통 UI 제작, 상품 기본 정보, 이미지 업로드 |
| 윤창현 | 상품 기간, 카테고리, 배송 및 기타 설정      |

<br/>

## 배포 주소

https://wanted-admin-product.netlify.app/

<br/>

## 사용 기술 및 스택

| ⚙️  Stack                     |
| ----------------------------- |
| React Hooks                   |
| styled-components             |
| MUI DatePicker                |
| React-icons                   |
| UUID                          |
| Deploy : Netilfy              |
| Other : Git / GitHub          |
| Build Tool (Create React App) |
| Code Quality Tool (Prettier)  |

<br/>

## CRA 구조

```markdown
├─components
│ ├─BasicInformation
│ │  
│ ├─ImageSection
│ │  
│ ├─Layouts
│ │  
│ ├─Library
│ │  
│ ├─Period
│ │  
│ ├─ProductInformation
│ │  
│ ├─ProductOption
│ │  
│ └─Setting
│  
├─constants
├─data
├─pages
├─styles
└─utils
```

<br/>

## 커밋 컨벤션

깃모지를 사용하여 직관성을 높이고, 기능이나 UI 설계에 따른 메세지를 커밋 메세지에 담는것을 컨벤션으로 결정했습니다. 깃모지로 인해 상대방이 어떤 작업을 수행했는지 한 눈에 확인할 수 있고, 메세지를 보며 조금 더 상세한 상황을 파악할 수 있습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

<br/>

## 과제 후기

### 윤창현 ✨

팀을 이루어 진행하는 프로젝트 이기에 팀원들과의 충분한 소통을 통해 4명이지만 통일된 코드와 구조를 완성할 수 있었고, 개발자로서 로직을 구현하는 방법에 대한 깊은 생각과 깃헙을 통한 협업의 중요성을 다시 한 번 느낄 수 있었던 좋은 시간 이었습니다.

[회고록 보러가기](https://velog.io/@changh950/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%EA%B4%80%EB%A6%AC%EC%9E%90-%ED%8E%98%EC%9D%B4%EC%A7%80)
