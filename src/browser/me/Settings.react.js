import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Settings extends Component {

  static propTypes = {
    intl: PropTypes.object
  };

  render() {
    const {intl: {formatMessage}} = this.props;

    return (
      <div className="settings-page">
        <Helmet title={formatMessage({id: "settings.title"})} />
        <p>
          <FormattedHTMLMessage id="settings.title" />
        </p>
      </div>
    );
  }

}
