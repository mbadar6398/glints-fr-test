import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown , faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown)

class Topic extends Component {
    render() {
        return(
            <div class="topic-list">
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__header__title">What is Lorem Ipsum?</h4>
                    </div>
                    <div className="card__body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="card__footer">
                        <ul className="card__footer__interaction">
                            <li className="text-success"><FontAwesomeIcon icon="thumbs-up" /> 7,250</li>
                            <li className="text-danger"><FontAwesomeIcon icon="thumbs-down" /> 11,210</li>
                        </ul>
                        <div className="card__footer__btn-group">
                            <button className="btn btn--success"><FontAwesomeIcon icon="thumbs-up" /></button>
                            <button className="btn btn--danger"><FontAwesomeIcon icon="thumbs-down" /></button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__header__title">What is Lorem Ipsum?</h4>
                    </div>
                    <div className="card__body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="card__footer">
                        <ul className="card__footer__interaction">
                            <li className="text-success"><FontAwesomeIcon icon="thumbs-up" /> 7,250</li>
                            <li className="text-danger"><FontAwesomeIcon icon="thumbs-down" /> 11,210</li>
                        </ul>
                        <div className="card__footer__btn-group">
                            <button className="btn btn--success"><FontAwesomeIcon icon="thumbs-up" /></button>
                            <button className="btn btn--danger"><FontAwesomeIcon icon="thumbs-down" /></button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__header__title">What is Lorem Ipsum?</h4>
                    </div>
                    <div className="card__body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="card__footer">
                        <ul className="card__footer__interaction">
                            <li className="text-success"><FontAwesomeIcon icon="thumbs-up" /> 7,250</li>
                            <li className="text-danger"><FontAwesomeIcon icon="thumbs-down" /> 11,210</li>
                        </ul>
                        <div className="card__footer__btn-group">
                            <button className="btn btn--success"><FontAwesomeIcon icon="thumbs-up" /></button>
                            <button className="btn btn--danger"><FontAwesomeIcon icon="thumbs-down" /></button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__header__title">What is Lorem Ipsum?</h4>
                    </div>
                    <div className="card__body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="card__footer">
                        <ul className="card__footer__interaction">
                            <li className="text-success"><FontAwesomeIcon icon="thumbs-up" /> 7,250</li>
                            <li className="text-danger"><FontAwesomeIcon icon="thumbs-down" /> 11,210</li>
                        </ul>
                        <div className="card__footer__btn-group">
                            <button className="btn btn--success"><FontAwesomeIcon icon="thumbs-up" /></button>
                            <button className="btn btn--danger"><FontAwesomeIcon icon="thumbs-down" /></button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__header__title">What is Lorem Ipsum?</h4>
                    </div>
                    <div className="card__body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="card__footer">
                        <ul className="card__footer__interaction">
                            <li className="text-success"><FontAwesomeIcon icon="thumbs-up" /> 7,250</li>
                            <li className="text-danger"><FontAwesomeIcon icon="thumbs-down" /> 11,210</li>
                        </ul>
                        <div className="card__footer__btn-group">
                            <button className="btn btn--success"><FontAwesomeIcon icon="thumbs-up" /></button>
                            <button className="btn btn--danger"><FontAwesomeIcon icon="thumbs-down" /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topic;