// 실습과제 #1의 영화 보드에 표시된 자료를 그대로 옮김.
// 박스오피스 영화 5편의 평점은 원본에 없어서 null로 표기함.
const titles=["인터스텔라","인셉션","라라랜드","센과 치히로의 행방불명","너의 이름은.","극장판 치이카와: 인어 섬의 비밀","암살자(들)","실낙원","타짜: 벨제붑의 노래","클레이페이스"];
const ratings=[8.4,8.4,7.9,8.5,8.5,null,null,null,null,null];
const years=[2014,2010,2016,2001,2016,2026,2026,2026,2026,2026];
const audiences=[0,0,0,0,0,2248142,3374490,104877,1999474,77148];
const dates=["2014-11-05",null,null,null,null,"2026-09-30","2026-09-23","2026-10-21","2026-09-23","2026-10-21"];
const posters=["/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg","/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg","/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg","/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg","/q719jXXEzOoYaps6babgKnONONX.jpg",null,null,null,null,null];
const movies=titles.map((title,i)=>({title,year:years[i],date:dates[i],rating:ratings[i],audience:audiences[i],poster:posters[i],type:i<5?"mine":"boxoffice",rank:i<5?null:i-4}));
