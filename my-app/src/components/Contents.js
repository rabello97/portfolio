import React from "react";
import perfil from "../img/perfil.jpg";

function Contents() {
  return (
    <React.Fragment>
      <main className="introducao">
        <img src={perfil} alt="lobo cinza" />
        <div>
          <h1>
            Desenvolvedor Front End &<br />
            UX/UI Designer
          </h1>
          <p>Localizado em Curitiba, Paraná</p>
        </div>
      </main>

      <section class="experiencia" id="experiencia" aria-label="Experiência">
        <h2 class="subtitulo">Experiência</h2>
        <div>
          <p class="experiencia-texto">
            Desenvolvo pequenos projetos como o Bikcraft utilizando apenas{" "}
            <strong>HTML</strong>, <strong>CSS</strong> e{" "}
            <strong>JavaScript</strong>. Para aplicativos web como a rede social
            Dogs eu trabalhei no <strong>UX</strong> e{" "}
            <strong>UI Design</strong> do projeto.
          </p>

          <div class="empresa">
            <span class="empresa-ano">2045</span>
            <h3 class="empresa-titulo">Bikcraft</h3>
            <span class="empresa-titulo">Desenvolvedor Júnior</span>
            <p class="empresa-texto">
              No projeto Bikcraft eu trabalhei no desenvolvimento completo do
              HTML, CSS e JavaScript do site. Além disso, também prestei
              consultoria no Design.
            </p>
            <ul class="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </div>

          <div class="empresa">
            <span class="empresa-ano">2044-45</span>
            <h3 class="empresa-titulo">Surfbot</h3>
            <span class="empresa-titulo">Estagiário</span>
            <p class="empresa-texto">
              Surfbot é uma empresa que oferece aulas de surf no Rio de Janeiro.
              O projeto foi feito com HTML, CSS e JavaScript. Todo o projeto foi
              feito do zero.
            </p>
            <ul class="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div class="empresa">
            <span class="empresa-ano">2044</span>
            <h3 class="empresa-titulo">Brafé</h3>
            <span class="empresa-titulo">Desenvolvedor Júnior</span>
            <p class="empresa-texto">
              Mais de 3 projetos foram desenvolvidos para a empresa Brafé. Eu
              trabalhei na criação do email marketing e também no HTML.
            </p>
            <ul class="empresa-habilidades">
              <li>Email Marketing</li>
              <li>HTML</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contents;
