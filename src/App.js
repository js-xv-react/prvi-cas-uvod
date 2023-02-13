import React, {Component} from 'react'
import "./App.css"

class App extends Component {
  state = {
    count: 1,
    imgUrl: "https://picsum.photos/200",
    tags: ['tag1','tag2','tag3']
  }

  constructor() {
    super();
    console.log('Constuctor', this)
    // this.handleIncrement = this.handleIncrement.bind(this)
  }

  formatCount() {
    return this.state.count === 0 ? 'Zero' : this.state.count
  }

  styles = {
    fontSize: 26,
    fontWeight: "bold"
  }

  conditionalRenderingOfMyArray() {
   return this.state.tags.length === 0 ? 'Empty array' : <ul>
          {
            this.state.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))
          }
        </ul>
  }



// deprecated - ne bind-uje automatski "this" zahteva bind kroz constructor
handleIncrement() {
  console.log('Increment')
  console.log('my count', this)
}

  // handleIncrement = (increment) => {
  // console.log('Increment',  this, increment)
  //   this.setState({
  //     count: this.state.count + increment
  //   })
  // }

  handleDecrement = (decrement) => {
    this.setState( {
      count: this.state.count - decrement
    })
  }
  

  render() {
    return (
    <div className='App'>
      <h1 style={{fontSize: 24}}>Hello World!</h1>
      <p style={this.styles}>{ 2 + 2 }</p>
      <div>
        {/* zadatak */}
        <button onClick={() => this.handleDecrement(1)}>Decrement</button>



        {/* end */}
        {this.formatCount()}
        {/* kada funkcija ne ocekuje neki argument */}
        <button className='btn-primary' onClick={this.handleIncrement}>Increment</button> 

        {/* kada prosledjujemo argument nasoj funckiji, zovemo arrow funckiju da ne bi upali u infinity loop */}
        {/* <button className='btn-primary' onClick={() => this.handleIncrement(1)}>Increment</button>  */}
        <br />
      </div>
      <img src={this.state.imgUrl} alt='random picture' />
      {/* <ul>
        {
          this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))
        }
      </ul> */}
      <p>{this.state.tags.length === 0 ? 'niz je prazan' : 'My tags'}</p>
      <div>
        { this.conditionalRenderingOfMyArray() }
      </div>
      
    </div>
    )

  }
}

export default App