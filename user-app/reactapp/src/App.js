var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
//----------------------------------------------------------------------------------------//
// git master
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      checked: false

    };
    this.loadPage = this.loadPage.bind(this);
    this.switchchange = this.switchchange.bind(this);

  }


  hide() { this.setState({ isOpen: false });}
  show() { this.setState({ isOpen: true });}
  switchchange(e) { this.setState({checked: e.target.checked});}

  loadPage(page) {
    this.hide();
    const currentPage = this.navigator.pages.slice(-1)[0] // --- or [this.navigator.pages.length - 1]
    if(currentPage.key != page.name){
      this.navigator.resetPage({ component: page, props: { key: page.name } }, { animation: 'slide' });
    }
  }
  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.showMenu = this.show.bind(this);

    return React.createElement(route.component, route.props);
  }
  render() {
    return (
      <Ons.Splitter>
        <Ons.SplitterSide side='right' width={260} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
          <Ons.Page>
            <Ons.List>
              <Ons.ListHeader>Account</Ons.ListHeader>

              <Ons.ListItem>name : Sape-o</Ons.ListItem>
              <Ons.ListItem>sername : Sape-o</Ons.ListItem>
              <Ons.ListItem>ID : B5899999</Ons.ListItem>
              <Ons.ListItem>Point : 9999</Ons.ListItem>
              <Ons.ListHeader></Ons.ListHeader>
              <Ons.ListItem>Language : {this.state.checked ? 'Thai' : 'English'}
                <Ons.Switch checked={this.state.checked} onChange={this.switchchange} />
              </Ons.ListItem>
              <Ons.ListHeader></Ons.ListHeader>
              <Ons.ListItem key={Home.name} onClick={this.loadPage.bind(this, Home)} tappable>Track Bus</Ons.ListItem>
              <Ons.ListItem class="list-item--chevron" key={Promotion.name} onClick={this.loadPage.bind(this, Promotion)} tappable>Promotion</Ons.ListItem>
              <Ons.ListItem class="list-item--chevron" key={TimeLine.name} onClick={this.loadPage.bind(this, TimeLine)} tappable>TimeLine</Ons.ListItem>
              <Ons.ListItem class="list-item--chevron" key={Chauffeur.name} onClick={this.loadPage.bind(this, Chauffeur)} tappable>Chauffeur</Ons.ListItem>
              <Ons.ListItem class="list-item--chevron" key={ReportApp.name} onClick={this.loadPage.bind(this, ReportApp)} tappable>ReportApp</Ons.ListItem>
              <Ons.ListItem class="list-item--chevron" key={ReportBus.name} onClick={this.loadPage.bind(this, ReportBus)} tappable>ReportBus</Ons.ListItem>
              <Ons.ListItem key={Settings.name} onClick={this.loadPage.bind(this, Settings)} tappable>Settings</Ons.ListItem>
              <Ons.ListItem key={Logout.name} onClick={this.loadPage.bind(this, Logout)} tappable>Logout</Ons.ListItem>
            </Ons.List>
          </Ons.Page>
        </Ons.SplitterSide>
        <Ons.SplitterContent>
          <Ons.Navigator initialRoute={{ component: Home, props: { key: Home.name } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        </Ons.SplitterContent>
      </Ons.Splitter>
    );
  }
}

/*
 *
 * Class Home is default page show first time
 *
 */
class Home extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>SUT Track Bus</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    //this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav1' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      </Ons.Page>
    );
  }
}
/*
 *
 * Class Promotion
 *
 */

class Promotion extends React.Component {


  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Promotion</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      </Ons.Page>
    );
  }
}
/*
 *
 * Class TimeLine
 *
 */
class TimeLine extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>TimeLine</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>


      </Ons.Page>
    );
  }
}
/*
 *
 * Class Chauffeur
 *
 */
class Chauffeur extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Chauffeur</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage(event) {
    //this.props.navigator.pushPage({ component: PageNav2, props: { key: 'pageNav2', cardTitle: event.target.textContent } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      </Ons.Page>
    );
  }
}
/*
 *
 * Class ReportApp
 *
 */
class ReportApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : 'Custom Page',
      nextTitle: null
    };
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className="center">ReportApp</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    //this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      </Ons.Page>
    );
  }
}
/*
 *
 * Class ReportBus
 *
 */
class ReportBus extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>ReportBus</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    //this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav1' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      </Ons.Page>
    );
  }
}
/*
 *
 * Class Settings
 *
 */
class Settings extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Settings</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    //this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav1' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      </Ons.Page>
    );
  }
}
/*
 *
 * Class Logout
 *
 */
class Logout extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>SUT Track Bus</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    //this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav1' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      </Ons.Page>
    );
  }
}




export default App;
