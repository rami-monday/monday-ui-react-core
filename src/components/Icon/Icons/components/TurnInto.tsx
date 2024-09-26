/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TurnIntoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const TurnInto: React.FC<TurnIntoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.84766 4.80029C6.84766 4.38608 7.18345 4.05029 7.59766 4.05029H13.0977C13.827 4.05029 14.5265 4.34002 15.0422 4.85575 15.5579 5.37147 15.8477 6.07095 15.8477 6.80029V9.48758L14.3477 9.48764V6.80029C14.3477 6.46877 14.216 6.15083 13.9815 5.91641 13.7471 5.68199 13.4292 5.55029 13.0977 5.55029H7.59766C7.18345 5.55029 6.84766 5.21451 6.84766 4.80029zM4.34764 11.109L5.84764 11.1089V13.8003C5.84764 14.1318 5.97934 14.4498 6.21376 14.6842 6.44818 14.9186 6.76612 15.0503 7.09764 15.0503H12.5976C13.0119 15.0503 13.3476 15.3861 13.3476 15.8003 13.3476 16.2145 13.0119 16.5503 12.5976 16.5503H7.09764C6.3683 16.5503 5.66882 16.2606 5.1531 15.7448 4.63737 15.2291 4.34764 14.5296 4.34764 13.8003V11.109z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M12.0673 8.26794C12.3602 7.97505 12.8351 7.97505 13.128 8.26794L14.3477 9.48764 15.8477 9.48758 17.0673 8.26794C17.3602 7.97505 17.8351 7.97505 18.128 8.26794 18.4209 8.56083 18.4209 9.03571 18.128 9.3286L15.628 11.8286C15.3351 12.1215 14.8602 12.1215 14.5673 11.8286L12.0673 9.3286C11.7744 9.03571 11.7744 8.56083 12.0673 8.26794zM4.56733 8.76797C4.86022 8.47508 5.33509 8.47508 5.62799 8.76797L8.12799 11.268C8.42088 11.5609 8.42088 12.0357 8.12799 12.3286 7.83509 12.6215 7.36022 12.6215 7.06733 12.3286L5.84764 11.1089 4.34764 11.109 3.12799 12.3286C2.83509 12.6215 2.36022 12.6215 2.06733 12.3286 1.77443 12.0357 1.77443 11.5609 2.06733 11.268L4.56733 8.76797z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
TurnInto.displayName = 'TurnInto';
export default TurnInto;
/* tslint:enable */
/* eslint-enable */
