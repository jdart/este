import Buttons from './Buttons.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import NewTodo from './NewTodo.react';
import React, {PropTypes} from 'react';
import Todos from './Todos.react';
import fetch from '../../common/components/fetch';
import {fetchUserTodos} from '../../common/todos/actions';
import {FormattedHTMLMessage} from 'react-intl';

class Page extends Component {

  static propTypes = {
    actions: PropTypes.object,
    intl: PropTypes.object,
    todos: PropTypes.object
  };

  render() {
    const {actions, intl, todos: {map, newTodo}} = this.props;

    return (
      <div className="todos-page">
        <Helmet title={intl.formatMessage({id: "todos.title"})} />
        <NewTodo {...{actions, intl, newTodo}} />
        <Todos {...{actions, intl, map}} />
        <Buttons clearAllEnabled={map.size > 0} {...{actions, intl}} />
      </div>
    );
  }

}

// Truly universal (not only isomorphic) data fetching.
// One higher order component for browser, server, and mobile.
Page = fetch(fetchUserTodos)(Page);

export default Page;
