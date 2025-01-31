#!/bin/sh
export FLASK_APP=./race_multi_tool/app.py
pipenv run flask --debug run -h 0.0.0.0