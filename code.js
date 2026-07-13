(function() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x09090b, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
  camera.position.z = 25;

  const count = 600;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i*3] = (Math.random() - 0.5) * 100;
    pos[i*3+1] = (Math.random() - 0.5) * 100;
    pos[i*3+2] = (Math.random() - 0.5) * 40;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.15,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true
  });
  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  let targetX = 0, targetY = 0;
  document.addEventListener('mousemove', e => {
    targetX = (e.clientX / innerWidth - 0.5) * 2;
    targetY = (e.clientY / innerHeight - 0.5) * 1.2;
  });

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  let t = 0;
  (function anim() {
    t += 0.002;
    requestAnimationFrame(anim);

    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    particles.rotation.y = t * 0.03;
    renderer.render(scene, camera);
  })();
})();

(function() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rv').forEach(el => io.observe(el));

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.rv').forEach(el => el.classList.add('visible'));
  }
})();

(function() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => io.observe(s));
})();

if (typeof gsap !== 'undefined') {
  gsap.fromTo('#nav', { y: -44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
}

(function() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
    const iconEl = toggleBtn.querySelector('i');
    const themes = ['dark', 'promise'];
    const icons = ['fa-moon', 'fa-pen'];
    let currentIndex = 0;
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme) {
      const idx = themes.indexOf(savedTheme);
      if (idx !== -1) currentIndex = idx;
    }

    document.documentElement.setAttribute('data-theme', themes[currentIndex]);
    iconEl.className = `fa-solid ${icons[currentIndex]}`;
    toggleBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % themes.length;
      const newTheme = themes[currentIndex];
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('site-theme', newTheme);
      iconEl.className = `fa-solid ${icons[currentIndex]}`;
    });
  })();

(function() {
  if (matchMedia('(pointer: coarse)').matches) return;
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;

  let mx = innerWidth / 2, my = innerHeight / 2;
  let gx = mx, gy = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function follow() {
    requestAnimationFrame(follow);
    gx += (mx - gx) * 0.09;
    gy += (my - gy) * 0.09;
    glow.style.transform = `translate(${gx - 190}px, ${gy - 190}px)`;
  })();
})();

(function() {
  const canvas = document.getElementById('hero-3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const size = 280;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(size, size);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
  camera.position.z = 9;

  const coreGeo = new THREE.IcosahedronGeometry(0.6, 1);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xe11d48, wireframe: true, transparent: true, opacity: 0.85 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  scene.add(core);

  const auraGeo = new THREE.IcosahedronGeometry(0.8, 1);
  const auraMat = new THREE.MeshBasicMaterial({ color: 0xe11d48, wireframe: true, transparent: true, opacity: 0.18 });
  const aura = new THREE.Mesh(auraGeo, auraMat);
  scene.add(aura);

  const ringGeo = new THREE.TorusGeometry(3.3, 0.008, 6, 90);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x71717a, transparent: true, opacity: 0.4 });
  const orbitPath = new THREE.Mesh(ringGeo, ringMat);
  orbitPath.rotation.x = Math.PI / 2.4;
  scene.add(orbitPath);

  const pivot = new THREE.Object3D();
  pivot.rotation.x = Math.PI / 2.4;
  scene.add(pivot);

  const satGeo = new THREE.OctahedronGeometry(0.24, 0);
  const satMat = new THREE.MeshBasicMaterial({ color: 0xfafafa, wireframe: true });
  const satellite = new THREE.Mesh(satGeo, satMat);
  satellite.position.set(3.3, 0, 0);
  pivot.add(satellite);

  let px = 0, py = 0;
  const wrap = canvas.closest('.hero-profile-wrap');
  if (wrap) {
    wrap.addEventListener('mousemove', e => {
      const r = wrap.getBoundingClientRect();
      px = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
      py = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
    });
    wrap.addEventListener('mouseleave', () => { px = 0; py = 0; });
  }

  (function loop() {
    requestAnimationFrame(loop);
    pivot.rotation.z += 0.012;
    core.rotation.y += 0.006;
    core.rotation.x += 0.003;
    aura.rotation.y -= 0.004;
    satellite.rotation.x += 0.02;
    satellite.rotation.y += 0.03;
    scene.rotation.y += (px - scene.rotation.y) * 0.05;
    scene.rotation.x += (-py - scene.rotation.x) * 0.05;
    renderer.render(scene, camera);
  })();
})();

(function() {
  if (typeof THREE === 'undefined') return;
  const shapeMakers = {
    knot: () => new THREE.TorusKnotGeometry(0.55, 0.16, 90, 12),
    box: () => new THREE.BoxGeometry(0.9, 0.9, 0.9, 2, 2, 2),
    oct: () => new THREE.OctahedronGeometry(0.75, 0)
  };

  document.querySelectorAll('.sh-orb').forEach(canvas => {
    const shape = shapeMakers[canvas.dataset.shape] ? canvas.dataset.shape : 'oct';
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(56, 56);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 20);
    camera.position.z = 3;

    const geo = shapeMakers[shape]();
    const mat = new THREE.MeshBasicMaterial({ color: 0xe11d48, wireframe: true });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    let visible = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { visible = e.isIntersecting; });
    }, { threshold: 0.1 });
    io.observe(canvas);

    (function loop() {
      requestAnimationFrame(loop);
      if (!visible) return;
      mesh.rotation.x += 0.008;
      mesh.rotation.y += 0.012;
      renderer.render(scene, camera);
    })();
  });
})();

(function() {
  if (matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.p-card').forEach(card => {
    const shine = card.querySelector('.p-card-shine');
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -8;
      const ry = (px - 0.5) * 8;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(2px)`;
      if (shine) {
        shine.style.opacity = '1';
        shine.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.14), transparent 60%)`;
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      if (shine) shine.style.opacity = '0';
    });
  });
})();

