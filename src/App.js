import React, { Component } from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Form from './Components/Form'

class App extends Component {

  state = {
    news: []
  }

  componentDidMount() {
    this.consultarNoticias();

  }

  consultarNoticias = (categoria = 'general', pais = 'us') => {

    //console.log(categoria)
    //console.log(pais)


    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=90bd25c38b924684b25531617e72c0ff`;

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(news => {
        this.setState({
          news: news.articles
        })
      })


    //console.log(url);
  }

  render() {
    return (
      <div className="App">
        <Header titulo='Noticias' />
        <div className="container white contenedor-noticias">
          <Form 
          consultarNoticias = {this.consultarNoticias}
          />
          <News
            news={this.state.news}
          />
        </div>
      </div>
    );
  }
}

export default App;
