
For deployment on heroku:

meteor create --example todos
cd todos
git init .
git add .
git commit -a -m "First commit"
# Create an app on heroku
heroku git remote -a <appname>
heroku config:set BUILDPACK_URL=https://github.com/AdmitHub/meteor-buildpack-horse.git
heroku config:set ROOT_URL=http://<appname>.herokuapp.com
heroku addons:add mongolab
git push heroku master
