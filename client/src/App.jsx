import React, { Component } from 'react';
import './App.css';
import SetTimer from './SetTimer.jsx';
import SetGoal from './SetGoal.jsx';
import Timer from './Timer.jsx';
import BlockedSites from './BlockedSites.jsx';
import DecideOnBreakPage from './DecideOnBreakPage.jsx';
// import BreakPage from './BreakPage.jsx';
import './exampleData.js';

const backgroundImages = {
  shanghai: 'http://i.imgur.com/cCnTqIf.jpg',
  antelopeCanyon: 'http://vunature.com/wp-content/uploads/2016/10/landscapes-texture-canyon-light-rocks-antelope-nature-hd-wallpapers-iphone-6.jpg',
  sanFrancisco: 'https://i.imgur.com/tKssiPz.jpg',
  joshuaTree: 'http://i.imgur.com/HdPEtDE.jpg',
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: Object.values(backgroundImages)[getRandomIntInclusive(0, Object.keys(backgroundImages).length - 1)],
      currentUrl: window.location.href,
      setGoal: true,
      goal: 'some goal',
      enterTime: false,
      blockedSitePage: false,
      blockedSites: [],
      timer: false,
      time: 30,
      decideOnBreakPage: false,
      breakPage: false,
    }
    
    this.originalState = Object.assign({}, this.state);    
    
    this.handleSetGoalClick = this.handleSetGoalClick.bind(this);
    this.setTime = this.setTime.bind(this);
    this.addToList = this.addToList.bind(this);
    this.handleSetTimerClick = this.handleSetTimerClick.bind(this);
    this.toggleDecideOnBreakPage = this.toggleDecideOnBreakPage.bind(this);
    this.toggleBlockedSitesPage = this.toggleBlockedSitesPage.bind(this);
    // this.toggleBreakPage = this.toggleBreakPage.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }
  
  handleSetGoalClick(goal) {
    this.setState({
      goal: goal,
      setGoal: !this.state.setGoal,
      enterTime: !this.state.enterTime,
    });
  }

  toggleBlockedSitesPage() {
    this.setState({
      enterTime: !this.state.enterTime,
      blockedSitePage: !this.state.blockedSitePage,
    });
  }

  setTime(time) {
    this.setState({
      time: time,
    });
  }

  addToList(site) {
    let blockedSites = this.state.blockedSites.slice();
    if (site.length > 1 && site !== 'Add a site' && !blockedSites.includes(site)){
      blockedSites.push(site);
    }
    this.setState({
      blockedSites: blockedSites,
    });
  }
  
  handleSetTimerClick(time) {
    this.setState({
      blockedSitePage: !this.state.blockedSitePage,
      timer: !this.state.timer,
    });
  }
  
  toggleDecideOnBreakPage() {
    this.setState({
      timer: !this.state.timer,
      decideOnBreakPage: !this.state.decideOnBreakPage,
    });
  }

  // toggleBreakPage() {
  //   this.setState({
  //     breakPage: !this.state.breakPage,
  //   });
  // }

  resetApp() {
    this.setState(this.originalState);
  }
  
  render() {
    const setGoal = this.state.setGoal;
    const enterTime = this.state.enterTime;
    const blockedSitePage = this.state.blockedSitePage;
    const timer = this.state.timer;
    const decideOnBreakPage = this.state.decideOnBreakPage;
    // const breakPage = this.state.breakPage;
    let component;

    if (setGoal) {
      component = <SetGoal state={this.state} click={this.handleSetGoalClick}/>
    }
    
    if (enterTime) {
      component = <SetTimer state={this.state} click={this.toggleBlockedSitesPage} setTime={this.setTime}/>
    }

    if (blockedSitePage) {
      component = <BlockedSites state={this.state} addToList={this.addToList} click={this.handleSetTimerClick}/>
    }

    if (timer) {
      component = <Timer state={this.state} click={this.toggleDecideOnBreakPage}/>
    }

    if (decideOnBreakPage) {
      component = <DecideOnBreakPage state={this.state} break={this.toggleBreakPage} reset={this.resetApp} />
    }

    // if (breakPage) {
    //   component = <BreakPage state={this.state}/>
    // }

    return (
      <div>
        <div id="container">
          <img id="background-image" src={this.state.backgroundImage} alt='http://i.imgur.com/cCnTqIf.jpg'></img>
          <div className="App">
            {component}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
