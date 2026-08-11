# Opsi Update Portfolio — Teknik & Teknologi

Daftar teknik dan teknologi untuk tiga skala rombak tampilan portfolio.
Semua opsi berbasis stack yang sudah terpasang: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, Lenis, React Three Fiber, Zustand.

---

## Opsi A — Visual Refresh

Fokus pada penyegaran visual tanpa mengubah struktur halaman secara besar.

### Teknologi
| Teknologi | Status | Untuk apa |
|---|---|---|
| Next.js 14 App Router | ✅ sudah ada | struktur halaman & routing |
| React 18 | ✅ sudah ada | komponen |
| TypeScript | ✅ sudah ada | type safety |
| Tailwind CSS | ✅ sudah ada | styling utama |
| Framer Motion | ✅ sudah ada | animasi ringan |
| Zustand | ✅ sudah ada | state global |

### Teknik
| Teknik | Fungsi |
|---|---|---|
| Design tokens | warna, spacing, radius konsisten via CSS custom properties |
| `clamp()` | responsive typography |
| `100svh` / `100dvh` | viewport mobile akurat (hero full screen) |
| CSS Grid + Flexbox | layout |
| `whileInView` | reveal animation saat masuk viewport |
| `prefers-reduced-motion` | aksesibilitas |
| `backdrop-filter` | glassmorphism terbatas (navbar saja) |

### Yang tidak ditambahkan
- Library baru
- Scroll hijacking
- 3D di setiap section

### Hasil
Tampilan lebih segar dan modern, struktur halaman tetap.

---

## Opsi B — Section Redesign (Rekomendasi)

Redesign section utama dengan parallax terukur, sticky layout, dan scroll-driven storytelling.

### Teknologi
| Teknologi | Status | Untuk apa |
|---|---|---|
| Next.js 14 App Router | ✅ sudah ada | struktur halaman & routing |
| React 18 | ✅ sudah ada | komponen |
| FilesJson module | ✅ sudah ada | data project |
| Framer Motion | ✅ sudah allowad | scroll animation & parallax |
| Tailwind CSS | ✅ sudah ada | styling utama |
| Lenis | ✅ sudah ada | smooth scroll |
| React Three Fiber | ✅ sudah ada | skills sphere & hero ambient |
| Zustand | ✅ already ada | state (device, scroll position) |

### Teknik
| Teknik | Fungsi |
|---|---|
| `position: sticky` | section menempel saat scroll (skills heading, timeline year) |
| `useScroll` + `useTransform` | scroll-driven animation (hero fade, image parallax) |
| `useSpring` | animasi halus (mouse parallax, scroll progress) |
| Sticky two-column | layout desktop kiri-tetap, kanan-scrolling |
| Scroll transform parallax | dua layer bergerak kecepatan berbeda |
| Mouse parallax | hero background subtle |
| Scroll progress bar | progress indicator di atas navbar |
| `clamp()` | responsive typography |
| `100svh` / `100dvh` | viewport mobile akurat |
| CSS Grid + Flexbox | layout |
| CSS custom properties | design tokens |
| `prefers-reduced-motion` | aksesibilitas |
| Intersection Observer | performa (lazy reveal) |

### Yang tidak ditambahkan
| Library | Alasan |
|---|---|
| GSAP | Framer Motion sudah cukup |
| Scroll-driven animations API | belum stabil cross-browser |
| View Transitions API | Next.js 14 belum stabil penuh |
| Smooth scroll library lain | Lenis already ada |
| Locomotive Scroll | deprecated, Lenis sudah ada |
| Custom cursor | mengganggu UX |
| Scroll hijacking | buruk untuk UX |

### Hasil
Portfolio bercerita seperti perjalanan scroll interaktif. Modern, tidak over-engineered.

---

## Opsi C — Full Rebuild

Rebuild seluruh struktur halaman, data model project, detail page, transition system, performance, dan accessibility audit.

### Teknologi
| Teknologi | Status | opsi B + tambahan] | Untuk apa |
|---|---|---|---|
| Next.js 14 App Router | ✅ sudah ada | struktur halaman & routing |
| React 18 | ✅ already ada | komponen |
| TypeScript | ✅ sudah ada | type safety |
| Framer Motion | ✅ sudah ada | scroll animation & parallax |
| Tailwind CSS | ✅ sudah ada | styling utama |
| **Radix UI** | 🆕 tambahan | accessible primitives (Dialog, Accordion, Tabs) |
| **cmdk** | 🆕 tambahan | command palette (opsional) |
| Lenis | ✅ sudah ada | smooth scroll |
| React Three Fiber | ✅ already ada | skills sphere & hero ambient |
| Zustand | ✅ sudah ada | state (device, scroll position) |
| **React Aria** | 🆕 tambahan | accessibility hooks |

### Tekunologi [Teknik]
| Teknik | Fungsi |
|---|---|---|
| Semantic HTML | struktur konten dengan tag semantik (section, article, nav) |
| View Transitions API | transisi antar halaman/halaman ke detail project |
| Scroll-driven animations API | scroll-linked CSS animations |
| Native CSS Nesting | stylesheet lebih terstruktur |
| `:has()` selector | layout berbasis parent |
| Suspense streaming | partial hydration & streaming SSR |
| `@container` queries | komponen yang menyesuaikan berdasarkan lebar container |
| Responsive clamp() | responsive typography & spacing |
| `position: experimental` | eksperimen layout baru |
| CSS **Houdini** | paint worklet untuk efek custom (grid background) |

### Yang ditambahkan
| Library | Untuk apa |
|---|---|
| Radix UI | accessible primitives tanpa styling opinionated |
| cmdk | command palette (opsional, opsional) |
| React Aria | accessibility hooks untuk komponen custom |

### Hasil
Portfolio modern penuh dengan transisi halus, data model baru, performance dan accessibility audit menyeluruh.

### Risiko
- Waktu pengerjaan lebih lama
- Risiko bug lebih tinggi
- Bundle size bertambah
- Kompleksitas maintenance naik

---

## Ringkasan perbandingan

| Aspek | Opsi A | Opsi B | Opsi C |
|---|---|---|---|
| Skala perubahan | Kecil | Sedang | Besar |
| Dependency baru | Tidak | Tidak | Ya (Radix, cmdk, React Aria) |
| Teknik modern | Dasar | Parallax + Sticky + Scroll-driven | Opsi B + View Transitions + Houdini + Container Queries |
| Waktu | 1-2 hari | 3-5 hari | 1-2 minggu |
| Bundle size impact | Netral / turun | Netral | Naik |
| Aksesibilitas | `prefers-reduced-motion` | Opsi A + semantic HTML | Opsi B + Radix/React Aria |
| Risk | Rendah | Sedang | Tinggi |
| Rekomendasi | Quick win | **Best balance** | Ambitious |

### Rekomendasi akhir
- **Opsi B** untuk hasil terbaik dengan risiko dan waktu terkontrol.
- Opsi A jika hanya ingin penyegaran cepat.
- Opsi C jika ingin portfolio yang sangat ambisius dan punya waktu untuk audit penuh.
