import React, {Component} from 'react'

class RenderPhoto extends Component{
    render() {
        return (
          <div className='App'>
            <img src={this.props.myRenderPhoto} />
            <p>Error THATS BRYAN NOT YOU</p>
          </div>
        )
      }
    }
    export default RenderPhoto