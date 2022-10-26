import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>1.What is Python Program?</Accordion.Header>
                <Accordion.Body>
                Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>2. Why is it called Python?</Accordion.Header>
                <Accordion.Body>
                Guido van Rossum wanted to give his programming language a name that was unique, mysterious and short, and what better than naming it Python after Monty Python's Flying Circus.

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>3.What type of language is Python?</Accordion.Header>
                <Accordion.Body>
                Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. It supports multiple programming paradigms beyond object-oriented programming, such as procedural and functional programming.

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>4.What is Python with example?</Accordion.Header>
                <Accordion.Body>
                What is Python? Python is a very popular general-purpose interpreted, interactive, object-oriented, and high-level programming language. Python is dynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990.
                
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>5.What are advantages of Python?</Accordion.Header>
                <Accordion.Body>
                Python has a wide selection of libraries and frameworks, which is one of the greatest advantages of Python. From NumPy to TensorFlow Python Library is used for everything from data visualization, machine learning, data science, natural language processing, and complex data analysis.


                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>6.Which software is used for Python ?</Accordion.Header>
                <Accordion.Body>
                PyCharm, a proprietary and Open Source IDE for Python development. PyScripter, Free and open-source software Python IDE for Microsoft Windows. PythonAnywhere, an online IDE and Web hosting service. Python Tools for Visual Studio, Free and open-source plug-in for Visual Studio.


                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>7.Which is better Python or C?</Accordion.Header>
                <Accordion.Body>
                C is a faster language compared to Python as it is compiled. Python programs are usually slower than C programs as they are interpreted. In C, the type of the various variables must be declared when they are created, and only values of those particular types must be assigned to them.

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
};

export default FAQ;