import sharp from "sharp";
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const imagesDir = path.join(rootDir, "public", "images");
const appDir = path.join(rootDir, "app");

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 1. Generate Logo (512x512 transparent PNG)
const lotusSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5A623" />
      <stop offset="50%" stop-color="#E8832A" />
      <stop offset="100%" stop-color="#A35208" />
    </linearGradient>
    <linearGradient id="lotusGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34A853" />
      <stop offset="100%" stop-color="#1F6B38" />
    </linearGradient>
  </defs>

  <!-- Central Petal -->
  <path d="M256 80 C235 170 235 310 256 360 C277 310 277 170 256 80 Z" 
        fill="url(#lotusGold)" />

  <!-- Inner Left Petal -->
  <path d="M256 160 C200 180 160 250 195 345 C220 310 245 270 256 220 Z" 
        fill="url(#lotusGold)" opacity="0.95" />

  <!-- Inner Right Petal -->
  <path d="M256 160 C312 180 352 250 317 345 C292 310 267 270 256 220 Z" 
        fill="url(#lotusGold)" opacity="0.95" />

  <!-- Outer Left Petal -->
  <path d="M256 240 C165 245 105 315 145 385 C185 365 225 340 256 315 Z" 
        fill="url(#lotusGold)" opacity="0.85" />

  <!-- Outer Right Petal -->
  <path d="M256 240 C347 245 407 315 367 385 C327 365 287 340 256 315 Z" 
        fill="url(#lotusGold)" opacity="0.85" />

  <!-- Base Leaf Left -->
  <path d="M256 370 C180 375 130 415 100 425 C145 435 210 420 256 395 Z" 
        fill="url(#lotusGreen)" />

  <!-- Base Leaf Right -->
  <path d="M256 370 C332 375 382 415 412 425 C367 435 302 420 256 395 Z" 
        fill="url(#lotusGreen)" />

  <!-- Central Lotus Base Gem -->
  <circle cx="256" cy="380" r="12" fill="url(#lotusGold)" />
</svg>
`;

await sharp(Buffer.from(lotusSvg))
  .resize(512, 512)
  .png()
  .toFile(path.join(imagesDir, "logo.png"));

console.log("Created public/images/logo.png");

// 2. Generate Favicon app/icon.png (512x512 on dark green circle)
const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="128" fill="#1F6B38" />
  <g transform="translate(25.6, 25.6) scale(0.9)">
    ${lotusSvg}
  </g>
</svg>
`;

await sharp(Buffer.from(iconSvg))
  .resize(512, 512)
  .png()
  .toFile(path.join(appDir, "icon.png"));

console.log("Created app/icon.png");

// 3. Generate app/opengraph-image.jpg (1200x630)
const heroPath = path.join(imagesDir, "hero-spa.jpg");
if (fs.existsSync(heroPath)) {
  const heroCropped = await sharp(heroPath)
    .resize(600, 630, { fit: "cover" })
    .toBuffer();

  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="630" fill="#1F6B38" />
    <text x="60" y="160" font-family="Georgia, serif" font-size="28" font-weight="600" fill="#E8832A" letter-spacing="4">LIFE MEDICAL SPA</text>
    <text x="60" y="240" font-family="Georgia, serif" font-size="52" font-weight="700" fill="#F4EEE6">Wellness &amp; Medical Spa</text>
    <text x="60" y="300" font-family="Georgia, serif" font-size="52" font-weight="700" fill="#F4EEE6">in Garki, Abuja</text>
    <line x1="60" y1="340" x2="220" y2="340" stroke="#E8832A" stroke-width="3" />
    <text x="60" y="400" font-family="sans-serif" font-size="24" fill="#F4EEE6" opacity="0.9">Swedish &amp; Deep Tissue Massage</text>
    <text x="60" y="440" font-family="sans-serif" font-size="24" fill="#F4EEE6" opacity="0.9">Organic Facials, Scrubs &amp; Body Polishing</text>
    <text x="60" y="480" font-family="sans-serif" font-size="24" fill="#F4EEE6" opacity="0.9">Infrared Sauna &amp; Hyperbaric Oxygen Therapy</text>
    <text x="60" y="550" font-family="sans-serif" font-size="22" font-weight="600" fill="#E8832A">7 Kontagora Close, Area 3, Garki</text>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .composite([{ input: heroCropped, left: 600, top: 0 }])
    .jpeg({ quality: 90 })
    .toFile(path.join(appDir, "opengraph-image.jpg"));

  console.log("Created app/opengraph-image.jpg");
}

// 4. Generate remaining service images from available high-res spa photos
async function createServiceImage(sourceFile, targetFile, options = {}) {
  const src = path.join(imagesDir, sourceFile);
  const dst = path.join(imagesDir, targetFile);
  if (fs.existsSync(src)) {
    let pipeline = sharp(src).resize(800, 800, {
      fit: "cover",
      position: options.position || "center"
    });
    if (options.modulate) {
      pipeline = pipeline.modulate(options.modulate);
    }
    if (options.tint) {
      pipeline = pipeline.tint(options.tint);
    }
    await pipeline.jpeg({ quality: 88 }).toFile(dst);
    console.log(`Created public/images/${targetFile}`);
  }
}

// service-trigger-point: focused back tension
await createServiceImage("service-deep-tissue.jpg", "service-trigger-point.jpg", {
  position: "top",
  modulate: { brightness: 1.05 }
});

// service-scrub-sauna: sauna session
await createServiceImage("therapy-room.jpg", "service-scrub-sauna.jpg", {
  position: "left"
});

// service-body-polishing: oils & glow
await createServiceImage("offer-massage.jpg", "service-body-polishing.jpg", {
  position: "right"
});

// service-waxing: clean aesthetic treatment
await createServiceImage("offer-facials.jpg", "service-waxing.jpg", {
  position: "bottom"
});

// service-green-led: green LED skin therapy
await createServiceImage("service-facials.jpg", "service-green-led.jpg", {
  position: "top",
  tint: { r: 180, g: 230, b: 190 }
});

// service-colonic: clinical wellness suite
await createServiceImage("therapy-room.jpg", "service-colonic.jpg", {
  position: "right"
});

// service-wira: infrared warmth therapy
await createServiceImage("offer-therapies.jpg", "service-wira.jpg", {
  position: "right"
});

console.log("Asset preparation complete!");
