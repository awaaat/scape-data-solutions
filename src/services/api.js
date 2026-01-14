// frontend/src/services/api.js
// Frontend-only API service - stores data in localStorage

// Generate or get session ID
const getSessionId = () => {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('session_id', sessionId);
    }
    return sessionId;
};

// Storage helper functions
const storage = {
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error reading from storage:', error);
            return null;
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error writing to storage:', error);
            return false;
        }
    },

    append: (key, value) => {
        const existing = storage.get(key) || [];
        existing.push(value);
        return storage.set(key, existing);
    }
};

// API methods
export const apiService = {
    // Submit lead/contact form
    submitLead: async (leadData) => {
        try {
            const lead = {
                ...leadData,
                id: Date.now(),
                created_at: new Date().toISOString(),
                session_id: getSessionId()
            };

            // Store lead in localStorage
            storage.append('leads', lead);

            // Track conversion
            await apiService.trackConversion('contact_form', 'contact', {
                service: leadData.service_interest
            });

            return lead;
        } catch (error) {
            console.error('Error submitting lead:', error);
            throw error;
        }
    },

    // Track page view
    trackPageView: async (page) => {
        try {
            const pageView = {
                page,
                session_id: getSessionId(),
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                referrer: document.referrer
            };

            storage.append('page_views', pageView);
            return pageView;
        } catch (error) {
            console.error('Error tracking page view:', error);
        }
    },

    // Track user interaction
    trackInteraction: async (page, action, details = {}) => {
        try {
            const interaction = {
                session_id: getSessionId(),
                page,
                action,
                details,
                timestamp: new Date().toISOString()
            };

            storage.append('interactions', interaction);
            return interaction;
        } catch (error) {
            console.error('Error tracking interaction:', error);
        }
    },

    // Track conversion
    trackConversion: async (conversionType, page, details = {}) => {
        try {
            const conversion = {
                conversion_type: conversionType,
                session_id: getSessionId(),
                page,
                details,
                timestamp: new Date().toISOString()
            };

            storage.append('conversions', conversion);
            return conversion;
        } catch (error) {
            console.error('Error tracking conversion:', error);
        }
    },

    // Get analytics dashboard data (for internal use)
    getAnalytics: async () => {
        try {
            const leads = storage.get('leads') || [];
            const pageViews = storage.get('page_views') || [];
            const interactions = storage.get('interactions') || [];
            const conversions = storage.get('conversions') || [];

            const today = new Date().toISOString().split('T')[0];

            return {
                total_leads: leads.length,
                leads_today: leads.filter(l => l.created_at.startsWith(today)).length,
                total_page_views: pageViews.length,
                page_views_today: pageViews.filter(pv => pv.timestamp.startsWith(today)).length,
                total_conversions: conversions.length,
                conversion_rate: pageViews.length > 0
                    ? ((conversions.length / pageViews.length) * 100).toFixed(2)
                    : 0,
                top_pages: Object.entries(
                    pageViews.reduce((acc, pv) => {
                        acc[pv.page] = (acc[pv.page] || 0) + 1;
                        return acc;
                    }, {})
                )
                    .map(([page, views]) => ({ page, views }))
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5)
            };
        } catch (error) {
            console.error('Error fetching analytics:', error);
            throw error;
        }
    },

    // Clear all analytics data
    clearAnalytics: () => {
        localStorage.removeItem('leads');
        localStorage.removeItem('page_views');
        localStorage.removeItem('interactions');
        localStorage.removeItem('conversions');
    }
};

export { getSessionId };
export default apiService;