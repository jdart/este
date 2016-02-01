import './NewTodo.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class NewTodo extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    newTodo: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputChange(e) {
    const {actions} = this.props;
    actions.onNewTodoChange(e.target.name, e.target.value);
  }

  onInputKeyDown(e) {
    const {actions, newTodo} = this.props;
    if (e.key === 'Enter' && newTodo.title.trim())
      actions.addTodo(newTodo);
  }

  render() {
    const {intl: {formatMessage}, newTodo} = this.props;

    return (
      <input
        autoFocus
        className="new-todo"
        name="title"
        onChange={this.onInputChange}
        onKeyDown={this.onInputKeyDown}
        placeholder={formatMessage({id: "todos.newTodoPlaceholder"})}
        value={newTodo.title}
      />
    );
  }

}
