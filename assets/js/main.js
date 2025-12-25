// =====================
// SCROLL REVEAL
// =====================
const srElements = document.querySelectorAll('.hero, .section, .card');

const revealOnScroll = () => {
  srElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =====================
// APPLY NOW MODAL
// =====================
const modalHTML = `
<div id="applyModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:200;justify-content:center;align-items:center;">
  <div style="background:#0b0b0b;padding:40px;border-radius:10px;max-width:500px;width:90%;position:relative;">
    <span id="closeModal" style="position:absolute;top:15px;right:20px;cursor:pointer;font-size:24px;">&times;</span>
    <h2>Apply Now</h2>
    <form class="contact-form">
      <input type="text" placeholder="Name" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Message" rows="4" required></textarea>
      <button class="btn" type="submit">Submit Application</button>
    </form>
  </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

const modal = document.getElementById('applyModal');
const closeModal = document.getElementById('closeModal');
window.openApplyModal = () => modal.style.display = 'flex';
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display='none'; }