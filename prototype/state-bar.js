(function () {
  if (window.__lvStateBar) return; window.__lvStateBar = true;
  var H = 30;
  var css = document.createElement('style');
  css.textContent = 'body{padding-top:' + H + 'px!important;box-sizing:border-box}[style*="height: 100vh"]{height:calc(100vh - ' + H + 'px)!important}' +
    '#lv-state-bar{position:fixed;top:0;left:0;right:0;height:' + H + 'px;z-index:2147483000;display:flex;align-items:center;gap:6px;padding:0 12px;background:#0f172a;color:#94a3b8;font:500 12px/1 "Be Vietnam Pro",system-ui,sans-serif;overflow-x:auto;white-space:nowrap;scrollbar-width:none;box-shadow:0 1px 0 rgba(255,255,255,.06)}' +
    '#lv-state-bar b{color:#e2e8f0;font-weight:600;margin-right:4px}#lv-state-bar i{font-style:normal;color:#64748b;margin:0 2px 0 8px}' +
    '#lv-state-bar a{display:inline-flex;align-items:center;height:22px;padding:0 10px;border-radius:999px;border:1px solid rgba(255,255,255,.16);color:#cbd5e1;text-decoration:none;flex-shrink:0}' +
    '#lv-state-bar a:hover{background:rgba(255,255,255,.08);color:#fff}#lv-state-bar a[aria-current]{background:#84cc16;border-color:#84cc16;color:#003527;font-weight:600}' +
    '#lv-state-bar span.n{margin-left:auto;padding-left:16px;color:#475569}';
  document.head.appendChild(css);
  function draw(cfg) {
    if (!cfg || !document.body) return false;
    var bar = document.getElementById('lv-state-bar');
    if (!bar) { bar = document.createElement('div'); bar.id = 'lv-state-bar'; bar.setAttribute('data-lv-ui', ''); bar.setAttribute('role', 'toolbar'); bar.setAttribute('aria-label', 'Chuyển trạng thái thiết kế'); document.body.appendChild(bar); }
    var html = '<b>Trạng thái:</b>', g = null;
    cfg.list.forEach(function (s) {
      if (s.g && s.g !== g) { g = s.g; html += '<i>' + g + '</i>'; }
      var u = new URL(location.href); u.searchParams.set('state', s.k);
      html += '<a href="' + u.pathname.split('/').pop() + u.search + '"' + (s.k === cfg.cur ? ' aria-current="true"' : '') + '>' + s.l + '</a>';
    });
    bar.innerHTML = html + '<span class="n">Chỉ dùng để xem thiết kế</span>';
    var cur = bar.querySelector('[aria-current]'); if (cur) bar.scrollLeft = Math.max(0, cur.offsetLeft - 200);
    return true;
  }
  var tries = 0, t = setInterval(function () { if (draw(window.LV_STATES) || ++tries > 60) clearInterval(t); }, 150);
  window.addEventListener('lv-states', function () { draw(window.LV_STATES); });
})();
