import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Logout extends Component {

  static propTypes = {
    intl: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    // Always reload app on logout for security reasons.
    location.href = '/';
  }

  render() {
    return (
      <div className="logout">
        <button onClick={this.logout}>
          <FormattedHTMLMessage id="button" />
        </button>
      </div>
    );
  }

}
