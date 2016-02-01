import AuthLogin from './Login.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Page extends Component {

  static propTypes = {
    intl: PropTypes.object
  };

  render() {
    const {intl: {formatMessage}} = this.props;

    return (
      <div className="login-page">
        <Helmet title={formatMessage({id: "auth.login.title"})} />
        <AuthLogin {...this.props} />
      </div>
    );
  }

}
