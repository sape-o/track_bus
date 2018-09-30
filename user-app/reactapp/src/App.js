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
      isOpen: false
    };
    this.loadPage = this.loadPage.bind(this);
  }
  hide() { this.setState({ isOpen: false });}
  show() { this.setState({ isOpen: true });}
  loadPage(page) {
    this.hide();
    const currentPage = this.navigator.pages.slice(-1)[0] // --- or [this.navigator.pages.length - 1]
    if(currentPage.key != page.name){
      this.navigator.resetPage({ component: page, props: { key: page.name } }, { animation: 'fade' });
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
        <Ons.SplitterSide side='right' width={220} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
          <Ons.Page>
            <Ons.List>
              <Ons.ListHeader>Cute cats</Ons.ListHeader>
              <Ons.ListItem key={Promotion.name} onClick={this.loadPage.bind(this, Promotion)} tappable>Promotion</Ons.ListItem>
              <Ons.ListItem key={TimeLine.name} onClick={this.loadPage.bind(this, TimeLine)} tappable>TimeLine</Ons.ListItem>
              <Ons.ListItem key={Chauffeur.name} onClick={this.loadPage.bind(this, Chauffeur)} tappable>Chauffeur</Ons.ListItem>
              <Ons.ListItem key={ReportApp.name} onClick={this.loadPage.bind(this, ReportApp)} tappable>ReportApp</Ons.ListItem>
              <Ons.ListItem key={ReportBus.name} onClick={this.loadPage.bind(this, ReportBus)} tappable>ReportBus</Ons.ListItem>
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
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Ons.Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Ons.Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
        <h2>Settings</h2>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
        <Ons.Card>
          <img src={"https://monaca.io/img/logos/download_image_onsenui_01.png"} alt="Onsen UI" style={{ width: '100%' }} />
          <div className="title">{this.props.cardTitle ? this.props.cardTitle : 'Custom Card'}</div>
          <div className="content">
            <div>
              <Ons.Button>
                <Ons.Icon icon="ion-thumbsup"></Ons.Icon>
              </Ons.Button>
              <Ons.Button>
                <Ons.Icon icon="ion-share"></Ons.Icon>
              </Ons.Button>
            </div>
            <Ons.List>
              <Ons.ListHeader>Bindings</Ons.ListHeader>
              <Ons.ListItem>Vue</Ons.ListItem>
              <Ons.ListItem>Angular</Ons.ListItem>
              <Ons.ListItem>React</Ons.ListItem>
            </Ons.List>
          </div>
        </Ons.Card>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
        <h2>Cards</h2>

        <Ons.ListTitle>Card List</Ons.ListTitle>
        <Ons.List>
          <Ons.ListItem onClick={this.pushPage.bind(this)}>Card One</Ons.ListItem>
          <Ons.ListItem onClick={this.pushPage.bind(this)}>Card Two</Ons.ListItem>
          <Ons.ListItem onClick={this.pushPage.bind(this)}>Card Three</Ons.ListItem>
        </Ons.List>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className="center">{this.state.title}</div>
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
        <div style={{ textAlign: 'center' }}>
          <h1>Custom Page</h1>
          <p>
            <Ons.Input modifier="underbar" placeholder="Title" float onChange={evt => this.setState({ nexTitle: evt.target.value })} ></Ons.Input>
          </p>
          <Ons.Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Ons.Button>
          <Ons.Button onClick={this.popPage.bind(this)}>
            Pop Page
          </Ons.Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Ons.Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Ons.Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Ons.Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Ons.Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Ons.Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Ons.Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Ons.Page>
    );
  }
}




export default App;
