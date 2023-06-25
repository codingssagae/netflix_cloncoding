import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Route, Routes,NavLink, BrowserRouter, Router } from 'react-router-dom';
import Gogo from './gogo/gogo';
import styled from "styled-components";


//const goTopButton = document.querySelector(".back-to-top"); 

 
/*window.addEventListener("scroll", function () {

  if (window.pageYOffset > 200) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
});*/


/*goTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0});
});
*/

const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_manu');

toogleBtn.addEventListener('click', (event)=>{
  event.preventDefault();
  menu.classList.toggle('active');
});

/////////////////////////////////////

const movieStory = styled.h1 `
  border: 10px solid sienna;
  font-size: 30px;
  color: gold;
  text-align: center;
  align-items: center;
  line-height: 2.0;
`;


/////
function Home(){
  return(
    <div>
      <h2>-------------------------액션-------------------------</h2>
      <ul>
        <li><NavLink to="/action/1">트랜스포머</NavLink></li>
        <li><NavLink to="/action/2">범죄도시</NavLink></li>
        <li><NavLink to="/action/3">제이슨 본</NavLink></li>
        <li><NavLink to="/action/4">분노의 질주 1</NavLink></li>
      </ul>
      <Routes>
        <Route path="/1" element = {<div><div><img className='transImg' alt='트랜스포머 포스터' src='https://i.namu.wiki/i/t8QlZ40p2M3LvmS-FkjmhoVlzmd4utjI1PAMHJooot9KZuc1yMWeJM_WaektV2b-iLAjOiMZLzeZrP-8UUFamAxW0Ce1JWW-j-n_E0jLLVpyvuqGjUpIaZAHs3-6PzLT9IOL2Z9CfQZt1pdHMPj2fw.webp'>
          </img></div>
          <div className='transStory' >전쟁을 벌이는 외계 로봇 '딜런'과 함께 자신이 만든 로봇들을 지키기 위해 전투에 나선 소년 '샘'의 모험. 
            샘은 자신이 만든 로봇인 '옵티머스 프라임'을 지키기 위해 여행을 떠나고, 이를 추적하는 딜런과 적들과의 대결이 펼쳐진다!
            </div></div>
        }></Route>
        <Route path="/2" element = {<div><div>
          <img className='crimeCityImg' src='https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20170915_299%2F1505458505658vbKcN_JPEG%2Fmovie_image.jpg' alt='범죄도시 포스터'/>
        </div>
          <div className='crimeCityStory'>대규모 범죄조직과 형사들의 이야기.
          마약 등의 거대한 사업을 꾸려가는 범죄조직의 수장 '총'과 그를 추적하는 형사들의 전쟁이 시작된다. 
          이를 바탕으로 인간드라마와 흥미진진한 범죄액션이 펼쳐진다!</div></div>
        }></Route>
        <Route path='/3' element = {<div><div>
          <img className='jasonImg' alt='제이슨 본 포스터' src='https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_259%2F1324527317432wzph4_JPEG%2Fmovie_image.jpg'
        /></div>
          <div className='jasonStory'> CIA의 특수작전요원이었던 제이슨 본이 CIA의 국제작전 비밀사건을 추적하며, 
          자신의 과거를 찾아가는 이야기가 펼져친다!.</div></div>
        }></Route>
        <Route path='/4' element = {<div>
          <div><img className='bunNoIpg' alt='분노의 질주 포스터' src=''/>
          </div>
          <div className='bunNoStory'></div></div>
        }></Route>
      </Routes>
    </div>
  )
}



