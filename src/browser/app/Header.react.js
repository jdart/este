import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedHTMLMessage} from 'react-intl';

export default class Header extends Component {

  static propTypes = {
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  };

  render() {
    const {viewer} = this.props;

    return (
      <header>
        <h1>
          <Link to="/"><FormattedHTMLMessage id="app.links.home" /></Link>
        </h1>
        <ul>
          <li><Link activeClassName="active" to="/todos"><FormattedHTMLMessage id="app.links.todos" /></Link></li>
          <li><Link activeClassName="active" to="/me"><FormattedHTMLMessage id="app.links.me" /></Link></li>
          {!viewer &&
            <li><Link activeClassName="active" to="/login"><FormattedHTMLMessage id="app.links.login" /></Link></li>
          }
        </ul>
      </header>
    );
  }

}
