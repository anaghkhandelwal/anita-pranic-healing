import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppRoutesServer from './AppRoutesServer.jsx';

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutesServer />
    </StaticRouter>
  );
  return { html };
}
