import './Rocket.css';
import React from 'react';
import hub from '../assets/hub-rise.png';
import musee from '../assets/virtual-museum.png';
import miroir from '../assets/miroir.jpeg';
import robot from '../assets/robots.jpeg';
import Incubateur from '../assets/incubateur.png';
import Open from '../assets/open.png';

const Rocket = () => {
  return (
    <div className="App">
        <h1>Bienvenue à  Futur Studio</h1>
      {/* <div className='meilleurs-res'>
        <div className='title'>
          <h1>Les 3 meilleurs Realisations de Futur Studio</h1>
        </div>
        <div className='h1-pos'>
          <h1>HUB</h1>
        </div>
        <div className='img2'>
          <img src={hub} alt="img" />
        </div>
        <div>
          <p>1- Le musée virtuel du FCFA est un musée réalisé avec la technologie immersive (VR) retraçant l’histoire
            des différents billets constituant la monnaie de FCFA.</p>
          <div className='img3'>
            <img src={musee} alt="img" />
          </div>
        </div>
        <div className='res2'>
          <p>2- Le Miroir Magique (Iot) est un miroir intelligent qui a pour vocation de fournir diverses
            informations (date, actualités, la température,) avec lequel on peut discuter également.</p>
          <div className='img4'>
            <img src={miroir} alt="img" />
          </div>
        </div>
        <div className='res3'>
          <p>3- Le bras robotique est un bras électronique doté de 6 servomoteurs qui servent d'articulations pour lui
            permettre de se mouvoir.
            Chacune des articulations dont une paire de pinces est reliée à un
            potentiomètre et permet de les contrôler. La communication des différents éléments du bras repose
            sur une carte Arduino. Ce bras est léger et pratique pour soulever de petites charges manuellement
            ou automatiquement.</p>
          <div className='img5'>
            <img src={robot} alt="img" />
          </div>
        </div>
      </div>
      <div className='offre'>
        <div className='title2'>
          <h1> Programmes et Offres du Futur Studio</h1>
        </div>
        <div className='of-pos'>
          <h1>HUB</h1>
        </div>
        <div className='img6'>
          <img src={hub} alt="img" />
        </div>
        <div className='obj'>
          <h1 className='h1-obj'>Objectif</h1>
          <p> Un hub d'innovation qui rassemble les étudiants et les entreprises pour stimuler la créativité, la
            collaboration dans un espace dédié au prototypage et au développement de projets innovants.</p>
        </div>
        <div className='cible'>
          <h1 className='h1-cible'>Cibles</h1>
          <p>
            • Étudiants d’EPITECH Bénin, tout programme confondu. (Bachelor, MSc pro, et Coding Academy)
            • Alumnis d’EPITECH
            • Experts tech</p>
        </div>
        <div className='programme'>
          <h1 className='h1-pro'>Programmes</h1>
          <p>
            Le Track Innovation et Entrepreneuriat vise à sensibiliser et inspirer les étudiants d’EPITECH en les familiarisant
            aux défis technologiques et sociétaux de notre contexte local.
            La préincubation a pour objectif de soutenir les étudiants entrepreneurs en les aidant à prototyper leurs idées
            novatrices. L’idée est de les préparer efficacement à la phase d'incubation en les dotant des compétences, de la
            méthodologie et du réseau nécessaires pour réussir leur aventure entrepreneuriale.</p>
        </div>
        <div className='of-pos1'>
          <h1>Open Innovation</h1>
        </div>
        <div className='img7'>
          <img src={Open} alt="img" />
        </div>
        <div className='obj1'>
          <h1 className='h1-obj1'>Objectif</h1>
          <p> Le programme d'Open Innovation d'EPITECH favorise la collaboration entre étudiants, chercheurs et
            partenaires au sein des clusters ainsi que des spots pour résoudre des défis innovants.
            Notre objectif est d'accélérer le développement de solutions créatives et d'ouvrir de nouvelles opportunités
            d'innovation pour un impact positif dans notre écosystème.</p>
        </div>
        <div className='cible1'>
          <h1 className='h1-cible1'>Cibles</h1>
          <p>
            • Partenaire EPITECH
            • Etudiants et alumnis
            • Communauté Futur Studio
            • Start-Up</p>
        </div>
        <div className='programme1'>
          <h1 className='h1-pro1'>Programmes</h1>
          <p>
            I- Les Clusters d’innovation visent à catalyser la R&D dans des domaines spécifiques en rassemblant
            des experts et des étudiants autour de thématiques clés comme l’IA/DATA, les expériences
            immersives, la cybersécurité et maker. Chaque cluster est dirigé par un expert du secteur et
            étudiant.
            II- Développement de spot d’innovation ( R&D ) financé par les partenaires à travers les clusters
            d’innovation. ( ex : Spot Bouygues )</p>
        </div>
        <div className='of-pos2'>
          <h1>Incubateur</h1>
        </div>
        <div className='img8'>
          <img src={Incubateur} alt="img" />
        </div>
        <div className='obj2'>
          <h1 className='h1-obj2'>Objectif</h1>
          <p> La SAEI du groupe African Education & Innovation Group ( *AEIG ), START a pour but d’aider les étudiants à
            transformer leurs idées innovantes en entreprises prospères, en fournissant un espace de travail et un
            mentorat personnalisé.
            *AEIG est le groupe ayant la franchise d’EPITECH en Afrique de l’Ouest et du centre de formation Digital Valley.
            La vision du groupe est d’être le hub de compétences du numérique en Afrique francophone d’ici 2030.</p>
        </div>
        <div className='cible2'>
          <h1 className='h1-cible2'>Cibles</h1>
          <p>
            • Étudiants entrepreneurs, tous programmes confondus
            • Étudiants des écoles partenaires
            • Alumnis
            • Porteurs de projets</p>
        </div>
        <div className='programme2'>
          <h1 className='h1-pro2'>Programmes</h1>
          <p>
            Le programme d’incubation START de 6 à 8 mois cocréé avec un partenaire technique vise à
            accompagner les étudiants entrepreneurs depuis la phase de prototypage jusqu'à l'acquisition des
            premiers clients. Notre objectif ultime est de guider ces startups à fort potentiel vers la maturité
            nécessaire pour attirer des financements externes.
            Un programme d’échange entre notre incubateur et les accélérateurs et studio partenaire. (FJN CI,RW)
            Un programme de renforcement des capacités aux entrepreneurs numériques. (Digital Power)</p>
        </div>
      </div> */}
    </div>
  );
};

export default Rocket;
