import React from "react";
import perfil from "../img/perfil.jpg";

function Contents() {
  return (
    <React.Fragment>
      <main className="container introducao">
        <img src={perfil} alt="lobo cinza" />
        <div>
          <h1>
            Desenvolvedor Front End &<br />
            UX/UI Designer
          </h1>
          <p>Localizado em Curitiba, Paraná</p>
        </div>
      </main>

      <section
        className="container experiencia"
        id="experiencia"
        aria-label="Experiência"
      >
        <h2 className="subtitulo">Experiência</h2>
        <div>
          <p className="experiencia-texto">
            Desenvolvo pequenos projetos como o Bikcraft utilizando apenas{" "}
            <strong>HTML</strong>, <strong>CSS</strong> e{" "}
            <strong>JavaScript</strong>. Para aplicativos web como a rede social
            Dogs eu trabalhei no <strong>UX</strong> e{" "}
            <strong>UI Design</strong> do projeto.
          </p>

          <div className="empresa">
            <span className="empresa-ano">2045</span>
            <h3 className="empresa-titulo">Bikcraft</h3>
            <span className="empresa-titulo">Desenvolvedor Júnior</span>
            <p className="empresa-texto">
              No projeto Bikcraft eu trabalhei no desenvolvimento completo do
              HTML, CSS e JavaScript do site. Além disso, também prestei
              consultoria no Design.
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </div>

          <div className="empresa">
            <span className="empresa-ano">2044-45</span>
            <h3 className="empresa-titulo">Surfbot</h3>
            <span className="empresa-titulo">Estagiário</span>
            <p className="empresa-texto">
              Surfbot é uma empresa que oferece aulas de surf no Rio de Janeiro.
              O projeto foi feito com HTML, CSS e JavaScript. Todo o projeto foi
              feito do zero.
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="empresa">
            <span className="empresa-ano">2044</span>
            <h3 className="empresa-titulo">Brafé</h3>
            <span className="empresa-titulo">Desenvolvedor Júnior</span>
            <p className="empresa-texto">
              Mais de 3 projetos foram desenvolvidos para a empresa Brafé. Eu
              trabalhei na criação do email marketing e também no HTML.
            </p>
            <ul className="empresa-habilidades">
              <li>Email Marketing</li>
              <li>HTML</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="formacao" id="formacao" aria-label="Formação">
        <div className="formacao-container">
          <h2 className="subtitulo-black">Formação</h2>

          <div>
            <p className="formacao-texto">
              Minha mais recente experiência acadêmica foi o{" "}
              <strong>mestrado</strong> 🎓 que fiz no exterior em{" "}
              <strong>UX Design</strong>. Além disso me mantenho sempre
              atualizado com cursos intensivos online.
            </p>

            <ul className="faculdade-lista">
              <li className="faculdade">
                <span className="faculdade-tipo">Bacharel</span>
                <h3 className="faculdade-curso">Administração de Empresas</h3>
                <span className="faculdade-instituicao">UFRRJ</span>
              </li>
              <li className="faculdade">
                <span className="faculdade-tipo">Tecnólogo</span>
                <h3 className="faculdade-curso">Design Digital</h3>
                <span className="faculdade-instituicao">Infnet</span>
              </li>
              <li className="faculdade">
                <span className="faculdade-tipo">Mestre</span>
                <h3 className="faculdade-curso">User Experience Design</h3>
                <span className="faculdade-instituicao">UCLL</span>
              </li>
            </ul>

            <div className="formacao-extra">
              <div className="cursos">
                <h3>Cursos Intensivos</h3>
                <ul>
                  <li>
                    UX Design & UI Design <span>56h</span>
                  </li>
                  <li>
                    Front End para Iniciantes <span>72h</span>
                  </li>
                </ul>
              </div>

              <div className="idiomas">
                <h3>Idiomas</h3>
                <ul>
                  <li>
                    Inglês <span>/ Fluente</span>
                  </li>
                  <li>
                    Espanhol <span>/ Intermediário</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contents;