function Topics(){
  return(
    <div>
      <h2>-------------------------로맨스-------------------------</h2>
      <ul>
        <li><NavLink to="/topics/1">건축학개론</NavLink></li>
        <li><NavLink to="/topics/2">남자가 사랑할 때</NavLink></li>
        <li><NavLink to="/topics/3">라라랜드</NavLink></li>
      </ul>
      <Routes>
        <Route path="/1" element={
          <div className='gunchuk'> <div><img className='gunChukImg' src="http://img.movist.com/?img=/x00/04/38/47_p1.jpg"/></div>
          <div><movieStory>생기 넘치지만 숫기 없던 스무 살, 건축학과 승민은 '건축학개론' 수업에서 처음 만난 음대생 서연에게 반한다. 
          함께 숙제를 하게 되면서 차츰 마음을 열고 친해지지만, 자신의 마음을 표현하는 데 서툰 순진한 승민은 입 밖에 낼 수 없었던 고백을 마음 속에 품은 채 작은 오해로 인해 서연과 멀어지게 된다.
          어쩌면 다시…사랑할 수 있을까? 15년 만에 그녀를 다시 만났다 서른 다섯의 건축가가 된 승민 앞에 15년 만에 불쑥 나타난 서연. 당황스러움을 감추지 못하는 승민에게 서연은 자신을 위한 집을 설계해달라고 한다. 자신의 이름을 건 첫 작품으로 서연의 집을 짓게 된 승민, 함께 집을 완성해 가는 동안 어쩌면 사랑이었을지 모를 그때의 기억이 되살아나 두 사람 사이에 새로운 감정이 쌓이기 시작하는데…</movieStory>
          </div></div>}></Route>
        
        <Route path="/2" element={
        <div className='namja'><div><img className='namjsImg' src="https://i.namu.wiki/i/q5FuECkrh4vEgE_KHuzUVes1lrKjboRUWJWTzd0_pFAQU_zGBmAMy6Q8s0yBq3S5Gy4i4O6IUTprErJXSboSTclnWHbR-nheqFs94eLOPJMhburVohmhC_dfTZsDZKTqfQ2yWXt0mvzQa4sFSfqXSg.webp" alt='남자가 사랑할 때 포스터'/></div>
        <div className='namjaStory'>
        나이만 먹었을 뿐, 대책 없는 이 남자, 아직도 형 집에 얹혀 살며 조카한테 삥 뜯기는 이 남자, 빌려준 돈은 기필코 받아오는 이 남자, 
        목사라고 인정사정 봐 주지 않는 이 남자, 여자한테 다가갈 땐 바지부터 내리고 보는 막무가내 이 남자, 
        평생 사랑과는 거리가 멀었던 한 남자가 사랑에 눈 뜨다! 일생에 단 한번, 남자가 사랑할 때
        </div></div>}></Route>
        <Route path="/3" element={
          <div className='lala'>
            <div><img className='lalaImg' alt='라라랜드 포스터' src='https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20201229_146%2F1609226288425JgdsP_JPEG%2Fmovie_image.jpg'/></div>
        <div className='lalaStory'>
          꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬' 과 배우 지망생 ‘미아’, 
          인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.
        </div></div>}></Route>
      </Routes>
    </div>
  )
}



