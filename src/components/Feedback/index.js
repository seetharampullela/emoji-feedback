// Write your React code
import {Component} from 'react'

import Emoji from '../emoji'

import './index.css'

class Feedback extends Component {
  state = {isClick: false}

  greet = () => {
    this.setState({isClick: true})
  }

  render() {
    const {isClick} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div>
        {isClick && (
          <div className="outer-container">
            <div className="inner-container">
              <div className="love-image-container">
                <img src={loveEmojiUrl} alt="love emoji" />
                <h1>Thank you!</h1>
                <p>
                  We will use your feedback to improve our customer support
                  performance
                </p>
              </div>
            </div>
          </div>
        )}
        {!isClick && (
          <div className="outer-container">
            <div className="inner-container">
              <h1>
                How satisfied are you with our customer support performance{' '}
              </h1>
              <div>
                <ul className="image-container">
                  {emojis.map(each => (
                    <Emoji emoji={each} greet={this.greet} key={each.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
