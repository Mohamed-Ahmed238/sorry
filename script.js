const $ = (id) => document.getElementById(id);
const yes = $('yes'), no = $('no');

// floating hearts
const shapes = ['💖', '💗', '💕', '❤️', '💘'];
for (let i = 0; i < 14; i++) {
  const h = document.createElement('span');
  h.className = 'heart';
  h.textContent = shapes[i % shapes.length];
  h.style.left = (Math.random() * 96) + '%';
  h.style.fontSize = (1 + Math.random() * 1.4) + 'rem';
  h.style.animationDuration = (9 + Math.random() * 9) + 's';
  h.style.animationDelay = (-Math.random() * 14) + 's';
  $('hearts').appendChild(h);
}

// the runaway No button
function dodge() {
  no.classList.add('run');
  const pad = 16;
  const maxX = window.innerWidth - no.offsetWidth - pad;
  const maxY = window.innerHeight - no.offsetHeight - pad;
  no.style.left = Math.max(pad, Math.random() * maxX) + 'px';
  no.style.top = Math.max(pad, Math.random() * maxY) + 'px';
}
document.addEventListener('mousemove', (e) => {
  if ($('ask').style.display === 'none') return;
  const r = no.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  if (Math.hypot(e.clientX - cx, e.clientY - cy) < 110) dodge();
});
no.addEventListener('touchstart', (e) => { e.preventDefault(); dodge(); }, { passive: false });
no.addEventListener('click', (e) => { e.preventDefault(); dodge(); });

// Yes: show the hugging cat
yes.addEventListener('click', () => {
  $('ask').style.display = 'none';
  $('reply').style.display = 'block';
  no.style.display = 'none';
});
