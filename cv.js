addTranslations(
  { sec_cv:'CV', cv_pdf:'Descargar PDF', cv_exp:'Experiencia profesional', cv_extra:'Experiencia laboral adicional', cv_edu:'Educación', cv_skills:'Skills adicionales', cv_lang:'Idiomas' },
  { sec_cv:'RESUME', cv_pdf:'Download PDF', cv_exp:'Professional experience', cv_extra:'Additional work experience', cv_edu:'Education', cv_skills:'Additional skills', cv_lang:'Languages' }
);

// ================= CV (texto) =================
// Formato de cada ítem: [título, año, detalle]
const cvRoles = [
  ['Jefe de Producción / Locaciones', [
    ['Todo Vuelve – Paz Carrara', '2025', 'Dir. Rosario Gonzalez Leaniz · Sie7e Productora'],
    ['Un Susurro Invocó mi Nombre', '2024', 'Dir. Emilia Cotella y John Mathis · Bobadilla Productions'],
    ['La Cumbre', '2024', 'Dir. Leandro Naranjo y Santiago Zapata · Polar Cine'],
    ['El Flaco', '2024', 'Dir. Valentina Wiens · Tamales'],
    ['En Otra – El Cofla', '2023', 'Dir. Rosario Gonzalez Leaniz · Sie7e Productora'],
    ['Te amo tanto que escribí una película para nunca enojarme con vos', '2022', 'Dir. Rosario Gonzalez Leaniz y Alba Cravero · Corte A Cine / El Pasaje Cine']]],
  ['Asistente de Producción / Locaciones', [
    ['Jubilada y Peligrosa', '2026', 'Dir. Teodoro Ciampagna · Gran Berta Films'],
    ['Te Agarró Calor?', '2025', 'Dir. Pablo Cecci · Prisma Cine para Pritty'],
    ['El Valor de Dar Respuesta', '2024', 'Dir. Pablo Cecci · Prisma Cine para Sancor Seguros'],
    ['Avioncito', '2024', 'Dir. Pablo Brusa · Prisma Cine para Grupo Betania'],
    ['Ciudades de Refugio', '2023', 'Dir. Rodrigo Fernandez · Prisma Cine / Protasowicki Engler'],
    ['Levantados', '2023', 'Dir. Pablo Cecci · Prisma Cine para Hacemos por Nuestro País'],
    ['Hay un país donde podemos vivir distinto', '2023', 'Dir. Martin Donozo · Hü Productora / La Doble para Hacemos por Nuestro País'],
    ['Verano Divino', '2022', 'Dir. Lucas Combina · Jaque Content para Tarjeta Cordobesa']]],
  ['Ayudante de Producción', [
    ['La Zurda', '2023', 'Dir. Rosendo Ruiz · Jaque Content / El Carro Cine'],
    ['Urnas', '2023', 'Dir. Pablo Cecci · Prisma Cine para Hacemos por Nuestro País'],
    ['El Casero', '2023', 'Dir. Matías Luchessi · Amada Contents / Amada Films / Nadador Cine / Twins Latin Films'],
    ['Norma', '2022', 'Dir. Santiago Giralt · Magma Cine / Ají Molido / Los Griegos Films / El Cielo Cine / Prisma Cine'],
    ['La Pulpera', '2022', 'Dir. Mauricio Minotti · Tres Mares Productora'],
    ['Recursos Humanos', '2022', 'Dir. Jesús Magaña Vázquez · Prisma Cine / Sobrevivientes Films']]],
  ['Cámara / Edición', [
    ['Festival de Cine de Terror Córdoba', '2017 / 2018 / 2019', ''],
    ['Mariano Clavijo – Desandolvido en Sala de las Américas', '2017', 'Matagusanos Productora'],
    ['Ahnga en Radio Nacional', '2016', 'Matagusanos Productora'],
    ['Ópera Don Pascuale – Aula Magna', '2015', 'Matagusanos Productora'],
    ['La Traviata – Teatro Real', '2014', 'Matagusanos Productora']]],
  ['Producción de Eventos', [
    ['Cosquín Rock', '2026', 'Referente de logística para artistas (Morat, Chemical Brothers, Bersuit Vergarabat, Los Pericos)'],
    ['Festival Yatay de Cine Vertical', '2019 / 2020 / 2021 / 2022', 'Creador / Producción General']]]
];
const cvJobs = [
  ['Wake Up Bikes', 'Gestión E-Commerce – Community Manager', '2012 – 2021', ['Gestión de venta E-Commerce.', 'Gestión de redes sociales, imagen comercial y generación de contenido propio.', 'Diseño general de web y plataforma de venta online propia.', 'Diseño gráfico de local comercial.']],
  ['Luis Spitale Bikes', 'Gestión E-Commerce – Community Manager', '2023 – 2025', ['Creador de canal de venta E-Commerce.', 'Gestión de redes sociales, imagen comercial y generación de contenido propio.', 'Gestión de stock, inventario y administración.']]
];
const cvEdu = ['Bachiller Orientado en Humanidades, Especialidad Arte – Collegium CEIM', 'Diseño Gráfico + Comunicación Audiovisual – Instituto Superior Mariano Moreno', 'Tecnicatura en Producción en Medios Audiovisuales – Universidad Nacional de Córdoba (en curso)'];
const cvSkills = ['Adobe audiovisual (Premiere Pro / After Effects / Illustrator / Photoshop)', 'Miro', 'Kanban boards (Trello – Asana – Airtable)', 'Metodologías ágiles'];
const cvLangs = ['Español nativo', 'Inglés intermedio'];

function renderCV() {
  const list = arr => `<ul class="plain">${arr.map(t => `<li>${t}</li>`).join('')}</ul>`;
  let h = '<h3 data-key="cv_exp"></h3>';
  cvRoles.forEach(([role, items]) => {
    h += `<h4>${role} <small>· Pre producción – Producción de campo</small></h4><ul>` +
      items.map(([t, y, d]) => `<li><strong>${t}</strong> (${y})${d ? `<small>${d}</small>` : ''}</li>`).join('') + '</ul>';
  });
  h += '<h3 data-key="cv_extra"></h3>' + cvJobs.map(([co, role, yrs, pts]) =>
    `<h4>${co} <small>· ${role} · ${yrs} · Córdoba, Argentina</small></h4>${list(pts)}`).join('');
  h += `<h3 data-key="cv_edu"></h3>${list(cvEdu)}<h3 data-key="cv_skills"></h3>${list(cvSkills)}<h3 data-key="cv_lang"></h3>${list(cvLangs)}`;
  document.getElementById('cv-body').innerHTML = h;
}


window.onload = () => { renderCV(); initSite(); };
