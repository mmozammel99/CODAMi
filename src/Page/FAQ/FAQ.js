import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const FAQ = () => {
    const { dark } = useContext(AuthContext);
    return (
        <>
            <section className={`${dark ? "bg-neutral-focus" : "bg-base-200"} ${dark ? "text-base-200" : "text-neutral-focus"}`}>
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 h-screen">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is CODAMi?</summary>
                            <div className="px-4 pb-4">
                                <p>CODAMi is a training website for programming and web development.
                                    You'll learn by watching premium quality training videos on skills needed for a career in programming. Our videos are streamed in high definition directly on this site. You'll also be provided with exercises and solutions for algorithms and coding challenges. Also included are lessons on how to find the best jobs, interviewing practice and more. When you create a Free account, you get access to over 200 lessons automatically, forever. If you ever decide to upgrade to a Pro account, you'll unlock the entire website, giving you access to hundreds of hours of content and more being added all the time!</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What makes CODAMi unique?</summary>
                            <div className="px-4 pb-4">
                                <p>Breadth and depth with surprisingly simple explanations.
                                    Over 70,000 students almost unanimously agree that our teaching style is what sets us apart. Our core strength is in explaining complex concepts using simple, easy-to-understand language. As you'll see with our courses, everything is explained so simply, a child can understand it. There's a popular saying: "If you can't explain it simply, you don't understand it well enough."
                                    And, we don't just teach you programming, we teach you how to think like an engineer. We also teach you how the computer "thinks" by covering details about the "engine" or interpreter that makes your code work. You'll learn, at the atomic level, how exactly the code you write with your bare hands gets your computer hardware to carry out any task you ask of it.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Why learn web development?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Low barrier to entry, rewarding work, high demand, high salaries, good entry point to a career in technology.
                                    If you were around before the Internet went mainstream in the mid 90's, it's easy to appreciate its impact on human life (or how different life was before it). It's been called the great equalizer (Sundar Pichai, CEO of Google) or described as a central nervous system for the planet (Elon Musk), where any individual anywhere in the world has instant access to virtually all of the world's information and knowledge.
                                    Web developers are the programmers who build the applications of the World Wide Web - which continues to grow rapidly. That said, over half the planet's population still does not have regular internet access, and that gap is closing fast. Imagine the growth to be seen over the next few decades. Needless to say, web developers are in high demand.
                                    Furthermore, it's a great stepping stone into other arenas of programming like iOS/Android development, artificial intelligence/machine learning, video games, etc.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What's with all the jargon in this industry?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>It has its pros and cons. Our mantra is to explain everything simply and clearly.
                                    At the time of this writing, the opening lines of the Wikipedia article for JavaScript say: JavaScript...is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. That means absolutely nothing to a newcomer. Jargon is useful for experts speaking with experts, but completely meaningless (and often frustrating) for students. As the great Richard Feynman put it, many things are poorly named and names often have no meaning in and of themselves.
                                    Part of what makes CODAMi so unique is that we don't use jargon in our lessons. We explain things in simple language so that even a child can understand. That's not an excuse for lacking rigor or depth - quite the contrary, our lessons go into great depth and detail - but you get to enjoy learning as if a friend was walking you through the concepts...not a boring lecture full of meaningless jargon.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What skills will I learn from these courses?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Web development, computer science, software engineering, how to think like an engineer.
                                    You're going to learn a massive set of skills from our course library. We often tell students: when you're looking for a new job or making a career change, try looking through a bunch of job listings in the category you're interested in. You'll start to get a sense of exactly which skills companies are hiring for and how much they're paying. In the world of web development, you'll see many acronyms like HTML, CSS, SQL, etc. You'll quickly notice that JavaScript pops up over and over! In fact, JavaScript is often cited as the most popular programming language in the world.
                                    That said, these skills transfer to other languages - in fact being a successful programmer is less about any particular language and more about the how to think like a programmer and solve any software problem.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;