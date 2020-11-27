import React, { Component } from 'react'

import codeImg from '../../assets/editorial post/images/codeImg.png'

export class Code extends Component {
    render() {
        return (
            <>
                <div className="ep-code container my-5">
                    <h1 className="ep-code-heading ">Code</h1>
                    <div className="row">
                            <div className="ep-code-ps col-md-6">
                                    <div className="my-1 ">
                                        Problem Setter
                                    </div>
                                    <div>
                                    <img className="ep-code-img" src={codeImg} width="100%" alt=""/>
                                    </div>
                            </div>

                            <div className="ep-code-ps col-md-6">
                                    <div className="my-1 mr-5 ep-code-flrt">
                                        Problem Tester
                                    </div>
                                    <div>
                                    <img className="ep-code-flrt ep-code-img" src={codeImg} width="100%" alt=""/>
                                    </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Code
