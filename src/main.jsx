import * as React from 'react';

const App = React.createClass({
  render: () => {
    return (
      <div>
        <h2>hello world</h2>
      </div>
    );
  }
});

React.render(<App></App>, document.body);