function Contact(){
  return(
    <div>
      <h2>-------------------------애니-------------------------</h2>
      <ul>
        <li><NavLink to="/contact/1">이별의 아침에 약속의 꽃을 장식하자</NavLink></li>
        <li><NavLink to="/contact/2">명탐정 코난 : 흑철의 어영</NavLink></li>
        <li><NavLink to="/contact/3">귀멸의 칼날 무한열차편</NavLink></li>
        <li><NavLink to="/contact/4">진격의 거인 - 시즌1</NavLink></li>
        <li><NavLink to="/contact/5">짱구는 못말려 : 어른제국의 역습</NavLink></li>
      </ul>
      <Routes>
        <Route path='/1' element= {<div><div>
          <div><h1>&nbsp;</h1></div>
          <img className='flowerImg' alt='이별 ~ 포스터' src='https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20210507_62%2F1620351390794y05Cq_JPEG%2Fmovie_image.jpg'/>
          </div>
          <div className='flowerStory'>영원을 살아가는 마키아와 숲 속에 버려진 아이 아리엘, 
          우연히 만나 운명이 된 두사람의 단 한번 함께한 시간을 담은 네버엔딩 스토리</div></div>
        }></Route>
        <Route path='/2' element= {<div><div>
          <div><h1>&nbsp;</h1></div>
            <img className='conanImg' alt='코난 포스터' src='https://t1.daumcdn.net/movie/d230076a3b13be5bb56dd79bf48f14e44f7cbb68'/>
        </div>
          <div className='conanStory'></div>"명탐정 코난: 흑철의 어영", 미스테리한 해양생물 '어영'을 연구하던 과학자가 사라지는 사건을 
          코난과 친구들이 해결하며 벌어지는 이야기가 펼쳐진다!</div>
        }></Route>
        <Route path='/3' element= {<div><div>
          <div><h1>&nbsp;</h1></div>
          <img className='infiniteTrainImg' alt='귀칼 포스터' src='https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220331_264%2F1648693399684Fm31b_JPEG%2Fmovie_image.jpg'/>
        </div>
          <div className='infiniteTrainStory'></div>혈귀로 변한 여동생 ‘네즈코’를 되돌리기 위해 귀살대가 된 ‘탄지로’!
           어둠 속을 달리는 무한열차에서 승객들이 흔적 없이 사라진다는 소식에 
          ‘젠이츠’, ‘이노스케’와 함께 임무 수행을 위해 무한열차에 탑승한다. 
          그리고 그 곳에서 만난 귀살대 최강 검사 염주 ‘렌고쿠’! 
          이들은 무한열차에 숨어 있는 혈귀의 존재를 직감하고 모두를 구하기 위해 목숨을 건 혈전을 시작하는데… 그 칼로 악몽을 끊어라</div>
        }></Route>
        <Route path='/4' element= {<div><div>
          <img className='giantImg' alt='진격의 거인 포스터' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5560%2F2018%2F06%2F25%2F0000003815_001_20180625155125099.jpg&type=sc960_832'/>
        </div>
          <div className='giantStory'>"진격의 거인", 거인들에 의해 지배당한 세상에서 
          주인공 엘렌과 친구들이 인류의 생존을 위해 거인들과의 전투를 펼치는 이야기가 펼쳐진다!</div></div>
        }></Route>
        <Route path='/5' element= {<div><div>
          <img className='shinjangImg' alt='짱구 포스터' src='https://i.namu.wiki/i/TlkT1NbwGWPaGTLbAifymz-Oc7J3WpogFjHAUFvwSRWX2kXeBSpSRx-Pm_rW0kSTSLLB-rnD-YGcynU-TkLRq1ePQLGzEea8LL_klLUMRbAx0shFVIyXB0wd6cN4UMrWiZIfGi63h8fTQcOnl4n_0Q.webp'/>
        </div>
          <div className='shinjangStory'>떡잎마을에 20세기 박물관이 생기자 어른들은 그곳에 푹 빠져 헤어 나오지 못한다. 
          그러던 어느 날, 20세기 박물관은 TV를 통해 중요한 안내 방송을 한다.
           그때부터 어른들은 어린아이처럼 행동하기 시작하고, 다음 날 아침에는 박물관에서 보낸 트럭을 타고 단체로 사라진다. 
          그 이후 남겨진 아이들도 20세기 박물관에서 보낸 트럭에 실려 어딘가로 끌려가고, 짱구와 친구들은 이리저리 도망친다</div></div>
        }></Route>
      </Routes>
    </div>
  )
}

