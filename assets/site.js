/* 나도 국제학교(가칭) — shared behaviour */
(function () {
  'use strict';

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav
  var mnav = document.getElementById('mobileNav');
  var burger = document.getElementById('burger');
  if (mnav && burger) {
    var close = mnav.querySelector('.mclose');
    var open = function () { mnav.classList.add('open'); document.body.style.overflow = 'hidden'; };
    var shut = function () { mnav.classList.remove('open'); document.body.style.overflow = ''; };
    burger.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    mnav.addEventListener('click', function (e) { if (e.target === mnav) shut(); });
    mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shut); });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Accordion
  document.querySelectorAll('.acc-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item');
      var ans = item.querySelector('.acc-a');
      var isOpen = item.classList.contains('open');
      if (isOpen) {
        item.classList.remove('open');
        ans.style.maxHeight = null;
      } else {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  // Lead form -> FormSubmit.co (email set per-deploy)
  var form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var endpoint = form.getAttribute('data-endpoint');
      var btn = form.querySelector('button[type="submit"]');
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = '전송 중…'; }
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (!res.ok) throw new Error('failed');
        var fields = document.getElementById('formFields');
        var ok = document.getElementById('formSuccess');
        if (fields) fields.style.display = 'none';
        if (ok) ok.style.display = 'block';
      }).catch(function () {
        alert('전송 중 문제가 발생했어요. 전화로 문의해주시면 바로 도와드릴게요.');
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = label; }
      });
    });
  }

  // Footer year
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ChannelTalk — 실시간 상담 위젯 */
(function () {
  var w = window;
  if (w.ChannelIO) { return w.console.error('ChannelIO script included twice.'); }
  var ch = function () { ch.c(arguments); };
  ch.q = [];
  ch.c = function (args) { ch.q.push(args); };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) { return; }
    w.ChannelIOInitialized = true;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
    var x = document.getElementsByTagName('script')[0];
    if (x.parentNode) { x.parentNode.insertBefore(s, x); }
  }
  if (document.readyState === 'complete') { l(); }
  else { w.addEventListener('DOMContentLoaded', l); w.addEventListener('load', l); }

  ChannelIO('boot', { pluginKey: '5546e3e5-970c-45c6-bd6e-94493260a4d3' });
})();
