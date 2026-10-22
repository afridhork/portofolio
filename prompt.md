https://drive.google.com/file/d/1g-mV6F99k7SlHU86zOY-21DIMW5sBfF1/view?usp=sharing
apa nama teknik frontend ini? ini ada pada https://mercury.com/command

Bukan — itu teknik terpisah.

Yang kamu lihat itu efek scroll-driven entrance/reveal animation (text fly-in dari depan ke posisi), bukan bagian dari text knockout mask.

Perbedaannya

**Entrance/Fly-in**
• Fungsi: Text muncul dari luar layar (scale + translateZ dari besar ke normal) — efek depth/parallax saat scroll pertama kali

**Text Knockout Mask**
• Fungsi: Text jadi transparan/hollow — WebGL particle terlihat menembus huruf

Dari source code Mercury, keduanya memang dijalankan bareng dalam satu konteks (revealPhase, scrollDriven), tapi mekaniknya beda:

- Fly-in pakai CSS transform (scale, translateZ) + blur(0→8px) saat canvas belum siap — ini di-handle di fungsi ek dengan heroTextRef
- Knockout mask pakai activeMask yang mengontrol mix-blend-mode atau clip path supaya text transparan — ini di handle di textMaskVariantKey

Jadi kalau mau rekap, tekniknya ada 4, bukan 3:

1. WebGL Particle Ring — Three.js + custom GLSL
2. Scroll-Driven Fly-in — text entrance dari depan
3. Text Knockout Mask — text transparan → WebGL visible through letters
4. Chat Slideshow (Scrollytelling) — IntersectionObserver + horizontal scroll snaps

Yang kamu lihat di screencast itu kemungkinan besar gabungan #2 + #3 — text fly-in dulu, lalu begitu di posisi, mask aktif dan WebGL terlihat menembus huruf.
