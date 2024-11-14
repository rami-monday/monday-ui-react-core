/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface KeyProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Key: React.FC<KeyProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15.336 3.32813C15.535 3.32803 15.7259 3.40706 15.8667 3.5478L18.1054 5.78649C18.3983 6.07938 18.3983 6.55426 18.1054 6.84715C17.8125 7.14004 17.3376 7.14004 17.0447 6.84715L15.3369 5.13929L13.8163 6.66272L15.0669 7.91338C15.3598 8.20628 15.3598 8.68115 15.0669 8.97404C14.774 9.26694 14.2992 9.26694 14.0063 8.97404L12.7566 7.72438L9.89632 10.5901C10.415 11.3267 10.6988 12.2104 10.6988 13.1234C10.6988 14.2904 10.2352 15.4096 9.41003 16.2347C8.58486 17.0599 7.46569 17.5235 6.29873 17.5235C5.13176 17.5235 4.01259 17.0599 3.18743 16.2347C2.36226 15.4096 1.89868 14.2904 1.89868 13.1234C1.89868 11.9565 2.36226 10.8373 3.18743 10.0121C4.01259 9.18696 5.13176 8.72339 6.29873 8.72339C7.21347 8.72339 8.09885 9.00823 8.83628 9.5288L14.8055 3.5483C14.9461 3.40742 15.137 3.32822 15.336 3.32813ZM4.24809 11.0728C4.79195 10.5289 5.52959 10.2234 6.29873 10.2234C7.06787 10.2234 7.8055 10.5289 8.34937 11.0728C8.89323 11.6167 9.19877 12.3543 9.19877 13.1234C9.19877 13.8926 8.89323 14.6302 8.34937 15.1741C7.8055 15.7179 7.06787 16.0235 6.29873 16.0235C5.52959 16.0235 4.79195 15.7179 4.24809 15.1741C3.70422 14.6302 3.39868 13.8926 3.39868 13.1234C3.39868 12.3543 3.70422 11.6167 4.24809 11.0728Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Key.displayName = 'Key';
export default Key;
/* tslint:enable */
/* eslint-enable */
