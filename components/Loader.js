import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f6f5f4"
    foregroundColor="#ecebeb"
    {...props}>
    <Rect x="21" y="155" rx="2" ry="2" width="99" height="15" />
    <Rect x="24" y="24" rx="2" ry="2" width="95" height="115" />
    <Rect x="143" y="24" rx="0" ry="0" width="98" height="110" />
    <Rect x="271" y="25" rx="0" ry="0" width="100" height="108" />
    <Rect x="148" y="155" rx="0" ry="0" width="90" height="15" />
    <Rect x="271" y="152" rx="0" ry="0" width="100" height="15" />
  </ContentLoader>
);

export default MyLoader;