function App(){
/*
function Header(props){
  return <div className="body6_1">
     <h1><a href="/" onClick={(event)=>{
         event.preventDefault();
         props.onChangeMode();
     }}
     >{props.title}</a></h1>
   </div>
}
function Nav(props){
const lis = [
]
for(let i=0; i<props.topics.length; i++){
 let t = props.topics[i];
 lis.push(<li key={t.id}>
   <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
     event.preventDefault();
     props.onChangeMode(Number(event.target.id));
   }}>{t.title}</a>
 </li>)
}
return <nav>
     <ol>
       {lis}
     </ol>
   </nav>
}
function Article(props){
 return  <article>
     <h2>{props.title}</h2>
     {props.body}
   </article>
}




 const [mode, setMode] = useState('WELCOME');
 const [id, setId] = useState(null);
 const topics = [
   {id:1, title:'넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', body:'넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.'},
   {id:2, title:'넷플릭스란 무엇인가요?', body:'넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.'},
   {id:3, title:'넷플릭스 요금은 얼마인가요?', body:'스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.'},
   {id:4, title:'광고형 멤버십은 뭐가 다른가요?', body:'광고형 멤버십은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는 방법입니다. 제한된 수의 중간 광고와 함께 좋아하는 콘텐츠를 스트리밍할 수 있습니다(일부 위치 및 디바이스 제한 적용).'},
   {id:5, title:'어디에서 시청할 수 있나요?', body:'언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.'},
   {id:6, title:'멤버십을 해지하려면 어떻게 해야하나요?', body:'넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.'},
   
 ]
 let content = null;
 if (mode === 'WELCOME'){
     content =  <Article title="영화와 시리즈를 무제한으로." body="다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다."></Article>
 }else if (mode === 'READ'){

 
 let title, body = null;
 for (let i=0;i<topics.length; i++){
   if(topics[i].id === id){
     title = topics[i].title;
     body = topics[i].body;
   }

     } 
   content =  <Article title={title} body={body}></Article>
 }
*/
//////////////////////////////////////////////////////////


  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
    console.log("랜더링componentDidMount");
    return (
      console.log("componentWillUnmount")
    )
  },[]);

  const login = () =>{
    alert(`환영합니다 ${inputRef.current.value}님! -넷플릭스 올림-`);
  };

  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    if (selected == i) {
        return setSelected(null)
    }

    setSelected(i)
  }

  const ddata = [
    {
      question: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?',
      answer: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.'
    },
    {
      question: '넷플릭스란 무엇인가요?',
      answer: '넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.'
    },
    {
      question: '넷플릭스 요금은 얼마인가요?',
      answer: '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.'
    },
    {
      question: '어디에서 시청할 수 있나요?',
      answer: '언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.'
    },
    {
      question:'멤버쉽을 해지하려면 어떻게 하나요?',
      answer:'넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.'
    },
    {
      question:'아이들이 넷플릭스를 봐도 좋을까요?',
      answer:'멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.'
    }
    
    
  ]
  
return (



 <div className='body6_1'>

      
    <div className='wrapper'>
            <div className='accordion'>
              <div className='jaju'><h1>자주 묻는 질문</h1></div>
              {ddata.map((item, i)=>(
                  <div className='item'>
                      <div className='title' onClick={()=>toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                      </div>
                      <div className={selected === i ? 'content show' : 'content'}>
                      {item.answer}</div>
                  </div>
              ))}

            </div>
          </div>


          <input ref={inputRef} type="text" placeholder="닉네임 입력하세요"
    style={{width:'500px', height:'40px'}}/>
    <button onClick={login} style={{width:'100px', height:'40px'}}>로그인</button>
   

    <div className='searchBoard'>
   <Gogo/>
   </div>
  

    <div className="suggestion">
      <h1>&nbsp;</h1>
      <h1>잠시만요! NETFLIX가 추천하는 이런 영화는 어떠신가요?</h1>
        <ul>
          <li><NavLink to="/action">액션</NavLink></li>
          <li><NavLink to="/topics">로맨스</NavLink></li>
          <li><NavLink to="/contact">애니메이션</NavLink></li>
        </ul>
        <Routes>
          <Route path="/action/*" element={<Home />}></Route>
          <Route path="/topics/*" element={<Topics />}></Route>
          <Route path="/contact/*" element={<Contact />}></Route>
        </Routes>
            </div>


        
 
 </div>



);


  


}

export default App;


