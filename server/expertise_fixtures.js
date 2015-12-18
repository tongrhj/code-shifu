// Fixture data
if (Expertise.find().count() === 0) {
  // var now = new Date().getTime();

const skillList = ["Android","iOS","Windows Phone","HTML/CSS","JavaScript","Python","Java","C/C++","PHP","Objective-C","C#","Swift","JSON","Ruby","XML","Ajax","Shell","Processing","Lua","CoffeeScript","Go","MATLAB","OpenGL","R","Groovy","XAML","Perl","WebGL","Applescript","Scala","GLSL","JSP","LaTeX","Twilio","Yo","SendGrid","Moxtra","Mailjet","Facebook","Twitter","Reddit","Instagram","Google+","Venmo","Paypal","Stripe","Braintree","Blockchain","Google Maps","Yelp","Google Places","Esri ArcGIS","Mapbox","Spotify","Echo Nest","SoundCloud","Google Play","Rdio","Node.js","Flask","AngularJS","Ruby on Rails","Django","MongoDB","MySQL","SQLite","PostgreSQL","FoundationDB","Core Location","Mapkit","UIkit","Core Data","AV Foundation","Unity","Pygame","libGDX","GameMaker","Unreal Engine","Android Studio","Xcode","Eclipse","Visual Studio","Jade","jQuery","Express.js","Socket.io","OpenCV","D3.js","Parse","Firebase","Meteor.js","MongoLab","Amazon RDS","Azure","Heroku","Amazon Web Services","DigitalOcean","IBM Bluemix","Google App Engine","Linode","Atlantic.Net","OpenShift","Rackspace","cURL","Makefile","Gradle","Yeoman","ngrok","Sublime Text","Vim","Notepad++","Brackets","Atom","Arduino","Myo","Pebble","Leap Motion","Oculus Rift","Raspberry Pi","Intel Edison","Kinect","Particle (formerly Spark)","Google Cardboard","GPS","Servo","3D Printing","Android Wear","Meta (smart glasses)","Google Glass","Accelerometer","Tessel","Muse (headband)","Intel Galileo","AlchemyAPI","Autodesk","Bitcoin","Bloomberg","Canvas","Capital One","Docker","Dropbox","Eventbrite","Evernote","Face++","Giphy","IBM Watson","Indico","Kimono","Machine Learning","Maya","MetaMind","Mojio","Nginx","OCR","Ordr.in","Postmates","Priceline API","Qualcomm Vuforia","Rhine","Sabre","Selenium","SolidWorks","Tomcat","TripAdvisor","Uber","Weather Underground","Wit.ai","Wolfram Technologies","Ziggeo"]

  for (var i = 0; i < skillList.length; i++) {
    Expertise.insert({
      skillname: skillList[i],
      categoryTag: []
    });
  }
}
