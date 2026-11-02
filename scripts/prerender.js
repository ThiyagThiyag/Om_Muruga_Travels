import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';

async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const { render } = await vite.ssrLoadModule('./src/entry-server.jsx');
    const appHtml = render('/');
    console.log('Prerendered HTML generated! Length:', appHtml.length);

    const indexPath = path.resolve('dist/index.html');
    if (fs.existsSync(indexPath)) {
      let html = fs.readFileSync(indexPath, 'utf8');
      if (html.includes('<div id="root"></div>')) {
        html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        fs.writeFileSync(indexPath, html, 'utf8');
        console.log('Successfully injected prerendered markup into dist/index.html!');
      } else {
        console.log('div id="root" was not empty or already has content.');
      }
    }
  } catch (err) {
    console.error('Prerender error:', err);
  } finally {
    await vite.close();
  }
}

prerender();

