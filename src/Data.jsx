import {  FaHtml5, 
          FaCss3, 
          FaNodeJs, 
          FaReact, 
          FaSass, 
          FaFigma, 
          FaPhoneAlt, 
          FaMapMarkerAlt, 
          FaPaperPlane, 
          FaGithub,  
          FaLinkedin,
          FaPython
        } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import work1 from "./assets/pokedex.png";
import work2 from "./assets/e-commerce.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["inicio", "acerca de", "habilidades", "portafolio", "contacto"]

const github = 'https://github.com/1juanherrera'
const linkdIn = 'https://www.linkedin.com/in/juanherreramu%C3%B1oz/'

export const socialIcons = [
  {
    icon: <FaGithub />,
    url: github
  },
  {
    icon: <FaLinkedin />,
    url: linkdIn
  }
]

export const bios = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    key: "Telefono",
    value: "+573153261932"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Correo",
    value: "juanherrera04502@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaPython />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]


const pokemon = 'https://pokedex-jhs.netlify.app/#/'
const pokemonGithub = 'https://github.com/1juanherrera/pokedex'

const ecommerce = 'https://e-commerce-jh.netlify.app/#/'
const ecommerceGithub = 'https://github.com/1juanherrera/e-commerce-react'

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Pokedex",
    visit: pokemon,
    gitHub: pokemonGithub
  },
  {
    id: 2,
    img: work2,
    name: "E-commerce",
    visit: ecommerce,
    gitHub: ecommerceGithub
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Barranquilla , Colombia"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "juanherrera04502@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+57 3153261932"
  }
]