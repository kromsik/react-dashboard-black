import React, { Component } from 'react'
import './App.css'
import styled, { css } from 'styled-components'

const Logo = styled.div`
  font-size: 1.6rem;
`

const ControlButton = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 1px 1px 3rem #03ff03;
      font-size: 1.6rem;
    `};
`

const AppLayout = styled.div`
  padding: 4rem;
  font-size: 1.5rem;
`

const AppBar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 4rem;
`

const Content = styled.div``

class App extends Component {
  state = {
    page: `dashboard`
  }
  displayingDashboard = () => this.state.page === `dashboard`
  displayingSettings = () => this.state.page === `settings`
  render() {
    return (
      <AppLayout>
        <AppBar>
          <Logo>CryptoDash</Logo>
          <div />
          <ControlButton
            onClick={() => this.setState({ page: `dashboard` })}
            active={this.displayingDashboard()}
          >
            Dashboard
          </ControlButton>
          <ControlButton
            onClick={() => this.setState({ page: `settings` })}
            active={this.displayingSettings()}
          >
            Settings
          </ControlButton>
        </AppBar>
        <Content>Hello, I'm {this.state.page}</Content>
      </AppLayout>
    )
  }
}

export default App
