import React from 'react';
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [8.3,11.7]
};
const Test = () => {
    return (

        <div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options}  scale={.8}>
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div style={{ width: 1000, height: 700, background: 'blue' }} ref={ref}>
                <p>ning HTML, and this course is all you’ll need.  I’ll start out teaching you basic HTML. You’ll learn:  – Intro and Sublime Text Editor  – What Is HTML  – HTML Page Structure  – Header Tags  – Paragraph Tags and Line Breaks  – PRE Tags  – Blockquote Tags  – Links in HTML  – Images in HTML  – HTML Lists (Ordered and Unordered)  – HTML Tables  – Advanced Tables  – Using CSS With HTML  Once we have the basics of HTML out of the way, we’ll learn about the Bootstrap CSS Framework:  – Intro To Bootstrap CSS Framework  – Installing Bootstrap  – Bootstrap Tables  – Bootstrap Navbars  – Bootstrap Cards  – Bootstrap Jumbotron  Bootstrap is one of the most popular CSS frameworks, millions of websites use it. It’s completely free and easy to use once you learn a few tricks of the trade!  Putting these two sections together will give you the skills you need to build just about any type of website you like.  Sign up today and let’s learn some HTML!" ,
                    "img":"https://s3.us-east-2.amazonaws.com/upskill-school/html.svg",</p>

            </div>
        </div>
    );
};

export default Test;