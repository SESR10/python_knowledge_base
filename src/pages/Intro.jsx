import React from 'react';

const Intro = () => {
  return (
    <section id="intro" className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Introducción al Curso de Python</h1>
      <p className="mb-6 text-gray-700">
        ¡Bienvenidos al curso de Python! Este curso está diseñado para proporcionar una base sólida en programación utilizando Python, uno de los lenguajes de programación más populares y versátiles de la actualidad.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-blue-600">Objetivos del Curso</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Entender los conceptos básicos de la programación y la sintaxis de Python.</li>
        <li>Desarrollar habilidades para resolver problemas mediante la programación.</li>
        <li>Aprender a trabajar con estructuras de datos y algoritmos.</li>
        <li>Introducir la programación orientada a objetos y sus aplicaciones en Python.</li>
        <li>Familiarizarse con módulos y paquetes para ampliar las capacidades de Python.</li>
        <li>Explorar temas avanzados y aplicaciones prácticas del lenguaje.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3 text-blue-600">Recursos Útiles</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><a href="https://docs.python.org/3/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Documentación Oficial de Python</a></li>
        <li><a href="https://www.w3schools.com/python/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Tutorial de Python en W3Schools</a></li>
        <li><a href="https://realpython.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Real Python</a></li>
        <li><a href="https://www.learnpython.org/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Learn Python</a></li>
      </ul>
      <p className="text-gray-700">
        ¡Esperamos que disfrutes del curso y que al finalizar tengas una comprensión profunda de Python y sus aplicaciones!
      </p>
    </section>
  );
};

export default Intro;
