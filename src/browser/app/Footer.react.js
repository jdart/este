import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Footer extends Component {

  static propTypes = {};

  render() {
    return (
      <footer>
        <p>
          <FormattedHTMLMessage id="app.footer.madeByHtml" />
        </p>
      </footer>
    );
  }

}
