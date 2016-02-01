import './App.styl';
import Component from 'react-pure-render/component';
import Footer from './Footer.react';
import Header from './Header.react';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import RouterHandler from '../components/RouterHandler.react';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';
import {connect} from 'react-redux';
import {injectIntl} from 'react-intl';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
  };

  render() {
    const {location: {pathname}, users: {viewer}} = this.props;

    return (
      // Pass data-pathname to allow route specific styling.
      <div className="page" data-pathname={pathname}>
        <Helmet
          link={[
            {rel: 'shortcut icon', href: require('./favicon.ico')}
          ]}
          meta={[{
            name: 'description',
            content: 'Dev stack and starter kit for functional and universal React web apps'
          }]}
          titleTemplate="%s - Este.js"
        />
        {/* Pathname enforces rerender so activeClassName is updated. */}
        <Header pathname={pathname} viewer={viewer} />
        <RouterHandler {...this.props} />
        <Footer />
      </div>
    );
  }

}

// // logRenderTime is useful for app with huge UI to check render performance.
// import logRenderTime from '../lib/logRenderTime';
// App = logRenderTime(App)

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(App));

