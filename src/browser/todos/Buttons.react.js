import './Buttons.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Buttons extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    clearAllEnabled: PropTypes.bool.isRequired,
    intl: PropTypes.object.isRequired
  };

  render() {
    const {actions, clearAllEnabled} = this.props;

    return (
      <div className="buttons">
        <button
          disabled={!clearAllEnabled}
          onClick={actions.clearAllTodos}
        ><FormattedHTMLMessage id="todos.clearAll" /></button>
        <button
          onClick={actions.addHundredTodos}
        ><FormattedHTMLMessage id="todos.add100" /></button>
      </div>
    );
  }

}
