import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { BLOG_POSTS } from '../src/data/blogData.js';
import { COURSES_DATA } from '../src/data/coursesData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = process.env.VITE_SITE_URL || 'https://anita-pranic-healing.vercel.app';
const BRAND_NAME = 'Anita Khandelwal Pranic Healing';
const DEFAULT_IMAGE = `${DOMAIN}/images/anita-headshot.jpg`;

const BASE_ROUTES = {
  '/': {
    title: 'Anita Khandelwal — Certified GMCKS Pranic Healer & Instructor | Jaipur',
    description: 'Certified Grand Master Choa Kok Sui (GMCKS) Healer and Authorized Instructor Anita Khandelwal. In-person & global distance healing sessions, certified Level 1-3 courses, and free Sunday Meditation on Twin Hearts in Jaipur, India.',
    priority: '1.0',
    changefreq: 'weekly',
    type: 'website'
  },
  '/about': {
    title: 'About Anita Khandelwal — 16+ Years GMCKS Lineage, Arhatic Yoga & Heritage',
    description: 'Discover Anita Khandelwal’s 16-year journey, Arhatic Yoga Level 2 initiation, affiliation with GMCKS Rajasthan Trust and World Pranic Healing Foundation Manila, and community leadership.',
    priority: '0.8',
    changefreq: 'monthly',
    type: 'profile'
  },
  '/healing-sessions': {
    title: 'Private Pranic Healing Sessions & Chronic Protocols | Anita Khandelwal',
    description: 'Book non-touch, drug-free Pranic Healing sessions in Jaipur or online distance healing for migraines, back pain, sciatica, anxiety, insomnia, and post-op recovery.',
    priority: '0.9',
    changefreq: 'weekly',
    type: 'service'
  },
  '/courses': {
    title: 'GMCKS Certified Pranic Healing Workshops (Levels 1–3) | Jaipur & Online',
    description: 'Learn certified Basic Pranic Healing (Level 1), Advanced (Level 2), and Pranic Psychotherapy (Level 3) under authorized instructor Anita Khandelwal. Globally valid IISI Manila certifications.',
    priority: '0.9',
    changefreq: 'weekly',
    type: 'service'
  },
  '/twin-hearts-meditation': {
    title: 'Free Meditation on Twin Hearts | Guided Sunday Practice with Anita Khandelwal',
    description: 'Join Anita Khandelwal every Sunday for free guided Meditation on Twin Hearts via Zoom. Flush out stress and negative emotions in 25 minutes.',
    priority: '0.8',
    changefreq: 'weekly',
    type: 'event'
  },
  '/certificates': {
    title: '18 Verified GMCKS Credentials & Instructor Diplomas | Anita Khandelwal',
    description: 'View 18 verified certificates and official instructor authorizations issued by the World Pranic Healing Foundation and Institute for Inner Studies, Manila.',
    priority: '0.8',
    changefreq: 'monthly',
    type: 'website'
  },
  '/blog': {
    title: 'Pranic Healing Knowledge Sanctuary | Energy Science & Clinical Insights',
    description: 'Explore thoughtful articles by Anita Khandelwal demystifying chakras, bioplasmic auras, distance healing science, and non-touch recovery protocols.',
    priority: '0.8',
    changefreq: 'weekly',
    type: 'blog'
  },
  '/contact': {
    title: 'Contact Anita Khandelwal | Jaipur Healing Sanctuary & Online Care',
    description: 'Schedule a confidential healing appointment or inquire about certified courses. Jaipur clinic location, phone, and direct WhatsApp consultation.',
    priority: '0.7',
    changefreq: 'monthly',
    type: 'website'
  }
};

