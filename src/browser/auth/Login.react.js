import './Login.styl';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import fields from '../../common/components/fields';
import focusInvalidField from '../lib/focusInvalidField';
import {FormattedHTMLMessage} from 'react-intl';

class Login extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    // Read why we bind event handlers explicitly.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  async onFormSubmit(e) {
    e.preventDefault();
    const {actions, fields} = this.props;
    const result = await actions.login(fields.toValues()).payload.promise;
    if (result.error) {
      focusInvalidField(this, result.payload);
      return;
    }
    this.redirectAfterLogin();
  }

  redirectAfterLogin() {
    const {location} = this.props;
    const nextPathname = location.state && location.state.nextPathname || '/';
    this.context.router.replace(nextPathname);
  }

  render() {
    const {fields, auth, intl: {formatMessage}} = this.props;
    const {email, password} = fields;

    return (
      <div className="login">
        <Helmet title="Login" />
        <form onSubmit={this.onFormSubmit}>
          <fieldset disabled={auth.formDisabled}>
            <legend><FormattedHTMLMessage id="auth.form.legend" /></legend>
            <input
              autoFocus
              maxLength="100" // Use maxLength, because react-native needs it.
              placeholder={formatMessage({id: 'auth.form.placeholder.email'})}
              {...email}
            />
            <br />
            <input
              maxLength="300"
              placeholder={formatMessage({id: 'auth.form.placeholder.password'})}
              type="password"
              {...password}
            />
            <br />
            <button type="submit"><FormattedHTMLMessage id="auth.form.button.login" />}</button>
            <span className="hint"><FormattedHTMLMessage id="auth.form.hint" />}</span>
            {auth.formError &&
              <p className="error-message"><FormattedHTMLMessage id="auth.formError.message" /></p>
            }
          </fieldset>
        </form>
      </div>
    );
  }

}

Login = fields(Login, {
  path: 'auth', // Path can be dynamic. props => ['todos', props.todo.id]
  fields: ['email', 'password'] // TODO: Fields default values by props.
});

export default Login;
