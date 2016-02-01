import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Todo from './Todo.react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Todos extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    map: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired
  };

  render() {
    const {actions, map} = this.props;

    if (!map.size)
      return <p><FormattedHTMLMessage id="todos.empty" /></p>;

    // Note this is naive approach. Huge lists should be presorted in reducer.
    const list = map.toList().sortBy(item => item.createdAt);

    return (
      <ol className="todos">
        {list.map(todo =>
          <Todo {...{actions, todo}} key={todo.id} />
        )}
      </ol>
    );
  }

}
