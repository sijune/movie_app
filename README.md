## 리액트 소개
+ 리액트는 자바스크립트다.
+ 온니 자바스크립트만 쓴다.
+ 별도의 프레임워크 쓸 필요 없다.

+ 리액트는 구조별 프로그래밍이 가능 - 컴포넌트식으로 코딩가능
+ 그룹별로 쪼개서 작업할 수 있다.nav, header, numbers, grid...
+ 다른곳에 쓸 수 있다.

+ 단방향 데이터 플로우
+ Data-->UI 데이터가 변하면 UI가 변함.
+ UI-x->Data

+ 엄청난 커뮤니티
+ 리액트는 프레임워크가 아니라 UI라이브러리다.
+ 리액트는 only view이다.(MVC에서)

--------------------------------------------------------------------------
## 우리가 빌딩할 것
+ 영화앱을 만들 것이다.
+ dribble.com처럼 만들 예정이다.
+ api는 https://yts.lt/api 영화에 관련된 정보를 긁어 올 것이다.<br>
->https://yts.lt/api/v2/list_movies.json

---------------------------------------------------------------------------

## Intro to Create React App
+ 우리가 사용하는 코드는 리액트 코드
+ 따라서 이걸 자바스크립트로 바꿔주는 툴이 필요: 트랜스파일러- 웹팩
+ 웹팩은 리액트 코드를 브라우저가 이해할 수 있는 자바스크립트 코드로 변경해 주는 역할을 한다.

+ es6를 모든 브라우저가 이해할 수 있도록 해야 한다.
+ webpack: 브라우저가 이해할 수 있는 코드로 바꿔주는 역할. 
+ (인스타그램 풀 스택 강의 참고.)

+ 페이스북이 이러한 기능을 제공한다.
+ 손쉽게 리액트 앱을 만들어 주는 툴: create react app 
+ 대신 작업을 해준다.

+ create react app 문구안에 웹팩 파일이 숨어있는 셈
+ nodejs와 create react app 둘다 설치해야 한다.

-----------------------------------------------------------------------------

## HelloWorld wtih React and CRA
```bash
$ npx create-react-app movie_app
```
```bash
$ cd movie_app
```
```bash
$ npm start
```
vsc열기

+ 수정된 파일을 저장하자마자 npm이 컴파일 시작하고, 새로고침이 자동으로 된다.
+ configuration을 따로 설정 안해도 된다.

--------------------------------------------------

## JSX를 이용해 react 컴포넌트 만들기
+ 컴포넌트 디자인하기(3가지)
	1. 무비리스트 컴포넌트 -> app컴포넌트
	2. 영화카드 컴포넌트 - 영화에 대한 자세한 정보: 무비 컴포넌트
	3. 영화커버 컴포넌트

+ 컴포넌트들은 각각 다른 파일에 작업할 예정 - 리액트 특징<br>

movie앱을 열고, npm스타트, 수정하면 알아서 컴파일 해준다.<br>

자바스크립트 안에 html: jsx - 리액트 컴포넌트를 만들 때 사용하는 언어 규칙<br>
간단한 html이다.


-App.js
```javascript
모든 내용 삭제
```
-App.css
```css
.App을 제외한 모든 내용 삭제, App내도 삭제
```


모든 컴포넌트는 render function을 가지고 있다.<br>
= 이 컴포넌트가 나에게 보여주는 것이 무엇인가???<br>
`컴포넌트->render->return->JSX`

npm이 start될때 js파일이 html로 담겨지고 이는 public폴더의 index.html이다.<br>
App.js내에 hello라고 작성하면 이게 알아서 html로 변경되서 public폴더의 index.html에 삽입된다<br>
index.js가 이 둘을 연결하는 역할을 한다.<br>
따라서 public폴더는 건드리는게 아니다.<br>

React는 UI라이브러리<br>
+ ReactDOM은 리액트를 웹사이트에 출력하는 걸 도와주는 모델
  - ->리액트를 웹사이트에 올려놓고 싶을 때 사용
  - ->리액트돔은 1개의 컴포넌트를 출력한다.
