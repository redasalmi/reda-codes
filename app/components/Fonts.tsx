import poppins400Woff2 from '~/assets/fonts/poppins-latin-400-normal.woff2';
import poppins400Woff from '~/assets/fonts/poppins-latin-400-normal.woff';
import poppins700Woff2 from '~/assets/fonts/poppins-latin-700-normal.woff2';
import poppins700Woff from '~/assets/fonts/poppins-latin-700-normal.woff';

export default function Fonts() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: block;
            font-weight: 400;
            src: url(${poppins400Woff2}) format('woff2'),
              url(${poppins400Woff}) format('woff');
          }

          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: block;
            font-weight: 700;
            src: url(${poppins700Woff2}) format('woff2'),
              url(${poppins700Woff}) format('woff');
          }
    `,
      }}
    />
  );
}
