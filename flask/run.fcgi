#!/home/p/pa/pasae/app/venv/bin/python3
import os
import sys

sys.path.insert(0, os.path.expanduser('~/app'))
from flup.server.fcgi import WSGIServer
from pasae_api.app import app

if __name__ == '__main__':
    WSGIServer(app).run()