+ ReactNative를 쓰면 모바일로 올릴 수 있다.<br>


newfile->Movie.js, Movie.css

-Movie.js
```javascript
import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){ //캄포넌트는 항상 render를 해야 한다.
        return(
            <h1>hello this is a movie</h1>
        )
            
    }
}

export default Movie //app.js로 해당 컴포넌트를 내보낸다.
```

-App.js
```javascript
import React, {Component} from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component{ // Component -> render -> return(JSX)
  render(){  
    return( 
      <div className="App">
        <Movie /> {/* call Movie Component */}
        <h1>this is app.js</h1>
      </div>
    )
  }
}
export default App; 


```

-App.js
```javascript
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component{ // Component -> render -> return(JSX)
  render(){  
    return( 
      <div className="App">
        <Movie /> {/* call Movie Component */}
        <Movie />
        <Movie />
        <Movie />
      </div>
    )
  }
}
export default App; 

```

-Movie.js
```javascript
import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){ //캄포넌트는 항상 render를 해야 한다.
        return(
            <div>
                <MoviePoster /> //같은 파일 내 컴포넌트 삽입, div로 묶어줘야 한다.
                <h1>hello this is a movie</h1>
            </div>
        )
            
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://cdn-apply.likelion.org/static/imgs/basiclogo_E_V.png" alt=""/>
        )
    }
}

export default Movie //app.js로 해당 컴포넌트를 내보낸다.
```

----------------------------------------------------------------------------------------------------------

## Data flow with Props
`state, props가 리액트에서 주요 컨셉`<br>
데이터가 어디선가 와야한다. 그래야 작업을 할 수 있다.

+ app은 모든 영화들을 가져올꺼다.
+ app컴포넌트엔 무비리스트가 있을 꺼다.
+ 리스트안에 영화카드엔 영화정보가 담기겠지.
`부모 컴포넌트는 자식 컴포넌트에게 정보를 준다.->props`

영화들의 제목을 movie컴포넌트에 보내고 싶다면?
```html
<Movie title={movies[0]} />
<Movie title={movies[1]} />...
```

App이 모든 데이터를 가지고 있는 거다.

ex1.
```javascript
-App.js
import React, {Component} from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [ //const로 변수를 선언할 경우 해당 스코프 내에서만 존재하며 한번 선언 후 값의 변경이 불가능
  "HarryPoter",
  "Bugs",
  "ToyStory",
  "AboutTime"
]

class App extends Component{ // Component -> render -> return(JSX)
  render(){  
    return( 
      <div className="App">
        <Movie title={movies[0]}/> {/* call Movie Component */}
        <Movie title={movies[1]}/>
        <Movie title={movies[2]}/>
        <Movie title={movies[3]}/>
      </div>
    )
  }
}
export default App; 

```

-Movie.js
```javascript
import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){ //캄포넌트는 항상 render를 해야 한다.
        console.log(this.props); //찍어보자
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
            
    }
}
```

-Movie.js 수정
```javascript
import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){ //캄포넌트는 항상 render를 해야 한다.
        return(
            <div>
                <MoviePoster />
                <h1>{this.props.title}</h1> //이렇게 부모에 있는 데이터를 받을 수 있다.
            </div>
        )
            
    }
}
```

---------------------------------------------------------------------------

ex2.
-App.js
```javascript
import React from 'react';
import './App.css';
import Movie from './Movie.js';

const movieTitles=[
  "HarryPotter",
  "Bugs",
  "ToyStory",
  "AboutTime"
]

const movieImages=[
  "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/19/17/enhanced/webdr02/original-grid-image-23059-1447970713-6.jpg?downsize=700:*&output-format=auto&output-quality=auto",
  "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409",
  "https://images-na.ssl-images-amazon.com/images/I/51k0ypuuXEL._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/815Q1ufP6yL._SY445_.jpg"


]

class App extends Component{ // Component -> render -> return(JSX)
  render(){  
    return( 
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    )
  }
}
export default App; 

```

