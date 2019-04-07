import React, { Component } from 'react';

class NewTopic extends Component {
    render() {
        return(
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header__title">Create Topic</h4>
                </div>
                <div className="card__body">
                    <div className="input-wrapper">
                        <input type="text" id="title" placeholder="Title..."/>
                    </div>
                    <div className="input-wrapper">
                        <textarea id="body" maxLength="255" placeholder="Write something..."></textarea>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="card__footer__text">
                        <p><span>255</span> Characters left</p>
                    </div>
                    <div className="card__footer__btn-group">
                        <button id="submit" className="btn btn--danger">Post Topic</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTopic;