import React from "react"
// HOC High Order Component
// const NewComponent = higherOrderComponent(originalComponent)
// const EnhancedComponent = higherOrderComponent(originalComponent)
// const IronMan = withSuit(TonyStark)

const WithCounter = (WreppedComponent , incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            }
        }
        countIncrement = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        render() {
            return <WreppedComponent
            count={this.state.count}
            countIncrement={this.countIncrement}
            {... this.props}  />
        }
    }
    return WithCounter
}

export default WithCounter