-Movie.js
```javascript
import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){ //캄포넌트는 항상 render를 해야 한다.
	//console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
            
    }
}

class MoviePoster extends Component{
    render(){
	//console.log(this.props.poster);
        return(
            <img src={this.props.poster} alt=""/>
        )
    }
}

export default Movie //app.js로 해당 컴포넌트를 내보낸다.
```
--------------------------------------------------------------------------------

## List with .map

새로운 리스트를 만든다. <br>
{"~~":"~~",~~} 이렇게 되어있는 객체로 표현된 값들을 ---> 배열 형식으로 전환: map

-App.js
```javascript
import React from 'react';
import './App.css';
import Movie from './Movie.js';


const movies = [
  {
    title: "HarryPotter",
    poster: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/19/17/enhanced/webdr02/original-grid-image-23059-1447970713-6.jpg?downsize=700:*&output-format=auto&output-quality=auto"
  },
  {
    title: "Bugs",
    poster: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409"
  },
  {
    title: "ToyStory",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51k0ypuuXEL._SY445_.jpg"
  },
  {
    title: "AboutTime",
    poster: "https://images-na.ssl-images-amazon.com/images/I/815Q1ufP6yL._SY445_.jpg"
  }
]

class App extends Component{ // Component -> render -> return(JSX)
  render(){  
    return( 
      <div className="App">
        {movies.map(movie=>{ //기존 배열을 callbackfunction에 의해 새 배열로 mapping
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    )
  }
}
export default App; 

```

-------------------------------------------------------------------

## Validating Props with Props Types
1. 대규모 데이터가 있을 때 리액트는 키가 필요하다.

-App.js
```javascript
class App extends Component{ // Component -> render -> return(JSX)
  render(){  
    return( 
      <div className="App">
        {movies.map((movie, index)=>{ //기존 배열을 callbackfunction에 의해 새 배열로 mapping
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    )
  }
}

```

2. statis propTypes를 이용해 부모 컴포넌트에게서 받는 정보를 체크한다. <br>
string인지 number인지, boolean인지 확인가능<br>
필요하다면 npm add prop-types

-Movie.js
```javascript
import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes={
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }


    render(){ //캄포넌트는 항상 render를 해야 한다.
        console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
            
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster: propTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt=""/>
        )
    }
}

export default Movie //app.js로 해당 컴포넌트를 내보낸다.
```

--------------------------------------------------------------------

## Component Lifecycle
컴포넌트는 많은 기능들을 가지고, <br>
그 기능들을 정해진 순서대로 실행한다.<br>

#### render
`componentWillMount->render->componentDidMount이 순서대로 발생`

+ componentWillMount: 영화관련 api요청
+ componentDidMount: 데이터 처리하는데 사용

#### update
`shouldComponentUpdate로 정보가 업데이트가 되었는지 안되었는지 확인한다.`

-----------------------------------------------------------------

## Thinking in React Component State
state는 리액트 컴포넌트 안에 있는 오브젝트<br>
function과 동일

***state가 바뀔때(업데이트) 마다 render가 발생할거다.***
state를 직접변경불가

리액트를 개발할 때도 함수형 컴포넌트와 클래스형 컴포넌트가 있다.<br>
우리는 클래스형으로 개발할꺼니까 클래스형으로 모두 수정하자<br>
리액트를 함수형으로 보통 개발하지 않는다.

-App.js
```javascript
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: "HarryPotter",
    poster: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/19/17/enhanced/webdr02/original-grid-image-23059-1447970713-6.jpg?downsize=700:*&output-format=auto&output-quality=auto"
  },
  {
    title: "Bugs",
    poster: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409"
  },
  {
    title: "ToyStory",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51k0ypuuXEL._SY445_.jpg"
  },
  {
    title: "AboutTime",
    poster: "https://images-na.ssl-images-amazon.com/images/I/815Q1ufP6yL._SY445_.jpg"
  }
]

class App extends Component {

  state = {
    greeting: "Hello!"
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!!'
      }) 
    }, 2000)
  }

  render() {
        return (
          <div className="App">
            {this.state.greeting}
            {movies.map((movie, index) => {
              return <Movie title={movie.title} poster={movie.poster} key={index} /> //key값 부여, key가 없다면 console창에 에러발생
            })}
          </div>
        );
      }
}
export default App;
```