async function prerender() {
  const distDir = path.resolve(rootDir, 'dist');
  const templatePath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run client build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const serverEntryPath = path.resolve(rootDir, 'dist-server', 'entry-server.js');
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  console.log('Starting Static Site Generation (SSG) with Multi-Schema SEO Pipeline...');

  // Build combined route manifest including all blog articles
  const allRoutes = { ...BASE_ROUTES };

  for (const post of BLOG_POSTS) {
    allRoutes[`/blog/${post.slug}`] = {
      title: `${post.title} | Anita Khandelwal`,
      description: post.metaDescription,
      priority: '0.8',
      changefreq: 'monthly',
      type: 'article',
      postData: post
    };
  }

  const sitemapUrls = [];
  const currentDate = new Date().toISOString().split('T')[0];

  for (const [route, meta] of Object.entries(allRoutes)) {
    const { html: appHtml } = render(route);

    let rendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Replace title
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);

    // Replace meta description
    rendered = rendered.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${meta.description}" />`
    );

    // OpenGraph & Twitter Meta Tags
    const ogImage = meta.postData ? `${DOMAIN}${meta.postData.featuredImage}` : DEFAULT_IMAGE;
    const ogType = meta.type === 'article' ? 'article' : 'website';

    const socialTags = `
    <!-- OpenGraph Metadata -->
    <meta property="og:site_name" content="${BRAND_NAME}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${DOMAIN}${route}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:secure_url" content="${ogImage}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="670" />
    <meta property="og:image:height" content="680" />
    <meta property="og:image:alt" content="${meta.title}" />
    <meta property="og:locale" content="en_IN" />

    <!-- Twitter Card Metadata -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <link rel="canonical" href="${DOMAIN}${route}" />
    `;

    // Multi-Schema.org Generation
    const schemas = [];

    // Base Organization & Local Business Schema
    const baseBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "@id": `${DOMAIN}/#business`,
      "name": BRAND_NAME,
      "alternateName": "Anita Khandelwal Pranic Healing & Meditation Sanctuary",
      "description": "Certified Grand Master Choa Kok Sui (GMCKS) Pranic Healing, Arhatic Yoga, private sessions, and authorized instructor training.",
      "url": DOMAIN,
      "telephone": "+919829000000",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C-Scheme",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.9124,
        "longitude": 75.7873
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "@id": `${DOMAIN}/#anita`,
        "name": "Anita Khandelwal",
        "image": `${DOMAIN}/images/anita-portrait.jpg`,
        "jobTitle": "Certified GMCKS Pranic Healer & Authorized Instructor",
        "alumniOf": [
          "World Pranic Healing Foundation, Manila",
          "Institute for Inner Studies, Manila"
        ]
      }
    };
    schemas.push(baseBusinessSchema);

    // Contextual Page Schemas
    if (meta.type === 'article' && meta.postData) {
      const post = meta.postData;

      // 1. Article / BlogPosting Schema
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "image": `${DOMAIN}${post.featuredImage}`,
        "datePublished": "2026-11-04T08:00:00+05:30",
        "dateModified": currentDate,
        "author": {
          "@type": "Person",
          "name": post.author,
          "jobTitle": post.authorTitle,
          "url": `${DOMAIN}/about`
        },
        "publisher": {
          "@type": "Organization",
          "name": BRAND_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `${DOMAIN}/favicon.svg`
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${DOMAIN}${route}`
        }
      };
      schemas.push(articleSchema);

      // 2. Breadcrumbs Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": DOMAIN
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Base",
            "item": `${DOMAIN}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${DOMAIN}${route}`
          }
        ]
      };
      schemas.push(breadcrumbSchema);

      // 3. FAQPage Schema (Rich Google SERP FAQ Accordions)
      if (post.faqs && post.faqs.length > 0) {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };
        schemas.push(faqSchema);
      }
    } else if (route === '/courses') {
      // Course Listing Schema
      const courseSchemas = COURSES_DATA.map(c => ({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": c.title,
        "description": c.tagline,
        "provider": {
          "@type": "Organization",
          "name": BRAND_NAME,
          "sameAs": DOMAIN
        },
        "offers": [
          {
            "@type": "Offer",
            "price": c.fees.inr.fresher,
            "priceCurrency": "INR",
            "category": "Fresher Registration"
          }
        ],
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["onsite", "blended"],
          "location": "Jaipur Center, Rajasthan",
          "instructor": {
            "@type": "Person",
            "name": "Anita Khandelwal"
          }
        }
      }));
      schemas.push(...courseSchemas);
    }

    // Inject Scripts into <head>
    const schemaTags = schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
    if (rendered.includes('<!-- META_TAGS -->')) {
      rendered = rendered.replace('<!-- META_TAGS -->', `${socialTags}\n${schemaTags}`);
    } else {
      rendered = rendered.replace('</head>', `${socialTags}\n${schemaTags}\n</head>`);
    }

    // Output target
    let targetPath;
    if (route === '/') {
      targetPath = templatePath;
    } else {
      const dir = path.join(distDir, route.replace(/^\//, ''));
      fs.mkdirSync(dir, { recursive: true });
      targetPath = path.join(dir, 'index.html');
    }

    fs.writeFileSync(targetPath, rendered, 'utf-8');
    console.log(`✓ Pre-rendered: ${route} -> ${path.relative(rootDir, targetPath)}`);

    // Collect URL for sitemap.xml
    sitemapUrls.push(`
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`);
  }

  // 1. Write sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('')}
</urlset>
`;
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log(`✓ Generated sitemap.xml with ${sitemapUrls.length} verified routes.`);

  // Also copy to public/ so it stays available during dev
  const publicSitemap = path.join(rootDir, 'public', 'sitemap.xml');
  fs.writeFileSync(publicSitemap, sitemapXml, 'utf-8');

  // 2. Write robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
  const robotsPath = path.join(distDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
  console.log(`✓ Generated robots.txt pointing to ${DOMAIN}/sitemap.xml.`);

  const publicRobots = path.join(rootDir, 'public', 'robots.txt');
  fs.writeFileSync(publicRobots, robotsTxt, 'utf-8');

  console.log('SSG pre-rendering, Multi-Schema JSON-LD & Sitemap generation completed successfully!');
}

prerender().catch((err) => {
  console.error('Prerender error:', err);
  process.exit(1);
});
