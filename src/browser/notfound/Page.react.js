import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedHTMLMessage} from 'react-intl';

export default class NotFound extends Component {

  static propTypes = {
    intl: PropTypes.object
  };

  render() {
    const {intl: {formatMessage}} = this.props;

    return (
      <div className="notfound-page">
        <Helmet title={formatMessage({id: "notFound.title"})} />
        <h1><FormattedHTMLMessage id="notFound.header" /></h1>
        <p><FormattedHTMLMessage id="notFound.message" /></p>
        <Link to="/"><FormattedHTMLMessage id="notFound.continueMessage" /></Link>
      </div>
    );
  }

}