----------------------------------------------------------

##setState연습

외부에 있는 데이터를 클래스 내부로 가지고 오자<br>
영화리스트를 추가해보자 setState를 사용해서<br>
state를 사용해서 다양한 효과를 나타낼 수 있다.<br>
ex.무한 스크롤 가능

-App.js
```javascript
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {
    greeting: "Hello!",
    movies: [
      {
        title: "HarryPotter",
        poster: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/19/17/enhanced/webdr02/original-grid-image-23059-1447970713-6.jpg?downsize=700:*&output-format=auto&output-quality=auto"
      },
      {
        title: "Bugs",
        poster: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409"
      },
      {
        title: "ToyStory",
        poster: "https://images-na.ssl-images-amazon.com/images/I/51k0ypuuXEL._SY445_.jpg"
      },
      {
        title: "AboutTime",
        poster: "https://images-na.ssl-images-amazon.com/images/I/815Q1ufP6yL._SY445_.jpg"
      }
    ]
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        movies: [
          {
            title: "Transformer",
            poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg"
          },
          ...this.state.movies,
        ]
      })
    }, 5000)
  }

  render() {
        return (
          <div className="App">
            {this.state.movies.map((movie, index) => {
              return <Movie title={movie.title} poster={movie.poster} key={index} /> //key값 부여, key가 없다면 console창에 에러발생
            })}
          </div>
        );
      }
}
export default App;
```

-------------------------------------------------

## Loading states
필요한 데이터가 바로 즉시 존재하지 않을 것이다.<br>
데이터 없이 컴포넌트를 먼저 로딩하고 데이터가 도착할 때까지 기다리다가<br>
-> 데이터가 도착하면 나의 컴포넌트 state를 업데이트 한다.


리액트 자체의 기능와 나의 기능에 차이를 두기 위해 _를 쓴다.

`state가 바뀔때(업데이트) 마다 render가 발생할거다.`

-App.js
```javascript
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        movies: [
          {
            title: "HarryPotter",
            poster: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/19/17/enhanced/webdr02/original-grid-image-23059-1447970713-6.jpg?downsize=700:*&output-format=auto&output-quality=auto"
          },
          {
            title: "Bugs",
            poster: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409"
          },
          {
            title: "ToyStory",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51k0ypuuXEL._SY445_.jpg"
          },
          {
            title: "AboutTime",
            poster: "https://images-na.ssl-images-amazon.com/images/I/815Q1ufP6yL._SY445_.jpg"
          },
          {
            title: "Transformer",
            poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg"
          }
        ]
      })
    }, 5000)
  }

_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} /> //key값 부여, key가 없다면 console창에 에러발생
  })
  return movies
}

  render() {
        return (
          <div className="App">
            {this.state.movies ? this._renderMovies() : "Loading"}
          </div>
        );
      }
}
export default App;
```

----------------------------------------------------------

## Smart vs Dumb
모든 컴포넌트가 state가 있는 건 아니다.-> stateless functional 컴포넌트<br>
큰 차이점이 있다.<br>
이를 dumb(props만 존재), smart(O)<br>
이럴땐 함수형 컴포넌트로 만들면 된다.<br>

return만을 위한 컴포넌트 - 함수형 컴포넌트를 쓴다.<br>
= render, will~~did~~~ 함수가 다 필요 없을때<br>
`state가 없다.`

-Movie.js
```javascript
import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster"/>
    )
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Movie //app.js로 해당 컴포넌트를 내보낸다.
```

-----------------------------------------------------------------

## ajax on react 
우리의 포커스는 json: 오브젝트를 자바스크립트로 작성<br>

Fetch: 뭔가를 잡는것 - 이를 통해 리액트에 ajax를 올린다.<br>
url을 통해 ajax, 즉 데이터를 불러올 수 있다.<br>
우리는 FETCH를 이용해서 URL에서 뭔가를 GET하는 방법을 배울꺼다.<br>

url가져오기<br>
이를 리액트에서 가져올꺼다.<br>
?sort_by=ratring을 url뒤에 붙이자<br>

