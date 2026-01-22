const fs=require('fs');
const p='src/pages/';
const c={
  AboutPage:{t:'About Us | Expert Data Science Team - Scape Data Solutions',d:'Meet our expert data science team. Founded by scientists and engineers from leading tech companies. 15+ years combined experience delivering data solutions worldwide.',u:'/about'},
  ContactPage:{t:'Contact Us | Get Free Data Consultation - Scape Data Solutions',d:'Contact Scape Data Solutions for a free consultation. Located in Westlands, Nairobi. Email: info@scapedatasolutions.com',u:'/contact'},
  HomePage:{t:'Scape Data Solutions | Transform Data Into Strategic Advantage',d:'Expert data analytics, machine learning, and AI solutions for enterprises. Transform complex data into actionable insights that drive measurable ROI',u:''},
  PricingPage:{t:'Pricing & Plans | Flexible Data Science Solutions - Scape Data Solutions',d:'Transparent pricing for data analytics, machine learning, and AI services. Starter, Professional, and Enterprise plans',u:'/pricing'},
  ServicesPage:{t:'Data Science Services | Analytics, ML, AI Solutions - Scape Data Solutions',d:'Comprehensive data science services including advanced analytics, machine learning, deep learning, data engineering, predictive analytics',u:'/services'},
  SolutionsPage:{t:'Industry Solutions | Data Analytics by Sector - Scape Data Solutions',d:'Industry-specific data solutions for finance, healthcare, retail, manufacturing, telecom, logistics. Tailored analytics for your sector',u:'/solutions'}
};
Object.keys(c).forEach(k=>{
  const f=p+k+'.jsx';
  let s=fs.readFileSync(f,'utf8');
  if(s.includes('<Helmet>'))return;
  if(!s.includes('react-helmet-async'))s=s.replace(/(import[^;]+;)(?![\s\S]*import)/,'$1\nimport { Helmet } from "react-helmet-async";');
  const h='\n            <Helmet>\n                <title>'+c[k].t+'</title>\n                <meta name="description" content="'+c[k].d+'" />\n                <link rel="canonical" href="https://scapedatasolutions.com'+c[k].u+'" />\n            </Helmet>\n';
  s=s.replace(/(<div className={styles\.container}>)/,'$1'+h);
  fs.writeFileSync(f,s);
  console.log('✅ '+k);
});
console.log('\n✨ Done! SEO tags added to all pages');
