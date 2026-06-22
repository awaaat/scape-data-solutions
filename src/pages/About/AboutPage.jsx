// src/pages/AboutPage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight, Award, Lightbulb, Shield, Target, TrendingUp, Users
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageLayout, { fadeUp, slideL, slideR, stagger, spring, REPLAY_VIEWPORT } from '../../components/Layout/PageLayout';
import styles from "./AboutPage.module.css";
import hStyles from "../Home/HomePage.module.css";
import { apiService } from "../../services/api";

/* ─── Data ──────────────────────────────────────────────────────────── */
const TEAM = [
  { name:"Dr. Robert Chen",       role:"Chief Data Scientist & CEO",      bio:"PhD in Machine Learning from Stanford. 15+ years leading data science teams at Fortune 500 companies including Google and Amazon.", expertise:["Deep Learning","AI Strategy","Research"],                image:"/scape_data_files/Dr-Robert-Chen.Webp" },
  { name:"Elena Rodriguez",       role:"Head of Analytics & Operations",  bio:"Former Head of Analytics at McKinsey. Built and scaled analytics practices across 20+ countries.",                                  expertise:["Business Intelligence","Analytics Strategy","Team Leadership"], image:"/scape_data_files/Elena-Rodriguez.Webp" },
  { name:"David Kimani",          role:"Lead ML Engineer",                bio:"10+ years building production ML systems. Former ML Engineer at Microsoft Azure ML team.",                                           expertise:["MLOps","Production Systems","Cloud Architecture"],          image:"/scape_data_files/David-Kimani.Webp"   },
  { name:"Sarah Mwangi",          role:"Senior Data Scientist",           bio:"PhD candidate in Statistics. Specializes in predictive modeling and time-series forecasting.",                                       expertise:["Statistical Modeling","Forecasting","Experimentation"],    image:"/scape_data_files/Sarah-Mwangi.Webp"   },
  { name:"Ahmed Hassan",          role:"Data Engineering Lead",           bio:"Built data infrastructure for scale-ups and enterprises. Expert in cloud-native data architecture.",                                 expertise:["Data Engineering","ETL/ELT","Data Warehousing"],           image:"/scape_data_files/Ahmed-Hassan.Webp"   },
  { name:"Patricia Ochieng",      role:"Customer Success Manager",        bio:"Ensures client satisfaction and project success. 8+ years in technical account management.",                                        expertise:["Client Relations","Project Management","Strategy"],        image:"/scape_data_files/Patricia-Ochieng.Webp"},
];

const VALUES = [
  { icon:<Target size={36}/>,    title:"Results-Driven",        description:"We measure success by your ROI, not just deliverables. Every project must demonstrate clear business value." },
  { icon:<Users size={36}/>,     title:"Partnership Mindset",    description:"We become an extension of your team, invested in your long-term success, not just project completion." },
  { icon:<Award size={36}/>,     title:"Excellence in Execution",description:"We deliver enterprise-grade solutions with attention to detail, security, and scalability." },
  { icon:<TrendingUp size={36}/>,title:"Continuous Innovation",  description:"We stay ahead of industry trends, constantly evolving our methods to deliver cutting-edge solutions." },
  { icon:<Shield size={36}/>,    title:"Data Security & Privacy",description:"Your data security is our top priority. We implement industry-leading practices and maintain strict compliance standards." },
  { icon:<Lightbulb size={36}/>, title:"Knowledge Transfer",     description:"We empower your team through comprehensive training and documentation, ensuring long-term independence and capability." },
];

