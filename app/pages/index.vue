<template>
  <!-- =========================
       MAIN WRAPPER
       ========================= -->
  <div class="page">

    <!-- =========================
         01. HERO (첫 인상/한 줄 메시지)
         - 목적: 브랜드 첫 문장, 간단한 설명, 주요 CTA
         - 구성: 타이틀, 서브카피, 버튼 모양 div
         ========================= -->
    <div class="section hero">
      <div class="container">
        <div class="hero__title">개발 뿐만 아니라 SEO까지.<br>아이디벨은 퍼포먼스로 증명합니다.</div>
        <div class="hero__desc">
         접근성과 유지보수성, 그리고 검색 친화적인 구조를 기본으로 설계합니다.
        </div>
        <div class="hero__cta">프로젝트 문의</div>

        <!-- 이미지 자리(나중에 삽입 가능). 현재는 단색 박스 -->
        <div class="hero__art" aria-hidden="true"></div>
      </div>
    </div>

    <!-- =========================
         02. VALUE (핵심 가치/효과)
         - 목적: 숫자/간단 KPI로 효과 제시
         - 구성: 4칸 카드
         ========================= -->
    <div class="section value">
      <div class="container">
        <div class="sec-title">우리가 만들어낸 변화</div>
        <div class="value__grid">
          <div class="value__card">
            <div class="value__num">+38%</div>
            <div class="value__label">오가닉 클릭률</div>
          </div>
          <div class="value__card">
            <div class="value__num">0.9s</div>
            <div class="value__label">LCP(모바일)</div>
          </div>
          <div class="value__card">
            <div class="value__num">100</div>
            <div class="value__label">SEO 점수</div>
          </div>
          <div class="value__card">
            <div class="value__num">A+</div>
            <div class="value__label">접근성</div>
          </div>
        </div>
      </div>
    </div>

    <!-- =========================
         03. SERVICES (무엇을 하는가)
         - 목적: 제공 서비스 한 눈에
         - 구성: 2~4칸 카드형 설명
         ========================= -->
    <div class="section services">
      <div class="container">
        <div class="sec-title">무엇을 하냐고요?</div>
        <div class="services__grid">
          <div class="svc-card">
            <div class="svc-card__title">SSR/SSG 렌더링</div>
            <div class="svc-card__desc">정적 프리렌더/서버사이드 렌더로 크롤러 친화적 구조.</div>
          </div>
          <div class="svc-card">
            <div class="svc-card__title">Core Web Vitals</div>
            <div class="svc-card__desc">LCP/CLS/INP 중심 성능 최적화, 이미지/폰트/코드 스플리팅 기본.</div>
          </div>
          <div class="svc-card">
            <div class="svc-card__title">구조화 데이터/SEO</div>
            <div class="svc-card__desc">Organization/WebSite/FAQ 스키마 설계로 검색 노출 강화.</div>
          </div>
          <div class="svc-card">
            <div class="svc-card__title">관리도구 통합</div>
            <div class="svc-card__desc">AG-Grid, PrimeVue, CKEditor 5 등 실무형 Admin 구축.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- =========================
         04. PROCESS (프로세스)
         - 목적: 일하는 방식/단계 명확화
         - 구성: 4단계 박스(라인 카드)
         ========================= -->
    <div class="section process">
      <div class="container">
        <div class="sec-title">프로세스</div>
        <div class="process__grid">
          <div class="process__step">
            <div class="step__tag">01</div>
            <div class="step__title">진단</div>
            <div class="step__desc">현 상태 계측. SEO/퍼포먼스 위협 식별.</div>
          </div>
          <div class="process__step">
            <div class="step__tag">02</div>
            <div class="step__title">설계</div>
            <div class="step__desc">라우팅/데이터/빌드 전략 + 메타/스키마/캐시 설계.</div>
          </div>
          <div class="process__step">
            <div class="step__tag">03</div>
            <div class="step__title">구현</div>
            <div class="step__desc">Nuxt/Vue/TS 기반 모듈화·테스트·접근성 준수.</div>
          </div>
          <div class="process__step">
            <div class="step__tag">04</div>
            <div class="step__title">검증/출시</div>
            <div class="step__desc">Lighthouse/GSC/로그 검증 후 Pages·Docker 릴리스.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- =========================
         05. TECH (기술스택)
         - 목적: 사용하는 기술 키워드 나열
         - 구성: 칩 형태 배지
         ========================= -->
    <div class="section tech">
      <div class="container">
        <div class="sec-title">스택</div>
        <div class="tech__chips">
          <div class="chip">Nuxt</div><div class="chip">Vue</div><div class="chip">TypeScript</div>
          <div class="chip">AG-Grid</div><div class="chip">PrimeVue</div><div class="chip">CKEditor</div>
          <div class="chip">TailwindCSS</div><div class="chip">Docker</div><div class="chip">GitHub Pages</div>
        </div>
      </div>
    </div>

    <!-- =========================
         06. SOCIAL PROOF (간단 후기/신뢰)
         - 목적: 간단한 추천 문구
         - 구성: 인용 박스
         ========================= -->
    <div class="section quote">
      <div class="container">
        <div class="quote__box">
          <div class="quote__text">“인덱싱 이슈가 해소되고 성능 점수가 눈에 띄게 개선됐습니다.”</div>
          <div class="quote__cite">— 고객사 PM</div>
        </div>
      </div>
    </div>

    <!-- =========================
         07. CONTACT (문의)
         - 목적: CTA 최종 유도
         - 구성: 제목/설명/버튼 모양 div
         ========================= -->
    <div class="section contact" id="contact">
      <div class="container">
        <div class="sec-title">프로젝트를 시작해볼까요?</div>
        <div class="contact__desc">간단한 소개와 범위를 보내주시면 빠르게 검토해 드립니다.</div>
        <div class="contact__cta">이메일 보내기</div>
      </div>
    </div>

    <!-- =========================
         08. FOOTER
         - 목적: 저작권/간단 정보
         - 구성: 단일 라인
         ========================= -->
    <div class="footer">
      <div class="container">
        <div class="footer__text">© IDEVEL. All rights reserved.</div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* ========== 공통 레이아웃 ========== */
