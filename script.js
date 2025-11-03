const btn = document.getElementById('btn');
    const elem = document.getElementById('elem');

    btn.addEventListener('click', () => {
      const isHidden = elem.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isHidden));
      elem.setAttribute('aria-hidden', String(isHidden));
    });

    document.addEventListener('click', (e) => {
      const target = e.target;
      const insideNav = elem.contains(target) || btn.contains(target);
      if (!insideNav && !elem.classList.contains('hidden')) {
        elem.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        elem.setAttribute('aria-hidden', 'true');
      }
    });