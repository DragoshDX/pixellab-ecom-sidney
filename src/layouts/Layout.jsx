import { css } from '@emotion/css';
import { Footer, Header } from '../components/common';

const black = '#171717';
const white = '#fff';
const gray = '#f2f2f2';

export const Layout = ({ children }) => {
  const gridCss = css`
    display: grid;
    grid-template-areas:
      'header'
      'main-area';
    grid-template-rows: 60px 1fr;

    @media (min-width: 1024px) {
      grid-template-areas:
        'header main-area'
        'header main-area';
      grid-template-columns: 80px 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
    }
  `;

  const headerCss = css`
    background-color: ${black};
    color: ${white};
    grid-area: header;
    padding: 0 16px;

    @media (min-width: 1024px) {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 80px;
    }
  `;

  const mainAreaCss = css`
    grid-area: main-area;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  `;

  const footerCss = css`
    background-color: ${gray};
  `;

  return (
    <div className={gridCss}>
      <header className={headerCss}>
        <Header></Header>
      </header>

      <div className={mainAreaCss}>
        {children}
        <footer className={footerCss}>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};