.page { display: block; }
.section { padding: 72px 16px; }
.container { max-width: 1120px; margin: 0 auto; }

/* ========== 타이포/기본 색상 ========== */
.sec-title { font-weight: 800; font-size: clamp(22px, 3vw, 32px); margin-bottom: 16px; }
.note { color: #666; font-size: 14px; margin-top: 8px; }

/* ========== 01. HERO ========== */
.hero {
  background:
      radial-gradient(1200px 600px at 15% -10%, rgba(76,110,245,.10), transparent 60%),
      radial-gradient(900px 500px at 90% 0%, rgba(34,197,94,.10), transparent 60%);
}
.hero__title { font-weight: 900; font-size: clamp(28px, 4.5vw, 56px); line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.01em; }
.hero__desc { color: #555; font-size: clamp(15px, 2vw, 18px); margin-bottom: 20px; }
.hero__cta { display: inline-block; padding: 12px 18px; border: 1px solid #111; border-radius: 10px; font-weight: 700; background: #111; color: #fff; }
.hero__art { margin-top: 24px; height: 220px; background: #f2f4f7; border: 1px dashed #d1d5db; border-radius: 12px; }

/* ========== 02. VALUE ========== */
.value { background: #fafafa; }
.value__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
.value__card { background: #fff; border: 1px solid #eee; border-radius: 12px; padding: 16px; text-align: center; }
.value__num { font-weight: 900; font-size: 28px; }
.value__label { color: #666; margin-top: 4px; }

/* ========== 03. SERVICES ========== */
.services__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
.svc-card { border: 1px solid #eee; border-radius: 12px; padding: 16px; background: #fff; }
.svc-card__title { font-weight: 800; margin-bottom: 6px; }
.svc-card__desc { color: #555; }

/* ========== 04. PROCESS ========== */
.process { background: #fafafa; }
.process__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
.process__step { border: 1px solid #eee; background: #fff; border-radius: 12px; padding: 16px; position: relative; }
.step__tag { position: absolute; top: 12px; right: 12px; font-weight: 800; color: #94a3b8; }
.step__title { font-weight: 800; margin-bottom: 6px; }
.step__desc { color: #555; }

/* ========== 05. TECH ========== */
.tech__chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.chip { border: 1px solid #eee; border-radius: 999px; padding: 6px 12px; font-size: 14px; }

/* ========== 06. QUOTE ========== */
.quote { background: #fff; }
.quote__box { border-left: 4px solid #e5e7eb; padding-left: 16px; }
.quote__text { color: #444; margin-bottom: 6px; }
.quote__cite { color: #6b7280; font-size: 14px; }

/* ========== 07. CONTACT ========== */
.contact { background: #fafafa; text-align: left; }
.contact__desc { color: #555; margin-bottom: 12px; }
.contact__cta { display: inline-block; padding: 12px 18px; border: 1px solid #111; border-radius: 10px; font-weight: 700; background: #111; color: #fff; }

/* ========== 08. FOOTER ========== */
.footer { padding: 32px 16px; border-top: 1px solid #eee; text-align: center; color: #666; }

/* ========== 반응형 ========== */
@media (max-width: 1024px) {
  .services__grid, .process__grid, .value__grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 640px) {
  .services__grid, .process__grid, .value__grid { grid-template-columns: 1fr; }
}
</style>
