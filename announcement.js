(function() {
  var bar = document.createElement('div');
  bar.id = 'clinic-announcement-bar';
  bar.style.cssText = [
    'background:#CC0000',
    'color:#ffffff',
    'padding:10px 40px',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'gap:20px',
    'flex-wrap:wrap',
    'font-family:"Inter",system-ui,sans-serif',
    'font-size:13px',
    'font-weight:500',
    'letter-spacing:0.04em',
    'text-align:center',
    'position:relative',
    'z-index:200'
  ].join(';');

  bar.innerHTML = [
    '<span>📅 <strong>Beyond the Record — Free Expungement Clinic</strong>',
    '&nbsp;&middot;&nbsp; September 10 &amp; 11, 2026 &nbsp;&middot;&nbsp; Cincinnati, OH</span>',
    '<a href="expungement-clinic.html"',
    'style="background:#ffffff;color:#CC0000;padding:7px 18px;border-radius:3px;',
    'font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;',
    'text-decoration:none;white-space:nowrap;transition:opacity 0.2s;"',
    'onmouseover="this.style.opacity=\'0.85\'"',
    'onmouseout="this.style.opacity=\'1\'"',
    '>Register Now &rarr;</a>'
  ].join(' ');

  var body = document.body;
  body.insertBefore(bar, body.firstChild);
})();
