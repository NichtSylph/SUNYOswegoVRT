<h1>SUNY Oswego Virtual Tour repository</h1>
<p>To utilize just run the docker-compose up --build command and it will start automatically on both the client website and the server. All the data is fetched from the School's AWS S3 Bucket and the MySQL Server.</p>

To add more locations, the LocationMarker.js component must be edited and an X variable and Y variable coordinate must be added alongside with a pointerNumber. Then the database must be edited to provide the proper information to that location number.

To create a tour, anything can be used as long as it can be redirected once a locationMarker is clicked. It can use Kuula or any other VR-creating application that can give a shareable link.
