import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';

const MyLoader = props => (
  <ContentLoader
    style={{marginTop: 20}}
    speed={0.5}
    width={400}
    height="100%"
    backgroundColor="#b5a99d"
    foregroundColor="#fafafa"
    {...props}>
    <Rect x="26" y="30" rx="2" ry="2" width="102" height="28" />
    <Rect x="25" y="80" rx="2" ry="2" width="124" height="164" />
    <Rect x="26" y="260" rx="2" ry="2" width="124" height="15" />

    <Rect x="184" y="80" rx="2" ry="2" width="124" height="164" />
    <Rect x="185" y="260" rx="2" ry="2" width="124" height="15" />

    <Rect x="26" y="340" rx="2" ry="2" width="102" height="28" />
    <Rect x="25" y="390" rx="2" ry="2" width="124" height="164" />
    <Rect x="26" y="570" rx="2" ry="2" width="124" height="15" />

    <Rect x="184" y="390" rx="2" ry="2" width="124" height="164" />
    <Rect x="185" y="570" rx="2" ry="2" width="124" height="15" />
  </ContentLoader>
);

export default MyLoader;
