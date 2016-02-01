import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';


export default class Profile extends Component {

  static propTypes = {
    intl: PropTypes.object
  };

  render() {
    const {intl: {formatMessage}} = this.props;

    return (
      <div className="profile-page">
        <Helmet title={formatMessage({id: "profile.title"})} />
        <p>
          <FormattedHTMLMessage id="profile.title" />
        </p>
      </div>
    );
  }

}
