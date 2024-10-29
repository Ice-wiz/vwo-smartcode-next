import * as React from 'react';
import { VWOSmartCode } from './VWOSmartCode';

interface VWOLayoutProps {
  accountId: string;
  children: React.ReactNode;
}

export const VWOLayout = ({ accountId, children }: VWOLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        <VWOSmartCode accountId={accountId} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};



// import * as React from 'react';
// import { VWOSmartCode } from './VWOSmartCode';

// interface VWOLayoutProps {
//   accountId: string;
//   children: React.ReactNode;
// }

// export const VWOLayout = ({ accountId, children }: VWOLayoutProps): JSX.Element => {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
//       </head>
//       <body>
//         {children}
//         <VWOSmartCode accountId={accountId} />
//       </body>
//     </html>
//   );
// };
