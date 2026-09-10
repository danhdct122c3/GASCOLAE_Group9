"""Serve only the public landing-page files on localhost; source assets stay private."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse

ROOT = Path(__file__).resolve().parents[2]
PUBLIC_DIRS = ('src/css/', 'src/js/', 'assets/images/', 'assets/video/', 'assets/logo/')

class PublicHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_head(self):
        requested = unquote(urlsplit(self.path).path).lstrip('/')
        if requested in ('', 'index.html', 'src', 'src/'):
            self.send_response(302)
            self.send_header('Location', '/src/index.html')
            self.end_headers()
            return None
        target = (ROOT / requested).resolve()
        allowed = requested == 'src/index.html' or requested.startswith(PUBLIC_DIRS)
        if not allowed or not target.is_relative_to(ROOT) or (target.is_dir() and requested):
            self.send_error(404)
            return None
        return super().send_head()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    print(f'Landing page: http://127.0.0.1:{args.port}', flush=True)
    ThreadingHTTPServer(('127.0.0.1', args.port), PublicHandler).serve_forever()
