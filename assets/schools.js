/* 국제학교 찾기 — schools.html 전용 */
(function(){
"use strict";

var KR_SCHOOLS=[
{n:"서울외국인학교 (Seoul Foreign School, SFS)",r:"서울 서대문구",c:"미국식·AP"},
{n:"서울국제학교 (Seoul International School, SIS)",r:"경기 성남 수정구 (분당 인근)",c:"미국식·AP"},
{n:"한국외국인학교 서울캠퍼스 (Korea International School Seoul, KIS Seoul)",r:"서울 강남 개포",c:"미국식·AP"},
{n:"한국외국인학교 판교캠퍼스 (Korea International School Pangyo, KIS Pangyo)",r:"경기 성남 분당구 판교",c:"미국식·AP"},
{n:"용산국제학교 (Yongsan International School of Seoul, YISS)",r:"서울 한남",c:"미국식·AP"},
{n:"덜위치칼리지 서울 (Dulwich College Seoul)",r:"서울 서초",c:"영국계·IGCSE·A-Level"},
{n:"드와이트 외국인학교 (Dwight School Seoul)",r:"서울 강서",c:"IB"},
{n:"아시아퍼시픽국제외국인학교 (Asia Pacific International School, APIS)",r:"서울 노원",c:"미국식·AP"},
{n:"한국켄트외국인학교 (Korea Kent Foreign School, KKFS)",r:"서울 광진",c:"미국식"},
{n:"지구촌기독외국인학교 (Global Vision Christian School, GVCS)",r:"서울 양천",c:"미국식"},
{n:"채드윅 송도국제학교 (Chadwick International)",r:"인천 송도",c:"IB"},
{n:"청라달튼외국인학교 (Cheongna Dalton School)",r:"인천 청라",c:"미국식·AP"},
{n:"경기수원외국인학교 (Gyeonggi Suwon International School, GSIS)",r:"경기 수원",c:"미국식·IB"},
{n:"대전외국인학교 (Taejon Christian International School, TCIS)",r:"대전",c:"미국식·AP·IB"},
{n:"NLCS 제주 (North London Collegiate School Jeju)",r:"제주 영어교육도시",c:"영국계·IGCSE·A-Level·IB"},
{n:"브랭섬홀아시아 (Branksome Hall Asia, BHA)",r:"제주 영어교육도시",c:"IB"},
{n:"한국국제학교 제주 (Korea International School Jeju, KIS Jeju)",r:"제주 영어교육도시",c:"미국식·AP"},
{n:"세인트존스베리아카데미 제주 (St. Johnsbury Academy Jeju, SJA)",r:"제주 영어교육도시",c:"미국식"},
{n:"부산외국인학교 (Busan Foreign School, BFS)",r:"부산 해운대",c:"미국식·AP"},
{n:"부산국제외국인학교 (Busan International Foreign School, BIFS)",r:"부산 기장",c:"IB"},
{n:"대구국제학교 (Daegu International School, DIS)",r:"대구",c:"미국식·AP"},
{n:"광주외국인학교 (Gwangju International School, GIS)",r:"광주",c:"미국식"},
{n:"전주화산외국인학교 (Jeonju Hwasan Foreign School)",r:"전북 전주",c:"미국식"},
{n:"거제국제외국인학교 (Geoje International Foreign School, GIFS)",r:"경남 거제",c:"미국식"},
{n:"경남국제외국인학교 (Gyeongnam International Foreign School)",r:"경남 사천",c:"미국식"},
{n:"서울독일학교 (Deutsche Schule Seoul International, DSSI)",r:"서울 용산",c:"독일계"},
{n:"서울프랑스학교 (Lycée Français de Séoul, LFS)",r:"서울 서초",c:"프랑스계"},
{n:"서울일본인학교 (Seoul Japanese School)",r:"서울 마포",c:"일본"},
{n:"국제크리스천학교 (International Christian School, ICS)",r:"경기 평택",c:"미국식"},
{n:"험프리스 미국인고등학교 (Humphreys High School, DoDEA)",r:"경기 평택",c:"미국식(DoDEA)"},
{n:"청심국제중·고등학교 (Cheongshim International Academy)",r:"경기 가평",c:"영어몰입·유학준비"},
{n:"오산 아메리칸 고등학교 (Osan American High School, DoDEA)",r:"경기 평택 오산공군기지",c:"미국식(DoDEA)"},
{n:"대구 아메리칸 스쿨 (Daegu American School, DoDEA)",r:"대구 남구 캠프워커",c:"미국식(DoDEA)"},
{n:"부산일본인학교 (Busan Japanese School)",r:"부산",c:"일본"},
{n:"한성화교중·고등학교 (Seoul Overseas Chinese High School)",r:"서울 중구 명동",c:"화교·중국계"},
{n:"인천화교중산중·고등학교 (Incheon Overseas Chinese Jungsan School)",r:"인천 중구",c:"화교·중국계"},
{n:"부산화교중·고등학교 (Busan Overseas Chinese School)",r:"부산 동구",c:"화교·중국계"},
{n:"재한몽골학교 (Mongolian School in Korea)",r:"서울 광진구",c:"몽골·다문화"},
];
var INTL_SCHOOLS=[
{n:"필립스 엑서터 아카데미 (Phillips Exeter Academy)",r:"미국 보딩스쿨",c:"미국식·AP"},
{n:"필립스 아카데미 앤도버 (Phillips Academy Andover)",r:"미국 보딩스쿨",c:"미국식·AP"},
{n:"디어필드 아카데미 (Deerfield Academy)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"로렌스빌 스쿨 (The Lawrenceville School)",r:"미국 보딩스쿨(뉴저지)",c:"미국식·AP"},
{n:"초트 로즈메리 홀 (Choate Rosemary Hall)",r:"미국 보딩스쿨(코네티컷)",c:"미국식·AP"},
{n:"핫치키스 스쿨 (The Hotchkiss School)",r:"미국 보딩스쿨(코네티컷)",c:"미국식·AP"},
{n:"세인트폴스 스쿨 (St. Paul's School)",r:"미국 보딩스쿨(뉴햄프셔)",c:"미국식·AP"},
{n:"페이 스쿨 (Fay School)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식"},
{n:"페센든 스쿨 (The Fessenden School)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식"},
{n:"하버드웨스트레이크 (Harvard-Westlake School)",r:"미국 캘리포니아(LA)",c:"미국식·AP"},
{n:"하커 스쿨 (The Harker School)",r:"미국 캘리포니아(산호세)",c:"미국식·AP"},
{n:"채드윅 스쿨 (Chadwick School)",r:"미국 캘리포니아(LA)",c:"미국식·AP"},
{n:"크리스탈 스프링스 업랜즈 스쿨 (Crystal Springs Uplands School)",r:"미국 캘리포니아",c:"미국식·AP"},
{n:"몬타비스타 고등학교 (Monta Vista High School)",r:"미국 캘리포니아(쿠퍼티노)",c:"미국식·AP"},
{n:"린브룩 고등학교 (Lynbrook High School)",r:"미국 캘리포니아(산호세)",c:"미국식·AP"},
{n:"미션산호세 고등학교 (Mission San Jose High School)",r:"미국 캘리포니아(프리몬트)",c:"미국식·AP"},
{n:"팔로알토 고등학교 (Palo Alto High School)",r:"미국 캘리포니아",c:"미국식·AP"},
{n:"어바인 고등학교 (Irvine High School)",r:"미국 캘리포니아(어바인)",c:"미국식·AP"},
{n:"유니버시티 고등학교 (University High School)",r:"미국 캘리포니아(어바인)",c:"미국식·AP"},
{n:"토머스제퍼슨 과학고 (Thomas Jefferson HSST, TJ)",r:"미국 버지니아",c:"미국식·AP"},
{n:"랭글리 고등학교 (Langley High School)",r:"미국 버지니아",c:"미국식·AP"},
{n:"맥클린 고등학교 (McLean High School)",r:"미국 버지니아",c:"미국식·AP"},
{n:"샹틸리 고등학교 (Chantilly High School)",r:"미국 버지니아",c:"미국식·AP"},
{n:"스톤브리지 고등학교 (Stone Bridge High School)",r:"미국 버지니아",c:"미국식·AP"},
{n:"버겐카운티 아카데미 (Bergen County Academies)",r:"미국 뉴저지",c:"미국식·AP"},
{n:"포트리 고등학교 (Fort Lee High School)",r:"미국 뉴저지",c:"미국식·AP"},
{n:"테너플라이 고등학교 (Tenafly High School)",r:"미국 뉴저지",c:"미국식·AP"},
{n:"노던밸리 데마레스트 고등학교 (Northern Valley Demarest High School)",r:"미국 뉴저지",c:"미국식·AP"},
{n:"리지우드 고등학교 (Ridgewood High School)",r:"미국 뉴저지",c:"미국식·AP"},
{n:"드와이트 스쿨 뉴욕 (Dwight School New York)",r:"미국 뉴욕",c:"IB"},
{n:"레이크사이드 스쿨 (Lakeside School)",r:"미국 워싱턴(시애틀)",c:"미국식·AP"},
{n:"벨뷰 고등학교 (Bellevue High School)",r:"미국 워싱턴",c:"미국식·AP"},
{n:"인터레이크 고등학교 (Interlake High School)",r:"미국 워싱턴",c:"미국식·AP·IB"},
{n:"뉴포트 고등학교 (Newport High School)",r:"미국 워싱턴",c:"미국식·AP"},
{n:"레드먼드 고등학교 (Redmond High School)",r:"미국 워싱턴",c:"미국식·AP"},
{n:"테슬라 STEM 고등학교 (Tesla STEM High School)",r:"미국 워싱턴",c:"미국식·AP(STEM)"},
{n:"오버레이크 스쿨 (The Overlake School)",r:"미국 워싱턴",c:"미국식·AP"},
{n:"벨레어 고등학교 (Bellaire High School)",r:"미국 텍사스(휴스턴)",c:"미국식·AP"},
{n:"카네기 뱅가드 고등학교 (Carnegie Vanguard High School)",r:"미국 텍사스(휴스턴)",c:"미국식·AP"},
{n:"플래노웨스트 고등학교 (Plano West Senior High School)",r:"미국 텍사스(플레이노)",c:"미국식·AP"},
{n:"재스퍼 고등학교 (Jasper High School)",r:"미국 텍사스(플레이노)",c:"미국식·AP"},
{n:"리디 고등학교 (Reedy High School)",r:"미국 텍사스(프리스코)",c:"미국식·AP"},
{n:"반데그리프트 고등학교 (Vandegrift High School)",r:"미국 텍사스(오스틴)",c:"미국식·AP"},
{n:"웨스트레이크 고등학교 (Westlake High School)",r:"미국 텍사스(오스틴)",c:"미국식·AP"},
{n:"리버티 고등학교 (Liberty High School)",r:"미국",c:"미국식·AP"},
{n:"어퍼캐나다칼리지 (Upper Canada College, UCC)",r:"캐나다 토론토",c:"IB·미국식"},
{n:"세인트조지스 스쿨 (St. George's School)",r:"캐나다 밴쿠버",c:"미국식·AP"},
{n:"브랭섬홀 (Branksome Hall)",r:"캐나다 토론토",c:"IB"},
{n:"하버갈 칼리지 (Havergal College)",r:"캐나다 토론토",c:"미국식·AP"},
{n:"크레센트 스쿨 (Crescent School)",r:"캐나다 토론토",c:"미국식·AP"},
{n:"베이뷰 글렌 (Bayview Glen School)",r:"캐나다 토론토",c:"미국식·AP"},
{n:"크로프턴 하우스 스쿨 (Crofton House School)",r:"캐나다 밴쿠버",c:"미국식·AP"},
{n:"웨스트포인트그레이 아카데미 (West Point Grey Academy)",r:"캐나다 밴쿠버",c:"미국식"},
{n:"멀그레이브 스쿨 (Mulgrave School)",r:"캐나다 밴쿠버",c:"IB"},
{n:"얼 헤이그 (Earl Haig Secondary School)",r:"캐나다 토론토(공립)",c:"미국식·AP"},
{n:"로드빙 (Lord Byng Secondary School)",r:"캐나다 밴쿠버(공립)",c:"미국식·AP"},
{n:"토론토·밴쿠버 공립 (Toronto/Vancouver Public, 국제학생)",r:"캐나다",c:"미국식"},
{n:"시드니 그래머 스쿨 (Sydney Grammar School)",r:"호주 시드니",c:"호주(HSC)·IB"},
{n:"녹스 그래머 스쿨 (Knox Grammar School)",r:"호주 시드니",c:"호주·IB"},
{n:"더 킹스 스쿨 (The King's School)",r:"호주 시드니",c:"호주·IB"},
{n:"핌블 레이디스 칼리지 (Pymble Ladies' College)",r:"호주 시드니",c:"호주·IB"},
{n:"애보츠레이 (Abbotsleigh)",r:"호주 시드니",c:"호주"},
{n:"크랜브룩 스쿨 (Cranbrook School)",r:"호주 시드니",c:"호주·IB"},
{n:"멜버른 그래머 스쿨 (Melbourne Grammar School)",r:"호주 멜버른",c:"호주(VCE)·IB"},
{n:"스카치 칼리지 멜버른 (Scotch College)",r:"호주 멜버른",c:"호주·IB"},
{n:"웨슬리 칼리지 (Wesley College)",r:"호주 멜버른",c:"호주·IB"},
{n:"헤일리베리 (Haileybury)",r:"호주 멜버른",c:"호주"},
{n:"브리즈번 그래머 스쿨 (Brisbane Grammar School)",r:"호주 브리즈번",c:"호주(QCE)·IB"},
{n:"앵글리칸 처치 그래머 (Churchie)",r:"호주 브리즈번",c:"호주"},
{n:"오클랜드 그래머 스쿨 (Auckland Grammar School)",r:"뉴질랜드 오클랜드",c:"케임브리지(CIE)"},
{n:"킹스 칼리지 (King's College Auckland)",r:"뉴질랜드 오클랜드",c:"케임브리지·NCEA"},
{n:"다이오세산 스쿨 (Diocesan School for Girls)",r:"뉴질랜드 오클랜드",c:"케임브리지·IB"},
{n:"세인트커스버트 칼리지 (St Cuthbert's College)",r:"뉴질랜드 오클랜드",c:"NCEA·IB"},
{n:"ACG 파넬 칼리지 (ACG Parnell College)",r:"뉴질랜드 오클랜드",c:"케임브리지(CIE)"},
{n:"맥클린스 칼리지 (Macleans College)",r:"뉴질랜드 오클랜드(공립)",c:"NCEA·케임브리지"},
{n:"랑기토토 칼리지 (Rangitoto College)",r:"뉴질랜드 오클랜드(공립)",c:"NCEA·케임브리지"},
{n:"크라이스트 칼리지 (Christ's College)",r:"뉴질랜드 크라이스트처치",c:"NCEA"},
{n:"아메리칸스쿨 인 재팬 (The American School in Japan, ASIJ)",r:"일본 도쿄",c:"미국식·AP"},
{n:"니시마치 인터내셔널 스쿨 (Nishimachi International School)",r:"일본 도쿄",c:"미국식"},
{n:"세이센 인터내셔널 스쿨 (Seisen International School)",r:"일본 도쿄",c:"IB"},
{n:"도쿄 인터내셔널 스쿨 (Tokyo International School)",r:"일본 도쿄",c:"IB"},
{n:"브리티시 스쿨 인 도쿄 (The British School in Tokyo)",r:"일본 도쿄",c:"영국계·IGCSE·A-Level"},
{n:"아오바 재팬 인터내셔널 (Aoba-Japan International School)",r:"일본 도쿄",c:"IB"},
{n:"세인트모어 인터내셔널 (Saint Maur International School)",r:"일본 요코하마",c:"IB·AP"},
{n:"요코하마 인터내셔널 스쿨 (Yokohama International School, YIS)",r:"일본 요코하마",c:"IB"},
{n:"캐나디안 아카데미 (Canadian Academy)",r:"일본 고베",c:"IB"},
{n:"오사카 인터내셔널 스쿨 (Osaka International School)",r:"일본 오사카",c:"IB"},
{n:"나고야 인터내셔널 스쿨 (Nagoya International School)",r:"일본 나고야",c:"IB"},
{n:"상하이 아메리칸 스쿨 (Shanghai American School, SAS)",r:"중국 상하이",c:"미국식·AP"},
{n:"콩코디아 상하이 (Concordia International School Shanghai)",r:"중국 상하이",c:"미국식·AP"},
{n:"덜위치 칼리지 상하이 (Dulwich College Shanghai)",r:"중국 상하이",c:"영국계·IB"},
{n:"SCIS 상하이 (Shanghai Community Int'l School)",r:"중국 상하이",c:"IB"},
{n:"YCIS 상하이 (Yew Chung Int'l School Shanghai)",r:"중국 상하이",c:"IB"},
{n:"국제학교 베이징 (International School of Beijing, ISB)",r:"중국 베이징",c:"미국식·IB"},
{n:"베이징 BSB (The British School of Beijing)",r:"중국 베이징",c:"영국계·IB"},
{n:"WAB 베이징 (Western Academy of Beijing)",r:"중국 베이징",c:"IB"},
{n:"덜위치 칼리지 베이징 (Dulwich College Beijing)",r:"중국 베이징",c:"영국계·IB"},
{n:"해로우 베이징 (Harrow Beijing)",r:"중국 베이징",c:"영국계·A-Level"},
{n:"광저우 아메리칸 스쿨 (AISG)",r:"중국 광저우",c:"미국식·IB"},
{n:"셰코우 인터내셔널 스쿨 (Shekou Int'l School)",r:"중국 선전",c:"미국식"},
{n:"싱가포르 아메리칸 스쿨 (Singapore American School, SAS)",r:"싱가포르",c:"미국식·AP·IB"},
{n:"UWC 동남아 (UWC South East Asia)",r:"싱가포르",c:"IB"},
{n:"탱글린 트러스트 스쿨 (Tanglin Trust School)",r:"싱가포르",c:"영국계·IB·A-Level"},
{n:"캐나디안 인터내셔널 스쿨 (Canadian International School)",r:"싱가포르",c:"IB"},
{n:"오버시즈 패밀리 스쿨 (Overseas Family School)",r:"싱가포르",c:"IB"},
{n:"스탬포드 아메리칸 (Stamford American International School)",r:"싱가포르",c:"IB·AP"},
{n:"도버코트 인터내셔널 (Dover Court International School)",r:"싱가포르",c:"영국계·IGCSE"},
{n:"홍콩 국제학교 (Hong Kong International School, HKIS)",r:"홍콩",c:"미국식·AP"},
{n:"캐나디안 인터내셔널 홍콩 (CDNIS)",r:"홍콩",c:"IB"},
{n:"차이니즈 인터내셔널 (Chinese International School)",r:"홍콩",c:"IB"},
{n:"하로우 홍콩 (Harrow International School Hong Kong)",r:"홍콩",c:"영국계·A-Level"},
{n:"ESF 잉글리시 스쿨 파운데이션 (ESF)",r:"홍콩",c:"IB"},
{n:"타이베이 아메리칸 스쿨 (Taipei American School)",r:"대만 타이베이",c:"미국식·AP"},
{n:"타이베이 유러피언 스쿨 (Taipei European School)",r:"대만 타이베이",c:"영국계·IB"},
{n:"사이공 사우스 (Saigon South International School)",r:"베트남 호치민",c:"미국식·AP"},
{n:"호치민시 국제학교 (ISHCMC)",r:"베트남 호치민",c:"IB"},
{n:"영국국제학교 호치민 (BIS HCMC)",r:"베트남 호치민",c:"영국계·IB"},
{n:"UNIS 하노이 (UNIS Hanoi)",r:"베트남 하노이",c:"IB"},
{n:"캐나디안 인터내셔널 스쿨 호치민 (CIS)",r:"베트남 호치민",c:"미국식·IB"},
{n:"아메리칸 인터내셔널 스쿨 호치민 (AIS)",r:"베트남 호치민",c:"미국식·AP"},
{n:"호주 국제학교 사이공 (Australian International School Saigon)",r:"베트남 호치민",c:"IB·호주"},
{n:"유러피언 인터내셔널 스쿨 호치민 (EIS HCMC)",r:"베트남 호치민",c:"IB"},
{n:"르네상스 인터내셔널 사이공 (Renaissance International School Saigon)",r:"베트남 호치민",c:"영국계·IB"},
{n:"ABC 인터내셔널 스쿨 (ABC International School)",r:"베트남 호치민",c:"영국계"},
{n:"영국국제학교 하노이 (BIS Hanoi)",r:"베트남 하노이",c:"영국계·IB"},
{n:"하노이 국제학교 (Hanoi International School, HIS)",r:"베트남 하노이",c:"IB"},
{n:"다낭 국제학교 (Danang International School)",r:"베트남 다낭",c:"미국식"},
{n:"방콕 국제학교 (International School Bangkok, ISB)",r:"태국 방콕",c:"IB"},
{n:"NIST 인터내셔널 (NIST International School)",r:"태국 방콕",c:"IB"},
{n:"방콕 패턴 스쿨 (Bangkok Patana School)",r:"태국 방콕",c:"영국계·IB"},
{n:"하로우 방콕 (Harrow International School Bangkok)",r:"태국 방콕",c:"영국계·A-Level"},
{n:"셰루즈베리 인터내셔널 방콕 (Shrewsbury International School Bangkok)",r:"태국 방콕",c:"영국계·A-Level"},
{n:"리젠츠 인터내셔널 방콕 (Regent's International School Bangkok)",r:"태국 방콕",c:"IB"},
{n:"KIS 인터내셔널 방콕 (KIS International School)",r:"태국 방콕",c:"IB"},
{n:"웰링턴 칼리지 방콕 (Wellington College Int'l Bangkok)",r:"태국 방콕",c:"영국계·A-Level"},
{n:"브롬스그로브 인터내셔널 (Bromsgrove International School Thailand)",r:"태국 방콕",c:"영국계"},
{n:"루암루디 인터내셔널 (Ruamrudee International School, RIS)",r:"태국 방콕",c:"미국식·IB"},
{n:"콘코디안 인터내셔널 (Concordian International School)",r:"태국 방콕",c:"IB"},
{n:"아메리칸 스쿨 오브 방콕 (American School of Bangkok)",r:"태국 방콕",c:"미국식·AP"},
{n:"프렘 티나술라논다 (Prem Tinsulanonda International School)",r:"태국 치앙마이",c:"IB"},
{n:"치앙마이 국제학교 (Chiang Mai International School)",r:"태국 치앙마이",c:"미국식"},
{n:"UWC 타일랜드 (UWC Thailand)",r:"태국 푸켓",c:"IB"},
{n:"브리티시 인터내셔널 푸켓 (BISP)",r:"태국 푸켓",c:"영국계·IB"},
{n:"ISKL (International School of Kuala Lumpur)",r:"말레이시아 쿠알라룸푸르",c:"미국식·IB"},
{n:"가든 인터내셔널 스쿨 (Garden International School)",r:"말레이시아 쿠알라룸푸르",c:"영국계·IGCSE·A-Level"},
{n:"알리스 스미스 스쿨 (Alice Smith School)",r:"말레이시아 쿠알라룸푸르",c:"영국계"},
{n:"말보로 칼리지 말레이시아 (Marlborough College Malaysia)",r:"말레이시아 조호바루",c:"영국계·A-Level·IB"},
{n:"자카르타 인터컬처럴 (Jakarta Intercultural School, JIS)",r:"인도네시아 자카르타",c:"미국식·IB"},
{n:"브리티시 스쿨 자카르타 (British School Jakarta)",r:"인도네시아 자카르타",c:"영국계·IB"},
{n:"인터내셔널 스쿨 마닐라 (International School Manila)",r:"필리핀 마닐라",c:"IB"},
{n:"브렌트 인터내셔널 (Brent International School Manila)",r:"필리핀 마닐라",c:"미국식·IB"},
{n:"브리티시 스쿨 마닐라 (British School Manila)",r:"필리핀 마닐라",c:"영국계·IB"},
{n:"리딤 인터내셔널 (Reedley International School)",r:"필리핀 마닐라",c:"미국식"},
{n:"페이스 아카데미 (Faith Academy)",r:"필리핀 마닐라",c:"미국식·AP"},
{n:"세인트 폴 인터내셔널 (St. Paul American School Manila)",r:"필리핀 마닐라",c:"미국식·AP"},
{n:"세부 인터내셔널 스쿨 (Cebu International School)",r:"필리핀 세부",c:"미국식·IB"},
{n:"브렌트 인터내셔널 수빅 (Brent International School Subic)",r:"필리핀 수빅",c:"미국식·IB"},
{n:"아메리칸 엠버시 스쿨 (American Embassy School)",r:"인도 뉴델리",c:"미국식·AP·IB"},
{n:"우드스톡 스쿨 (Woodstock School)",r:"인도 무수리",c:"미국식·AP"},
{n:"아메리칸 스쿨 오브 두바이 (American School of Dubai)",r:"UAE 두바이",c:"미국식·AP"},
{n:"두바이 칼리지 (Dubai College)",r:"UAE 두바이",c:"영국계·A-Level"},
{n:"GEMS 월드 아카데미 두바이 (GEMS World Academy)",r:"UAE 두바이",c:"IB"},
{n:"아메리칸 커뮤니티 스쿨 아부다비 (ACS Abu Dhabi)",r:"UAE 아부다비",c:"미국식·IB"},
{n:"아메리칸 스쿨 오브 도하 (American School of Doha)",r:"카타르 도하",c:"미국식·AP"},
{n:"브리티시 스쿨 리야드 (British International School Riyadh)",r:"사우디 리야드",c:"영국계·A-Level"},
{n:"이튼 칼리지 (Eton College)",r:"영국 (보딩)",c:"영국계·A-Level"},
{n:"해로우 스쿨 (Harrow School)",r:"영국 런던 (보딩)",c:"영국계·A-Level"},
{n:"윈체스터 칼리지 (Winchester College)",r:"영국 (보딩)",c:"영국계·A-Level"},
{n:"럭비 스쿨 (Rugby School)",r:"영국 (보딩)",c:"영국계·A-Level·IB"},
{n:"웰링턴 칼리지 (Wellington College)",r:"영국 (보딩)",c:"영국계·IB·A-Level"},
{n:"ACS 인터내셔널 스쿨 (ACS International, London)",r:"영국 런던",c:"미국식·IB"},
{n:"인터내셔널 스쿨 오브 파리 (International School of Paris)",r:"프랑스 파리",c:"IB"},
{n:"프랑크푸르트 국제학교 (Frankfurt International School)",r:"독일 프랑크푸르트",c:"IB"},
{n:"뮌헨 국제학교 (Munich International School)",r:"독일 뮌헨",c:"IB"},
{n:"베를린 브리티시 스쿨 (Berlin British School)",r:"독일 베를린",c:"영국계·IB"},
{n:"인스티튜트 르 로제 (Institut Le Rosey)",r:"스위스 (보딩)",c:"IB·프랑스"},
{n:"에글롱 칼리지 (Aiglon College)",r:"스위스 (보딩)",c:"IB·영국계"},
{n:"인터내셔널 스쿨 오브 제네바 (International School of Geneva)",r:"스위스 제네바",c:"IB"},
{n:"취리히 국제학교 (Zurich International School)",r:"스위스 취리히",c:"IB·AP"},
{n:"아메리칸 스쿨 오브 헤이그 (American School of The Hague)",r:"네덜란드 헤이그",c:"미국식·IB"},
{n:"인터내셔널 스쿨 암스테르담 (International School of Amsterdam)",r:"네덜란드 암스테르담",c:"IB"},
{n:"아메리칸 스쿨 오브 마드리드 (American School of Madrid)",r:"스페인 마드리드",c:"미국식·AP"},
{n:"벤자민 프랭클린 국제학교 (Benjamin Franklin Int'l School)",r:"스페인 바르셀로나",c:"미국식·IB"},
{n:"아메리칸 오버시즈 스쿨 오브 로마 (AOSR)",r:"이탈리아 로마",c:"미국식·IB"},
{n:"비엔나 국제학교 (Vienna International School)",r:"오스트리아 비엔나",c:"IB"},
{n:"인터내셔널 스쿨 오브 브뤼셀 (International School of Brussels)",r:"벨기에 브뤼셀",c:"IB"},
{n:"세인트앤드류스 칼리지 더블린 (St Andrew's College)",r:"아일랜드 더블린",c:"IB"},
{n:"앵글로-아메리칸 스쿨 모스크바 (AAS Moscow)",r:"러시아 모스크바",c:"미국식·IB"},
{n:"그레이디드 스쿨 상파울루 (Graded School)",r:"브라질 상파울루",c:"미국식·IB"},
{n:"아메리칸 스쿨 오브 리우 (American School of Rio)",r:"브라질 리우데자네이루",c:"미국식·IB"},
{n:"링컨 스쿨 부에노스아이레스 (Lincoln, Buenos Aires)",r:"아르헨티나 부에노스아이레스",c:"미국식·IB"},
{n:"산티아고 칼리지 (Santiago College)",r:"칠레 산티아고",c:"IB"},
{n:"니도 데 아길라스 (International School Nido de Aguilas)",r:"칠레 산티아고",c:"미국식·IB"},
{n:"아메리칸 스쿨 파운데이션 (American School Foundation)",r:"멕시코 멕시코시티",c:"미국식·IB"},
{n:"콜레지오 루즈벨트 (Colegio Roosevelt)",r:"페루 리마",c:"미국식·IB"},
{n:"콜레지오 누에바 그라나다 (Colegio Nueva Granada)",r:"콜롬비아 보고타",c:"미국식·IB"},
{n:"그로튼 스쿨 (Groton School)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"미들섹스 스쿨 (Middlesex School)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"밀턴 아카데미 (Milton Academy)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"노스필드 마운트 허먼 (Northfield Mount Hermon)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"콩코드 아카데미 (Concord Academy)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"버크셔 스쿨 (Berkshire School)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"쿠싱 아카데미 (Cushing Academy)",r:"미국 보딩스쿨(매사추세츠)",c:"미국식·AP"},
{n:"태프트 스쿨 (The Taft School)",r:"미국 보딩스쿨(코네티컷)",c:"미국식·AP"},
{n:"루미스 채피 스쿨 (Loomis Chaffee School)",r:"미국 보딩스쿨(코네티컷)",c:"미국식·AP"},
{n:"켄트 스쿨 (Kent School)",r:"미국 보딩스쿨(코네티컷)",c:"미국식·AP"},
{n:"더 힐 스쿨 (The Hill School)",r:"미국 보딩스쿨(펜실베이니아)",c:"미국식·AP"},
{n:"머서스버그 아카데미 (Mercersburg Academy)",r:"미국 보딩스쿨(펜실베이니아)",c:"미국식·AP"},
{n:"블레어 아카데미 (Blair Academy)",r:"미국 보딩스쿨(뉴저지)",c:"미국식·AP"},
{n:"페디 스쿨 (The Peddie School)",r:"미국 보딩스쿨(뉴저지)",c:"미국식·AP"},
{n:"에피스코펄 고등학교 (Episcopal High School)",r:"미국 보딩스쿨(버지니아)",c:"미국식·AP"},
{n:"우드베리 포레스트 (Woodberry Forest School)",r:"미국 보딩스쿨(버지니아)",c:"미국식·AP"},
{n:"케이트 스쿨 (Cate School)",r:"미국 보딩스쿨(캘리포니아)",c:"미국식·AP"},
{n:"대처 스쿨 (The Thacher School)",r:"미국 보딩스쿨(캘리포니아)",c:"미국식·AP"},
{n:"웹 스쿨 (The Webb Schools)",r:"미국 보딩스쿨(캘리포니아)",c:"미국식·AP"},
{n:"스타이베선트 고등학교 (Stuyvesant High School)",r:"미국 뉴욕",c:"미국식·AP"},
{n:"브롱스 과학고 (Bronx High School of Science)",r:"미국 뉴욕",c:"미국식·AP"},
{n:"브루클린 테크 (Brooklyn Technical High School)",r:"미국 뉴욕",c:"미국식·AP"},
{n:"헌터 칼리지 고등학교 (Hunter College High School)",r:"미국 뉴욕",c:"미국식·AP"},
{n:"트리니티 스쿨 (Trinity School)",r:"미국 뉴욕",c:"미국식·AP"},
{n:"호러스 만 스쿨 (Horace Mann School)",r:"미국 뉴욕",c:"미국식·AP"},
{n:"달튼 스쿨 (The Dalton School)",r:"미국 뉴욕",c:"미국식·AP"},
{n:"로웰 고등학교 (Lowell High School)",r:"미국 캘리포니아(샌프란시스코)",c:"미국식·AP"},
{n:"건 고등학교 (Henry M. Gunn High School)",r:"미국 캘리포니아(팔로알토)",c:"미국식·AP"},
{n:"사라토가 고등학교 (Saratoga High School)",r:"미국 캘리포니아",c:"미국식·AP"},
{n:"쿠퍼티노 고등학교 (Cupertino High School)",r:"미국 캘리포니아(쿠퍼티노)",c:"미국식·AP"},
{n:"트로이 고등학교 (Troy High School)",r:"미국 캘리포니아(풀러턴)",c:"미국식·AP"},
{n:"휘트니 고등학교 (Whitney High School)",r:"미국 캘리포니아(세리토스)",c:"미국식·AP"},
{n:"아케이디아 고등학교 (Arcadia High School)",r:"미국 캘리포니아",c:"미국식·AP"},
{n:"다이아몬드바 고등학교 (Diamond Bar High School)",r:"미국 캘리포니아",c:"미국식·AP"},
{n:"월넛 고등학교 (Walnut High School)",r:"미국 캘리포니아",c:"미국식·AP"},
{n:"노스우드 고등학교 (Northwood High School)",r:"미국 캘리포니아(어바인)",c:"미국식·AP"},
{n:"포톨라 고등학교 (Portola High School)",r:"미국 캘리포니아(어바인)",c:"미국식·AP"},
{n:"우드브리지 고등학교 (Woodbridge High School)",r:"미국 캘리포니아(어바인)",c:"미국식·AP"},
{n:"벡맨 고등학교 (Arnold O. Beckman High School)",r:"미국 캘리포니아(어바인)",c:"미국식·AP"},
{n:"캐년크레스트 아카데미 (Canyon Crest Academy)",r:"미국 캘리포니아(샌디에이고)",c:"미국식·AP"},
{n:"토리파인스 고등학교 (Torrey Pines High School)",r:"미국 캘리포니아(샌디에이고)",c:"미국식·AP"},
{n:"세인트앤드류스 칼리지 (St. Andrew's College)",r:"캐나다 토론토(오로라)",c:"미국식·AP"},
{n:"애플비 칼리지 (Appleby College)",r:"캐나다 토론토(오크빌)",c:"IB"},
{n:"리들리 칼리지 (Ridley College)",r:"캐나다 온타리오",c:"IB"},
{n:"트리니티 칼리지 스쿨 (Trinity College School)",r:"캐나다 온타리오",c:"미국식·AP"},
{n:"비숍 스트라찬 스쿨 (The Bishop Strachan School)",r:"캐나다 토론토",c:"미국식·AP"},
{n:"토론토 프렌치 스쿨 (Toronto French School)",r:"캐나다 토론토",c:"IB"},
{n:"토론토대 부속학교 (University of Toronto Schools, UTS)",r:"캐나다 토론토",c:"미국식·AP"},
{n:"더 요크 스쿨 (The York School)",r:"캐나다 토론토",c:"IB"},
{n:"웨스트민스터 스쿨 (Westminster School)",r:"영국 런던",c:"영국계·A-Level"},
{n:"세인트폴스 스쿨 런던 (St Paul's School London)",r:"영국 런던",c:"영국계·A-Level"},
{n:"차터하우스 (Charterhouse)",r:"영국 서리 (보딩)",c:"영국계·A-Level·IB"},
{n:"브라이튼 칼리지 (Brighton College)",r:"영국 브라이튼",c:"영국계·A-Level"},
{n:"톤브리지 스쿨 (Tonbridge School)",r:"영국 켄트 (보딩)",c:"영국계·A-Level"},
{n:"세븐오크스 스쿨 (Sevenoaks School)",r:"영국 켄트 (보딩)",c:"영국계·IB"},
{n:"덜위치 칼리지 런던 (Dulwich College London)",r:"영국 런던",c:"영국계·A-Level"},
{n:"말버러 칼리지 (Marlborough College)",r:"영국 윌트셔 (보딩)",c:"영국계·A-Level"},
{n:"첼튼햄 칼리지 (Cheltenham College)",r:"영국 (보딩)",c:"영국계·A-Level"},
{n:"셔본 스쿨 (Sherborne School)",r:"영국 (보딩)",c:"영국계·A-Level"},
{n:"렙튼 스쿨 (Repton School)",r:"영국 (보딩)",c:"영국계·A-Level"},
{n:"슈루즈베리 스쿨 (Shrewsbury School)",r:"영국 (보딩)",c:"영국계·A-Level"},
{n:"킹스 칼리지 스쿨 윔블던 (King's College School)",r:"영국 런던",c:"영국계·A-Level·IB"},
{n:"콩코드 칼리지 (Concord College)",r:"영국 슈롭셔 (보딩)",c:"영국계·A-Level"},
{n:"콜레주 뒤 레만 (Collège du Léman)",r:"스위스 제네바 (보딩)",c:"IB·미국식"},
{n:"TASIS 스위스 (TASIS The American School in Switzerland)",r:"스위스 루가노 (보딩)",c:"미국식·AP·IB"},
{n:"레이신 아메리칸 스쿨 (Leysin American School)",r:"스위스 레이신 (보딩)",c:"미국식·AP"},
{n:"인스티튜트 로젠베르크 (Institut auf dem Rosenberg)",r:"스위스 장크트갈렌 (보딩)",c:"영국계·미국식"},
{n:"덜위치 칼리지 싱가포르 (Dulwich College Singapore)",r:"싱가포르",c:"영국계·IB"},
{n:"GEMS 월드 아카데미 싱가포르 (GEMS World Academy)",r:"싱가포르",c:"IB"},
{n:"넥서스 인터내셔널 싱가포르 (Nexus International School)",r:"싱가포르",c:"IB"},
{n:"글로벌 인디안 인터내셔널 (Global Indian International School, GIIS)",r:"싱가포르",c:"IB"},
{n:"ISS 인터내셔널 스쿨 (ISS International School)",r:"싱가포르",c:"IB"},
{n:"이튼하우스 인터내셔널 (EtonHouse International School)",r:"싱가포르",c:"IB"},
{n:"NPS 인터내셔널 스쿨 (NPS International School)",r:"싱가포르",c:"케임브리지(CIE)"},
{n:"독일-스위스 국제학교 (German Swiss International School)",r:"홍콩",c:"영국계·독일"},
{n:"프랑스 국제학교 홍콩 (French International School)",r:"홍콩",c:"IB·프랑스"},
{n:"켈렛 스쿨 (Kellett School)",r:"홍콩",c:"영국계·A-Level"},
{n:"호주 국제학교 홍콩 (Australian International School Hong Kong)",r:"홍콩",c:"호주·IB"},
{n:"디스커버리 칼리지 (Discovery College)",r:"홍콩",c:"IB"},
{n:"싱가포르 국제학교 홍콩 (Singapore International School)",r:"홍콩",c:"싱가포르·IGCSE"},
{n:"빅토리아 상하이 아카데미 (Victoria Shanghai Academy)",r:"홍콩",c:"IB"},
{n:"몬키아라 국제학교 (Mont'Kiara International School)",r:"말레이시아 쿠알라룸푸르",c:"미국식·IB"},
{n:"넥서스 인터내셔널 말레이시아 (Nexus International School)",r:"말레이시아 푸트라자야",c:"IB·IGCSE"},
{n:"스리 KDU 국제학교 (Sri KDU International School)",r:"말레이시아 쿠알라룸푸르",c:"영국계·IGCSE"},
{n:"엡솜 칼리지 말레이시아 (Epsom College in Malaysia)",r:"말레이시아",c:"영국계·A-Level"},
{n:"IGB 국제학교 (IGB International School)",r:"말레이시아 쿠알라룸푸르",c:"IB"},
{n:"텐비 스쿨 (Tenby Schools)",r:"말레이시아",c:"영국계·IGCSE"},
{n:"키스톤 아카데미 (Keystone Academy)",r:"중국 베이징",c:"IB·미국식"},
{n:"YK 파오 스쿨 (YK Pao School)",r:"중국 상하이",c:"IB·IGCSE"},
{n:"노드 앵글리아 상하이 (Nord Anglia International School Shanghai)",r:"중국 상하이",c:"영국계·IB"},
{n:"상하이 SUIS (Shanghai United International School)",r:"중국 상하이",c:"IB·IGCSE"},
{n:"K. 인터내셔널 스쿨 도쿄 (K. International School Tokyo)",r:"일본 도쿄",c:"IB"},
{n:"컬럼비아 인터내셔널 스쿨 (Columbia International School)",r:"일본 사이타마",c:"캐나다(온타리오)"},
{n:"디루바이 암바니 국제학교 (Dhirubhai Ambani International School)",r:"인도 뭄바이",c:"IB·IGCSE"},
{n:"코다이카날 국제학교 (Kodaikanal International School)",r:"인도 코다이카날",c:"미국식·IB"},
{n:"마힌드라 UWC (Mahindra United World College)",r:"인도 푸네",c:"IB"},
{n:"주메이라 칼리지 (Jumeirah College)",r:"UAE 두바이",c:"영국계·A-Level"},
{n:"렙튼 스쿨 두바이 (Repton School Dubai)",r:"UAE 두바이",c:"영국계·IB·A-Level"},
{n:"두바이 아메리칸 아카데미 (Dubai American Academy)",r:"UAE 두바이",c:"미국식·IB"},
{n:"킹스 스쿨 두바이 (Kings' School Dubai)",r:"UAE 두바이",c:"영국계"},
{n:"제스 두바이 (Jumeirah English Speaking School, JESS)",r:"UAE 두바이",c:"영국계·IB"},
{n:"노드 앵글리아 두바이 (Nord Anglia International School Dubai)",r:"UAE 두바이",c:"영국계·IB"},
{n:"그린 스쿨 발리 (Green School Bali)",r:"인도네시아 발리",c:"케임브리지(CIE)"},
{n:"발리 아일랜드 스쿨 (Bali Island School)",r:"인도네시아 발리",c:"IB"},
{n:"수라바야 인터컬처럴 (Surabaya Intercultural School)",r:"인도네시아 수라바야",c:"미국식·IB"},
{n:"코펜하겐 국제학교 (Copenhagen International School)",r:"덴마크 코펜하겐",c:"IB"},
{n:"스톡홀름 국제학교 (Stockholm International School)",r:"스웨덴 스톡홀름",c:"IB"},
{n:"룩셈부르크 국제학교 (International School of Luxembourg)",r:"룩셈부르크",c:"IB"},
{n:"TASIS 잉글랜드 (TASIS The American School in England)",r:"영국 런던",c:"미국식·AP·IB"},
{n:"세인트스티븐스 스쿨 로마 (St. Stephen's School Rome)",r:"이탈리아 로마",c:"미국식·AP"},
];

var TABS = { kr: KR_SCHOOLS, intl: INTL_SCHOOLS };

// 주재원 자녀 태깅
INTL_SCHOOLS.forEach(function (s) {
  var r = s.r;
  if (/보딩/.test(r)) { s.j = ''; return; }
  if (/싱가포르|홍콩|중국|베이징|상하이|선전|광저우|일본|도쿄|요코하마|나고야|오사카|고베|베트남|호치민|하노이|다낭|태국|방콕|치앙마이|푸켓|말레이시아|쿠알라룸푸르|조호|푸트라자야|인도네시아|자카르타|발리|필리핀|마닐라|세부|수빅|대만|타이베이|두바이|UAE|아부다비|도하|리야드|인도|뭄바이/.test(r))
    s.j = '주재원 자녀가 특히 많이 다니는 학교';
  else if (/뉴저지|캘리포니아|산호세|쿠퍼티노|프리몬트|어바인|워싱턴|시애틀|벨뷰|레드먼드|텍사스|플레이노|프리스코|오스틴|휴스턴|버지니아|샌디에이고|샌프란시스코|팔로알토|세리토스|풀러턴/.test(r))
    s.j = '한국 대기업 주재원·기러기 가정이 많은 지역';
  else s.j = '';
});
KR_SCHOOLS.forEach(function (s) { s.j = '귀국 주재원 자녀·주한 외국인 가정이 다니는 학교'; });

var tab = 'kr', filtered = [];
var $tabs, $input, $results, $detail;

function norm(t) { return (t || '').toLowerCase().replace(/\s/g, ''); }

function curMath(c) {
  if (c.indexOf('A-Level') >= 0 || c.indexOf('IGCSE') >= 0 || c.indexOf('영국') >= 0 || c.indexOf('케임브리지') >= 0) return 'IGCSE·A-Level';
  if (c.indexOf('IB') >= 0) return 'IB';
  if (c.indexOf('AP') >= 0) return 'AP';
  return '현지 교육과정';
}

function setTab(t) {
  tab = t;
  $tabs.forEach(function (b) { b.classList.toggle('active', b.dataset.tab === t); });
  $input.value = '';
  $input.placeholder = (t === 'kr')
    ? '지역·학교 검색  (예: 서울, 송도, 대전외국인학교)'
    : '국가·도시·학교 검색  (예: 싱가포르, 상하이, 보딩)';
  $results.className = 'finder-results';
  $results.innerHTML = '';
  $detail.className = 'finder-detail';
  $detail.innerHTML = '';
  $input.focus();
}

function renderList() {
  var q = norm($input.value.trim());
  if (!q) { $results.className = 'finder-results'; $results.innerHTML = ''; return; }
  filtered = TABS[tab].filter(function (s) {
    return norm(s.r + ' ' + s.n + ' ' + s.c + ' ' + (s.j || '')).indexOf(q) !== -1;
  }).slice(0, 40);
  if (!filtered.length) {
    $results.innerHTML = '<div class="fr-none">검색 결과가 없어요. 카톡·전화로 학교명을 알려주시면 대응 여부를 확인해 드립니다.</div>';
    $results.className = 'finder-results show';
    return;
  }
  $results.innerHTML = filtered.map(function (s, i) {
    var tag = (s.j && s.j.indexOf('주재원') >= 0) ? ' <span class="fr-tag">주재원</span>' : '';
    return '<button type="button" data-i="' + i + '"><b>' + s.r.split(' ')[0] + '</b> · ' + s.n + tag + '</button>';
  }).join('');
  $results.className = 'finder-results show';
}

function showDetail(i) {
  var s = filtered[i]; if (!s) return;
  var cm = curMath(s.c);
  $detail.innerHTML =
    '<h3>' + s.n + '</h3>' +
    '<div class="fd-meta">' + s.r + ' · ' + s.c + '</div>' +
    (s.j ? '<div class="fd-block"><b>다니는 학생</b><p>' + s.j + '입니다.</p></div>' : '') +
    '<div class="fd-block"><b>학교 특징</b><p>' + s.n + '은(는) ' + s.r + '의 ' + s.c + ' 과정 학교입니다. 수업과 평가가 영어로 진행되고 진도가 빠르기 때문에, 영어 실력과 기초 개념이 탄탄해야 잘 따라갈 수 있습니다. 부족한 부분은 국제학교 전담 교사의 1:1 수업으로 그때그때 메우는 학생이 많습니다.</p></div>' +
    '<div class="fd-block"><b>수학 준비</b><p>Algebra·Geometry 기초가 탄탄해야 ' + cm + ' 수학(Pre-Calculus·Calculus 등)으로 자연스럽게 이어집니다. 영어 용어와 서술형 답안을 함께 잡는 것이 핵심입니다.</p></div>' +
    '<div class="fd-block"><b>영어 준비</b><p>원서 리딩, 에세이 라이팅·첨삭, 학술 토론을 체계적으로 관리하면 내신과 시험에서 차이가 큽니다. 회화는 되는데 성적이 안 나오는 경우 적응 단계부터 1:1로 돕습니다.</p></div>' +
    '<div class="fd-block"><b>입학 준비</b><p>입학은 영어 시험 + 수학 배치고사 + 인터뷰 + 에세이가 핵심입니다. 학교별 전형에 맞춰 에세이 첨삭과 영어 인터뷰를 1:1로 준비하면 합격 가능성이 올라갑니다. (iTEP SLATE·SSAT 등 공인 영어시험 대비 포함)</p></div>' +
    '<a class="fd-cta" href="index.html#lead">' + s.n.split(' (')[0] + ' 무료 상담 신청 →</a>';
  $detail.className = 'finder-detail show';
  $detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('finder');
  if (!root) return;
  $tabs = Array.prototype.slice.call(root.querySelectorAll('.finder-tab'));
  $input = document.getElementById('finderInput');
  $results = document.getElementById('finderResults');
  $detail = document.getElementById('finderDetail');
  $tabs.forEach(function (b) { b.addEventListener('click', function () { setTab(b.dataset.tab); }); });
  $input.addEventListener('input', renderList);
  $results.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-i]');
    if (btn) showDetail(+btn.dataset.i);
  });
});
})();
