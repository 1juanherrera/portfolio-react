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
          FaInstagram, 
          FaLinkedin,
          FaPython
        } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import work1 from "./assets/pokedex.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaInstagram />,
  <FaLinkedin />,
  <FaGithub />
]

export const bios = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+573153261932"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "juanherrera04502@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaPython />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const workNavs = [
  "All", "Web", "App", "Design"
]

const pokemon = 'https://pokedex-jhs.netlify.app/#/'
const pokemonGithub = 'https://github.com/1juanherrera/pokedex'

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
    category: "web"
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