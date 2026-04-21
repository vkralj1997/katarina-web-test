const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const langButtons = document.querySelectorAll('.lang-switch');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

let currentLang = 'de';

function getLocale(lang) {
  if (lang === 'de') return 'de-DE';
  if (lang === 'hr') return 'hr-HR';
  return 'en-GB';
}

function updateDateTime() {
  const now = new Date();
  const dateEl = document.getElementById('liveDate');
  const timeEl = document.getElementById('liveTime');
  const locale = getLocale(currentLang);

  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(locale, {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-de][data-en][data-hr]').forEach(el => {
    el.innerHTML = el.dataset[lang];
  });

  document.querySelectorAll('[data-placeholder-de][data-placeholder-en][data-placeholder-hr]').forEach(el => {
    el.placeholder = el.dataset[`placeholder${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
  });

  langButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  updateDateTime();
}

langButtons.forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

applyLanguage('de');
setInterval(updateDateTime, 1000);

const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const date = document.getElementById('date')?.value || '';
    const time = document.getElementById('time')?.value || '';
    const message = document.getElementById('message')?.value || '';

    let subject = 'Appointment request - Hairdresser Katarina';
    let body = `Hello,\n\nI would like to request an appointment.\n\nName: ${name}\nPhone: ${phone}\nPreferred date: ${date}\nPreferred time: ${time}\nMessage: ${message}\n`;

    if (currentLang === 'de') {
      subject = 'Terminanfrage - Hairdresser Katarina';
      body = `Hallo,\n\nich möchte gerne einen Termin anfragen.\n\nName: ${name}\nTelefon: ${phone}\nWunschtermin: ${date}\nUhrzeit: ${time}\nNachricht: ${message}\n`;
    } else if (currentLang === 'hr') {
      subject = 'Upit za termin - Hairdresser Katarina';
      body = `Pozdrav,\n\nželim zatražiti termin.\n\nIme: ${name}\nTelefon: ${phone}\nŽeljeni datum: ${date}\nVrijeme: ${time}\nPoruka: ${message}\n`;
    }

    window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
