import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Blog section</h2>

            <div className="card">
                <h5 className="card-header">{''}</h5>
                <div className="card-body">
                    <h5 className="card-title">Difference between Javascript and Nodejs</h5>
                    <p className="card-text">JavaScript is a simple programming language that runs on any of the browser’s JavaScript engines. On the contrary, Node js is a Javascript runtime environment, which is based on Google’s V8 JavaScript environment. It is used in executing Javascript codes outside the browsers.</p>
                    <p className='card-text'>Typically, JavaScript follows set standards of Java programming language. The writing of code might differ on several aspects, however, it can also be written using standard Java programming language. Node JS is written in C++ and needs to be run on V8 engine based browsers (Google Chrome).</p>
                    <p className='card-text'>When the utility is concerned, JavaScript is mainly used for client-side activity for a web application, which can be attributed validations, refreshing the page at specific time periods, incorporating dynamic changes on web pages without refreshing the page. Node.js is used for executing the on-blocking operation of any operating system, which can include creating a shell script or getting access to specific details on hardware or even running a backend job.</p>
                </div>
            </div>
            <div className="card">
                <h5 className="card-header">{''}</h5>
                <div className="card-body">
                    <h5 className="card-title">When should you use Nodejs and when should you use Mongodb?</h5>
                    <p className="card-text">Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                    <p className="card-text">MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                    <p className="card-text">MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...</p>
                </div>
            </div>
            <div className="card">
                <h5 className="card-header">{''}</h5>
                <div className="card-body">
                    <h5 className="card-title">Differences between Sql and Nosql databases.</h5>
                    <p className="card-text">SQL databases are relational, NoSQL databases are non-relational.</p>
                    <p>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data</p>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                    <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div className="card">
                <h5 className="card-header">{''}</h5>
                <div className="card-body">
                    <h5 className="card-title">What is the purpose of JWT and how does it work</h5>
                    <p className="card-text">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;