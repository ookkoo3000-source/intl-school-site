/* 홈 진입 팝업 — index.html 전용. 클릭 시 실시간 상담(ChannelTalk)으로 연결 */
(function () {
  function init() {
    if (document.getElementById('entryPopup')) { return; }
    var wrap = document.createElement('div');
    wrap.id = 'entryPopup';
    wrap.className = 'entry-popup';
    wrap.innerHTML =
      '<div class="ep-card">' +
        '<button type="button" class="ep-close" aria-label="닫기">✕</button>' +
        '<span class="ep-eyebrow">Free Consultation</span>' +
        '<div class="ep-title">30분 무료 상담 &amp; 무료 모의수업</div>' +
        '<p class="ep-desc">학교와 커리큘럼만 알려주시면 담당 교사가 바로 확인해 드립니다. 지금 실시간으로 문의해보세요.</p>' +
        '<button type="button" class="ep-btn" id="entryPopupBtn">문의하기</button>' +
      '</div>';
    document.body.appendChild(wrap);

    function openP() { wrap.classList.add('open'); }
    function closeP() { wrap.classList.remove('open'); }

    wrap.querySelector('.ep-close').addEventListener('click', closeP);
    wrap.addEventListener('click', function (e) { if (e.target === wrap) { closeP(); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeP(); } });
    document.getElementById('entryPopupBtn').addEventListener('click', function () {
      closeP();
      if (typeof ChannelIO === 'function') { ChannelIO('showMessenger'); }
    });

    setTimeout(openP, 900);
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();
