import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hola Jefe, estoy muy feliz de que estes aqui! (:",

    "Mi nombre es Kibria, Ali Askor, tengo 19 años y soy un estudiante de factoría F5 y Fundación Tomillo. Actualmente estoy haciendo un bootcamp con ellos. Tengo una gran pasión por las tecnologías relacionadas con la construcción de bases de datos y aplicaciones dinámicas.",

    "Fuera de mis actividades regulares, me gusta escuchar música cada vez que tengo algo de tiempo libre. También me gusta manejar, ver películas etc.",

    "Siempre me emociona colaborar con personas y equipos que comparten mi entusiasmo por crear experiencias extraordinarias. ¡Agradezco profundamente tu visita a mi portafolio!",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'meta',
    title: 'Meta',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Rediseño y maquetación de página Web",
    description: 'Nuestro cliente le pidió a una agencia de diseño web un prototipo del sitio web de su restaurante, pero la agencia contratada ya no pudo continuar con el proceso.  ​  Nos comparte el archivo editable del prototipo en Figma y nos dice que si vemos alguna mejora en referencia a la experiencia de usuario podemos aplicarla.  ​  Además quiere que se haga la maquetación con HTML y CSS de ese prototipo.',
    image: "https://simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fjpg%2Frestaurantes-marketing-6409add20dc02709595156.jpg&w=427&q=75",
    source_code_link: 'https://github.com/askor222/MiPrimeraPaginaWeb.git',
    demo_link: 'https://eloquent-bublanina-dec510.netlify.app/',
  },
  {
    name: 'Consumo de una API',
    description: 'El cliente nos está requiriendo crear una página para reflejar la información almacenada en una API',
    image: "https://simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2Fapi-644479e2c2755248421919.png&w=1280&q=75",
    source_code_link: 'https://github.com/askor222/Consumo-de-una-API.git',
    demo_link: 'https://aesthetic-souffle-9e666f.netlify.app/',
  },
  {
    name: 'Creación de un E-commerce',
    description: 'Trabajo en equipo Un negocio comercial necesita un e-commerce donde poder ofrecer sus productos y/o servicios. Ha encargado a tu equipo de trabajo una primera versión para su sitio web completo, incluyendo carrito de compras.',
    image: "https://simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2Fcaptura-de-pantalla-2023-04-03-a-la-s-14-59-24-642acdb24763c023435274.png&w=1280&q=75",
    source_code_link: 'https://github.com/askor222/ecomerce-equipo2.git',
    demo_link: 'https://dapper-starlight-132cc7.netlify.app/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'Tengo un sólido dominio de HTML para organizar páginas web y generar contenido significativo que pueda ser accesible para todos los usuarios.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'Tengo experiencia en el uso de CSS para diseñar páginas web y crear diseños visualmente cautivadores que mejoran la experiencia general del usuario',  
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'Tengo una gran experiencia en el uso de JavaScript para introducir interactividad y funcionalidad en las páginas web, lo que da como resultado interfaces de usuario dinámicas.',  
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
    'Estoy bien versado en React, soy competente en la creación de componentes reutilizables y en la gestión del estado de la aplicación mediante ganchos y contexto.',  
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    "En mis habilidades de Figma, desato la creatividad, diseño interfaces de usuario cautivadoras y colaboro sin problemas con diseñadores y desarrolladores.", 
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'Soy competente en Git, administro cambios de código, colaboro con otros y resuelvo conflictos de manera efectiva.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
    'Soy experto en el uso de GitHub para una colaboración perfecta en proyectos, uso compartido de códigos y seguimiento de problemas. A través de GitHub, creo y administro repositorios de manera eficiente y presento mi trabajo de manera efectiva a posibles empleadores.',
    },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
    'Cuando se trata de crear aplicaciones web, prefiero usar Node como mi entorno de tiempo de ejecución en lugar de Yarn. Tengo experiencia en aprovechar Node.js para desarrollar aplicaciones web potentes y escalables.',
    },
  {
    id: 'symfony',
    title: 'Symfony',
    icon: "https://w7.pngwing.com/pngs/266/959/png-transparent-symfony-logos-brands-icon.png",
    description:
      'He hecho varios proyectos con symfony en el bootcamp, en equipo e individualmente',
  },
  {
    id: 'a-frame',
    title: 'A-Frame',
    icon: "https://cdn-ak.f.st-hatena.com/images/fotolife/k/kimizuka/20201130/20201130222254.jpg",
    description:
      'He hecho algunos proyectos de A-Frame haciendo un entorno totalmene sumergible con gafas de 369º',
  },
  {
    id: 'php',
    title: 'PHP',
    icon: "https://www.php.net//images/logos/new-php-logo.svg",
    description:
      'He hecho varios proyectos en conjunto php y symfony lo que me dio un amplio conocimiento del lenguaje.',
  },
  {
    id: 'api-platform',
    title: 'API Platform',
    icon: "https://api-platform.com/images/logos/Logo_Circle%20webby%20blue%20light.svg",
    description:
      'He construdo varios apis desde cero en conjunto con api platform y symfony lo que me permitio contruir apis realmente potentes',
  },
  {
    id: 'wordpress',
    title: 'Wordpress',
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png",
    description:
      'He hecho un proyecto con wordpress lo que me permitio explorar este framework aprendiendo los fundamentos y lo básico de este framework tan famoso.',
  },
  {
    id: 'sass',
    title: 'Sass',
    icon: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
    description:
      'He hecho muchos proyectos con este libreria de css lo que me pertio agilizar mis proyectos.',
  },
  {
    id: 'boostrap',
    title: 'Boostrap',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    description:
      'He hecho muchisimos proyectos con este maravilloso libreria lo que me permitio hacer página dinamicas y adaptables.',
  },

];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
