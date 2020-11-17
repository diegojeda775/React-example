function App() {
    return (
      <div>
        <h1>Hello, everyone!</h1>
        <p>We think</p>
        <ul>
          <li>React</li>
          <li>is</li>
          <li>brilliant!</li>
        </ul>
      </div>
    );
  };
  
  // Use the App component:
  // insert the App's element tree into the #application-root
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  );