(function() {
  document.querySelectorAll('.btn-primary, .btn-outline, .nav-hire').forEach(btn => {
    if (matchMedia('(pointer: coarse)').matches) return;
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
})();

(function() {
  const canvas = document.getElementById('cta-canvas');
  const section = document.getElementById('cta');
  if (!canvas || !section || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 7;

  const blobGeo = new THREE.IcosahedronGeometry(2.2, 3);
  const basePositions = blobGeo.attributes.position.array.slice();
  const blobMat = new THREE.MeshBasicMaterial({ color: 0xe11d48, wireframe: true, transparent: true, opacity: 0.4 });
  const blob = new THREE.Mesh(blobGeo, blobMat);
  scene.add(blob);

  function resize() {
    const w = section.clientWidth, h = section.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  let visible = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { visible = e.isIntersecting; });
  }, { threshold: 0.1 });
  io.observe(section);

  let t = 0;
  (function loop() {
    requestAnimationFrame(loop);
    if (!visible) return;
    t += 0.006;
    const pos = blobGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const x0 = basePositions[ix], y0 = basePositions[ix + 1], z0 = basePositions[ix + 2];
      const noise = Math.sin(x0 * 1.4 + t) * Math.cos(y0 * 1.4 + t * 0.8) * Math.sin(z0 * 1.4 + t * 1.1);
      const scale = 1 + noise * 0.18;
      pos.setXYZ(i, x0 * scale, y0 * scale, z0 * scale);
    }
    pos.needsUpdate = true;
    blob.rotation.y += 0.003;
    blob.rotation.x += 0.0015;
    renderer.render(scene, camera);
  })();
})();

(function() {
  'use strict';

  const audioFiles = ['public/fdfmn.mp3', 'public/hurts.mp3'];
  const audios = audioFiles.map(src => {
    const a = new Audio(src);
    a.preload = 'auto';
    a.loop = false;
    return a;
  });

  let currentIndex = Math.random() < 0.5 ? 0 : 1;
  let isMuted = false;
  let isPlaying = false;
  let audioStarted = false;

  const toggleBtn = document.getElementById('audio-toggle');
  const iconEl = toggleBtn ? toggleBtn.querySelector('i') : null;

  function updateAudioIcon() {
    if (!iconEl) return;
    iconEl.className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
  }

  function playCurrent() {
    if (!audios.length) return;
    const audio = audios[currentIndex];
    audio.currentTime = 0;
    audio.volume = 0.6;
    audio.muted = isMuted;
    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch(err => {
        if (err.name === 'NotAllowedError' && !audioStarted) {
          showToast();
        }
        console.warn('Audio play failed:', err);
      });
    }
    isPlaying = true;
  }

  function switchTrack() {
    currentIndex = 1 - currentIndex;
    playCurrent();
  }

  function onAudioEnd() {
    if (isMuted) return;
    switchTrack();
  }

  audios.forEach((a, idx) => {
    a.addEventListener('ended', () => {
      if (idx === currentIndex) {
        onAudioEnd();
      }
    });
  });

  function toggleMute() {
    isMuted = !isMuted;
    audios.forEach(a => a.muted = isMuted);
    updateAudioIcon();
    if (!isMuted && !isPlaying) {
      playCurrent();
    }
  }

  function initAudio() {
    if (audioStarted) return;
    const audio = audios[currentIndex];
    const promise = audio.play();
    if (promise !== undefined) {
      promise.then(() => {
        audioStarted = true;
        isPlaying = true;
        hideToast();
      }).catch(err => {
        if (err.name === 'NotAllowedError') {
          showToast();
        }
        console.warn('Initial audio play failed:', err);
      });
    }
  }

  const toast = document.getElementById('audio-toast');
  const allowBtn = document.getElementById('toast-allow');
  const laterBtn = document.getElementById('toast-later');
  let toastShown = false;

  function showToast() {
    if (toastShown) return;
    if (sessionStorage.getItem('audio-toast-dismissed') === 'true') return;
    toast.classList.add('show');
    toastShown = true;
  }

  function hideToast() {
    toast.classList.remove('show');
    toastShown = false;
  }

  if (allowBtn) {
    allowBtn.addEventListener('click', () => {
      const audio = audios[currentIndex];
      const promise = audio.play();
      if (promise !== undefined) {
        promise.then(() => {
          audioStarted = true;
          isPlaying = true;
          hideToast();
        }).catch(err => {
          console.warn('Still cannot play:', err);
        });
      }
    });
  }

  if (laterBtn) {
    laterBtn.addEventListener('click', () => {
      hideToast();
      sessionStorage.setItem('audio-toast-dismissed', 'true');
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMute);
  }

  function userInteractionHandler() {
    if (!audioStarted) {
      initAudio();
    }
    document.removeEventListener('click', userInteractionHandler);
    document.removeEventListener('touchstart', userInteractionHandler);
  }

  document.addEventListener('click', userInteractionHandler);
  document.addEventListener('touchstart', userInteractionHandler);

  window.addEventListener('load', () => {
    setTimeout(initAudio, 300);
  });

  updateAudioIcon();

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      const gitIcons = document.querySelectorAll('.github-themed');
      gitIcons.forEach(el => {
        if (theme === 'light') {
          el.style.color = '#181717';
        } else {
          el.style.color = '#f5f5f7';
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const initTheme = document.documentElement.getAttribute('data-theme') || 'promise';
    document.querySelectorAll('.github-themed').forEach(el => {
      el.style.color = initTheme === 'light' ? '#181717' : '#f5f5f7';
    });
  }

})();