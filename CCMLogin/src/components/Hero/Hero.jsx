import { useState } from 'react';
import './Hero.css';

const topics = [
  {
    id: '01',
    title: 'Inovações na área de usinagem',
    description:
      'Tecnologias e soluções que estão transformando os processos industriais, trazendo mais eficiência, precisão e rapidez.',

    smallVideo:
     
'/videos/14132388-uhd_4096_2160_25fps.mp4',
    mainVideo:
           '/videos/19791092-uhd_3840_2160_60fps.mp4',
      
  },

  {
    id: '02',
    title: 'Um novo Software mecanico',
    description:
      'Uma nova ferramenta que pode entrar para a industria ao lado de autocad e ares.',

    smallVideo:
        '/videos/13053695_3840_2160_50fps.mp4',
      

    mainVideo:
      
      '/videos/4941469-hd_1920_1080_25fps.mp4',
  },

  {
    id: '03',
    title: 'Inovações na area da industria',
    description:
      'O mercado de trabalho busca por novas ideias e pela fome inovações',

    smallVideo:
      '/videos/13053701_3840_2160_50fps.mp4',
 
    mainVideo:
      
      '/videos/13218478_3840_2160_60fps.mp4',
  },
];

export default function Hero() {
  const [activeTopic, setActiveTopic] = useState(0);

  const currentTopic = topics[activeTopic];

  return (
    <section className="hero">

      {/* =================================================
          FUNDO
      ================================================= */}

      <div className="hero-background"></div>


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="hero-header">

        <div className="hero-logo">
          <img
            src="/logos/logo-ccm.png"
            alt="Logo CCM"
          />
        </div>

        <nav className="hero-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Colaboradores</a>
          <a href="#inovacoes">Inovações</a>
          <a href="#contato">Contato</a>
        </nav>

      </header>


      {/* =================================================
          CONTEÚDO PRINCIPAL
      ================================================= */}

      <div className="hero-content">


        {/* =================================================
            PAINEL ESQUERDO
        ================================================= */}

        <div className="hero-panel">

          <span className="hero-label">
            CCM • TCC
          </span>

          <h1>
            Tecnologia
            <br />
            <span>Industrial</span>
          </h1>

          <p className="hero-intro">
            Conheça tecnologias e processos que fazem
            parte da evolução da indústria.
          </p>


          {/* =================================================
              TÓPICOS
          ================================================= */}

          <div className="hero-topics">

            {topics.map((topic, index) => {

              const isActive = activeTopic === index;

              return (
                <div
                  className={`topic-block ${
                    isActive ? 'active' : ''
                  }`}
                  key={topic.id}
                >

                  {/* TÓPICO */}

                  <button
                    className="hero-topic"
                    onClick={() => setActiveTopic(index)}
                  >

                    <span className="topic-number">
                      {topic.id}
                    </span>

                    <span className="topic-title">
                      {topic.title}
                    </span>

                    <span className="topic-arrow">
                      →
                    </span>

                  </button>


                  {/* =================================================
                      CONTEÚDO DO TÓPICO ATIVO
                  ================================================= */}

                  {isActive && (

                    <div
                      className="topic-expanded"
                      key={topic.id}
                    >

                      <p>
                        {topic.description}
                      </p>

                      <div className="small-video-wrapper">

                        <video
                          key={topic.smallVideo}
                          className="small-video"
                          src={topic.smallVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />

                        <div className="small-video-overlay"></div>

                        <span className="small-video-label">
                          CCM EXPERIENCE
                        </span>

                      </div>

                    </div>

                  )}

                </div>
              );
            })}

          </div>


          {/* =================================================
              BOTÃO COMECE AQUI
          ================================================= */}

          <button
            className="start-button"
            onClick={() => {
              console.log('Abrir página de login');
            }}
          >

            <span>
              COMECE AQUI
            </span>

            <span className="start-arrow">
              →
            </span>

          </button>

        </div>


        {/* =================================================
            VÍDEO PRINCIPAL
        ================================================= */}

        <div className="hero-media">

          <video
            key={currentTopic.mainVideo}
            className="hero-video"
            src={currentTopic.mainVideo}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="video-overlay"></div>


          {/* Número */}

          <div className="main-video-number">
            {currentTopic.id}
          </div>


          {/* Informações */}

          <div
            className="main-video-info"
            key={`info-${currentTopic.id}`}
          >

            <span>
              EXPERIÊNCIA INDUSTRIAL DA CCM
            </span>

            <h2>
              {currentTopic.title}
            </h2>

          </div>


          {/* Status */}

          <div className="video-status">

            <span className="status-dot"></span>

            <span>
              CCM INDUSTRIAL
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}