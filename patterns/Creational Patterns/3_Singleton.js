class ApplicationState {
  static instance = null;

  constructor() {
    this.isLoggedIn = false;
    this.preson = { name: "marco", age: 35 };
  }

  static getAppState() {
    if (ApplicationState.instance === null) ApplicationState.instance = new ApplicationState();
    return ApplicationState.instance;
  }
}

const appState1 = ApplicationState.getAppState();
const appState2 = ApplicationState.getAppState();
appState1.isLoggedIn = true;
console.log(appState1.isLoggedIn === appState2.isLoggedIn); // true
console.log(appState1.preson === appState2.preson); // true, same objext
