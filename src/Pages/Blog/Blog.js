import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card m-6 bg-base-100 shadow-xl image-full">

                <div className="card-body">
                    <h2 className="card-title">Key Differences between SQL and NoSQL</h2>
                    <ul>
                        <li> * SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.</li>
                        <li>* Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
                        </li>
                        <li>* SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>* SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
                        <li>* Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                    </ul>
                </div>
            </div>

            <div className="card m-6 bg-base-100 shadow-xl image-full">

                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>


                </div>
            </div>
            <div className="card m-6 bg-base-100 shadow-xl image-full">

                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <p><strong>1. NodeJS :</strong> <br />
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    <p><strong>2. JavaScript : </strong> <br />
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.  </p>

                </div>
            </div>
            <div className="card m-6 bg-base-100 shadow-xl image-full">

                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                    </p>
                    <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                    <ul>
                        <li>
                            1. User sign-in using username and password or google/facebook. </li>
                        <li>2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                        <li>3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                        <li>4. Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;