# e-commerce-clone      http://inukurly.shop/


**2020-12-31 ~ 2021-01-07**  
: 회원 가입 페이지 구현
- 아이디 , 비밀번호 , 비밀번호 확인 유효성 검사 구현
- 카카오 주소 검색 api 이용해서 주소 검색 구현 
- 필수 항목 입력 안할 시 다음페이지 접근 불가 구현
- 아이디 중복확인 , 이메일 중복확인 ajax로 DB데이터 넘기기 구현     
- 회원가입 완료페이지 완성


**2021-01-07 ~ 2021-01-14**   
: 상품 판매 페이지 구현     
- 장바구니 아이콘 클릭시 - 배경 스크롤삭제, 배경터치 불가, 수량변경, 가격변경, 적립금계산 구현
- 회원가입 완료페이지 --> 이메일 확인해주세요 페이지로 변경
- 상품 등록을 위해 관리자페이지 구현
- 상품 detail에 이미지 무한 슬라이드 구현
- 상품 상세정보 페이지 템플릿 완성
- adminpage 스크롤 메뉴 구현
- 글자수 세기, 글자수 제한 구현    


**2021-01-14 ~ 2021-01-21**         
: 주문 관리 페이지 구현
- admin_page-prd-manage -> 상품 수정 기능 추가, 상품 삭제 기능 추가 , 모든 상품이 삭제 됐을 경우 "상품이 없습니다"로 화면 구성   
- admin_page_prd_upload -> 이미지 수정, 삭제 기능 추가,  이미지 버튼 클릭시 새로고침 되는 현상 제거   
- admin_page -> 왼쪽 관리자 퀵메뉴 스크롤 확 내렸을 때 footer로 영역 침범하는 오류 제거
- join_mobile 생성 -> join페이지로 데스크탑으로 접속시 자동 데스크탑 css , 모바일로 접속시 자동 모바일 css
- join, join_mobile -> 아이디,비밀번호 유효성 검사 실시간으로 변경
- join_mobile -> 주소검색 구현 완료
- good_view에 후기 게시판 템플릿 완료
- good_list 카테고리 클릭시 bar이동 animate , 글자 색 활성화 비활성화 추가 ,로딩창 display추가 (클릭시 0.5초동안 로딩 버퍼링 아이콘 뜬후 다시 display:none)    


**2021-01-21 ~ 2021-01-28**

- good_list -> 상품 갯수 12개까지 가능에서 제한없음 으로 변경.
- category_mobile -> 화면 구현 , 각 카테고리 클릭시 아이콘 회전, 글씨색, 아이콘색 변경, 안내문구 3초뒤에 자동으로 사라지게 완료
- mobile 페이지 접속시 animate효과 적용
- good_list_mobile -> 화면구현, 데스크탑과 같은 기능 추가


**2021-01-28 ~ 2021-02-04**
: 중간점검 - 파일 합치기
- reset_pw -> 유효성 검사추가
- main -> 퀵베너 따라오게하기, 배송지 안내메세지 첫 3초 띄우고 사라지게하기
- good_list, good_view 상품 가격,적립금 3자리수마다 콤마 설정
- main페이지 이미지 디자인, 오류 수정


**2021-02-04 ~ 2021-02-11**
: 마이컬리 구현하기

- 주문내역 구현
- 배송지 관리 구현   -> 새 배송지 추가, 기존 배송지 수정 
- 상품후기 구현      -> 각 후기 게시물 확인, 수정 , 삭제 
- 개인정보 수정 구현