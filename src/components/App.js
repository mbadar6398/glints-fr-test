import React, { Component } from 'react';
import NewTopic from './NewTopic';
import Topic from './Topic';

class App extends Component {
    render() {
        return(
            <main>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <NewTopic/>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <Topic/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;