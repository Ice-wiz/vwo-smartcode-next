import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { VWOSmartCode } from './VWOSmartCode';

interface VWODocumentProps {
  accountId: string;
}

export const VWODocument = ({ accountId }: VWODocumentProps): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        <VWOSmartCode accountId={accountId} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

// import * as React from 'react';
// import { Html, Head, Main, NextScript } from 'next/document';
// import { VWOSmartCode } from './VWOSmartCode';

// interface VWODocumentProps {
//   accountId: string;
// }

// export const VWODocument = ({ accountId }: VWODocumentProps): JSX.Element => {
//   return (
//     <Html lang="en">
//       <Head>
//         <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//         <VWOSmartCode accountId={accountId} />
//       </body>
//     </Html>
//   );
// };
