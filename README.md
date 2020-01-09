# URL SHORTENER

In this the user enters a url and receives a shortened url.  
The Back End is made using NodeJS & ExpressJS using MongoDB as database.  
The Front End is made using ReactJS.

## Quick Start

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd url-shortener-frontend
npm install

# Run both Backend & Frontend from root
npm run dev

# Build for production
cd client
npm run build
```

## Packages Installed

### These are the list of packages used in Back End

- concurrently
- express
- mongoose
- shortid
- valid-url

**Concurrently** is used to run the react server and node Server at the same time.  
**Express** is used with NodeJS to divert users to different parts of the web applications based on the request made.  
**Mongoose** represents a much cleaner interface for querying MongoDB.  
**shortid** creates amazingly short non-sequential url-friendly unique ids.
**valid-url** creates amazingly short non-sequential url-friendly unique ids.

**Note:** _body-parser package exist in package.json but it is not used since it is provided by express._

### These are the list of packages used in Front End

- react
- react-copy-to-clipboard
- antd

**React** is a JavaScript library for building user interfaces.  
**react-copy-to-clipboard** is used to copy the text to the clipboard.  
**antd** is AntDesign which is popularly used for designing.

## List of errors you might come across while running

### MongoDB error

`MongoError: failed to connect to server [localhost:27017] on first connect [MongoError: connect ECONNREFUSED 127.0.0.1:27017]`

**Solution:** Your MongoDB service hasn't started for that go to:

1. Go to Control Panel and click on Administrative Tools.
2. Double click on Services. A new window opens up.
3. Search MongoDB.exe. Right click on it and select Start.

### CORS error

`Access to fetch at 'http://localhost:7000/api/item' from origin 'http://localhost:3000' has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.`

**Solution:** If you are using chrome and you get the above error then you might need to add extension on chrome called CORS. I used this extension: Moesif CORS and then turn it ON.

### Project Info

#### Author

> Akhil Nayak

#### License

> This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

#### If you have any suggestion or doubt do let me know

#### ThankYou.Peace
