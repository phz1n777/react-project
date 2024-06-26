import '/src/style.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '/src/images/fantastic-seascape-with-ripples.jpg';
import image2 from '/src/images/vast-ocean-background-providing-serene-blue-canvas.jpg';
import image3 from '/src/images/view-wavy-ocean-sea-water.jpg';



function Home() {
  const images = [image1, image2, image3];


  let currentImageIndex = 0;

  function updateBackground() {
    const section = document.querySelector('.slider-background');
    section.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  setInterval(updateBackground, 5000);

  function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
  }

  return (
    <div className='background-div-home'>
      <nav>
        <div className="nav-div">
          <div className="Titulo-Nav">Tech do Bem</div>
          <div className="menu-nav" id="nav-menu">
            <button id="btn-menu" onClick={toggleMenu}>Menu
              <span id="hamburguer" />
            </button>
            <ul>
              <li><a><Link to="/">Home</Link></a></li>
              <li><a><Link to="/Dashboard">Painel</Link></a></li>
              <li><a><Link to="/contato">Contato</Link></a></li>
              <li><a><Link to="/Login">Login</Link></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <section className="slider-background">
          <div>
            <div className="titulo-pagina">
              <h1>Seja bem-vindo a Tech do Bem</h1>
            </div>
          </div></section>
        <hr />
        <div className="quem-somos-titulo">
          <h2>Nosso produto</h2>
        </div>
        <div className="container-1">
          <div className="responsive-square">
            <h1 id="title-solucao"><span id="span-space">•</span>Solução</h1>
          </div>
          <div className="text-content">
            <p>Nosso produto é um sistema integrado de monitoramento ambiental que utiliza sensores acoplados às embarcações marinhas, um site e um aplicativo móvel para coletar, analisar e visualizar dados sobre a saúde dos oceanos.</p>
          </div>
        </div>
        <div className="container-2">
          <div className="text-content">
            <p>O objetivo é informar e alertar com fatos concretos,  os que trabalham no mar, as populações costeiras, empresas e formuladores de políticas sobre a qualidade da água e a poluição marinha, buscando a conscientização e promoção de ações sustentáveis para a proteção dos ecossistemas marinhos.
            </p>
          </div>
          <div className="responsive-square2">
            <h1 id="title-container2">Objetivo<span id="span-space">•</span></h1>
          </div>
        </div>
        <div className='box-how-work'>
          <div className='how-work-text'>
            <h2>Como funciona</h2>
            <div className='how-work-p'>
              <p>Separamos um video para mostrar a vocês como nosso dispositivo funciona.</p>
            </div>
            
          </div>
          <div className='how-work-video'>
            <iframe width="600" height="315" src="https://www.youtube.com/embed/7NKR1wELy1M?si=Ol7qRRInDnYDStd9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <p>© 2024 Tech do Bem. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Home;
