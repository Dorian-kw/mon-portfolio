"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <main className="flex min-h-screen flex-col bg-white px-6 py-10 text-black md:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <div className="flex-1 space-y-12">
          <header className="pt-2">
            <nav className="flex items-center justify-center gap-8 text-sm font-normal md:text-base">
              <a className="hover:text-black/70" href="#accueil">
                Accueil
              </a>
              <a className="hover:text-black/70" href="#cv">
                CV
              </a>
              <a className="hover:text-black/70" href="#portfolio">
                Portfolio
              </a>
            </nav>
            <hr className="mt-4 w-full border-0 border-t border-gray-200" />
          </header>

          <section
            id="accueil"
            className="rounded-xl border border-black/10 p-6 md:p-8"
          >
            <div className="flex flex-col gap-10 md:flex-row md:items-start">
              <div className="flex-shrink-0">
                <img
                  src="/photo_dorian.jpg"
                  alt="Portrait de Dorian Kwizera"
                  className="h-40 w-40 rounded-full object-cover md:h-48 md:w-48"
                />
              </div>
              <div className="space-y-5">
                <h1 className="text-3xl font-bold md:text-4xl">Dorian Kwizera</h1>
                <p className="max-w-3xl text-sm text-black/80 md:text-base">
                  Je suis qualifié dans plusieurs domaines de l&apos;informatique.
                  Grâce à mes études, j&apos;ai acquis de solides connaissances, ce
                  qui me permet de m&apos;adapter rapidement à différents
                  environnements de travail. J&apos;aime travailler en équipe et
                  relever des défis, ce qui me motive à donner le meilleur de
                  moi-même.
                </p>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-center gap-3 text-black">
                    <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                    <a
                      href="https://github.com/Dorian-kw"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      github.com/Dorian-kw
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-black">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                    <span>dorian.kwizera@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3 text-black">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                    <span>+32 486 89 53 92</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        <section id="cv" className="space-y-4">
          <h2 className="text-2xl font-semibold">Mon CV</h2>
          <div className="rounded-xl bg-gray-50 p-8 md:p-12">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-sm text-black/80 md:text-base">
                Téléchargez mon CV en cliquant sur le bouton ci-dessous :
              </p>
              <a
                href="/CV_Dorian_Kwizera_.pdf"
                download
                className="mt-5 inline-block rounded-md bg-black px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-black/85"
              >
                TÉLÉCHARGER MON CV
              </a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="space-y-4">
          <h2 className="text-2xl font-semibold">Mon Portfolio</h2>
          <div className="overflow-x-auto rounded-xl border border-black/10">
            <table className="min-w-[76rem] w-full table-fixed divide-y divide-black/10">
              <colgroup>
                <col className="w-[13%]" />
                <col className="w-[10%]" />
                <col className="w-[49%]" />
                <col className="w-[8%]" />
                <col className="w-[20%]" />
              </colgroup>
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    ACTIVITÉS
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    TYPE
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    DESCRIPTION
                  </th>
                  <th className="px-4 pr-8 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    HEURES VALORISÉES
                  </th>
                  <th className="px-4 pl-8 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    IMAGE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 bg-white text-sm">
                <tr className="align-top">
                  <td className="px-4 py-4 font-medium leading-snug">
                    Sécurité Cloud &amp; Excel
                  </td>
                  <td className="px-4 py-4 leading-snug">Conférence</td>
                  <td className="px-4 py-4 text-sm leading-relaxed text-black/90">
                    J&apos;ai participé à une conférence animée par Kevin Keurvels
                    (Axentys) sur l&apos;infrastructure Cloud M365 et Azure.
                    J&apos;ai approfondi mes connaissances sur les vecteurs
                    d&apos;attaque liés à Excel (malwares) et les protocoles de
                    sécurisation des données en entreprise. Cette activité m&apos;a
                    permis de comprendre l&apos;importance des bonnes pratiques de
                    sécurité pour un usage professionnel.
                  </td>
                  <td className="px-4 pr-8 py-4 whitespace-nowrap leading-snug">
                    2h valorisées
                  </td>
                  <td className="px-4 pl-8 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: "/Preuve_participation_conference_cloud.jpg",
                          alt: "Preuve participation conférence cloud",
                        })
                      }
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      <img
                        src="/Preuve_participation_conference_cloud.jpg"
                        alt="Preuve participation conférence cloud"
                        className="h-16 w-24 rounded-md border border-black/10 object-cover"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 font-medium leading-snug">
                    Semaine Internationale
                  </td>
                  <td className="px-4 py-4 leading-snug">Expérience</td>
                  <td className="px-4 py-4 text-sm leading-relaxed text-black/90">
                    J&apos;ai développé, au sein d&apos;une équipe
                    internationale, une application mobile de reconnaissance
                    animale utilisant l&apos;API Google Lens. Mon application aide
                    les touristes et randonneurs à identifier des espèces
                    inconnues ou potentiellement dangereuses via une capture
                    photo ou une géolocalisation. Ce projet a renforcé ma
                    capacité à collaborer en milieu multiculturel tout en
                    répondant à des problématiques de conservation et de
                    sécurité.
                  </td>
                  <td className="px-4 pr-8 py-4 whitespace-nowrap leading-snug">
                    10h valorisées
                  </td>
                  <td className="px-4 pl-8 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: "/preuve_Semaine_international.png",
                          alt: "Preuve semaine internationale",
                        })
                      }
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      <img
                        src="/preuve_Semaine_international.png"
                        alt="Preuve semaine internationale"
                        className="h-16 w-24 rounded-md border border-black/10 object-cover"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 font-medium leading-snug">
                    Logiciel de ticketing Jira
                  </td>
                  <td className="px-4 py-4 leading-snug">
                    Formation Présentiel
                  </td>
                  <td className="px-4 py-4 text-sm leading-relaxed text-black/90">
                    J&apos;ai appris le fonctionnement intensif du logiciel Jira
                    dans le cadre de mon stage à l&apos;UCLouvain Saint-Louis
                    Bruxelles. J&apos;ai appris à gérer des flux de travail
                    (workflows), à créer et suivre des tickets d&apos;incidents et
                    à organiser des sprints de développement. Cette compétence
                    est cruciale pour ma future intégration dans des équipes de
                    développement utilisant les méthodes agiles.
                  </td>
                  <td className="px-4 pr-8 py-4 whitespace-nowrap leading-snug">
                    6h valorisées
                  </td>
                  <td className="px-4 pl-8 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: "/Preuve_participation_formation_jira.jpg",
                          alt: "Preuve formation Jira",
                        })
                      }
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      <img
                        src="/Preuve_participation_formation_jira.jpg"
                        alt="Preuve formation Jira"
                        className="h-16 w-24 rounded-md border border-black/10 object-cover"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 font-medium leading-snug">
                    Initiation Kotlin
                  </td>
                  <td className="px-4 py-4 leading-snug">Formation En ligne</td>
                  <td className="px-4 py-4 text-sm leading-relaxed text-black/90">
                    J&apos;ai suivi cet apprentissage du langage Kotlin pour
                    m&apos;initier au développement d’applications modernes.
                    Cette formation est estimée à une durée de 12h, mais elle
                    m&apos;en a pris 15. Elle m’a permis de m’initier à une
                    technologie nouvelle pour moi qui m’intriguait et que je
                    pensais me serait utile plus tard dans mon parcours
                    professionnel pour la programmation mobile.
                  </td>
                  <td className="px-4 pr-8 py-4 whitespace-nowrap leading-snug">
                    7h valorisées
                  </td>
                  <td className="px-4 pl-8 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: "/preuve_formation_kotlin.jpg",
                          alt: "Preuve formation Kotlin",
                        })
                      }
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      <img
                        src="/preuve_formation_kotlin.jpg"
                        alt="Preuve formation Kotlin"
                        className="h-16 w-24 rounded-md border border-black/10 object-cover"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 font-medium leading-snug">
                    Ids Manager
                  </td>
                  <td className="px-4 py-4 leading-snug">Projet</td>
                  <td className="px-4 py-4 text-sm leading-relaxed text-black/90">
                    J&apos;ai conçu IDS Manager pour combiner une base de
                    données répertoriant les titres Nintendo et une interface de
                    type &quot;store&quot; dédiée à l&apos;injection de jeux. Je
                    l&apos;utilise comme environnement de test pour expérimenter
                    et développer un protocole d&apos;injection de données sur
                    console, ce qui m&apos;a permis d&apos;approfondir mes
                    connaissances sur les systèmes de fichiers et les transferts
                    de données sécurisés.
                  </td>
                  <td className="px-4 pr-8 py-4 whitespace-nowrap leading-snug">
                    10h valorisées
                  </td>
                  <td className="px-4 pl-8 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: "preuve_ids_manager.png",
                          alt: "Preuve Ids Manager",
                        })
                      }
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      <img
                        src="preuve_ids_manager.png"
                        alt="Preuve Ids Manager"
                        className="h-16 w-24 rounded-md border border-black/10 object-cover"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 font-medium leading-snug">
                    SpotyOBS
                  </td>
                  <td className="px-4 py-4 leading-snug">Projet</td>
                  <td className="px-4 py-4 text-sm leading-relaxed text-black/90">
                    J’ai développé SpotyOBS, un plugin permettant d’afficher la
                    musique écoutée sur Spotify directement sur OBS ou
                    StreamLabs. J’ai conçu ce widget avec FastAPI et Python pour
                    le backend, et j’ai créé quatre thèmes visuels différents en
                    HTML/CSS. Ce projet m’a permis de travailler sur
                    l’intégration d’APIs tierces et la création d’interfaces
                    personnalisables.
                  </td>
                  <td className="px-4 pr-8 py-4 whitespace-nowrap leading-snug">
                    10h valorisées
                  </td>
                  <td className="px-4 pl-8 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: "/preuve_SpotyOBS.jpg",
                          alt: "Preuve SpotyOBS",
                        })
                      }
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      <img
                        src="/preuve_SpotyOBS.jpg"
                        alt="Preuve SpotyOBS"
                        className="h-16 w-24 rounded-md border border-black/10 object-cover"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 font-medium leading-snug">
                    Job Étudiant
                  </td>
                  <td className="px-4 py-4 leading-snug">Expérience</td>
                  <td className="px-4 py-4 text-sm leading-relaxed text-black/90">
                    J&apos;ai occupé un poste à responsabilités durant mes
                    études, me permettant de développer des compétences
                    transversales essentielles telles que la ponctualité, la
                    gestion du stress et le contact client. Cette expérience
                    témoigne de ma maturité professionnelle et de ma capacité à
                    concilier des engagements multiples avec rigueur et
                    discipline. J&apos;y ai travailé pour presque 2500 heures.
                  </td>
                  <td className="px-4 pr-8 py-4 whitespace-nowrap leading-snug">
                    10h valorisées
                  </td>
                  <td className="px-4 pl-8 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: "/Preuve_Job_etudiant.jpg",
                          alt: "Preuve Job Étudiant",
                        })
                      }
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      <img
                        src="/Preuve_Job_etudiant.jpg"
                        alt="Preuve Job Étudiant"
                        className="h-16 w-24 rounded-md border border-black/10 object-cover"
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        </div>
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setPreviewImage(null)}
            role="presentation"
          >
            <div
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(event) => event.stopPropagation()}
              role="presentation"
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute -right-2 -top-2 rounded-full bg-white px-2 py-1 text-xs text-black shadow"
              >
                Fermer
              </button>
              <img
                src={previewImage.src}
                alt={previewImage.alt}
                className="max-h-[85vh] w-auto rounded-lg border border-white/20 bg-white object-contain"
              />
            </div>
          </div>
        )}
        <footer className="mt-12 w-full">
          <hr className="w-full border-0 border-t border-gray-200" />
          <p className="mt-3 text-center text-xs text-gray-400">
            © 2025 Dorian Kwizera — Tous droits réservés
          </p>
        </footer>
      </div>
    </main>
  );
}
