import './Page.styl';
import AuthLogout from '../auth/Logout.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import RouterHandler from '../components/RouterHandler.react';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';
import {Link} from 'react-router';

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.object,
    intl: PropTypes.object,
    users: PropTypes.object
  };

  render() {
    const {children, intl: {formatMessage}, users: {viewer: {email}}} = this.props;

    return (
      <div className="me-page">
        <Helmet title={formatMessage({id: "me.title"})} />
        <ul>
          <li><Link activeClassName="active" to="/me/profile"><FormattedHTMLMessage id="profile.title" /></Link></li>
          <li><Link activeClassName="active" to="/me/settings"><FormattedHTMLMessage id="settings.title" /></Link></li>
        </ul>
        {children
          ? <RouterHandler {...this.props} />
          : <p>
              <FormattedMessage id="me.welcome" values={{email}} />
            </p>
        }
        <AuthLogout />
      </div>
    );
  }

}
