// Part A: 반복문, 조건문, switch를 사용한 영화 분석
let sum=0,known=0,high=0,maxIndex=-1,decades={};
let popular=[];
for(let i=0;i<titles.length;i++){
  if(typeof ratings[i]==="number"){
    sum+=ratings[i];known++;
    if(ratings[i]>=8)high++;
    if(maxIndex<0||ratings[i]>ratings[maxIndex])maxIndex=i;
  }
  const decade=Math.floor(years[i]/10)*10;
  switch(decade){
    case 2000:case 2010:case 2020:decades[decade]=(decades[decade]||0)+1;break;
    default:decades.other=(decades.other||0)+1;
  }
  if(audiences[i]>=1000000)popular.push(titles[i]);
}
console.log("A1 확인된 평점 평균:",known?(sum/known).toFixed(2):"데이터 없음");
console.log("A2 최고 평점 영화:",maxIndex>=0?titles[maxIndex]:"데이터 없음");
console.log("A3 평점 8 이상:",high);
console.log("A4 연도대별:",decades);
console.log("A5 관객 100만 이상:",popular);

// Part B
function averageBy(list,key){
  const values=list.map(x=>x[key]).filter(x=>typeof x==="number"&&Number.isFinite(x));
  return values.length?values.reduce((a,b)=>a+b,0)/values.length:null;
}
function average(list){return averageBy(list,"rating");}
function best(list){
  return list.filter(x=>typeof x.rating==="number").reduce((a,b)=>!a||b.rating>a.rating?b:a,null);
}
function filterByRating(list,min){return list.filter(x=>typeof x.rating==="number"&&x.rating>=min);}
function sortBy(list,key,desc=false){
  const direction=desc?-1:1;
  return [...list].sort((a,b)=>{
    if(a[key]==null)return b[key]==null?0:1;
    if(b[key]==null)return -1;
    return direction*(typeof a[key]==="string"?a[key].localeCompare(b[key]):a[key]-b[key]);
  });
}
function search(list,keyword){return list.filter(x=>(x.title||"").toLowerCase().includes(keyword.trim().toLowerCase()));}
function formatNumber(value){return Number(value).toLocaleString("ko-KR");}
function yearsSince(date){return date?new Date().getFullYear()-Number(date.slice(0,4)):null;}
const top=best(movies),crowd=sortBy(movies,"audience",true)[0];
document.getElementById("out").textContent=[
  "평점이 확인된 "+known+"편의 평균: "+(average(movies)?.toFixed(2)??"없음")+"점",
  "최고 평점 영화: "+(top?.title??"없음"),
  "누적 관객 1위: "+crowd.title+" ("+formatNumber(crowd.audience)+"명)"
].join("\n");
document.getElementById("out").style.whiteSpace="pre-line";
console.log("B 함수 테스트:",{average:average(movies),best:top,filtered:filterByRating(movies,8),sorted:sortBy(movies,"rating",true),searched:search(movies,"인터"),formatted:formatNumber(1234567),years:yearsSince("2014-11-05")});

// Part C: TMDB 실제 JSON이 입력되면 분석 결과가 표시됨
function getList(data){return Array.isArray(data?.results)?data.results:[];}
const nowPlaying=getList(TMDB);
console.log("C1 페이지/전체 결과/영화 수:",TMDB.page,TMDB.total_results,nowPlaying.length);
console.log("C2 현재 상영작 평균 평점:",averageBy(nowPlaying,"vote_average"));
console.table(sortBy(nowPlaying,"vote_average",true).slice(0,5).map(x=>({title:x.title,release_date:x.release_date,vote_average:x.vote_average})));
console.log("C4 제목 검색 예시:",nowPlaying.filter(x=>(x.title||"").includes("영화")).length);
if(!nowPlaying.length)console.warn("TMDB now_playing 실제 JSON이 아직 입력되지 않았습니다.");
