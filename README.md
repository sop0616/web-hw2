# 웹개발기초 실습과제 #2 — 영화 데이터를 자바스크립트로

- 이름: 연소윤
- 학번: 2651040
- GitHub 저장소: https://github.com/sop0616/web-hw2
- GitHub Pages: https://sop0616.github.io/web-hw2/ (배포 활성화 후 확인 필요)

## 구현 항목
- [x] Part A: 배열 4개, 반복문·조건문·switch를 사용한 콘솔 출력
- [x] Part B: 영화 객체 10개, 평균·최고·필터·정렬·검색·숫자 서식·연도 차이 함수
- [x] Part C: TMDB 데이터 처리 함수 및 콘솔 출력 코드
- [ ] 실제 TMDB now_playing JSON 붙여넣기
- [ ] console-a.png 캡처
- [ ] console-c.png 캡처
- [ ] GitHub Pages 배포 결과 확인

## 데이터 확인
영화 제목, 연도, 개인 영화 평점, KOBIS 박스오피스 누적 관객 수는 실습과제 #1 파일에 있는 값을 사용했다. 기준일은 2026-10-25이다. 원본에 없는 박스오피스 평점은 임의로 채우지 않고 null로 표시했다. 따라서 평점 평균은 확인된 영화만 대상으로 계산한다. TMDB API의 실제 now_playing JSON은 아직 제공되지 않아 빈 응답 구조로 두었다.

## 자가 테스트
| 항목 | 호출 | 예상 |
|---|---|---|
| 숫자 서식 | formatNumber(1234567) | 1,234,567 |
| 평점 평균 | average(movies) | 확인된 평점의 평균 |
| 최고 평점 | best(movies) | 센과 치히로의 행방불명 |
| 필터 | filterByRating(movies,8) | 4편 |
| 검색 | search(movies,"인터") | 인터스텔라 |
| 정렬 | sortBy(movies,"audience",true) | 관객 내림차순 |
| 연도 차이 | yearsSince("2014-11-05") | 현재 연도와 2014의 차이 |

## 어려웠던 점과 해결
1. 여러 배열의 순서를 일치시키기 위해 동일한 영화 순서로 구성했다.
2. 원본 데이터를 변경하지 않도록 정렬 시 복사본을 사용했다.
3. TMDB 응답은 results 배열을 추출하도록 분리했다.

## 참고 자료
- 실습과제 #1 index.html, detail.html
- https://www.themoviedb.org/
- https://www.kobis.or.kr/

## 생성형 AI 사용 내역
- 질문: 과제 안내문과 기존 영화 보드 자료를 바탕으로 JavaScript 분석 코드를 작성해 달라고 요청했다.
- 답변: 데이터 배열과 영화 객체, 분석 함수, HTML 출력 및 README 구성을 도움받았다.
- 채택: 코드와 설명을 사용했으며 실제 API 응답 및 실행 캡처는 추가 확인이 필요하다.
