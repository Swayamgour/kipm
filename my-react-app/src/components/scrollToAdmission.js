export const scrollToAdmission = () => {
  const section = document.getElementById('admission-form');

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};