import React, { Component } from 'react'
import SingleNews from './SingleNews'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
export class News extends Component {
  render() {
    return (
      <div className="row">
        <TransitionGroup>

          {this.props.news.map(news =>
            <CSSTransition
            key={news.url}
            classNames="fade"
            timeout= {500}
            >
                      <SingleNews news={news}/>
            </CSSTransition>
          )}

        </TransitionGroup>
      </div>
    )
  }
}

export default News
