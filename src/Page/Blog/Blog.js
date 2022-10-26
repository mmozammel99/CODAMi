
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';



const Blog = () => {
const{dark}=useContext(AuthContext)
    return (

       
            <div className={`${dark ? "bg-neutral-focus":"bg-base-100"} ${dark ? "text-base-200":"text-neutral-focus"}`}>
                <h2 className="text-5xl font-bold text-center pt-5 mb-5">BLOG</h2>
                <div className={`container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ${dark ? "bg-neutral":"bg-base-100"} ${dark ? "text-gray-100":"text-neutral-focus"} mb-10 `}>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2023</span>
                        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-sky-600 text-gray-50">#CORS</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">What is CORS?</Link>
                        <p className="mt-2">
                            At this point, I think I've probably seen most ways to (mis)configure CORS headers. So let's talk about what they are, how they protect you and your customers, and how to get them set up correctly.
                            <br />
                            As you've possibly already come across by now, CORS is an acronym for Cross-Origin Resource Sharing, but what does that actually mean? What is CORS? Well, if we go by the Wikipedia definition, "[CORS] is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served," then you'd be forgiven if you were more confused than before you'd read that sentence.
                            <br />
                            Before we get into defining CORS, it's best to know what came before, as it still defines the default behavior and is probably why you're reading this now. This precursor to CORS was called the "Same-Origin" policy. In short, it dictates that when your browser loads a script (like a button handler, or some async widget) from a particular (sub)domain that the script can only make requests to the (sub)domain that it originated from.
                            <br />
                            Cross-Origin Resource Sharing
                            So then, what is CORS? Simply put, CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content at www.example.com and the backend API at api.example.com. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain.
                            <br />
                            This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes.
                            <br />
                            There's a lot of terrible advice out there (especially on popular forums) on how to set this up where the answers generally include some variant of brutally setting wildcard "*" response headers regardless of the request headers provided in the pre-flight request. This article attempts to dispel some of the common misconceptions about Cross-Origin Resource Sharing and provide useful advice on how to get things working correctly.
                        </p>
                    </div>

                </div>
                <div className={`container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ${dark ? "bg-neutral":"bg-base-100"} ${dark ? "text-gray-100":"text-neutral-focus"} mb-10`}>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2023</span>
                        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-yellow-600 text-gray-50">#Firebase</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">Why Should You Use Google Firebase? Firebase Alternatives .</Link>
                        <p className="mt-2">
                            Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                            You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.


                            As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.
                            <br />
                            With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.
                            All of these can save you a significant amount of development cost, as you don't need to pay as high as developing from scratch. Firebase pricing is equally flexible. Although there are pay-as-you-go services, you can start on a free plan and use primary features if your app is still at its prime.

                            Firebase is a good choice if you want to deploy a working product on the cloud rapidly. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.
                            <br />
                        </p>
                        <Link rel="noopener noreferrer" to="#" className="text-xl font-bold hover:underline">Firebase Alternatives </Link>
                        <p>
                            The goal of every developer is to create awesome apps. If you’re a developer, we are here to help you discover some of the best Firebase alternatives to help take your mobile app development a notch higher.

                            Firebase continues innovating and dominating the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy.

                            I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.

                            While Firebase offers an increasingly sophisticated array of services that takes care of various development requirements, it’s not always the easiest, fastest, or most affordable option. The article “Reasons Not to Use Firebase” also enlightened me about the risks of using Firebase.

                            In addition to some first-tier competitors such as Parse, the number of cloud providers has increased significantly. These companies provide services that benefit small developers in unique ways, such as user-friendliness and affordability.

                            In this tutorial, you will learn about multiple Firebase competitors. Some are relatively new companies but still provide valuable services to developers. The tutorial will cover competitors like Back4App, Parse, Backendless, Kinvey, Appwrite, Nhost, etc
                        </p>
                    </div>

                </div>
                <div className={`container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ${dark ? "bg-neutral":"bg-base-100"} ${dark ? "text-gray-100":"text-neutral-focus"} mb-10`}>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2023</span>
                        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-red-600 text-gray-50">#React Route</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">How does the React Private Route work?</Link>
                        <p className="mt-2">
                            Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                            The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

                            In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start
                            <br />
                            The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                            <br />
                            The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.


                        </p>
                    </div>

                </div>
                <div className={`container max-w-4xl px-10  py-6 mx-auto rounded-lg shadow-sm ${dark ? "bg-neutral":"bg-base-100"} ${dark ? "text-gray-100":"text-neutral-focus"}`}>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2023</span>
                        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-green-600 text-gray-50">#Node.js</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">What exactly is Node.js?</Link>
                        <p className="mt-2">
                            The Node.js run-time environment includes everything you need to execute a program written in JavaScript.Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.

                            Now you can do much more with JavaScript than just making websites interactive.

                            JavaScript now has the capability to do things that other scripting languages like Python can do.

                            Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.
                            <br />
                            <span className='font-bold'>Why Node.js?</span>
                            <br />
                            Here’s a formal definition as given on the official Node.js website:

                            Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

                            Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

                            Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
                            We already discussed the first line of this definition: “Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.” Now let’s understand the other two lines so we can find out why Node.js is so popular.

                            I/O refers to input/output. It can be anything ranging from reading/writing local files to making an HTTP request to an API.

                            I/O takes time and hence blocks other functions.

                            Consider a scenario where we request a backend database for the details of user1 and user2 and then print them on the screen/console. The response to this request takes time, but both of the user data requests can be carried out independently and at the same time.
                            <br />
                            <span className='font-bold'>Blocking I/O</span> <br />
                            In the blocking method, user2's data request is not initiated until user1's data is printed to the screen.

                            If this was a web server, we would have to start a new thread for every new user. But JavaScript is single-threaded (not really, but it has a single-threaded event loop, which we’ll discuss a bit later). So this would make JavaScript not very well suited for multi-threaded tasks.

                            That’s where the non-blocking part comes in.
                            <br />
                            <span className='font-bold'>Non-blocking I/O</span> <br />
                            On the other hand, using a non-blocking request, you can initiate a data request for user2 without waiting for the response to the request for user1. You can initiate both requests in parallel.

                            This non-blocking I/O eliminates the need for multi-threading since the server can handle multiple requests at the same time.
                            <br />
                            <span className='font-bold'>The JavaScript event loop</span> <br />
                            If you have 26 minutes, watch this excellent video explanation of the Node Event Loop:

                            Otherwise, here’s a quick step-by-step explanation of how the JavaScript Event Loop works.
                            <br />
                            Push main() onto the call stack.
                            Push console.log() onto the call stack. This then runs right away and gets popped.
                            Push setTimeout(2000) onto the stack. setTimeout(2000) is a Node API. When we call it, we register the event-callback pair. The event will wait 2000 milliseconds, then callback is the function.
                            After registering it in the APIs, setTimeout(2000) gets popped from the call stack.
                            Now the second setTimeout(0) gets registered in the same way. We now have two Node APIs waiting to execute.
                            After waiting for 0 seconds, setTimeout(0) gets moved to the callback queue, and the same thing happens with setTimeout(2000).
                            In the callback queue, the functions wait for the call stack to be empty, because only one statement can execute a time. This is taken care of by the event loop.
                            The last console.log() runs, and the main() gets popped from the call stack.
                            The event loop sees that the call stack is empty and the callback queue is not empty. So it moves the callbacks (in a first-in-first-out order) to the call stack for execution.
                            <br />
                            <span className='font-bold'>npm</span> <br />
                            These are libraries built by the awesome community which will solve most of your generic problems. npm (Node package manager) has packages you can use in your apps to make your development faster and efficient.
                            <br />
                            <span className='font-bold'> Require</span> <br />


                            Require does three things:

                            It loads modules that come bundled with Node.js like file system and HTTP from the Node.js API .
                            It loads third-party libraries like Express and Mongoose that you install from npm.
                            It lets you require your own files and modularize the project.
                            Require is a function, and it accepts a parameter “path” and returns module.exports.
                            <br />

                            <span className='font-bold'> Node Modules</span> <br />
                            A Node module is a reusable block of code whose existence does not accidentally impact other code.

                            You can write your own modules and use it in various application. Node.js has a set of built-in modules which you can use without any further installation.
                            <br />
                            <span className='font-bold'> V8 turbo-charges JavaScript by leveraging C++</span> <br />
                            V8 is an open source runtime engine written in C++.

JavaScript -> V8(C++) -> Machine Code

                            V8 implements a script called ECMAScript as specified in ECMA-262. ECMAScript was created by Ecma International to standardize JavaScript.

                            V8 can run standalone or can be embedded into any C++ application. It has hooks that allow you to write your own C++ code that you can make available to JavaScript.

                            This essentially lets you add features to JavaScript by embedding V8 into your C++ code so that your C++ code understands more than what the ECMAScript standard otherwise specifies.

                            Edit: As brought to my attention by Greg Bulmash, there are many different JavaScript runtime engines apart from V8 by Chrome like SpiderMonkey by Mozilla, Chakra by Microsoft, etc..
                            <br />
                            <span className='font-bold'> Events</span> <br />
                            Something that has happened in our app that we can respond to. There are two types of events in Node.

                            System Events: C++ core from a library called libuv. (For example, finished reading a file).
                            Custom Events: JavaScript core.
                            <br />

                            <span className='font-bold'> Writing Hello World in Node.js</span> <br />
                            We have to do this, don’t we?

                            Make a file app.js and add the following to it.

                            console.log("Hello World!");
                            Open your node terminal, change the directory to the folder where the file is saved and run node app.js.
                            <br />

                        </p>
                    </div>

                </div>
            </div>
        

    );
};

export default Blog;