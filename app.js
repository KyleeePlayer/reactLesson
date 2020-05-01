/*const title = 'My First React Element'
const desc = 'This is Description';
const myTitleId = 'main0title';
const name = 'yhs';
const header = (
  <header>
    <h1 id={myTitleId}>{name} is {title}</h1>
    <p className="main-desc">{desc}</p>
  </header>
);

console.log(header);

ReactDOM.render(header, document.getElementById('root'));*/



const Header = (props) => {
  //console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => (
  <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
        {props.name}
      </span>
    <Counter score={props.score}/>
  </div>
);

class Counter extends React.Component{
  state = {
    score: 0
  };
  //같은거임
  /*constructor() {
    super();
    this.state ={
      score : 0
    }
  }*/

  //bind써서 넘기면 넘어옴 아니면 Arrow 함수 쓰자
  /*incrementScore(){
    //this.incrementScore = this.incrementScore.bind(this);
    console.log(this);
    this.setState(
      {score: this.state.score +1}
    );
  }*/
  incrementScore = () => {
    this.setState(prevState => {
      return  {score: prevState.score + 1}
    });
  };

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}));
  };


  render(){
    //애로우 함수 안쓰고 바인드를 객체에서 선언하여 쓰는 방법
    //this.incrementScore = this.incrementScore.bind(this);
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
        {/*<button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>*/}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players : [
      {name : 'YHS', id: 1},
      {name : 'HONG', id: 2},
      {name : 'KIM', id: 3},
      {name : 'PARK', id: 4},
    ]
  };

  handleRemovePlayer = (id) =>{
    this.setState(prevState => {
      return{
        players: prevState.players.filter(item => item.id != id)
      }
    })
  }
  render(){
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length}/>
        {this.state.players.map(item =>  <Player name={item.name} key={item.id.toString()} removePlayer={this.handleRemovePlayer} id={item.id}/>)}
      </div>
    );
  }
}



ReactDOM.render(<App/>, document.getElementById('root'));

