/* @flow */

import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  type NavigationState,
} from 'react-native-tab-view';
import Article from './Shared/Article';
import Albums from './Shared/Albums';
import Chat from './Shared/Chat';
import Contacts from './Shared/Contacts';

type State = NavigationState<{
  key: string,
  title: string,
}>;

export default class ScrollableTabBarExample extends React.Component<*, State> {
  static title = 'Scrollable top bar';
  static backgroundColor = '#3f51b5';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      { key: 'article', title: 'Article' },
      { key: 'contacts', title: 'Contacts' },
      { key: 'albums', title: 'Albums' },
      { key: 'chat', title: 'Chat' },
      { key: 'chat2', title: 'Chat' },
      { key: 'chat3', title: 'Chat' },
      { key: 'chat4', title: 'Chat' },
      { key: 'chat5', title: 'Chat' },
      { key: 'chat6', title: 'Chat' },
      { key: 'chat7', title: 'Chat' },
      { key: 'chat8', title: 'Chat' },
      { key: 'chat9', title: 'Chat' },
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    albums: Albums,
    contacts: Contacts,
    article: Article,
    chat: Chat,
    chat2: Chat,
    chat3: Chat,
    chat4: Chat,
    chat5: Chat,
    chat6: Chat,
    chat7: Chat,
    chat8: Chat,
    chat9: Chat,
  });

  render() {
    return (
      <TabView
        style={this.props.style}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
});
