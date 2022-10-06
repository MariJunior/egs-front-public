import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />

          <style jsx>{`
            @font-face {
              font-family: 'Ubuntu';
              font-weight: 400;
              src: url('/fonts/Ubuntu-Regular.ttf');
            }

            @font-face {
              font-family: 'Ubuntu';
              font-style: normal;
              font-weight: 700;
              src: url('/fonts/Ubuntu-Bold.ttf');
            }

            @font-face {
              font-family: 'Ubuntu';
              font-style: normal;
              font-weight: 500;
              src: url('/fonts/Ubuntu-Medium.ttf');
            }

            @font-face {
              font-family: 'Ubuntu';
              font-style: normal;
              font-weight: 300;
              src: url('/fonts/Ubuntu-Light.ttf');
            }

            @font-face {
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 700;
              src: url('/fonts/gilroy-bold.ttf');
            }

            @font-face {
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 500;
              src: url('/fonts/gilroy-medium.ttf');
            }

            @font-face {
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 600;
              src: url('/fonts/gilroy-semibold.ttf');
            }
            @font-face {
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 700;
              src: url('/fonts/gilroy-bold.ttf');
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