const STATS = [
  { number:"50+",  label:"Client Organizations"      },
  { number:"200+", label:"Projects Completed"        },
  { number:"98%",  label:"Client Satisfaction"       },
  { number:"15+",  label:"Years Combined Experience" },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function AboutPage() {
  useEffect(() => { window.scrollTo({top:0,behavior:"instant"}); }, []);

  const [statsRef, statsInView] = useInView({threshold:0.3, triggerOnce:false});

  return (
    <PageLayout activeNav="about">
      <Helmet>
        <title>About Us | Expert Data Science Team - Scape Data Solutions</title>
        <meta name="description" content="Meet our expert data science team. Founded by scientists and engineers from leading tech companies. 50+ clients, 200+ projects, 98% satisfaction rate." />
        <link rel="canonical" href="https://scapedatasolutions.com/about" />
      </Helmet>

      {/* ── Hero ── */}
      <motion.section className={styles.hero} initial="hidden" animate="visible" variants={fadeUp}
        style={{paddingTop:"80px"}}>
        <div className={styles.heroContent}>
          <motion.div className={hStyles.heroBadge} variants={fadeUp} style={{marginBottom:16}}>
            <Award size={13}/> Our Story
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={slideL}>Data Experts You Can Trust</motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp}>
            Founded by data scientists and engineers from leading tech companies, we've grown
            into a trusted partner for organizations seeking to unlock the power of their data.
          </motion.p>
          <motion.div className={styles.statsRow} ref={statsRef} variants={stagger}>
            {STATS.map((s,i) => (
              <motion.div key={i} className={styles.stat} variants={spring}
                whileHover={{y:-4, boxShadow:"0 8px 28px rgba(253,184,64,0.15)"}}>
                <motion.div className={styles.statNumber}
                  initial={{opacity:0}} animate={statsInView?{opacity:1}:{opacity:0}}
                  transition={{duration:0.6, delay:i*0.1}}>
                  {s.number}
                </motion.div>
                <div className={styles.statLabel}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Mission ── */}
      <motion.section className={styles.missionSection} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={fadeUp}>
        <div className={styles.sectionContent}>
          <div className={hStyles.secHead}>
            <h2 className={hStyles.secTitle}>Our Mission</h2>
          </div>
          <motion.p className={styles.missionText} variants={slideL}>
            To democratize data science and make world-class analytics accessible to businesses
            of all sizes. We believe every company deserves the competitive advantage that comes
            from data-driven decision making.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Values ── */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionContent}>
          <motion.div className={hStyles.secHead} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={fadeUp}>
            <h2 className={hStyles.secTitle}>Our Values</h2>
          </motion.div>
          <motion.div className={styles.valuesGrid} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={stagger}>
            {VALUES.map((v,i) => (
              <motion.div key={i} className={styles.valueCard} variants={spring}
                whileHover={{y:-4,boxShadow:"0 8px 28px rgba(0,0,0,0.08)",borderColor:"#fdb840"}}>
                <motion.div className={styles.valueIcon} whileHover={{scale:1.1,rotate:8}} transition={{type:"spring",stiffness:350}}>{v.icon}</motion.div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDescription}>{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className={styles.teamSection}>
        <div className={styles.sectionContent}>
          <motion.div className={hStyles.secHead} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={fadeUp}>
            <h2 className={hStyles.secTitle}>Meet Our Leadership</h2>
          </motion.div>
          <motion.p className={styles.sectionSubtitle} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={fadeUp}>
            Our team combines deep technical expertise with real-world business experience
          </motion.p>
          <motion.div className={styles.teamGrid} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={stagger}>
            {TEAM.map((member,i) => (
              <motion.div key={i} className={styles.teamCard} variants={spring}
                whileHover={{y:-4,boxShadow:"0 8px 28px rgba(0,0,0,0.08)"}}>
                <div className={styles.avatarContainer}>
                  <motion.img src={member.image} alt={member.name} className={styles.avatar}
                    whileHover={{scale:1.05}} transition={{duration:0.3}}/>
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <div className={styles.memberRole}>{member.role}</div>
                <p className={styles.memberBio}>{member.bio}</p>
                <div className={styles.expertise}>
                  {member.expertise.map((skill,idx) => (
                    <motion.span key={idx} className={styles.skill}
                      whileHover={{backgroundColor:"#fdb840",color:"#fff"}} transition={{duration:0.2}}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section className={styles.ctaSection} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={fadeUp}>
        <div className={styles.ctaContent}>
          <motion.h2 className={styles.ctaTitle} variants={slideL}>Let's Build Something Great Together</motion.h2>
          <motion.p className={styles.ctaText} variants={fadeUp}>Partner with a team that's committed to your success</motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" onClick={() => apiService.trackInteraction("conversion","about_cta_click",{cta:"about_bottom"})}
              className={styles.ctaButton}>
              <motion.span style={{display:"inline-flex",alignItems:"center",gap:"0.75rem"}}
                whileHover={{gap:"1rem"}} transition={{duration:0.2}}>
                Start Your Journey <ArrowRight size={20}/>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </PageLayout>
  );
}