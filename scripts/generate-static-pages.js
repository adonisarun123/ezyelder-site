const fs = require('fs');
const path = require('path');

// Base HTML template
const baseTemplate = fs.readFileSync('build/index.html', 'utf8');

// Page configurations with SEO data
const pages = [
  {
    path: 'index.html',
    url: '/',
    title: 'EzyElders - Premier Senior Care & Wellness Services',
    description: 'Discover comprehensive senior care services at EzyElders. We provide health & wellness programs, leisure activities, technology training, spiritual guidance, and custom engagement programs for senior citizens in a supportive community environment.',
    keywords: 'senior care, elderly services, senior citizens, senior wellness, elder care community, senior activities, health programs for seniors, senior technology training, spiritual guidance seniors'
  },
  {
    path: 'about/index.html',
    url: '/about',
    title: 'About EzyElders - Our Mission & Vision for Senior Care | EzyElders',
    description: 'Learn about EzyElders\' dedication to senior care excellence. Discover our mission, values, and commitment to providing comprehensive wellness services, community engagement, and personalized care for senior citizens.',
    keywords: 'about EzyElders, senior care mission, elder care philosophy, senior wellness center, senior community services, elder care values'
  },
  {
    path: 'contact/index.html',
    url: '/contact',
    title: 'Contact EzyElders - Get in Touch for Senior Care Services | EzyElders',
    description: 'Contact EzyElders for inquiries about our senior care services. Reach out via phone, email, or visit our center. We\'re here to answer questions about elder care, wellness programs, and community activities.',
    keywords: 'contact EzyElders, senior care inquiries, elder care contact, senior services phone number, senior care consultation'
  },
  {
    path: 'offerings/index.html',
    url: '/offerings',
    title: 'Our Services - Comprehensive Senior Care & Wellness Programs | EzyElders',
    description: 'Explore EzyElders\' comprehensive senior care services including health & wellness programs, leisure activities, technology training, spiritual guidance, and custom engagement programs designed specifically for senior citizens.',
    keywords: 'senior care services, elder wellness programs, senior activities, health programs for seniors, senior technology training, spiritual guidance, custom senior programs'
  }
];

function generateStaticPage(page) {
  let html = baseTemplate;
  
  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${page.title}</title>`
  );
  
  // Replace or add meta description
  if (html.includes('name="description"')) {
    html = html.replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${page.description}$2`
    );
  } else {
    html = html.replace(
      '<meta name="keywords"',
      `<meta name="description" content="${page.description}" />\n    <meta name="keywords"`
    );
  }
  
  // Replace or add meta keywords
  if (html.includes('name="keywords"')) {
    html = html.replace(
      /(<meta name="keywords" content=")[^"]*(")/,
      `$1${page.keywords}$2`
    );
  }
  
  // Add Open Graph tags
  const ogTags = `
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="https://ezyelders.com${page.url}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://ezyelders.com/ezyelders-logo.png" />
    <meta property="og:site_name" content="EzyElders" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://ezyelders.com/ezyelders-logo.png" />
    <link rel="canonical" href="https://ezyelders.com${page.url}" />`;
  
  // Insert OG tags before closing head tag
  html = html.replace('</head>', `${ogTags}\n  </head>`);
  
  return html;
}

// Create directories and generate pages
pages.forEach(page => {
  const filePath = path.join('build', page.path);
  const dirPath = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Generate and write the static HTML
  const staticHtml = generateStaticPage(page);
  fs.writeFileSync(filePath, staticHtml);
  
  console.log(`✅ Generated: ${page.path}`);
});

console.log('🎉 Static pages generated successfully!');
console.log('');
console.log('📝 Generated pages:');
pages.forEach(page => {
  console.log(`   ${page.url} → ${page.title}`);
}); 