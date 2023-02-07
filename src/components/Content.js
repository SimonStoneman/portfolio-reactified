import '../Assets/Styles/Content.css';

function Content() {
  return (
    <main className="page-wrapper">

        {/* about me */}

        <section className="page-section" id="about">
        
        <h2>About Me</h2>
        
        <article>
            <p>Yo yo yo!</p>
        </article>

        </section>

        {/* portfolio container */}
        <section className="page-section" id="work">

        <div>

            <h2>Work</h2>
            
        </div> 

        <article>

            <section className="projects" id="proj1">Project 1</section>

            <section className="projects" id="proj2">Project 2</section>

            <section className="projects" id="proj3">Project 3</section>

        </article>

        </section> 

        {/* contact */}
        <section className="page-section" id="contact">
        <div>
           <h2>Contact Me</h2>
        </div>

        <article>
            <p>Blah!</p>
        </article>
        
        </section>

    </main>

  );
};

export default Content;