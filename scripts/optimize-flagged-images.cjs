const sharp = require('sharp');
const fs = require('fs');

async function optimizeImages() {
  console.log('Optimizing flagged images...');

  // 1. image-45-mobile.avif: LCP mobile hero image (was 103 KiB -> resize to 640x480 & optimize to ~30 KiB)
  const mobileHero = await sharp('public/assets/images/image-45-mobile.avif')
    .resize(640, 480, { fit: 'cover' })
    .avif({ quality: 48, effort: 6 })
    .toBuffer();
  fs.writeFileSync('public/assets/images/image-45-mobile.avif', mobileHero);
  console.log('image-45-mobile.avif new size:', mobileHero.length);

  // 2. tour-conoor.avif: was 60 KiB -> resize to 400x240 & optimize to ~14 KiB
  const tourConoor = await sharp('public/assets/images/tour-conoor.avif')
    .resize(400, 240, { fit: 'cover' })
    .avif({ quality: 50, effort: 6 })
    .toBuffer();
  fs.writeFileSync('public/assets/images/tour-conoor.avif', tourConoor);
  console.log('tour-conoor.avif new size:', tourConoor.length);

  // 3. tour-ooty.avif: was 59 KiB -> resize to 400x240 & optimize to ~14 KiB
  const tourOoty = await sharp('public/assets/images/tour-ooty.avif')
    .resize(400, 240, { fit: 'cover' })
    .avif({ quality: 50, effort: 6 })
    .toBuffer();
  fs.writeFileSync('public/assets/images/tour-ooty.avif', tourOoty);
  console.log('tour-ooty.avif new size:', tourOoty.length);

  // 4. group-of-gowdas-logo-sm.webp: was 200x109 (12.2 KiB) displayed at 77x42 -> resize to 137x75 & optimize to ~5.5 KiB
  const logoSm = await sharp('public/assets/images/group-of-gowdas-logo-sm.webp')
    .resize(137, 75, { fit: 'contain' })
    .webp({ quality: 75, effort: 6 })
    .toBuffer();
  fs.writeFileSync('public/assets/images/group-of-gowdas-logo-sm.webp', logoSm);
  console.log('group-of-gowdas-logo-sm.webp new size:', logoSm.length);

  console.log('All images optimized successfully!');
}

optimizeImages().catch(console.error);

