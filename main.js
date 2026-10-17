    // BASE DE DATOS DE PROYECTOS (CINE ORDENADO POR JERARQUÍA DE ROL)
    const proyectosCine = [
      // 1. Jefe de Producción / Jefe de Locaciones
      { img: 'img/cine1.jpg', url: 'https://www.youtube.com/watch?v=9yp4tHdHjuE', titleKey: 'cine1_title', dir: 'Emilia Cotella - John Mathis', rolKey: 'rol_jefe' },
      { img: 'img/cine2.jpg', url: 'https://www.youtube.com/watch?v=KNXPRVad4uk', titleKey: 'cine2_title', dir: 'Leandro Naranjo - Santiago Zapata', rolKey: 'rol_jefe' },
      { img: 'img/cine4.jpg', url: 'https://vimeo.com/813717069', titleKey: 'peli_teamo', dir: 'Rosario Gonzáles Leaniz - Alba Cravero', rolKey: 'rol_locaciones' },
      
      // 2. Asistente de Producción
      { img: 'img/cine9.jpg', url: 'https://www.youtube.com/watch?v=8oDYkO-hI7c', titleKey: 'cine9_title', dir: 'Rodrigo Fernandez Engler', rolKey: 'rol_asistente' },
      { img: 'img/cine10.jpg', url: 'https://www.youtube.com/shorts/pu87xbq4GpM', titleKey: 'cine10_title', dir: 'Teo Ciampagna', rolKey: 'rol_asistente' },

      // 3. Ayudante de Producción
      { img: 'img/cine3.jpg', url: 'https://www.youtube.com/watch?v=seLUU2iS0no', titleKey: 'cine3_title', dir: 'Rosendo Ruiz', rolKey: 'rol_ayudante' },
      { img: 'img/cine5.jpg', url: 'https://www.youtube.com/watch?v=Ofl9AecfSfQ', titleKey: 'cine5_title', dir: 'Santiago Giralt', rolKey: 'rol_ayudante' },
      { img: 'img/cine6.jpg', url: 'https://www.youtube.com/watch?v=rSmKl347Ktk', titleKey: 'cine6_title', dir: 'Mauricio Minotti', rolKey: 'rol_ayudante' },
      { img: 'img/cine8.jpg', url: 'https://www.youtube.com/watch?v=acCKexISlmk', titleKey: 'cine8_title', dir: 'Matías Luchessi', rolKey: 'rol_ayudante' },

      // 4. Meritorio de Producción
      { img: 'img/cine7.jpg', url: 'https://www.youtube.com/watch?v=Vs8AX9dsOJE', titleKey: 'peli_recursos', dir: 'Jesús Magaña Vazquez', rolKey: 'rol_meritorio' }
    ];

    const proyectosPub = [
      { img: 'img/publicidad1.jpg', url: 'https://www.youtube.com/watch?v=iX8aEeyzLhE', titleKey: 'pub1', dir: 'Martín Donozo', rolKey: 'rol_asist_loc' },
      { img: 'img/publicidad2.jpg', url: 'https://www.youtube.com/watch?v=hHJDDYw5cQI', titleKey: 'pub2', dir: 'Pablo Cecci', rolKey: 'rol_asistente' },
      { img: 'img/publicidad3.jpg', url: 'https://www.youtube.com/watch?v=LxxwDhlDJpU', titleKey: 'pub3', dir: 'Pablo Cecci', rolKey: 'rol_asistente' },
      { img: 'img/publicidad5.jpg', url: 'https://www.youtube.com/watch?v=bHZ30jQbIR0', titleKey: 'pub_urnas', dir: 'Pablo Cecci', rolKey: 'rol_asistente' },
      { img: 'img/publicidad6.jpg', url: 'https://www.youtube.com/watch?v=JVb8Vx4Qdj8', titleKey: 'pub_urnas', dir: 'Pablo Cecci', rolKey: 'rol_asistente' },
      { img: 'img/publicidad4.jpg', url: 'https://www.youtube.com/watch?v=KPmWdH8Tnx8', titleKey: 'pub_verano', dir: 'Lucas Combina', rolKey: 'rol_asistente' },
      { img: 'img/Publicidad7.jpg', url: 'https://www.instagram.com/reel/DK-JYWORQNz/', titleKey: 'pub7', dir: 'Pablo Brusa', rolKey: 'rol_asistente' },
      { img: 'img/Publicidad8.jpg', url: 'https://youtu.be/qM2MLvUrOfk', titleKey: 'pub8', dir: 'Pablo Cecci', rolKey: 'rol_asistente' },
      { img: 'img/Publicidad9.jpg', url: 'https://youtu.be/DuFt5EWgwuw', titleKey: 'pub9', dir: 'Pablo Cecci', rolKey: 'rol_asistente' },
      { img: 'img/Publicidad10.jpg', url: 'https://www.instagram.com/p/DYDcg10p_DT/', titleKey: 'pub10', dir: 'Pablo Cecci', rolKey: 'rol_asistente' },
      { img: 'img/Publicidad11.jpg', url: 'https://www.instagram.com/reel/DEzB016Jp-T/', titleKey: 'pub11', dir: 'Lucas Rosas - Manuel Pons', rolKey: 'rol_asistente' }
    ];

    const proyectosVideo = [
      { img: 'img/videoclip1.jpg', url: 'https://www.youtube.com/watch?v=WYnOF-UZ-kI', titleKey: 'vc1_title', dir: 'Rosario Gonzalez Leaniz', rolKey: 'rol_cojefe' },
      { img: 'img/videoclip2.jpg', url: 'https://www.youtube.com/watch?v=a1w6ogQHO5c', titleKey: 'vc2_title', dir: 'Rosario Gonzalez Leaniz', rolKey: 'rol_jefe' }
    ];

    // DICCIONARIO TRADUCCIONES
    const homeT = {
      es: {
        nav_cine:"cine", nav_pub:"publicidad", nav_video:"videoclips", nav_diseno:"diseño", nav_contacto:"contacto",
        hero_role:"Productor Audiovisual", hero_tag:"10 años produciendo cine, publicidad y videoclips", btn_reel:"Ver reel", btn_contact:"Contactame",
        sec_about:"SOBRE MÍ", sec_reel:"REEL", sec_cv:"CV", sec_contact:"CONTACTO", cv_pdf:"Descargar PDF",
        cv_exp:"Experiencia profesional", cv_extra:"Experiencia laboral adicional", cv_edu:"Educación", cv_skills:"Skills adicionales", cv_lang:"Idiomas",
        f_name:"Nombre", f_email:"Email", f_msg:"Mensaje", f_send:"Enviar mensaje", f_ok:"¡Gracias! Tu mensaje fue enviado.", f_err:"No se pudo enviar. Probá de nuevo o escribime a imanolnet@gmail.com", f_sending:"Enviando…",
        nav_inicio: "inicio", nav_foto: "fotografía", nav_reel: "reel", nav_cv: "cv", 
        main_desc: "Más de 10 años de experiencia en producción audiovisual, especializado en el desarrollo, gestión y logística de proyectos de cine, videoclips y publicidad. He liderado y formado parte de equipos creativos y técnicos en producciones independientes, así como en proyectos para plataformas internacionales como Netflix, Amazon Prime, Televisión Pública y Canal Encuentro. Además, he participado en la producción de campañas publicitarias de alto impacto, transmitidas en televisión y redes. A su vez me he desarrollado en el campo del Diseño Gráfico participando activamente con marcas, tanto en la generación de identidad como en contenido para redes.",
        sec_cine: "CINE", sec_pub: "PUBLICIDAD", sec_video: "VIDEOCLIPS", sec_diseno: "DISEÑO GRÁFICO", socials: "Redes Sociales",
        dir: "Dir", rol: "Rol", rol_jefe: "Jefe de Producción", rol_asistente: "Asistente de Producción", rol_ayudante: "Ayudante de Producción", rol_meritorio: "Meritorio de Producción", rol_locaciones: "Jefe de Locaciones", rol_asist_loc: "Asistente de Locaciones", rol_cojefe: "Cojefaturía de Producción",
        cine1_title: "Un Susurro Invocó mi Nombre (2024)", cine2_title: "La Cumbre (2024)", cine3_title: "La Zurda (2024)", cine5_title: "Norma (2023)", cine6_title: "La Pulpera (2023)", cine8_title: "El Casero (2023)", cine9_title: "Ciudades de Refugio (2024)", cine10_title: "Jubilada y Peligrosa (2026)",
        peli_teamo: "Te amo tanto que escribí una película para nunca enojarme con vos (2022)", peli_recursos: "Recursos Humanos (2022)",
        pub1: "Hay un país donde podemos vivir distinto (2023)", pub2: "El valor de dar respuesta (2024)", pub3: "Levantados (2023)", pub_urnas: "Urnas (2023)", pub_verano: "Verano Divino (2022)", pub7: "Avioncito (2024)", pub8: "Te Dio Calor? (2025)", pub9: "Juan es Córdoba (2025)", pub10: "Bienvenidos los que se Mueven (2026)", pub11: "Milo J - Anuncio Rueda de Prensa (2026)",
        vc1_title: "El Cofla - En Otra (2023)", vc2_title: "Paz Carrara - Todo vuelve (2022)"
      },
      en: {
        nav_cine:"film", nav_pub:"advertising", nav_video:"music videos", nav_diseno:"design", nav_contacto:"contact",
        hero_role:"Audiovisual Producer", hero_tag:"10 years producing film, advertising and music videos", btn_reel:"Watch reel", btn_contact:"Contact me",
        sec_about:"ABOUT ME", sec_reel:"REEL", sec_cv:"RESUME", sec_contact:"CONTACT", cv_pdf:"Download PDF",
        cv_exp:"Professional experience", cv_extra:"Additional work experience", cv_edu:"Education", cv_skills:"Additional skills", cv_lang:"Languages",
        f_name:"Name", f_email:"Email", f_msg:"Message", f_send:"Send message", f_ok:"Thank you! Your message was sent.", f_err:"Could not send. Please try again or write to imanolnet@gmail.com", f_sending:"Sending…",
        nav_inicio: "home", nav_foto: "photography", nav_reel: "reel", nav_cv: "resume", 
        main_desc: "Over 10 years of experience in audiovisual production, specialized in the development, management, and logistics of film, music videos, and advertising projects. I have led and been part of creative and technical teams in independent productions, as well as projects for international platforms such as Netflix, Amazon Prime, Televisión Pública, and Canal Encuentro. Additionally, I have participated in the production of high-impact advertising campaigns broadcast on TV and social media. At the same time, I have developed in the field of Graphic Design, actively working with brands on identity generation and social media content.",
        sec_cine: "FILM", sec_pub: "ADVERTISING", sec_video: "MUSIC VIDEOS", sec_diseno: "GRAPHIC DESIGN", socials: "Social Media",
        dir: "Dir", rol: "Role", rol_jefe: "Production Manager", rol_asistente: "Production Assistant", rol_ayudante: "Production Aide", rol_meritorio: "Production Intern", rol_locaciones: "Location Manager", rol_asist_loc: "Location Assistant", rol_cojefe: "Co-Head of Production",
        cine1_title: "A Whisper Called My Name (2024)", cine2_title: "The Summit (2024)", cine3_title: "The Left Hand (2024)", cine5_title: "Norma (2023)", cine6_title: "The Tavern Keeper (2023)", cine8_title: "The Housekeeper (2023)", cine9_title: "Cities of Refuge (2024)", cine10_title: "Retired and Dangerous (2026)",
        peli_teamo: "I love you so much I wrote a movie so I'd never be mad at you (2022)", peli_recursos: "Human Resources (2022)",
        pub1: "There's a country where we can live differently (2023)", pub2: "The value of giving an answer (2024)", pub3: "Raised (2023)", pub_urnas: "Ballot Boxes (2023)", pub_verano: "Divine Summer (2022)", pub7: "Little Plane (2024)", pub8: "Are you feeling hot? (2025)", pub9: "Juan is Córdoba (2025)", pub10: "Welcome Those Who Move (2026)", pub11: "Milo J - Press Conference Announcement (2026)",
        vc1_title: "El Cofla - Somewhere Else (2023)", vc2_title: "Paz Carrara - Everything Comes Back (2022)"
      }
    };

    addTranslations(homeT.es, homeT.en);

    // FUNCIÓN CREADORA DE TARJETAS QUE SOPORTA AMBOS ASPECT RATIOS
    // 'aspect-[2/3]' para posters de cine y 'aspect-video' para publicidad/videoclips
    function createCardHTML(item, aspectClass = 'aspect-video') {
      return `
        <a href="${item.url}" target="_blank" rel="noopener" class="group block w-full">
          <div class="overflow-hidden rounded shadow bg-gray-100 mb-3 ${aspectClass}">
            <img src="${item.img}" alt="" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div class="text-center px-1">
            <h3 class="font-bold text-sm sm:text-base leading-snug text-gray-900 group-hover:underline" data-key="${item.titleKey}"></h3>
            <p class="text-xs sm:text-sm text-gray-600 mt-1"><span data-key="dir">Dir</span>: ${item.dir}</p>
            <p class="text-xs sm:text-sm text-gray-500"><span data-key="rol">Rol</span>: <span class="font-medium text-gray-700" data-key="${item.rolKey}"></span></p>
          </div>
        </a>`;
    }

    // RENDERIZADO FLEXIBLE DE GRILLAS
    function renderGridAuto(items, containerId, aspectClass = 'aspect-video') {
      const container = document.getElementById(containerId);
      const chunkSize = 4;
      let html = '';

      for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize);
        if (chunk.length === 4) {
          html += `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">${chunk.map(item => createCardHTML(item, aspectClass)).join('')}</div>`;
        } else {
          // Centrado dinámico si la última fila tiene menos de 4 tarjetas
          const colSpanClass = chunk.length === 1 ? 'w-full sm:w-1/2 md:w-1/4' : chunk.length === 2 ? 'w-full md:w-1/2' : 'w-full md:w-3/4';
          const gridColsClass = chunk.length === 1 ? 'grid-cols-1' : chunk.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
          
          html += `
            <div class="flex justify-center">
              <div class="grid ${gridColsClass} gap-6 ${colSpanClass}">
                ${chunk.map(item => createCardHTML(item, aspectClass)).join('')}
              </div>
            </div>`;
        }
      }
      container.innerHTML = html;
    }

    // ================= FORMULARIO =================
function initForm() {
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  const t = k => translations[document.documentElement.lang][k];
  form.addEventListener('submit', async e => {
    e.preventDefault();
    msg.textContent = t('f_sending');
    try {
      const res = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      if (!res.ok) throw new Error();
      form.reset();
      msg.textContent = t('f_ok');
    } catch (err) { msg.textContent = t('f_err'); }
  });
}

// ================= MENÚ: resalta la sección visible =================
function initNavHighlight() {
  const map = new Map();
  document.querySelectorAll('.site-nav a[href^="index.html#"]').forEach(a => map.set(a.getAttribute('href').split('#')[1], a));
  const links = [...map.values()];
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { links.forEach(l => l.classList.remove('active')); map.get(en.target.id)?.classList.add('active'); }
  }), { rootMargin: '-40% 0px -55% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}

window.onload = () => {
  renderGridAuto(proyectosCine, 'grid-cine', 'aspect-[2/3]');
  renderGridAuto(proyectosPub, 'grid-pub', 'aspect-video');
  document.getElementById('grid-video').innerHTML = proyectosVideo.map(i => createCardHTML(i, 'aspect-video')).join('');
  initForm(); initSite(); initNavHighlight();
};
