// frontend/src/pages/ContactPage.jsx

import { CheckCircle, Mail, MapPin, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { apiService } from '../services/api';
import styles from './ContactPage.module.css';

const ContactPage = () => {
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            const yOffset = -80; // adjust this value (px)
            const y =
                formRef.current.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, []);

    const handleCTAClick = (cta) => {
        apiService.trackInteraction('conversion', 'about_cta_click', { cta });
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Submit lead (stores in localStorage)
            await apiService.submitLead({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                service_interest: formData.service,
                message: formData.message,
                source: 'contact_form'
            });

            setSubmitted(true);
            setLoading(false);

            // Reset form
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Something went wrong. Please try again.');
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className={styles.container}>
                <section className={styles.successSection}>
                    <div className={styles.successContent}>
                        <div className={styles.successIcon}>
                            <CheckCircle size={64} />
                        </div>
                        <h1 className={styles.successTitle}>Message Received!</h1>
                        <p className={styles.successText}>
                            Thank you for reaching out! Your information has been saved and we'll
                            get back to you as soon as possible.
                        </p>
                        <div className={styles.nextSteps}>
                            <h3>What happens next?</h3>
                            <ul>
                                <li>We'll review your inquiry</li>
                                <li>A team member will reach out within 24 hours</li>
                                <li>We'll schedule a free consultation call</li>
                                <li>You'll receive a custom proposal</li>
                            </ul>
                        </div>
                        <a href="/" className={styles.homeButton}>Return to Home</a>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Let's Start a Conversation</h1>
                    <p className={styles.heroSubtitle}>
                        Ready to transform your data into your biggest competitive advantage?
                        Schedule a free consultation with our team.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.infoTitle}>Get in Touch</h2>
                            <p className={styles.infoText}>
                                We respond to all inquiries within 24 hours. Let's discuss how we can
                                help solve your data challenges.
                            </p>

                            <div className={styles.contactMethods}>
                                <div className={styles.contactMethod}>
                                    <div className={styles.methodIcon}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className={styles.methodLabel}>Email</div>
                                        <div className={styles.methodValue}>info@scapedatasolutions.com</div>
                                    </div>
                                </div>
                                <div className={styles.contactMethod}>
                                    <div className={styles.methodIcon}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className={styles.methodLabel}>Office</div>
                                        <div className={styles.methodValue}>
                                            Delta Corner Tower (Chiromo Road) Westlands<br />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.benefits}>
                                <h3 className={styles.benefitsTitle}>What to Expect:</h3>
                                <ul className={styles.benefitsList}>
                                    <li>Free 30-minute consultation</li>
                                    <li>Custom solution proposal</li>
                                    <li>No obligation quote</li>
                                    <li>Response within 24 hours</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.formContainer} ref={formRef}>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                {error && (
                                    <div className={styles.errorBox}>
                                        {error}
                                    </div>
                                )}

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="+254712345678"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Service Interested In *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={styles.select}
                                        required
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="analytics">Advanced Analytics</option>
                                        <option value="ml">Machine Learning</option>
                                        <option value="dl">Deep Learning</option>
                                        <option value="engineering">Data Engineering</option>
                                        <option value="bi">Business Intelligence</option>
                                        <option value="predictive">Predictive Analytics</option>
                                        <option value="customer">Customer Analytics</option>
                                        <option value="consulting">Consulting & Strategy</option>
                                        <option value="mlops">MLOps</option>
                                        <option value="reports">Report Writing</option>
                                        <option value="other">Other / Not Sure</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Tell Us About Your Project *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        required
                                        placeholder="Tell us about your data challenges, goals, and what you're hoping to achieve..."
                                        rows={6}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            Send Message <Send size={20} />
                                        </>
                                    )}
                                </button>

                                <p className={styles.disclaimer}>
                                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;