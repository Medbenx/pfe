"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/world-cup-styles.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WorldCup2030() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.log(e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (heroVideoRef.current)
      heroVideoRef.current.play().catch((e) => console.log(e));
    // Section animations
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    // Text container animations
    textContainersRef.current.forEach((container, index) => {
      if (!container) return;

      gsap.from(container, {
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="wc-container">
      {/* Hidden audio element */}
      <audio ref={audioRef} loop src="/audio/hero-music.mp3" />
      {/* Hero Section */}
      <section className="wc-hero">
        <video
          ref={heroVideoRef}
          className="wc-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/world-cup-hero.mp4" type="video/mp4" />
        </video>

        <div className="wc-hero-content">
          <h1 className="wc-hero-title">
            <span>FIFA World Cup</span>
            <span>2030</span>
          </h1>
          <p className="wc-hero-subtitle">Maroc • Espagne • Portugal</p>

          {/* Audio Player Container */}
          <div className="wc-audio-player">
            <button
              className="wc-audio-control"
              onClick={toggleAudio}
              aria-label={
                isPlaying ? "Pause background music" : "Play background music"
              }
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <span className="wc-audio-label">Play Background Music</span>
          </div>

          <div className="wc-scroll-indicator">
            <span>Scroll Down</span>
            <div className="wc-scroll-arrow"></div>
          </div>
        </div>
      </section>
      {/* Football Land Section */}
      <section
        className="wc-section wc-section-football-land"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="wc-section-media">
          <Image
            width={800}
            height={600}
            src="/images/football-land.jpg"
            alt="Football Land"
            className="wc-section-image"
          />
        </div>
        <div className="wc-section-content">
          <h2 className="wc-section-title">Terre de Football</h2>
          <div
            className="wc-section-text scrollable-content"
            ref={(el) => (textContainersRef.current[0] = el)}
          >
            <p>
              Les Lions de l'Atlas ont fait vibrer la planète football lors de
              la Coupe du monde 2022 au Qatar. Leur exploit historique a fait
              rêver les Marocains et les a uni autour de valeurs communes de
              partage, de joie et de passion.
            </p>
            <p>
              Entre le Maroc et le ballon rond, une histoire d'amour et de
              défis. Une histoire qui nous rappelle que rien n'est impossible :
              "We dream big".
            </p>
            <p>
              Le Maroc, Terre de Lumière, a toujours brillé dans les grandes
              manifestations sportives mondiales. Grâce à la vision de Sa
              Majesté le Roi Mohammed VI, les efforts de la Fédération Royale
              Marocaine de Football, et la passion du peuple, le football
              marocain a toujours réservé aux aficionados du ballon rond des
              moments de pur bonheur.
            </p>
          </div>
        </div>
      </section>
      {/* Land of Exploits Section */}
      <section
        className="wc-section wc-section-land-exploits"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="wc-section-content">
          <h2 className="wc-section-title">Terre d'Exploits</h2>
          <div
            className="wc-section-text scrollable-content"
            ref={(el) => (textContainersRef.current[1] = el)}
          >
            <p>
              Le Maroc a brillé de mille lumières. Des milliards de vues, de
              likes, de partages sur le monde virtuel, et 35 millions de
              Marocains dans la rue, en liesse, criant de joie, de Tanger à
              Lagouira.
            </p>
            <p>
              L'exploit héroïque des Lions de l'Atlas lors de la Coupe du monde
              2022 au Qatar a résonné dans tout le Maroc et à l'international :
              terre de lumière, d'expériences et de magie.
            </p>
            <p>
              De Marrakech, "entre Atlas et Jardins secrets" et 7ème meilleure
              ville à visiter au monde en 2022 selon le Time Out Index, en
              passant par « La perle bleue du nord », Chefchaouen, tout en
              déambulant dans les méandres des ruelles de la médina de Fès, «
              douze siècles d'histoire et d'artisanat ».
            </p>
          </div>
        </div>
        <div className="wc-section-media">
          <Image
            width={800}
            height={600}
            src="/images/land-exploits.jpg"
            alt="Land of Exploits"
            className="wc-section-image"
          />
        </div>
      </section>
      {/* Football People Section */}
      <section
        className="wc-section wc-section-football-people"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="wc-section-media">
          <Image
            src="/images/football-people.jpg"
            alt="Football People"
            className="wc-section-image"
            width={800}
            height={600}
          />
        </div>
        <div className="wc-section-content">
          <h2 className="wc-section-title">Peuple de Football</h2>
          <div
            className="wc-section-text scrollable-content"
            ref={(el) => (textContainersRef.current[2] = el)}
          >
            <p>
              Grâce à la Coupe du monde 2022 au Qatar, le monde a découvert un
              peuple passionné de football. Des milliers de supporters marocains
              se sont déplacés pour encourager de tout cœur leur équipe
              nationale.
            </p>
            <p>
              Peuple de football : jeunes, seniors, femmes et enfants, tous
              partagent un amour inconditionnel pour le ballon rond. Le derby
              casablancais opposant le WAC au Raja, les deux plus grands clubs
              de football au Maroc en un parfait exemple.
            </p>
            <p>
              L'accueil chaleureux réservé par Sa Majesté le Roi Mohammed VI et
              par le peuple aux Héros de la Nation qui ont fait honneur au
              drapeau marocain, traduit cette communion autour de valeurs
              communes de passion, de famille, d'amour et de fierté.
            </p>
          </div>
        </div>
      </section>
      {/* Infrastructure Section */}
      <section
        className="wc-section wc-section-infrastructure"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <div className="wc-section-content">
          <h2 className="wc-section-title">Infrastructure</h2>
          <div
            className="wc-section-text scrollable-content"
            ref={(el) => (textContainersRef.current[3] = el)}
          >
            <p>
              Les exploits de la sélection nationale ne sont pas le fruit du
              hasard. Sous l'égide de Sa Majesté Le Roi Mohammed VI, le Maroc a
              réalisé une véritable montée en puissance de ses infrastructures
              sportives.
            </p>
            <p>
              L'Académie Mohammed VI de Football, inaugurée par le Souverain en
              2010 est l'une des principales composantes de cette vision Royale.
              Doté d'installations de classe mondiale, l'Académie couvre une
              superficie de 18 hectares.
            </p>
            <p>
              Elle s'ajoute à d'autres chantiers royaux comme les Grands Stades
              de Marrakech, Fès, Tanger, Agadir et Rabat. Des stades dignes des
              plus grandes infrastructures du domaine et dotés des dernières
              technologies.
            </p>
          </div>
        </div>
        <div className="wc-section-media">
          <Image
            src="/images/infrastructure.jpg"
            alt="Football Infrastructure"
            className="wc-section-image"
            width={800}
            height={600}
          />
        </div>
      </section>
      {/* Calendar Section */}
      <section
        className="wc-section wc-section-calendar"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <div className="wc-section-media">
          <Image
            src="/images/world-cup-calendar.jpg"
            alt="World Cup Calendar"
            className="wc-section-image"
            width={800}
            height={600}
          />
        </div>
        <div className="wc-section-content">
          <h2 className="wc-section-title">Calendrier</h2>
          <div
            className="wc-section-text scrollable-content"
            ref={(el) => (textContainersRef.current[4] = el)}
          >
            <p>
              Après avoir obtenu l'organisation de la Coupe d'Afrique des
              Nations 2025, le Maroc s'érige désormais en acteur majeur sur la
              scène footballistique mondiale.
            </p>
            <p>
              Sa candidature conjointe avec l'Espagne et le Portugal a été
              retenue par la FIFA pour l'organisation de la coupe du monde 2030.
              Les fédérations de Football du Maroc, de l'Espagne et du Portugal
              ont exprimé leur intention de livrer un tournoi qui "renforce
              l'héritage de la Coupe du monde de la FIFA".
            </p>
            <p>
              En addition à l'obtention de l'organisation de la Coupe du Monde
              des clubs 2023, qui fut un succès majeur en terme d'organisation
              et de passion footbalistique.
            </p>
          </div>
        </div>
      </section>
      {/* Training Section */}
      <section
        className="wc-section wc-section-training"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <div className="wc-section-content">
          <h2 className="wc-section-title">Formation</h2>
          <div
            className="wc-section-text scrollable-content"
            ref={(el) => (textContainersRef.current[5] = el)}
          >
            <p>
              Il ne peut y avoir de développement sans l'humain et sans une
              montée en compétences. Le Maroc l'a bien compris. Depuis son
              accession au trône en 1999, le Roi Mohammed VI a accordé une place
              très particulière au développement humain.
            </p>
            <p>
              Le Maroc est considéré comme un hub africain et une pépinière de
              talents, non seulement grâce à ses installations sportives de
              classe mondiale, comme l'Académie Mohammed VI de Football, la clé
              du succès de la sélection marocaine au Mondial Qatar-2022.
            </p>
            <p>
              Le système Sport-Etudes de l'Académie Mohammed VI de Football a
              permis à plusieurs stars de voir le jour à l'image de Youssef
              En-Nesyri, Hakim Ziyech, Achraf Hakimi et bien d'autres.
            </p>
          </div>
        </div>
        <div className="wc-section-media">
          <Image
            src="/images/training-academy.jpg"
            alt="Training Academy"
            className="wc-section-image"
            width={800}
            height={600}
          />
        </div>
      </section>
      {/* // Add this section right after your hero section in the WorldCup2030 component */}
      <section className="wc-banner">
        <div className="wc-banner-content">
          <h2 className="wc-banner-title"></h2>
          <p className="wc-banner-subtitle"></p>
        </div>
      </section>
    </div>
  );
}
