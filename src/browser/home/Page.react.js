import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    intl: PropTypes.object
  };

  render() {
    const {intl: {formatMessage}} = this.props;

    return (
      <div className="home-page">
        <Helmet title={formatMessage({id: "home.title"})} />
        <p>
          <FormattedHTMLMessage id="home.infoHtml" />
        </p>
        <div className="tocheck">
          <h2><FormattedHTMLMessage id="home.toCheck.h2" /></h2>
          {/* Note require usage for image source. Very useful for CDN. */}
          <img alt="50x50 placeholder" src={require('./50x50.png')} />
          <ul>
            {/*msg.toCheck.list.map(({key, text}) =>
              <li key={key}>
                <FormattedHTMLMessage defaultMessage={text} />
              </li>
            )*/}
            <li>
              <FormattedHTMLMessage id="home.toCheck.isomorphicPage" />{' '}
              <Link to="/this-is-not-the-web-page-you-are-looking-for">404</Link>
            </li>
            <li>
              <FormattedHTMLMessage id="home.toCheck.andMuchMore" />
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