componentDidMount내에 작업 = 컴포넌트 먼저 로딩하고 데이터 로딩을 위해<br>
사람들은 새로고침하고 싶지 않다.<br>
자바스크립트와 데이터를 분리해서 불러올 수 있다. <br>

-----------------------------------------------

## Promise
####새로운 자바스크립트 개념
+ 동기화: 순서대로 작동 첫번째가 작동되지 않으면 두번째가 작동x<br>
	두개의 DB를 불러온다고 가정 영화API작업이 끝나야 애니메이션 API작업을 할 수 있다.<br>
	만약 첫번째가 느려터지면 두번째는 계속 기다려야 한다.

+ 비동기화:  첫번째가 끝나든 말든 두번째 라인이 작업을 시작한다.<br>
	계속 다른 작업을 스케쥴 할 수 있다.<br>
	좋거나 나쁜 시나리오 잡는 방법을 만들어 준다. 

fetch, Promise가 2가지 시나리오가 있고 이를 관리한다.<br>
약속을 지키면 영화를 보러가고 좋은 일이 생긴다.<br>
안지키면 영화를 못보고 안좋은 일이 생긴다.

***이 부분은 어렵다***<br>
```javascript
.then //완료되면 이걸해라 //1개의 속성(오브젝트)만 준다. 이름은 상관없다. 형식만 지키면 된다.
//콘솔확인해보자. then은 원하는 대로 쓸 수 있다.
.catch //에러발생시 이걸해라
```
	
-App.js
```javascript
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {
  }

  componentDidMount(){
    fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
    .then(potato => potato.json()) //console찍어보자
    .then(json => console.log(json)) //console찍어보자
    .catch(err => console.log(err))
  }

_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} /> //key값 부여, key가 없다면 console창에 에러발생
  })
  return movies
}

  render() {
        return (
          <div className="App">
            {this.state.movies ? this._renderMovies() : "Loading"}
          </div>
        );
      }
}
export default App;
```

--------------------------------------------------------

## Async & Await
좀 더 분명하게 해주는 도구, 비동기js를 동기식으로 만든다.<br>
영화들을 state에 올리는 작업을 해야한다.<br>
이 때 프로그램이 커지면 then내애 then이 많아져 길을 잃어버린다.<br>
->sync와 await를 쓸꺼다.

새로운 함수를 만든다. <br>
_getMovies = () => {}<br>
_callApi = () => {}<br>

+ async: 순서와 상관없이 작업이 진행된다.
+ await: 모드이름, return 값이 무엇이든 상관없이 movies변수에 넣겠다.
그리고 call api작업이 완료되기 전까지 setState가 실행되지 않는다.

id도 바꿔보자

-App.js
```javascript
  state = {
  }

  componentDidMount(){
   this._getMovies()
  }

  _getMovies = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
      .then(potato => potato.json()) //console찍어보자
      .then(json => json.data.movies) //console찍어보자
      .catch(err => console.log(err))
  }

_renderMovies = () => {
  const movies = this.state.movies.map((movie) => {
    //console.log(movie) 로그찍어서 변수 찾기
    return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} /> //key값을 id값으로 부여
  })
  return movies
}
```

---------------------------------------------------------------

## 끝... 
나머지는 꾸미는 거
Updating Movie : Component

1. 데이터 받고 
2. css를 해야한다.

포스터 제목 장르 평점 설명 이 필요

JSX에서는 className 이렇게 써야 한다. <br>
컴포넌트를 작게 쪼개는 것이 세련된 방법이다.

--------------------------------------------------------------

## 배포
```bash
$ npm run build //모든 것을 배포를 위해 압축한다. build폴더에
```

-package.json 추가
```javascript
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "homepage": "http://sijune.github.io/movie_app",
```

다시 
```bash
$ npm run build
```
```bash
$ npm install --save-dev gh-pages
```

-package.json 추가
```javascript
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```

```bash
$ npm run deploy //에러발생
```

git repo에 올리고 다시 
```bash
$ npm run deploy //실행
```

github에 gh-pages라는 브랜치 생성. 우리가 작업한 것은 새로운 브랜치를 만드는 과정



