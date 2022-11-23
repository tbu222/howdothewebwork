// What is HTTP?
// HTTP is a protocol for fetching resources such as HTML documents

// What is a URL?
// A URL is the address of a given unique resource on the Web

// What is DNS?
// The Domain Name System (DNS) is the phonebook of the Internet

// What is a query string?
// A query string is a part of a uniform resource locator (URL) that assigns values to specified parameters

// What are two HTTP verbs and how are they different?
// Create an item (POST)
// Update an item (PUT)

// What is an HTTP request?
// to access a resource on the server

// What is an HTTP response?
//  to provide the client with the resource it requested, or inform the client that the action it requested has been carried out; or else to inform the client that an error occurred in processing its request.

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
// An HTTP header is a field of an HTTP request or response that passes additional context and metadata about the request or response
// Ex: Request
// Request URL: https://bunny.net/
// Request Method: GET
// Status Code: 200 
// Remote Address: <server_IP>:443
// Referrer Policy: strict-origin-when-cross-origin 

// Response:
// cache-control: public, max-age=30
// cdn-cache: HIT
// cdn-cachedat: <cache_date>
// cdn-edgestorageid: <edge_storage_id>
// cdn-proxyver: 1.0
// cdn-pullzone: <pullzone_id>
// cdn-requestcountrycode: <country_code>
// cdn-requestid: <request_id>
// cdn-requestpullcode: 200
// cdn-requestpullsuccess: True
// cdn-status: 200
// cdn-uid: <uid>
// content-encoding: br
// content-type: text/html; charset=utf-8
// date: <date>
// server: BunnyCDN-<node_id>
// vary: Accept-Encoding

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// The browser checks the cache for a DNS record to find the corresponding IP address of said url
// If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts said url
// The browser initiates a TCP connection with the server.
// The browser sends an HTTP request to the webserver.
// The server handles the request and sends back a response.
// The server sends out an HTTP response.
// The browser displays the content

// Part Two:

// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
// curl https://icanhazdadjoke.com/search\?term\=pirate

// Use dig to find what the IP address is for icanhazdadjoke.com
// dig icanhazdadjoke.com +short

