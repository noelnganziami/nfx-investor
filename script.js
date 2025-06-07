// --- BASE CONFIGURATION (Defaults) ---
// MODIFIED: Added 'avatar' and split 'author'/'role' in testimonials for the new design.
const NFX_BASE_CONFIG = {
    appName: "NFX-Investor ProMax",
    adminCredentials: { email: "scothyjunior@gmail.com", password: "Djsthy@@2020" },
    defaultCurrency: { code: "USD", symbol: "$" },
    currencies: [
        { code: "USD", symbol: "$" }, { code: "EUR", symbol: "€" }, { code: "GBP", symbol: "£" },
        { code: "JPY", symbol: "¥" }, { code: "ZAR", symbol: "R" }
    ],
    investmentPlans: [
        {
            id: 1, name: "StarterMax", minAmount: 100, maxAmount: 999, isEnabled: true, isShortTerm: false, description: "Reliable growth for new investors.",
            durationDaysLongTerm: 30, dailyProfitPercentLongTerm: 0.5, dailyProfitFixedLongTerm: 0, totalProfitPercentLongTerm: 15,
            durationDaysShortTerm: 0, durationMinutesShortTerm: 0, totalProfitPercentShortTerm: 0, dailyProfitPercentShortTerm: 0, dailyProfitFixedShortTerm: 0
        },
        {
            id: 2, name: "GrowthMax", minAmount: 1000, maxAmount: 4999, isEnabled: true, isShortTerm: false, description: "Accelerated returns for ambitious portfolios.",
            durationDaysLongTerm: 60, dailyProfitPercentLongTerm: 0.75, dailyProfitFixedLongTerm: 0, totalProfitPercentLongTerm: 45,
            durationDaysShortTerm: 0, durationMinutesShortTerm: 0, totalProfitPercentShortTerm: 0, dailyProfitPercentShortTerm: 0, dailyProfitFixedShortTerm: 0
        },
        {
            id: 3, name: "ProMax", minAmount: 5000, maxAmount: 19999, isEnabled: true, isShortTerm: false, description: "Robust returns for serious investors.",
            durationDaysLongTerm: 90, dailyProfitPercentLongTerm: 1.0, dailyProfitFixedLongTerm: 0, totalProfitPercentLongTerm: 90,
            durationDaysShortTerm: 0, durationMinutesShortTerm: 0, totalProfitPercentShortTerm: 0, dailyProfitPercentShortTerm: 0, dailyProfitFixedShortTerm: 0
        },
        {
            id: 4, name: "WhaleMax", minAmount: 20000, maxAmount: 100000, isEnabled: true, isShortTerm: false, description: "Premium plan for high-volume investments.",
            durationDaysLongTerm: 120, dailyProfitPercentLongTerm: 1.5, dailyProfitFixedLongTerm: 0, totalProfitPercentLongTerm: 180,
            durationDaysShortTerm: 0, durationMinutesShortTerm: 0, totalProfitPercentShortTerm: 0, dailyProfitPercentShortTerm: 0, dailyProfitFixedShortTerm: 0
        },
        {
            id: 5, name: "Quick Yield", minAmount: 50, maxAmount: 500, isEnabled: true, isShortTerm: true, description: "Fast returns for short-term capital.",
            durationDaysShortTerm: 0, durationMinutesShortTerm: 5, totalProfitPercentShortTerm: 3, dailyProfitPercentShortTerm: 0, dailyProfitFixedShortTerm: 0,
            durationDaysLongTerm: 0, dailyProfitPercentLongTerm: 0, dailyProfitFixedLongTerm: 0, totalProfitPercentLongTerm: 0
        }
    ],
    siteStats: { users: "15,000+", investedBase: 75000000, profitBase: 12000000 },
    heroContent: {
        headline: "Unlock Your Financial Potential. Invest with Insight.",
        subheadline: "Explore strategic investment opportunities and achieve your financial aspirations with NFX-Investor ProMax."
    },
    features: [
        { id: 'feat1', iconClass: "fas fa-brain", title: "Intelligent Plans", description: "Strategic plan optimization for diverse risk appetites." },
        { id: 'feat2', iconClass: "fas fa-shield-alt", title: "Advanced Security", description: "Multi-layered security protocols ensure your assets are protected." },
        { id: 'feat3', iconClass: "fas fa-chart-pie", title: "Real-time Analytics", description: "Instant dashboard updates, countdowns, and growth charts." },
        { id: 'feat4', iconClass: "fas fa-headset", title: "Dedicated Support", description: "Our global support team is always ready to assist you." }
    ],
    testimonials: [
        { id: 'test1', quote: "The 'Quick Yield' plan is amazing! NFX-Investor ProMax keeps innovating and delivering impressive results.", author: "Priya S.", role: "Quick Yield Investor", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 'test2', quote: "As a long-term investor, the security and transparency are what I value most. The platform is incredibly reliable.", author: "Kenji T.", role: "ProMax Investor", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: 'test3', quote: "The interface is intuitive, and the real-time analytics help me track my portfolio's performance with ease.", author: "Aisha B.", role: "GrowthMax Investor", avatar: "https://randomuser.me/api/portraits/women/67.jpg" }
    ],
    faqs: [
        { id: 'faq1', q: "What is NFX-Investor ProMax?", a: "NFX-Investor ProMax is an advanced investment platform offering diverse plans, including short-term options, and a comprehensive wallet system." },
        { id: 'faq2', q: "Can I have multiple investments at the same time?", a: "Yes! You can have multiple active investments simultaneously, provided you have enough funds in your wallet for each new investment." },
        { id: 'faq3', q: "How do I deposit funds?", a: "In your dashboard, click 'Deposit Funds', choose a method (Bank, PayPal, BTC), enter amount, and follow the instructions. Deposits are typically reviewed by an administrator." },
        { id: 'faq4', q: "How does the currency lock work?", a: "When you make your first investment, the currency active at that time becomes your account's primary currency for display and calculations as long as you have active investments." },
        { id: 'faq5', q: "What is the withdrawal fee?", a: "A standard fee (currently 5%) is applied to all withdrawals. This will be deducted from the requested amount." },
        { id: 'faq6', q: "How do I contact support?", a: "You can contact support through the 'Support Center' or 'My Support Tickets' section in your dashboard. Create a new ticket with your query." }
    ],
    depositMethodsDetails: {
        bank: "Bank Name: NFX Global Trust<br>Account Number: 123-456-7890<br>SWIFT/BIC: NFXGUS33<br>Reference: Your User ID",
        paypal: "Send PayPal payment to: <strong>payments@nfx-investor-promax-official.com</strong><br>Include your User ID in the notes.",
        bitcoin: "Send BTC to the following address:<br><strong>1OfficialBTCAddressxxxxxxxxxxxxxx</strong><br>Ensure you send enough to cover network fees. Min. deposit 0.001 BTC equivalent."
    },
    withdrawalFeePercent: 5,
    minWithdrawalAmount: 10,
    maxWithdrawalAmount: 20000,
    referralBonusAmount: 10,
    pdfExportSettings: { filename: "NFX_Dashboard_Report.pdf", pageTitle: "NFX-Investor Dashboard Report" },
    maintenanceMode: false,
    supportEmailDisplay: "support@nfx-investorpromax.com"
};

// ---UNCHANGED CONSTANTS AND ELEMENT SELECTORS---
const LS_KEYS = {
    ADMIN_SETTINGS: 'nfx_admin_settings_v10_5',
    ADMIN_HERO_CONTENT: 'nfx_admin_hero_v10_5',
    ADMIN_FEATURES: 'nfx_admin_features_v10_5',
    ADMIN_TESTIMONIALS: 'nfx_admin_testimonials_v10_5',
    ADMIN_FAQS: 'nfx_admin_faqs_v10_5',
    ADMIN_PLANS: 'nfx_admin_plans_v10_5',
    ADMIN_GLOBAL_CURRENCY: 'nfx_admin_global_currency_v10_5',
    USERS: 'nfx_users_promax_v10_5',
    TRANSACTIONS: 'nfx_transactions_promax_v10_5',
    CURRENT_USER_SESSION: 'nfx_currentUser_promax_v10_5',
    BROADCAST_MESSAGE: 'nfx_broadcastMessage_v10_5',
    USER_LAST_LOGIN_PREFIX: 'nfx_lastLogin_v10_5_',
    USER_NOTIFICATIONS_PREFIX: 'nfx_userNotifications_v10_5_',
    SUPPORT_TICKETS: 'nfx_support_tickets_v10_5',
    ADMIN_SYSTEM_LOG: 'nfx_admin_system_log_v10_5'
};

const navLinks = {
    homeLogo: document.getElementById('nav-home-logo'), home: document.getElementById('nav-home'),
    plans: document.getElementById('nav-plans'), faq: document.getElementById('nav-faq'),
    login: document.getElementById('nav-login'), register: document.getElementById('nav-register'),
    dashboard: document.getElementById('nav-dashboard'), admin: document.getElementById('nav-admin'),
    logout: document.getElementById('nav-logout')
};

const sections = {
    home: [document.getElementById('hero-section-wrapper'), document.getElementById('home-content-section'), document.getElementById('testimonials-section')],
    plans: document.getElementById('plans-section'), faq: document.getElementById('faq-section'),
    login: document.getElementById('login-section'), register: document.getElementById('register-section'),
    dashboard: document.getElementById('dashboard-section'), adminPanel: document.getElementById('admin-panel-section')
};

const forms = {
    login: document.getElementById('login-form'), register: document.getElementById('register-form'),
    financialGoal: document.getElementById('financial-goal-form'), adminBroadcast: document.getElementById('admin-broadcast-form'),
    adminGlobalSettings: document.getElementById('admin-global-settings-form'), adminHeroContent: document.getElementById('admin-hero-content-form'),
    adminEditPlan: document.getElementById('admin-edit-plan-form'), adminEditContent: document.getElementById('admin-edit-content-form'),
    adminEditUser: document.getElementById('admin-edit-user-form'), userNewTicketForm: document.getElementById('user-new-ticket-form'),
    userReplyTicketForm: document.getElementById('user-reply-ticket-form'), adminReplyTicketForm: document.getElementById('admin-reply-ticket-form'),
    changePassword: document.getElementById('change-password-form')
};

const planDisplays = { public: document.getElementById('public-plans-display'), dashboard: document.getElementById('dashboard-plans-display') };

const dashboardElements = {
    broadcastBanner: document.getElementById('broadcast-message-banner'), broadcastText: document.getElementById('broadcast-message-text'),
    welcome: document.getElementById('dashboard-welcome'), userName: document.getElementById('dash-user-name'),
    userEmail: document.getElementById('dash-user-email'), memberSince: document.getElementById('dash-member-since'),
    referralCode: document.getElementById('dash-referral-code'), referredByContainer: document.getElementById('dash-referred-by-container'),
    referredBy: document.getElementById('dash-referred-by'), lastLogin: document.getElementById('dash-last-login'),
    accountCurrency: document.getElementById('dash-account-currency'), walletActualBalance: document.getElementById('wallet-actual-balance'),
    walletInvestedAmount: document.getElementById('wallet-invested-amount'), walletRealizedProfit: document.getElementById('wallet-realized-profit'),
    withdrawalAvailableBalance: document.getElementById('withdrawal-available-balance'), activeInvestmentsSummaryCard: document.getElementById('active-investments-summary-card'),
    activeInvestmentsList: document.getElementById('active-investments-list'), activeInvestmentsCount: document.getElementById('active-investments-count'),
    noInvestmentMessage: document.getElementById('dashboard-no-investment'), investmentOptions: document.getElementById('dashboard-investment-options'),
    transactionTableBody: document.getElementById('transaction-table-body'), noTransactionsMessage: document.getElementById('no-transactions'),
    profileSettingsCard: document.getElementById('profile-settings-card'), financialGoalDisplay: document.getElementById('financial-goal-display'),
    financialGoalTextDesc: document.getElementById('financial-goal-text-desc'), financialGoalTextAmount: document.getElementById('financial-goal-text-amount'),
    financialGoalProgressFill: document.getElementById('financial-goal-progress-fill'), profitCalculatorCard: document.getElementById('profit-calculator-card'),
    profitCalcPlanSelect: document.getElementById('profit-calc-plan-select'), profitCalcAmountInput: document.getElementById('profit-calc-amount'),
    profitCalcButton: document.getElementById('profit-calc-button'), profitCalcResultsDisplay: document.getElementById('profit-calculator-results'),
    profitCalcResultProfit: document.getElementById('profit-calc-result-profit'), profitCalcResultReturn: document.getElementById('profit-calc-result-return'),
    profitCalcResultDuration: document.getElementById('profit-calc-result-duration'), profitCalcResultMaturity: document.getElementById('profit-calc-result-maturity'),
    dashProfilePicPlaceholder: document.getElementById('dash-profile-pic-placeholder'), dashProfilePic: document.getElementById('dash-profile-pic'),
    userSupportCard: document.getElementById('user-support-card'), userTicketListBrief: document.getElementById('user-ticket-list-brief'),
    changePasswordMessage: document.getElementById('change-password-message'), profileSettingPicUrlInput: document.getElementById('profile-setting-pic-url'),
    withdrawalLimitsInfo: document.getElementById('withdrawal-limits-info'),
    adminPanelTitle: document.getElementById('admin-panel-title'), adminGlobalStatsDisplay: document.getElementById('admin-global-stats-display'),
    adminPendingDeposits: document.getElementById('admin-pending-deposits'), adminPendingDepositsCount: document.getElementById('admin-pending-deposits-count'),
    adminPendingWithdrawals: document.getElementById('admin-pending-withdrawals'), adminPendingWithdrawalsCount: document.getElementById('admin-pending-withdrawals-count'),
    adminUserListTableContainer: document.getElementById('admin-user-list-table-container'), adminNoUsersMessage: document.getElementById('admin-no-users-message'),
    adminUserFilterName: document.getElementById('admin-user-filter-name'), adminUserFilterStatus: document.getElementById('admin-user-filter-status'),
    adminApplyUserFiltersBtn: document.getElementById('admin-apply-user-filters'), adminClearUserFiltersBtn: document.getElementById('admin-clear-user-filters'),
    adminViewUserModal: document.getElementById('adminViewUserModal'), adminViewUserTitle: document.getElementById('adminViewUserTitle'),
    adminViewUserDetails: document.getElementById('adminViewUserDetails'), adminAllTransactionsTableBody: document.getElementById('admin-all-transactions-table-body'),
    adminNoTransactionsMessage: document.getElementById('admin-no-transactions-message'), adminTxFilterUser: document.getElementById('admin-tx-filter-user'),
    adminTxFilterType: document.getElementById('admin-tx-filter-type'), adminApplyTxFiltersBtn: document.getElementById('admin-apply-tx-filters'),
    adminClearTxFiltersBtn: document.getElementById('admin-clear-tx-filters'), adminClearBroadcastBtn: document.getElementById('admin-clear-broadcast'),
    adminHeroHeadlineInput: document.getElementById('admin-hero-headline'), adminHeroSubheadlineInput: document.getElementById('admin-hero-subheadline'),
    adminFeaturesList: document.getElementById('admin-features-list'), adminTestimonialsList: document.getElementById('admin-testimonials-list'),
    adminFaqsList: document.getElementById('admin-faqs-list'), adminEditContentModal: document.getElementById('adminEditContentModal'),
    adminEditContentTitle: document.getElementById('adminEditContentTitle'), adminEditContentIdInput: document.getElementById('admin-edit-content-id'),
    adminEditContentTypeInput: document.getElementById('admin-edit-content-type'), adminContentFieldsContainer: document.getElementById('admin-content-fields-container'),
    adminInvestmentPlansList: document.getElementById('admin-investment-plans-list'), adminEditPlanModal: document.getElementById('adminEditPlanModal'),
    adminEditPlanTitle: document.getElementById('adminEditPlanTitle'), adminEditPlanIdInput: document.getElementById('admin-edit-plan-id'),
    adminSettingAppName: document.getElementById('admin-setting-app-name'), adminSettingStatsUsers: document.getElementById('admin-setting-stats-users'),
    adminSettingStatsInvested: document.getElementById('admin-setting-stats-invested'), adminSettingStatsProfit: document.getElementById('admin-setting-stats-profit'),
    adminSettingReferralBonus: document.getElementById('admin-setting-referral-bonus'), adminSettingWithdrawalFee: document.getElementById('admin-setting-withdrawal-fee'),
    adminMaintenanceModeToggle: document.getElementById('admin-maintenance-mode-toggle'), adminMaintenanceModeStatus: document.getElementById('admin-maintenance-mode-status'),
    adminAssistantBanner: document.getElementById('admin-assistant-banner'), adminEditUserModal: document.getElementById('adminEditUserModal'),
    adminEditUserTitle: document.getElementById('adminEditUserTitle'), adminEditUserIdInput: document.getElementById('admin-edit-user-id'),
    adminEditUserNameInput: document.getElementById('admin-edit-user-name'), adminEditUserEmailInput: document.getElementById('admin-edit-user-email'),
    adminEditUserPasswordInput: document.getElementById('admin-edit-user-password'), adminEditUserCreditInput: document.getElementById('admin-edit-user-credit'),
    adminEditUserCreditReasonInput: document.getElementById('admin-edit-user-credit-reason'), adminEditUserBonusInput: document.getElementById('admin-edit-user-bonus'),
    adminEditUserBonusReasonInput: document.getElementById('admin-edit-user-bonus-reason'), adminEditUserSuspendedToggle: document.getElementById('admin-edit-user-suspended'),
    adminEditUserAssistantToggle: document.getElementById('admin-edit-user-assistant'), adminDirectMessageTextInput: document.getElementById('admin-direct-message-text'),
    adminSystemLogList: document.getElementById('admin-system-log-list'), adminSettingMinWithdrawal: document.getElementById('admin-setting-min-withdrawal'),
    adminSettingMaxWithdrawal: document.getElementById('admin-setting-max-withdrawal'), adminSupportTicketList: document.getElementById('admin-support-ticket-list'),
    adminNoTicketsMessage: document.getElementById('admin-no-tickets-message'), adminTicketFilterUser: document.getElementById('admin-ticket-filter-user'),
    adminTicketFilterStatus: document.getElementById('admin-ticket-filter-status'), adminApplyTicketFiltersBtn: document.getElementById('admin-apply-ticket-filters'),
    adminClearTicketFiltersBtn: document.getElementById('admin-clear-ticket-filters'), adminViewSupportTicketModal: document.getElementById('adminViewSupportTicketModal'),
    adminViewSupportTicketTitle: document.getElementById('adminViewSupportTicketTitle'), adminTicketUserInfo: document.getElementById('admin-ticket-user-info'),
    adminTicketSubjectInfo: document.getElementById('admin-ticket-subject-info'), adminTicketStatusInfo: document.getElementById('admin-ticket-status-info'),
    adminTicketChatMessages: document.getElementById('admin-ticket-chat-messages'), adminReplyTicketIdInput: document.getElementById('admin-reply-ticket-id'),
    adminTicketReplyMessageInput: document.getElementById('admin-ticket-reply-message'), adminTicketChangeStatusSelect: document.getElementById('admin-ticket-change-status'),
    userSupportTicketModal: document.getElementById('userSupportTicketModal'), userSupportTicketTitle: document.getElementById('userSupportTicketTitle'),
    userSupportTicketView: document.getElementById('user-support-ticket-view'), userExistingTicketsList: document.getElementById('user-existing-tickets-list'),
    userCreateNewTicketBtn: document.getElementById('user-create-new-ticket-btn'), userNewTicketFormView: document.getElementById('user-new-ticket-form-view'),
    userTicketSubjectInput: document.getElementById('user-ticket-subject'), userTicketMessageInput: document.getElementById('user-ticket-message'),
    userCancelNewTicketBtn: document.getElementById('user-cancel-new-ticket-btn'), userTicketChatView: document.getElementById('user-ticket-chat-view'),
    userChatTicketSubject: document.getElementById('user-chat-ticket-subject'), userTicketChatMessages: document.getElementById('user-ticket-chat-messages'),
    userReplyTicketIdInput: document.getElementById('user-reply-ticket-id'), userTicketReplyMessageInput: document.getElementById('user-ticket-reply-message'),
    userBackToTicketsBtn: document.getElementById('user-back-to-tickets-btn'),
    allPageContentWrappers: document.querySelectorAll('.page-section, .page-section-group'),
    messageElements: { login: document.getElementById('login-message'), register: document.getElementById('register-message'), deposit: document.getElementById('deposit-message'), withdrawal: document.getElementById('withdrawal-message') },
    depositModalEl: document.getElementById('depositModal'), withdrawalModalEl: document.getElementById('withdrawalModal'),
    depositForm: document.getElementById('deposit-form'), withdrawalForm: document.getElementById('withdrawal-form'),
    depositMethodSelect: document.getElementById('deposit-method'), depositDetailsDisplay: document.getElementById('deposit-details-display'),
    depositProofGroup: document.getElementById('deposit-proof-group'), currencySelectorAdminContainer: document.getElementById('currency-selector-container-admin'),
    currencySelectorAdmin: document.getElementById('currency-selector-admin'), profileSettingsForm: document.getElementById('profile-settings-form'),
    profile2FAToggle: document.getElementById('profile-2fa-toggle'), profile2FAStatus: document.getElementById('profile-2fa-status'),
    appNameHeader: document.getElementById('app-name-header'), appNameDynamicElements: document.querySelectorAll('.app-name-dynamic'),
    maintenanceModeBanner: document.getElementById('maintenance-mode-banner'), userNotificationBell: document.getElementById('user-notification-bell'),
    notificationCountBadge: document.getElementById('notification-count-badge'), notificationsDropdownContainer: document.getElementById('notifications-dropdown-container'),
    notificationsList: document.getElementById('notifications-list'),
    heroHeadline: document.getElementById('hero-headline'),
    heroSubheadline: document.getElementById('hero-subheadline'),
    adminPlanIsShortTermToggle: document.getElementById('admin-plan-isShortTerm'),
    planFieldsLongTermGroup: document.getElementById('plan-fields-long-term-group'),
    planFieldsShortTermGroup: document.getElementById('plan-fields-short-term-group'),
    adminPlanCurrencySymbols: null
};

let NFX_CONFIG = { ...NFX_BASE_CONFIG };
let currentUser = null;
let accountGrowthChartInstance = null;
let countdownIntervals = {};
let adminUserRegistrationChartInstance = null;
let adminTransactionOverviewChartInstance = null;
let adminPlanPopularityChartInstance = null;
let adminPlatformValueChartInstance = null;
let adminTransactionVolumeChartInstance = null;
let confirmResolve = null; 
// NEW: Observer for scroll animations
let animationObserver = null; 

const ls = {
    get: (key) => JSON.parse(localStorage.getItem(key)),
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    remove: (key) => localStorage.removeItem(key),

    getAdminSettings: () => ls.get(LS_KEYS.ADMIN_SETTINGS) || {},
    saveAdminSettings: (settings) => ls.set(LS_KEYS.ADMIN_SETTINGS, settings),
    getAdminHeroContent: () => ls.get(LS_KEYS.ADMIN_HERO_CONTENT),
    saveAdminHeroContent: (content) => ls.set(LS_KEYS.ADMIN_HERO_CONTENT, content),
    getAdminFeatures: () => ls.get(LS_KEYS.ADMIN_FEATURES),
    saveAdminFeatures: (features) => ls.set(LS_KEYS.ADMIN_FEATURES, features),
    getAdminTestimonials: () => ls.get(LS_KEYS.ADMIN_TESTIMONIALS),
    saveAdminTestimonials: (testimonials) => ls.set(LS_KEYS.ADMIN_TESTIMONIALS, testimonials),
    getAdminFaqs: () => ls.get(LS_KEYS.ADMIN_FAQS),
    saveAdminFaqs: (faqs) => ls.set(LS_KEYS.ADMIN_FAQS, faqs),
    getAdminPlans: () => ls.get(LS_KEYS.ADMIN_PLANS),
    saveAdminPlans: (plans) => ls.set(LS_KEYS.ADMIN_PLANS, plans),
    getAdminGlobalCurrency: () => ls.get(LS_KEYS.ADMIN_GLOBAL_CURRENCY),
    saveAdminGlobalCurrency: (currency) => ls.set(LS_KEYS.ADMIN_GLOBAL_CURRENCY, currency),

    getUsers: () => ls.get(LS_KEYS.USERS) || [],
    saveUsers: (users) => ls.set(LS_KEYS.USERS, users),
    getTransactions: () => ls.get(LS_KEYS.TRANSACTIONS) || [],
    saveTransactions: (txs) => ls.set(LS_KEYS.TRANSACTIONS, txs),
    getCurrentUserSession: () => ls.get(LS_KEYS.CURRENT_USER_SESSION),
    saveCurrentUserSession: (user) => ls.set(LS_KEYS.CURRENT_USER_SESSION, user),
    clearCurrentUserSession: () => ls.remove(LS_KEYS.CURRENT_USER_SESSION),
    getBroadcastMessage: () => ls.get(LS_KEYS.BROADCAST_MESSAGE),
    saveBroadcastMessage: (msgData) => ls.set(LS_KEYS.BROADCAST_MESSAGE, msgData),
    getUserLastLogin: (userId) => ls.get(LS_KEYS.USER_LAST_LOGIN_PREFIX + userId),
    saveUserLastLogin: (userId, dateStr) => ls.set(LS_KEYS.USER_LAST_LOGIN_PREFIX + userId, dateStr),
    getUserNotifications: (userId) => ls.get(LS_KEYS.USER_NOTIFICATIONS_PREFIX + userId) || [],
    saveUserNotifications: (userId, notifications) => ls.set(LS_KEYS.USER_NOTIFICATIONS_PREFIX + userId, notifications),
    getSupportTickets: () => ls.get(LS_KEYS.SUPPORT_TICKETS) || [],
    saveSupportTickets: (tickets) => ls.set(LS_KEYS.SUPPORT_TICKETS, tickets),
    getAdminSystemLog: () => ls.get(LS_KEYS.ADMIN_SYSTEM_LOG) || [],
    saveAdminSystemLog: (log) => ls.set(LS_KEYS.ADMIN_SYSTEM_LOG, log)
};

function loadEffectiveConfig() {
    const adminSettings = ls.getAdminSettings();
    const adminHero = ls.getAdminHeroContent();
    const adminFeatures = ls.getAdminFeatures();
    const adminTestimonials = ls.getAdminTestimonials();
    const adminFaqs = ls.getAdminFaqs();
    let adminPlans = ls.getAdminPlans();
    const adminGlobalCurrency = ls.getAdminGlobalCurrency();

    if (adminPlans) {
        adminPlans = adminPlans.map(plan => {
            const basePlan = NFX_BASE_CONFIG.investmentPlans.find(bp => bp.id === plan.id) || {};
            return {
                ...basePlan,
                ...plan,
                durationDaysLongTerm: plan.durationDaysLongTerm || basePlan.durationDaysLongTerm || 0,
                dailyProfitPercentLongTerm: plan.dailyProfitPercentLongTerm || basePlan.dailyProfitPercentLongTerm || 0,
                dailyProfitFixedLongTerm: plan.dailyProfitFixedLongTerm || basePlan.dailyProfitFixedLongTerm || 0,
                totalProfitPercentLongTerm: plan.totalProfitPercentLongTerm || basePlan.totalProfitPercentLongTerm || 0,
                durationDaysShortTerm: plan.durationDaysShortTerm || basePlan.durationDaysShortTerm || 0,
                durationMinutesShortTerm: plan.durationMinutesShortTerm || basePlan.durationMinutesShortTerm || 0,
                totalProfitPercentShortTerm: plan.totalProfitPercentShortTerm || basePlan.totalProfitPercentShortTerm || 0,
                dailyProfitPercentShortTerm: plan.dailyProfitPercentShortTerm || basePlan.dailyProfitPercentShortTerm || 0,
                dailyProfitFixedShortTerm: plan.dailyProfitFixedShortTerm || basePlan.dailyProfitFixedShortTerm || 0,
            };
        });
    } else {
        adminPlans = NFX_BASE_CONFIG.investmentPlans.map(plan => ({ ...plan }));
    }


    NFX_CONFIG = {
        ...NFX_BASE_CONFIG,
        ...adminSettings,
        heroContent: adminHero || NFX_BASE_CONFIG.heroContent,
        features: adminFeatures || NFX_BASE_CONFIG.features,
        testimonials: adminTestimonials || NFX_BASE_CONFIG.testimonials,
        faqs: adminFaqs || NFX_BASE_CONFIG.faqs,
        investmentPlans: adminPlans,
        defaultCurrency: adminGlobalCurrency || NFX_BASE_CONFIG.defaultCurrency
    };
    NFX_CONFIG.maintenanceMode = typeof adminSettings.maintenanceMode === 'boolean' ? adminSettings.maintenanceMode : NFX_BASE_CONFIG.maintenanceMode;


    if (adminSettings && adminSettings.siteStats) NFX_CONFIG.siteStats = { ...NFX_BASE_CONFIG.siteStats, ...adminSettings.siteStats };
    NFX_CONFIG.withdrawalFeePercent = parseFloat(adminSettings.withdrawalFeePercent) || NFX_BASE_CONFIG.withdrawalFeePercent;
    NFX_CONFIG.referralBonusAmount = parseInt(adminSettings.referralBonusAmount) || NFX_BASE_CONFIG.referralBonusAmount;
    NFX_CONFIG.minWithdrawalAmount = parseFloat(adminSettings.minWithdrawalAmount) || NFX_BASE_CONFIG.minWithdrawalAmount;
    NFX_CONFIG.maxWithdrawalAmount = parseFloat(adminSettings.maxWithdrawalAmount) || NFX_BASE_CONFIG.maxWithdrawalAmount;


    if (dashboardElements.appNameHeader) dashboardElements.appNameHeader.textContent = NFX_CONFIG.appName;
    dashboardElements.appNameDynamicElements.forEach(el => el.textContent = NFX_CONFIG.appName);
    document.title = `${NFX_CONFIG.appName} - Advanced Investment Platform`;

    const withdrawalFeeInfoEl = document.getElementById('withdrawal-fee-info');
    if (withdrawalFeeInfoEl) withdrawalFeeInfoEl.textContent = `A ${NFX_CONFIG.withdrawalFeePercent}% withdrawal fee will be applied.`;
    updateWithdrawalLimitsDisplay();
}

function updateWithdrawalLimitsDisplay() {
    if (dashboardElements.withdrawalLimitsInfo) {
        const displayCurrency = getUserDisplayCurrency();
        dashboardElements.withdrawalLimitsInfo.textContent = `Min: ${formatCurrencyValue(NFX_CONFIG.minWithdrawalAmount, displayCurrency)}, Max: ${formatCurrencyValue(NFX_CONFIG.maxWithdrawalAmount, displayCurrency)}`;
    }
}
function getGlobalDisplayCurrency() { return NFX_CONFIG.defaultCurrency; }
function getUserDisplayCurrency() {
    if (currentUser && currentUser.lockedCurrency) { return currentUser.lockedCurrency; }
    return getGlobalDisplayCurrency();
}

function navigateToSection(sectionKey, navLinkId = null) {
    const activeLinkElement = navLinkId ? document.getElementById(navLinkId) : null;
    showSection(sectionKey, activeLinkElement);
}

function showSection(sectionKey, activeLinkElement = null) {
    if (NFX_CONFIG.maintenanceMode && (!currentUser || (!currentUser.isAdmin && !currentUser.isAssistantAdmin))) {
        const allowedSectionsInMaintenance = ['home', 'faq'];
        if (sectionKey === 'login' || sectionKey === 'register') {
        } else if (!allowedSectionsInMaintenance.includes(sectionKey)) {
             showToast("Site is currently under maintenance. Please try again later.", "warning", 5000);
             navigateToSection('home', 'nav-home');
             return;
        }
    }


    dashboardElements.allPageContentWrappers.forEach(sec => { if (sec) sec.classList.add('hidden'); });
    const targetSectionOrGroup = sections[sectionKey];
    if (Array.isArray(targetSectionOrGroup)) {
        targetSectionOrGroup.forEach(part => { if (part) part.classList.remove('hidden'); });
    } else if (targetSectionOrGroup) {
        targetSectionOrGroup.classList.remove('hidden');
    } else {
        console.error("Target section not found for key:", sectionKey);
        if (sections.home && Array.isArray(sections.home)) {
            sections.home.forEach(part => { if (part) part.classList.remove('hidden'); });
            if (navLinks.home && navLinks.home.classList) navLinks.home.classList.add('active');
        } return;
    }
    Object.values(navLinks).forEach(link => {
        if (link && link.classList) {
            link.classList.remove('active');
        }
    });
    if (activeLinkElement && activeLinkElement.classList) {
        activeLinkElement.classList.add('active');
    } else if (sectionKey === 'home' && navLinks.home && navLinks.home.classList) {
        navLinks.home.classList.add('active');
    }
    window.scrollTo(0, 0);
    if (sectionKey !== 'dashboard' && sectionKey !== 'adminPanel') { clearAllCountdowns(); }
    if (dashboardElements.notificationsDropdownContainer && dashboardElements.notificationsDropdownContainer.classList.contains('show')) {
        dashboardElements.notificationsDropdownContainer.classList.remove('show');
    }
}

function displayFormMessage(element, message, type = 'error') {
    if (!element) return; element.textContent = message;
    element.className = `form-message ${type}`; element.classList.remove('hidden');
}
function clearFormMessage(element) {
    if (!element) return; element.textContent = '';
    element.classList.add('hidden'); element.className = 'form-message hidden';
}
function formatDate(dateString, options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        console.warn("Invalid date string passed to formatDate:", dateString);
        return 'Invalid Date';
    }
    try {
        return date.toLocaleDateString(undefined, options);
    } catch (e) {
        console.error("Error formatting date:", dateString, "with options:", options, e);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }
}
function formatCurrencyValue(amount, currencyObjInput) {
    const currencyObj = currencyObjInput || getUserDisplayCurrency();
    if (typeof amount !== 'number' || isNaN(amount)) amount = 0;
    const effectiveCurrency = (currencyObj && currencyObj.symbol && currencyObj.code) ? currencyObj : NFX_CONFIG.defaultCurrency;
    return effectiveCurrency.symbol + parseFloat(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function showToast(message, type = 'info', duration = 3500) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return; const toast = document.createElement('div');
    toast.classList.add('toast', type); let iconClass = 'fas fa-info-circle';
    if (type === 'success') iconClass = 'fas fa-check-circle';
    else if (type === 'error') iconClass = 'fas fa-exclamation-circle';
    else if (type === 'warning') iconClass = 'fas fa-exclamation-triangle';
    toast.innerHTML = `<i class="${iconClass}"></i> ${message}`;
    toastContainer.appendChild(toast);
    void toast.offsetHeight;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 500);
    }, duration);
}
function addTime(date, amount, unit) {
    const result = new Date(date);
    if (unit === 'days') result.setDate(result.getDate() + amount);
    if (unit === 'minutes') result.setMinutes(result.getMinutes() + amount);
    if (unit === 'seconds') result.setSeconds(result.getSeconds() + amount);
    return result;
}
function generateUniqueId(prefix = '') { return prefix + Date.now().toString(36) + Math.random().toString(36).substring(2, 9); }
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text); showToast("Referral code copied!", "success");
    } catch (err) { showToast("Failed to copy code.", "error"); console.error('Clipboard copy failed:', err); }
}
function renderHeroContent() {
    if (dashboardElements.heroHeadline) dashboardElements.heroHeadline.textContent = NFX_CONFIG.heroContent.headline;
    if (dashboardElements.heroSubheadline) dashboardElements.heroSubheadline.textContent = NFX_CONFIG.heroContent.subheadline;
}

// MODIFIED: renderFeatures to add animation classes and new HTML structure
function renderFeatures() {
    const container = document.getElementById('features-grid-container'); if (!container) return; container.innerHTML = '';
    NFX_CONFIG.features.forEach((feature, index) => {
        const item = document.createElement('div');
        item.className = 'feature-item aos';
        item.setAttribute('data-aos', 'fade-up');
        item.setAttribute('data-aos-delay', index * 100);
        item.innerHTML = `
            <div class="icon-wrapper"><i class="${feature.iconClass || 'fas fa-star'}"></i></div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        container.appendChild(item);
        if (animationObserver) {
            animationObserver.observe(item);
        }
    });
    if (NFX_CONFIG.features.length === 0) { container.innerHTML = '<p class="text-center" style="grid-column: 1 / -1;">No features to display.</p>'; }
}

// MODIFIED: renderTestimonials to add animation classes and new HTML structure with avatars
function renderTestimonials() {
    const container = document.getElementById('testimonials-grid-container'); if (!container) return; container.innerHTML = '';
    NFX_CONFIG.testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card aos';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 100);
        card.innerHTML = `
            <img src="${testimonial.avatar || `https://i.pravatar.cc/150?u=${testimonial.author}`}" alt="${testimonial.author}" class="avatar">
            <p class="author">${testimonial.author} <span>${testimonial.role}</span></p>
            <p class="quote">${testimonial.quote}</p>
        `;
        container.appendChild(card);
        if (animationObserver) {
            animationObserver.observe(card);
        }
    });
    if (NFX_CONFIG.testimonials.length === 0) { container.innerHTML = '<p class="text-center" style="grid-column: 1 / -1;">No testimonials available.</p>'; }
}

function renderFAQs() {
    const faqContainer = document.getElementById('faq-container'); if (!faqContainer) return; faqContainer.innerHTML = '';
    NFX_CONFIG.faqs.forEach(faq => {
        const item = document.createElement('div'); item.classList.add('faq-item');
        item.innerHTML = `<div class="faq-question">${faq.q} <span class="faq-toggle"><i class="fas fa-plus"></i></span></div><div class="faq-answer"><p>${faq.a}</p></div>`;
        const questionEl = item.querySelector('.faq-question');
        if (questionEl) {
            questionEl.addEventListener('click', () => {
                item.classList.toggle('active'); const icon = item.querySelector('.faq-toggle i');
                if (icon) { icon.className = `fas ${item.classList.contains('active') ? 'fa-minus' : 'fa-plus'}`; }
            });
        }
        faqContainer.appendChild(item);
    });
    if (NFX_CONFIG.faqs.length === 0) { faqContainer.innerHTML = '<p class="text-center">No FAQs available.</p>'; }
}

function updateStatsBar() {
    // This function remains the same, but the animation is handled by the statsObserver
    const statsUsersEl = document.getElementById('stats-users');
    const statsInvestedEl = document.getElementById('stats-invested');
    const statsProfitEl = document.getElementById('stats-profit');
    
    if (statsUsersEl) {
        const usersTarget = parseFloat(NFX_CONFIG.siteStats.users.replace(/[^0-9]/g, ''));
        statsUsersEl.setAttribute('data-target', usersTarget);
        statsUsersEl.innerHTML = "0+"; // Initial text
    }

    if (statsInvestedEl) {
        statsInvestedEl.setAttribute('data-target', NFX_CONFIG.siteStats.investedBase);
        statsInvestedEl.innerHTML = "$0+"; // Initial text
    }

    if (statsProfitEl) {
        statsProfitEl.setAttribute('data-target', NFX_CONFIG.siteStats.profitBase);
        statsProfitEl.innerHTML = "$0+"; // Initial text
    }
}
function populateAdminCurrencySelector() {
    if (!dashboardElements.currencySelectorAdmin) return; dashboardElements.currencySelectorAdmin.innerHTML = '';
    NFX_CONFIG.currencies.forEach(curr => {
        const option = document.createElement('option'); option.value = curr.code;
        option.dataset.symbol = curr.symbol; option.textContent = `${curr.code} (${curr.symbol})`;
        dashboardElements.currencySelectorAdmin.appendChild(option);
    });
}
function initAdminCurrencySelector() {
    if (!dashboardElements.currencySelectorAdmin || !dashboardElements.currencySelectorAdminContainer) return;
    populateAdminCurrencySelector();
    dashboardElements.currencySelectorAdmin.value = getGlobalDisplayCurrency().code;
    dashboardElements.currencySelectorAdminContainer.style.display = (currentUser && currentUser.isAdmin) ? 'inline-block' : 'none';
    dashboardElements.currencySelectorAdmin.addEventListener('change', (e) => {
        if (!currentUser || !currentUser.isAdmin) return;
        const selectedOption = e.target.options[e.target.selectedIndex];
        const newGlobalCurrency = { code: selectedOption.value, symbol: selectedOption.dataset.symbol };
        ls.saveAdminGlobalCurrency(newGlobalCurrency); loadEffectiveConfig();
        showToast(`Global site currency changed to ${newGlobalCurrency.code} (${newGlobalCurrency.symbol}).`, 'info', 5000);
        // The animated counter will re-trigger if the observer is set up to re-run, but for now, we just update static values.
        const statsInvestedEl = document.getElementById('stats-invested');
        const statsProfitEl = document.getElementById('stats-profit');
        if (statsInvestedEl) statsInvestedEl.textContent = formatCurrencyValue(NFX_CONFIG.siteStats.investedBase, newGlobalCurrency) + "+";
        if (statsProfitEl) statsProfitEl.textContent = formatCurrencyValue(NFX_CONFIG.siteStats.profitBase, newGlobalCurrency) + "+";

        if (planDisplays.public && sections.plans && !sections.plans.classList.contains('hidden')) renderPlans(planDisplays.public, false);
        if (currentUser && !currentUser.lockedCurrency && sections.dashboard && !sections.dashboard.classList.contains('hidden')) loadDashboard();
        updateCurrencyDisplays(); updateWithdrawalLimitsDisplay();
    });
}
function updateCurrencyDisplays() {
    const displayCurrency = getUserDisplayCurrency();
    document.querySelectorAll('.currency-symbol-modal, .currency-symbol-modal-calc, .currency-symbol-modal-goal').forEach(span => span.textContent = displayCurrency.symbol);
    const globalSiteCurrency = getGlobalDisplayCurrency();
    const adminReferralBonusLabel = document.querySelector('label[for="admin-setting-referral-bonus"]');
    if (adminReferralBonusLabel) {
        let symbolSpan = adminReferralBonusLabel.querySelector('.currency-symbol-admin');
        if (!symbolSpan) {
            symbolSpan = document.createElement('span'); symbolSpan.classList.add('currency-symbol-admin');
            adminReferralBonusLabel.appendChild(document.createTextNode(" ("));
            adminReferralBonusLabel.appendChild(symbolSpan); adminReferralBonusLabel.appendChild(document.createTextNode(")"));
        }
        symbolSpan.textContent = globalSiteCurrency.symbol;
    }
    if (dashboardElements.adminPlanCurrencySymbols) {
        dashboardElements.adminPlanCurrencySymbols.forEach(span => span.textContent = globalSiteCurrency.symbol);
    }
}
function checkAndLockCurrency() {
    if (currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin && currentUser.investments && currentUser.investments.length > 0 && !currentUser.lockedCurrency) {
        currentUser.lockedCurrency = getGlobalDisplayCurrency();
        ls.saveUsers(ls.getUsers().map(u => u.id === currentUser.id ? currentUser : u));
        ls.saveCurrentUserSession(currentUser);
        showToast(`Account currency locked to ${currentUser.lockedCurrency.code} (${currentUser.lockedCurrency.symbol}) while investments are active.`, "info");
    } else if (currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin && (!currentUser.investments || currentUser.investments.length === 0) && currentUser.lockedCurrency) {
        currentUser.lockedCurrency = null;
        ls.saveUsers(ls.getUsers().map(u => u.id === currentUser.id ? currentUser : u));
        ls.saveCurrentUserSession(currentUser);
        showToast(`Account currency unlocked. Display uses global: ${getGlobalDisplayCurrency().code}.`, "info");
    }
    if (dashboardElements.accountCurrency) {
        dashboardElements.accountCurrency.textContent = currentUser.lockedCurrency ?
            `${currentUser.lockedCurrency.code} (${currentUser.lockedCurrency.symbol}) - Locked` :
            `${getGlobalDisplayCurrency().code} (${getGlobalDisplayCurrency().symbol}) - Global`;
    }
    updateCurrencyDisplays(); updateWithdrawalLimitsDisplay();
}

// ---UNCHANGED LOGIC FROM THIS POINT FORWARD---
// (All functions from setupNavigation() onwards are identical to the original file)
function setupNavigation() {
    const navMapping = {
        'nav-home-logo': 'home',
        'nav-home': 'home',
        'nav-plans': 'plans',
        'nav-faq': 'faq',
        'nav-login': 'login',
        'nav-register': 'register',
        'nav-dashboard': 'dashboard',
        'nav-admin': 'adminPanel'
    };

    Object.entries(navMapping).forEach(([navId, sectionKey]) => {
        const linkElement = document.getElementById(navId);
        if (linkElement) {
            linkElement.addEventListener('click', (e) => {
                e.preventDefault();
                if (sections[sectionKey]) {
                    navigateToSection(sectionKey, navId);
                } else {
                    console.error(`Section key '${sectionKey}' not found in 'sections' object for navId '${navId}'. Defaulting to home.`);
                    navigateToSection('home', 'nav-home');
                }
            });
        }
    });

    if (navLinks.logout) {
        navLinks.logout.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout();
        });
    }
}

function updateNavForLoginState() {
    document.querySelectorAll('.auth-nav').forEach(el => el.classList.add('hidden'));
    if (dashboardElements.userNotificationBell) dashboardElements.userNotificationBell.classList.add('hidden');

    if (currentUser && (currentUser.isAdmin || currentUser.isAssistantAdmin)) {
        if (navLinks.admin) navLinks.admin.classList.remove('hidden');
        if (navLinks.logout) navLinks.logout.classList.remove('hidden');
        if (navLinks.dashboard) navLinks.dashboard.classList.add('hidden');
        if (dashboardElements.currencySelectorAdminContainer && currentUser.isAdmin) dashboardElements.currencySelectorAdminContainer.style.display = 'inline-block';
        else if (dashboardElements.currencySelectorAdminContainer) dashboardElements.currencySelectorAdminContainer.style.display = 'none';
        if (dashboardElements.userNotificationBell && (currentUser.isAdmin || currentUser.isAssistantAdmin)) {
            dashboardElements.userNotificationBell.classList.remove('hidden'); loadUserNotifications();
        }
    } else if (currentUser) {
        if (navLinks.dashboard) navLinks.dashboard.classList.remove('hidden');
        if (navLinks.logout) navLinks.logout.classList.remove('hidden');
        if (navLinks.admin) navLinks.admin.classList.add('hidden');
        if (dashboardElements.currencySelectorAdminContainer) dashboardElements.currencySelectorAdminContainer.style.display = 'none';
        if (dashboardElements.userNotificationBell) dashboardElements.userNotificationBell.classList.remove('hidden');
        loadUserNotifications(); checkAndLockCurrency();
    }
}
function updateNavForLogoutState() {
    document.querySelectorAll('.auth-nav').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.user-nav, .admin-nav').forEach(el => el.classList.add('hidden'));
    if (navLinks.logout) navLinks.logout.classList.add('hidden');
    if (navLinks.dashboard && navLinks.dashboard.classList) navLinks.dashboard.classList.remove('active');
    if (navLinks.admin && navLinks.admin.classList) navLinks.admin.classList.remove('active');
    if (dashboardElements.currencySelectorAdminContainer) dashboardElements.currencySelectorAdminContainer.style.display = 'none';
    if (dashboardElements.userNotificationBell) dashboardElements.userNotificationBell.classList.add('hidden');
}
if (forms.register) forms.register.addEventListener('submit', (e) => {
    e.preventDefault(); clearFormMessage(dashboardElements.messageElements.register);
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const referralCodeInput = document.getElementById('register-referral-code').value.trim();
    if (!name || !email || !password) { displayFormMessage(dashboardElements.messageElements.register, "All fields are required.", "error"); return; }
    if (password.length < 6) { displayFormMessage(dashboardElements.messageElements.register, "Password must be at least 6 characters.", "error"); return; }
    let users = ls.getUsers();
    if (users.find(user => user.email === email) || email === NFX_CONFIG.adminCredentials.email) {
        displayFormMessage(dashboardElements.messageElements.register, "Email already registered.", "error"); return;
    }
    let referredByUserId = null; let referrerUser = null;
    if (referralCodeInput) {
        referrerUser = users.find(u => u.referralCode === referralCodeInput && u.email !== email);
        if (!referrerUser) { displayFormMessage(dashboardElements.messageElements.register, "Invalid referral code. Proceeding without referral.", "warning"); }
        else { referredByUserId = referrerUser.id; }
    }
    const newUser = {
        id: generateUniqueId('usr'), name, email, password, investments: [], registeredDate: new Date().toISOString(),
        transactions: [], walletBalance: 0, totalRealizedProfit: 0, is2FAEnabled: false,
        isAdmin: false, isAssistantAdmin: false, referralCode: `NFX${Date.now().toString(36).slice(-4).toUpperCase()}`,
        lockedCurrency: null, financialGoal: null, referredBy: referredByUserId, isSuspended: false, profilePicUrl: null
    };
    users.push(newUser);
    if (referrerUser && NFX_CONFIG.referralBonusAmount > 0) {
        const bonusCurrency = referrerUser.lockedCurrency || getGlobalDisplayCurrency();
        referrerUser.walletBalance += NFX_CONFIG.referralBonusAmount;
        const bonusTransaction = {
            id: generateUniqueId('ref'), userId: referrerUser.id, userEmail: referrerUser.email, date: new Date().toISOString(),
            description: `Referral bonus for ${newUser.name}`, amount: NFX_CONFIG.referralBonusAmount,
            currency: bonusCurrency.code, type: 'referral_bonus', status: 'approved', txTypeIndicator: 'credit'
        };
        if (!referrerUser.transactions) referrerUser.transactions = [];
        referrerUser.transactions.push(bonusTransaction);
        let globalTxs = ls.getTransactions(); globalTxs.push(bonusTransaction); ls.saveTransactions(globalTxs);
        addUserSystemNotification(referrerUser.id, `You received a ${formatCurrencyValue(NFX_CONFIG.referralBonusAmount, bonusCurrency)} referral bonus for ${newUser.name}!`, 'success');
    }
    ls.saveUsers(users); displayFormMessage(dashboardElements.messageElements.register, "Registration successful! Please login.", "success");
    showToast(`Account created! Please login.`, "success");
    forms.register.reset(); setTimeout(() => navigateToSection('login', 'nav-login'), 2000);
});
if (forms.login) forms.login.addEventListener('submit', (e) => {
    e.preventDefault(); clearFormMessage(dashboardElements.messageElements.login);
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (NFX_CONFIG.maintenanceMode && email !== NFX_CONFIG.adminCredentials.email) {
        displayFormMessage(dashboardElements.messageElements.login, "Site under maintenance. Login temporarily disabled for users.", "warning");
        showToast("Login disabled due to site maintenance.", "warning");
        return;
    }

    if (!email || !password) { displayFormMessage(dashboardElements.messageElements.login, "Email and password required.", "error"); return; }
    if (email === NFX_CONFIG.adminCredentials.email && password === NFX_CONFIG.adminCredentials.password) {
        currentUser = {
            id: 'admin001', name: 'Site Administrator', email: NFX_CONFIG.adminCredentials.email,
            isAdmin: true, isAssistantAdmin: false, registeredDate: new Date().toISOString(), profilePicUrl: null
        };
        ls.saveCurrentUserSession(currentUser); updateNavForLoginState(); loadAdminPanel();
        forms.login.reset(); showToast(`Welcome, Administrator!`, "success"); return;
    }
    const users = ls.getUsers(); const user = users.find(u => u.email === email);
    if (user && user.password === password) {
        if (user.isSuspended) {
            displayFormMessage(dashboardElements.messageElements.login, "Account suspended. Contact support.", "error");
            showToast("Account suspended. Contact support.", "error"); return;
        }
        currentUser = user;
        if (!currentUser.investments) currentUser.investments = [];
        if (!currentUser.transactions) currentUser.transactions = [];
        if (typeof currentUser.isAssistantAdmin === 'undefined') currentUser.isAssistantAdmin = false;
        if (typeof currentUser.profilePicUrl === 'undefined') currentUser.profilePicUrl = null;

        ls.saveUserLastLogin(currentUser.id, new Date().toISOString());
        ls.saveCurrentUserSession(currentUser); updateNavForLoginState();
        if (currentUser.isAssistantAdmin || currentUser.isAdmin) { loadAdminPanel(); }
        else { loadDashboard(); }
        forms.login.reset(); showToast(`Welcome back, ${currentUser.name}!`, "success");
    } else {
        displayFormMessage(dashboardElements.messageElements.login, "Invalid email or password.", "error");
        showToast("Login failed. Check credentials.", "error");
    }
});
function handleLogout() {
    currentUser = null; ls.clearCurrentUserSession(); clearAllCountdowns(); updateNavForLogoutState();
    navigateToSection('home', 'nav-home'); showToast("You have been logged out.", "info");
}
function renderPlans(containerElement, forDashboard = false) {
    if (!containerElement) return; containerElement.innerHTML = '';
    const displayCurrency = forDashboard ? getUserDisplayCurrency() : getGlobalDisplayCurrency();
    let hasVisiblePlans = false;
    NFX_CONFIG.investmentPlans.forEach(plan => {
        if (!plan.isEnabled && !forDashboard && !(currentUser && (currentUser.isAdmin || currentUser.isAssistantAdmin))) return;
        const card = document.createElement('div'); card.classList.add('plan-card');
        if (!plan.isEnabled) card.classList.add('disabled-plan');

        let profitDisplay = '';
        let durationDisplay = '';

        if (plan.isShortTerm) {
            profitDisplay = `Total Profit: ${plan.totalProfitPercentShortTerm}%`;
            if (plan.dailyProfitFixedShortTerm > 0) profitDisplay += ` / ${formatCurrencyValue(plan.dailyProfitFixedShortTerm, getGlobalDisplayCurrency())} daily fixed (opt.)`;
            else if (plan.dailyProfitPercentShortTerm > 0) profitDisplay += ` / ${plan.dailyProfitPercentShortTerm}% daily (opt.)`;
            durationDisplay = (plan.durationDaysShortTerm > 0 ? `${plan.durationDaysShortTerm} Days ` : '') +
                              (plan.durationMinutesShortTerm > 0 ? `${plan.durationMinutesShortTerm} Mins` : '');
            if (!durationDisplay) durationDisplay = "Short period";
        } else {
            if (plan.dailyProfitFixedLongTerm > 0) {
                profitDisplay = `Daily Profit: ${formatCurrencyValue(plan.dailyProfitFixedLongTerm, getGlobalDisplayCurrency())}`;
            } else if (plan.dailyProfitPercentLongTerm > 0){
                profitDisplay = `Daily Profit: ${plan.dailyProfitPercentLongTerm}%`;
            } else if (plan.totalProfitPercentLongTerm > 0) {
                profitDisplay = `Total Profit: ${plan.totalProfitPercentLongTerm}%`;
            }
            durationDisplay = `${plan.durationDaysLongTerm} Days`;
        }

        let featuresList = `<li>Duration: ${durationDisplay.trim()}</li><li>Description: ${plan.description}</li><li>Risk Profile: ${plan.isShortTerm ? "Higher" : "Moderate"}</li>`;
        if (!plan.isEnabled) featuresList += `<li><strong style="color:var(--accent-color);">Currently Disabled</strong></li>`;
        card.innerHTML = `<h3>${plan.name}</h3><p class="price-range">Invest: ${formatCurrencyValue(plan.minAmount, displayCurrency)} - ${formatCurrencyValue(plan.maxAmount, displayCurrency)}</p>
                                  <p class="daily-profit">${profitDisplay}</p><ul>${featuresList}</ul>`;
        if (forDashboard && currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin && plan.isEnabled) {
            const investButton = document.createElement('button'); investButton.classList.add('button', 'button-small', 'button-full-width');
            let canInvest = currentUser.walletBalance >= plan.minAmount; let disabledReason = "";
            if (!canInvest) { investButton.innerHTML = `<i class="fas fa-times-circle"></i> Need ${formatCurrencyValue(plan.minAmount, displayCurrency)}`; investButton.disabled = true; disabledReason = `Insufficient balance. Need ${formatCurrencyValue(plan.minAmount, displayCurrency)}.`; }
            else { investButton.innerHTML = `<i class="fas fa-hand-holding-usd"></i> Invest`; }
            if (disabledReason) investButton.title = disabledReason;
            investButton.onclick = () => handleInvestmentSelection(plan.id); card.appendChild(investButton);
        }
        containerElement.appendChild(card);
        if (plan.isEnabled) hasVisiblePlans = true;
    });
    if (!hasVisiblePlans && !forDashboard) { containerElement.innerHTML = '<p class="text-center" style="grid-column: 1 / -1; padding: 20px;">No investment plans currently available.</p>'; }
}
function openModal(modalId) {
    const modal = document.getElementById(modalId); if (!modal) return;
    modal.style.display = 'flex'; document.body.style.overflow = 'hidden';
    if (modalId === 'withdrawalModal' && currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin && dashboardElements.withdrawalAvailableBalance) {
        dashboardElements.withdrawalAvailableBalance.textContent = formatCurrencyValue(currentUser.walletBalance);
    }
    if (modalId === 'userSupportTicketModal') { displayUserSupportTicketsView(); }
    updateCurrencyDisplays(); updateWithdrawalLimitsDisplay();
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId); if (!modal) return;
    modal.style.display = 'none'; document.body.style.overflow = 'auto';
    const form = modal.querySelector('form');
    if (form) {
        form.reset();
        const inputsWithError = form.querySelectorAll('input.input-error');
        if (inputsWithError) inputsWithError.forEach(input => input.classList.remove('input-error'));

        const messageElKey = modalId.replace('Modal', '').toLowerCase();
        const messageEl = dashboardElements.messageElements[messageElKey]; if (messageEl) clearFormMessage(messageEl);
        if (modalId === 'depositModal') {
            if (dashboardElements.depositDetailsDisplay) dashboardElements.depositDetailsDisplay.classList.add('hidden');
            if (dashboardElements.depositProofGroup) dashboardElements.depositProofGroup.classList.add('hidden');
            const loader = document.getElementById('deposit-loader'); if (loader) loader.classList.add('hidden');
            const proofInput = document.getElementById('deposit-proof');
            if(proofInput) proofInput.required = false;
        } else if (modalId === 'withdrawalModal') {
            const loader = document.getElementById('withdrawal-loader'); if (loader) loader.classList.add('hidden');
            const feeInfo = document.getElementById('withdrawal-fee-info'); if (feeInfo) feeInfo.textContent = `A ${NFX_CONFIG.withdrawalFeePercent}% withdrawal fee will be applied.`;
        } else if (modalId.startsWith('adminEdit')) {
            const formKey = modalId.replace('Modal', '');
            if (forms[formKey] && typeof forms[formKey].reset === 'function') {
                 forms[formKey].reset();
            }
        } else if (modalId === 'userSupportTicketModal') {
            if (forms.userNewTicketForm) forms.userNewTicketForm.reset();
            if (forms.userReplyTicketForm) forms.userReplyTicketForm.reset();
        }
    }
}
window.onclick = function (event) {
    const modalTarget = event.target;
    if (modalTarget && modalTarget.classList && modalTarget.classList.contains('modal')) {
        closeModal(modalTarget.id);
    }
}
if (dashboardElements.depositMethodSelect) dashboardElements.depositMethodSelect.addEventListener('change', function () {
    const method = this.value; if (dashboardElements.depositDetailsDisplay) dashboardElements.depositDetailsDisplay.innerHTML = '';
    if (dashboardElements.depositProofGroup) dashboardElements.depositProofGroup.classList.add('hidden');
    const proofInput = document.getElementById('deposit-proof');
    if (!proofInput) return;

    if (method && NFX_CONFIG.depositMethodsDetails[method]) {
        if (dashboardElements.depositDetailsDisplay) {
            dashboardElements.depositDetailsDisplay.innerHTML = `<p><strong>Instructions for ${method.toUpperCase()}:</strong></p>${NFX_CONFIG.depositMethodsDetails[method].replace('Your User ID', currentUser ? currentUser.id : 'YOUR_USER_ID')}`;
            dashboardElements.depositDetailsDisplay.classList.remove('hidden');
        }
        if (dashboardElements.depositProofGroup) {
            dashboardElements.depositProofGroup.classList.remove('hidden');
            proofInput.required = true;
        }
    } else {
        if (dashboardElements.depositDetailsDisplay) dashboardElements.depositDetailsDisplay.classList.add('hidden');
        if (dashboardElements.depositProofGroup) dashboardElements.depositProofGroup.classList.add('hidden');
        proofInput.required = false;
    }
});
if (dashboardElements.depositForm) dashboardElements.depositForm.addEventListener('submit', function (e) {
    e.preventDefault(); if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) { showToast("Action not available for admin accounts.", "error"); return; }
    const amountInput = document.getElementById('deposit-amount');
    const methodInput = document.getElementById('deposit-method');
    const proofInput = document.getElementById('deposit-proof');
    if (!amountInput || !methodInput || !proofInput) return; amountInput.classList.remove('input-error');
    const amount = parseFloat(amountInput.value); const method = methodInput.value; const proofFile = proofInput.files[0];
    const displayCurrency = getUserDisplayCurrency();
    if (isNaN(amount) || amount <= 0) { displayFormMessage(dashboardElements.messageElements.deposit, "Enter a valid amount.", "error"); amountInput.classList.add('input-error'); return; }
    if (!method) { displayFormMessage(dashboardElements.messageElements.deposit, "Select a payment method.", "error"); return; }
    if (method && !proofFile) {
        displayFormMessage(dashboardElements.messageElements.deposit, "Please upload proof of payment.", "error");
        proofInput.classList.add('input-error');
        return;
    }
    if (dashboardElements.messageElements.deposit) clearFormMessage(dashboardElements.messageElements.deposit);
    const loader = document.getElementById('deposit-loader'); if (loader) loader.classList.remove('hidden');
    setTimeout(() => {
        const newTransaction = {
            id: generateUniqueId('dep'), userId: currentUser.id, userEmail: currentUser.email, date: new Date().toISOString(),
            description: `Deposit via ${method}`, amount: amount, currency: displayCurrency.code, type: 'deposit', status: 'pending',
            method: method, proofFilename: proofFile ? proofFile.name : "N/A", txTypeIndicator: 'credit'
        };
        let globalTxs = ls.getTransactions(); globalTxs.push(newTransaction); ls.saveTransactions(globalTxs);
        if (currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin) {
            if (!currentUser.transactions) currentUser.transactions = []; currentUser.transactions.push(newTransaction); updateUserInStorage();
        }
        if (loader) loader.classList.add('hidden');
        showToast("Deposit request submitted for approval.", "success");
        addUserSystemNotification(NFX_CONFIG.adminCredentials.email, `New deposit: ${formatCurrencyValue(amount, displayCurrency)} from ${currentUser.email}.`, 'admin', true);
        displayFormMessage(dashboardElements.messageElements.deposit, "Deposit request submitted. Awaiting admin approval.", "success");
        if (sections.dashboard && !sections.dashboard.classList.contains('hidden') && currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin) loadDashboard();
        dashboardElements.depositForm.reset();
        if(dashboardElements.depositDetailsDisplay) dashboardElements.depositDetailsDisplay.classList.add('hidden');
        if(dashboardElements.depositProofGroup) dashboardElements.depositProofGroup.classList.add('hidden');
        if(proofInput) proofInput.required = false;

    }, 1500);
});
if (dashboardElements.withdrawalForm) dashboardElements.withdrawalForm.addEventListener('submit', function (e) {
    e.preventDefault(); if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) { showToast("Action not available for admin accounts.", "error"); return; }
    const amountInput = document.getElementById('withdrawal-amount');
    const methodInput = document.getElementById('withdrawal-method');
    const detailsInput = document.getElementById('withdrawal-details');
    const feeInfoEl = document.getElementById('withdrawal-fee-info');
    const loaderEl = document.getElementById('withdrawal-loader');
    const displayCurrency = getUserDisplayCurrency();
    if (!amountInput || !methodInput || !detailsInput || !feeInfoEl || !loaderEl) return;
    amountInput.classList.remove('input-error'); detailsInput.classList.remove('input-error');
    const requestedAmount = parseFloat(amountInput.value); const method = methodInput.value; const details = detailsInput.value.trim();

    if (isNaN(requestedAmount) || requestedAmount < NFX_CONFIG.minWithdrawalAmount || requestedAmount > NFX_CONFIG.maxWithdrawalAmount) {
        displayFormMessage(dashboardElements.messageElements.withdrawal, `Amount must be between ${formatCurrencyValue(NFX_CONFIG.minWithdrawalAmount, displayCurrency)} and ${formatCurrencyValue(NFX_CONFIG.maxWithdrawalAmount, displayCurrency)}.`, "error");
        amountInput.classList.add('input-error'); return;
    }
    if (requestedAmount > currentUser.walletBalance) {
        displayFormMessage(dashboardElements.messageElements.withdrawal, "Insufficient available balance.", "error");
        amountInput.classList.add('input-error'); return;
    }
    if (!method) { displayFormMessage(dashboardElements.messageElements.withdrawal, "Select a withdrawal method.", "error"); return; }
    if (!details) { displayFormMessage(dashboardElements.messageElements.withdrawal, "Provide account/address details.", "error"); detailsInput.classList.add('input-error'); return; }

    const feeAmount = (requestedAmount * NFX_CONFIG.withdrawalFeePercent) / 100; const netAmount = requestedAmount - feeAmount;
    feeInfoEl.textContent = `Requested: ${formatCurrencyValue(requestedAmount, displayCurrency)}, Fee (${NFX_CONFIG.withdrawalFeePercent}%): ${formatCurrencyValue(feeAmount, displayCurrency)}, Net: ${formatCurrencyValue(netAmount, displayCurrency)}`;
    if (dashboardElements.messageElements.withdrawal) clearFormMessage(dashboardElements.messageElements.withdrawal);
    loaderEl.classList.remove('hidden');
    setTimeout(() => {
        const newTransaction = {
            id: generateUniqueId('wth'), userId: currentUser.id, userEmail: currentUser.email, date: new Date().toISOString(),
            description: `Withdrawal to ${method}`, amount: requestedAmount, fee: feeAmount, netAmount: netAmount,
            currency: displayCurrency.code, type: 'withdrawal', status: 'pending', method: method, details: details, txTypeIndicator: 'debit'
        };
        let globalTxs = ls.getTransactions(); globalTxs.push(newTransaction); ls.saveTransactions(globalTxs);
        if (currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin) {
            if (!currentUser.transactions) currentUser.transactions = []; currentUser.transactions.push(newTransaction); updateUserInStorage();
        }
        loaderEl.classList.add('hidden');
        showToast("Withdrawal request submitted for approval.", "success");
        addUserSystemNotification(NFX_CONFIG.adminCredentials.email, `New withdrawal: ${formatCurrencyValue(requestedAmount, displayCurrency)} from ${currentUser.email}.`, 'admin', true);
        displayFormMessage(dashboardElements.messageElements.withdrawal, `Request for ${formatCurrencyValue(requestedAmount, displayCurrency)} submitted. Net after fee: ${formatCurrencyValue(netAmount, displayCurrency)}. Awaiting approval.`, "success");
        if (sections.dashboard && !sections.dashboard.classList.contains('hidden') && currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin) loadDashboard();
        dashboardElements.withdrawalForm.reset();
    }, 1500);
});

function addUserSystemNotification(userId, message, type = 'info', isForAdmin = false, ticketId = null) {
    const notification = {
        id: generateUniqueId('notif'), message: message, type: type,
        timestamp: new Date().toISOString(), read: false, ticketId: ticketId
    };
    const targetUserIds = new Set();
    if (isForAdmin) {
        ls.getUsers().filter(u => u.isAdmin || u.isAssistantAdmin).forEach(adminUser => targetUserIds.add(adminUser.id));
        if (!ls.getUsers().some(u => u.email === NFX_CONFIG.adminCredentials.email && (u.isAdmin || u.isAssistantAdmin))) {
             const mainAdminInSession = ls.getCurrentUserSession();
             if (mainAdminInSession && mainAdminInSession.id === 'admin001') {
                targetUserIds.add('admin001');
             } else if (!targetUserIds.has('admin001')) {
                targetUserIds.add('admin001');
             }
        }
    } else { targetUserIds.add(userId); }

    targetUserIds.forEach(id => {
        let notifications = ls.getUserNotifications(id);
        notifications.unshift(notification);
        if (notifications.length > 30) notifications.splice(30);
        ls.saveUserNotifications(id, notifications);
    });
    if (currentUser && targetUserIds.has(currentUser.id)) { loadUserNotifications(); }
}
function loadUserNotifications() {
    if (!currentUser || !dashboardElements.userNotificationBell || !dashboardElements.notificationsList || !dashboardElements.notificationCountBadge) return;
    const notifications = ls.getUserNotifications(currentUser.id);
    dashboardElements.notificationsList.innerHTML = ''; let unreadCount = 0;
    if (notifications.length === 0) {
        dashboardElements.notificationsList.innerHTML = '<p class="no-notifications">No new notifications.</p>';
        dashboardElements.notificationCountBadge.style.display = 'none'; return;
    }
    notifications.forEach(notif => {
        if (!notif.read) unreadCount++;
        const item = document.createElement('div'); item.classList.add('notification-item');
        if (!notif.read) item.classList.add('unread');
        item.innerHTML = `<p>${notif.message}</p><p class="timestamp">${formatDate(notif.timestamp, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>`;
        item.onclick = () => handleNotificationClick(notif.id, notif.ticketId);
        dashboardElements.notificationsList.appendChild(item);
    });
    if (unreadCount > 0) {
        dashboardElements.notificationCountBadge.textContent = String(unreadCount);
        dashboardElements.notificationCountBadge.style.display = 'block';
    } else { dashboardElements.notificationCountBadge.style.display = 'none'; }
}
window.toggleNotificationsDropdown = function (event) {
    event.stopPropagation();
    if (dashboardElements.notificationsDropdownContainer) dashboardElements.notificationsDropdownContainer.classList.toggle('show');
}
function handleNotificationClick(notificationId, ticketId) {
    markNotificationAsRead(notificationId);
    if (ticketId) {
        if (currentUser.isAdmin || currentUser.isAssistantAdmin) {
            showAdminMainTab('supportTickets', document.querySelector('.admin-tab-button[data-tab-target="supportTickets"]'));
            openAdminSupportTicketModal(ticketId);
        } else {
            openModal('userSupportTicketModal');
            displayUserTicketChatView(ticketId);
        }
    }
    if (dashboardElements.notificationsDropdownContainer) dashboardElements.notificationsDropdownContainer.classList.remove('show');
}
function markNotificationAsRead(notificationId) {
    if (!currentUser) return;
    let notifications = ls.getUserNotifications(currentUser.id);
    const index = notifications.findIndex(n => n.id === notificationId);
    if (index > -1 && !notifications[index].read) {
        notifications[index].read = true;
        ls.saveUserNotifications(currentUser.id, notifications);
        loadUserNotifications();
    }
}

function loadDashboard() {
    if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) {
        showToast("Access denied or not a regular user.", "error"); navigateToSection('login', 'nav-login'); return;
    }
    navigateToSection('dashboard', 'nav-dashboard'); clearAllCountdowns();
    checkAndLockCurrency(); const displayCurrency = getUserDisplayCurrency();
    displayBroadcastMessage(); loadUserNotifications();

    if (dashboardElements.welcome) dashboardElements.welcome.textContent = `Welcome, ${currentUser.name}!`;
    if (dashboardElements.userName) dashboardElements.userName.textContent = currentUser.name;
    if (dashboardElements.userEmail) dashboardElements.userEmail.textContent = currentUser.email;
    if (dashboardElements.memberSince) dashboardElements.memberSince.textContent = formatDate(currentUser.registeredDate, { year: 'numeric', month: 'long', day: 'numeric' });
    if (dashboardElements.referralCode) {
        dashboardElements.referralCode.textContent = currentUser.referralCode;
        dashboardElements.referralCode.onclick = () => copyToClipboard(currentUser.referralCode);
    }
    const lastLoginDate = ls.getUserLastLogin(currentUser.id);
    if (dashboardElements.lastLogin && lastLoginDate) dashboardElements.lastLogin.textContent = formatDate(lastLoginDate);
    else if (dashboardElements.lastLogin) dashboardElements.lastLogin.textContent = "First login";

    if (currentUser.profilePicUrl) {
        dashboardElements.dashProfilePic.src = currentUser.profilePicUrl;
        dashboardElements.dashProfilePic.classList.remove('hidden');
        dashboardElements.dashProfilePicPlaceholder.classList.add('hidden');
    } else {
        dashboardElements.dashProfilePic.classList.add('hidden');
        dashboardElements.dashProfilePicPlaceholder.classList.remove('hidden');
    }

    if (currentUser.referredBy && dashboardElements.referredByContainer && dashboardElements.referredBy) {
        const users = ls.getUsers(); const referrer = users.find(u => u.id === currentUser.referredBy);
        if (referrer) { dashboardElements.referredBy.textContent = `${referrer.name} (...${referrer.email.slice(-10)})`; dashboardElements.referredByContainer.classList.remove('hidden'); }
        else { dashboardElements.referredByContainer.classList.add('hidden'); }
    } else if (dashboardElements.referredByContainer) { dashboardElements.referredByContainer.classList.add('hidden'); }

    if (dashboardElements.walletActualBalance) dashboardElements.walletActualBalance.textContent = formatCurrencyValue(currentUser.walletBalance, displayCurrency);
    const totalInvestedActive = currentUser.investments ? currentUser.investments.reduce((sum, inv) => sum + inv.amount, 0) : 0;
    if (dashboardElements.walletInvestedAmount) dashboardElements.walletInvestedAmount.textContent = formatCurrencyValue(totalInvestedActive, displayCurrency);
    if (dashboardElements.walletRealizedProfit) dashboardElements.walletRealizedProfit.textContent = formatCurrencyValue(currentUser.totalRealizedProfit || 0, displayCurrency);

    if (dashboardElements.activeInvestmentsList && dashboardElements.activeInvestmentsCount && dashboardElements.noInvestmentMessage) {
        dashboardElements.activeInvestmentsList.innerHTML = '';
        if (currentUser.investments && currentUser.investments.length > 0) {
            dashboardElements.activeInvestmentsCount.textContent = String(currentUser.investments.length);
            dashboardElements.noInvestmentMessage.classList.add('hidden');
            currentUser.investments.forEach(inv => displaySingleInvestment(inv));
        } else {
            dashboardElements.activeInvestmentsCount.textContent = '0';
            dashboardElements.noInvestmentMessage.classList.remove('hidden');
        }
    }

    if (dashboardElements.profileSettingsCard) { dashboardElements.profileSettingsCard.classList.remove('hidden'); }
    const profileNameInput = document.getElementById('profile-setting-name');
    if (forms.profileSettings && dashboardElements.profile2FAToggle && dashboardElements.profile2FAStatus && profileNameInput) {
        profileNameInput.value = currentUser.name;
        if (dashboardElements.profileSettingPicUrlInput) dashboardElements.profileSettingPicUrlInput.value = currentUser.profilePicUrl || '';
        dashboardElements.profile2FAToggle.checked = currentUser.is2FAEnabled || false;
        dashboardElements.profile2FAStatus.textContent = (currentUser.is2FAEnabled || false) ? "Enabled" : "Disabled";
    }

    if (dashboardElements.profitCalculatorCard) { dashboardElements.profitCalculatorCard.classList.remove('hidden'); }
    populateProfitCalculatorPlans();
    if (dashboardElements.profitCalcResultsDisplay) dashboardElements.profitCalcResultsDisplay.classList.add('hidden');
    if (dashboardElements.profitCalcAmountInput) dashboardElements.profitCalcAmountInput.value = '';
    if (dashboardElements.profitCalcPlanSelect) dashboardElements.profitCalcPlanSelect.value = '';

    loadAndDisplayFinancialGoal();
    if (planDisplays.dashboard) renderPlans(planDisplays.dashboard, true);
    renderTransactionHistory('all', document.querySelector('#dashboard-section .tx-history-tab-button.active'));
    renderAccountGrowthChart();
    updateCurrencyDisplays(); updateWithdrawalLimitsDisplay();
    loadUserSupportTicketsBrief();
}
function displaySingleInvestment(investment) {
    if (!dashboardElements.activeInvestmentsList) return;
    const displayCurrency = getUserDisplayCurrency();
    const investmentCurrency = NFX_CONFIG.currencies.find(c => c.code === investment.currency) || displayCurrency;
    const plan = investment;
    if (!plan.planName) { console.error(`Plan name missing for investment ${investment.id}`); return; }


    let profitRateText = '';
    let durationText = '';
    if (plan.isShortTerm) {
        profitRateText = `${plan.totalProfitPercentShortTerm}% (Total)`;
         if (plan.dailyProfitFixedShortTerm > 0) profitRateText += ` / ${formatCurrencyValue(plan.dailyProfitFixedShortTerm, getGlobalDisplayCurrency())} daily fixed`;
        else if (plan.dailyProfitPercentShortTerm > 0) profitRateText += ` / ${plan.dailyProfitPercentShortTerm}% daily`;
        durationText = (plan.durationDaysShortTerm > 0 ? `${plan.durationDaysShortTerm} Days ` : '') +
                       (plan.durationMinutesShortTerm > 0 ? `${plan.durationMinutesShortTerm} Mins` : '');
        if (!durationText) durationText = "Short period";

    } else {
        if (plan.dailyProfitFixedLongTerm > 0) {
            profitRateText = `${formatCurrencyValue(plan.dailyProfitFixedLongTerm, getGlobalDisplayCurrency())} (Daily Fixed)`;
        } else if (plan.dailyProfitPercentLongTerm > 0){
            profitRateText = `${plan.dailyProfitPercentLongTerm}% (Daily %)`
        } else if (plan.totalProfitPercentLongTerm > 0) {
            profitRateText = `${plan.totalProfitPercentLongTerm}% (Total)`;
        }
        durationText = `${plan.durationDaysLongTerm} Days`;
    }
    durationText = durationText.trim();


    const itemDiv = document.createElement('div'); itemDiv.classList.add('active-investment-item');
    itemDiv.id = `investment-item-${investment.id}`;
    itemDiv.innerHTML = `<h4>${plan.planName} (ID: ...${investment.id.slice(-6)})</h4>
                                <p>Invested: <strong id="invested-amount-${investment.id}">${formatCurrencyValue(investment.amount, investmentCurrency)}</strong></p>
                                <p>Start Date: <span id="investment-date-${investment.id}">${formatDate(investment.startDate)}</span></p>
                                <p>Duration: <span id="plan-duration-${investment.id}">${durationText}</span></p>
                                <div class="investment-progress-bar"><div id="progress-fill-${investment.id}" class="investment-progress"></div></div>
                                <p>Time Invested: <strong id="days-invested-${investment.id}">0</strong> (<span id="progress-text-${investment.id}">0%</span>)</p>
                                <p>Profit Rate: <strong id="profit-rate-${investment.id}">${profitRateText}</strong></p>
                                <p>Accumulated Profit: <strong id="acc-profit-${investment.id}">${formatCurrencyValue(0, investmentCurrency)}</strong></p>
                                <hr style="margin: 8px 0; border-color: var(--border-color);">
                                <p>Maturity Date: <strong id="maturity-date-${investment.id}">N/A</strong></p>
                                <div class="countdown-timer" id="maturity-countdown-${investment.id}">Matures in: calculating...</div>
                                <p style="margin-top:5px;">Next Profit In: <strong class="countdown-timer" id="next-profit-countdown-${investment.id}">calculating...</strong></p>
                                <div id="maturity-status-${investment.id}" style="margin-top:10px;"></div>`;
    dashboardElements.activeInvestmentsList.appendChild(itemDiv);
    calculateAndDisplaySingleInvestmentProgress(investment.id);
}
function handleInvestmentSelection(planId) {
    const plan = NFX_CONFIG.investmentPlans.find(p => p.id === planId);
    if (!plan || !plan.isEnabled) { showToast("Invalid or disabled plan selected.", "error"); return; }
    const displayCurrency = getUserDisplayCurrency();
    const amountToInvestStr = prompt(`Enter amount for ${plan.name} (${displayCurrency.code})\nMin: ${formatCurrencyValue(plan.minAmount, displayCurrency)}, Max: ${formatCurrencyValue(plan.maxAmount, displayCurrency)}\nWallet: ${formatCurrencyValue(currentUser.walletBalance, displayCurrency)}`, String(plan.minAmount));
    if (amountToInvestStr === null) return;
    const amountToInvest = parseFloat(amountToInvestStr);
    if (isNaN(amountToInvest)) { showToast("Invalid amount.", "error"); return; }
    if (amountToInvest < plan.minAmount || amountToInvest > plan.maxAmount) {
        showToast(`Amount for ${plan.name} must be ${formatCurrencyValue(plan.minAmount, displayCurrency)} - ${formatCurrencyValue(plan.maxAmount, displayCurrency)}.`, "error"); return;
    }
    if (amountToInvest > currentUser.walletBalance) { showToast(`Insufficient balance. You have ${formatCurrencyValue(currentUser.walletBalance, displayCurrency)}.`, "error"); return; }
    const investmentDate = new Date().toISOString();
    const newInvestment = {
        id: generateUniqueId('inv'),
        planId: plan.id,
        planName: plan.name,
        amount: amountToInvest,
        currency: displayCurrency.code,
        startDate: investmentDate,
        accumulatedProfit: 0,
        maturityNotified: false,
        isShortTerm: plan.isShortTerm,
        durationDaysLongTerm: plan.durationDaysLongTerm,
        dailyProfitPercentLongTerm: plan.dailyProfitPercentLongTerm,
        dailyProfitFixedLongTerm: plan.dailyProfitFixedLongTerm,
        totalProfitPercentLongTerm: plan.totalProfitPercentLongTerm,
        durationDaysShortTerm: plan.durationDaysShortTerm,
        durationMinutesShortTerm: plan.durationMinutesShortTerm,
        totalProfitPercentShortTerm: plan.totalProfitPercentShortTerm,
        dailyProfitPercentShortTerm: plan.dailyProfitPercentShortTerm,
        dailyProfitFixedShortTerm: plan.dailyProfitFixedShortTerm
    };
    if (!currentUser.investments) currentUser.investments = [];
    currentUser.investments.push(newInvestment); currentUser.walletBalance -= amountToInvest;
    addTransaction(currentUser, 'investment_start', `Invested in ${plan.name} (ID...${newInvestment.id.slice(-4)})`, amountToInvest, 'approved', 'System', displayCurrency);
    checkAndLockCurrency(); updateUserInStorage();
    showToast(`Successfully invested ${formatCurrencyValue(amountToInvest, displayCurrency)} in ${plan.name}!`, "success");
    loadDashboard();
}
function updateUserInStorage() {
    if (currentUser && !currentUser.isAdmin) {
        let users = ls.getUsers(); const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex > -1) users[userIndex] = currentUser; ls.saveUsers(users);
    }
    ls.saveCurrentUserSession(currentUser);
}
function addTransaction(user, type, description, amount, statusOrTxType = 'approved', method = 'System', transactionCurrencyObj) {
    if (!user) return; const txId = generateUniqueId(type.substring(0, 3).toUpperCase());
    const currencyForTx = transactionCurrencyObj || getUserDisplayCurrency();
    const newTransaction = {
        id: txId, userId: user.id, userEmail: user.email, date: new Date().toISOString(), description: description,
        amount: Math.abs(amount), currency: currencyForTx.code, type: type,
        status: (type === 'deposit' || type === 'withdrawal') ? statusOrTxType : 'approved',
        txTypeIndicator: (amount >= 0 && (['deposit', 'profit_payout', 'investment_mature_credit', 'admin_credit', 'referral_bonus', 'admin_bonus'].includes(type) || (type === 'system_event' && amount > 0))) ? 'credit' : 'debit',
        method: method
    };
    if (type === 'withdrawal' && newTransaction.status === 'pending') {
        newTransaction.fee = (Math.abs(amount) * NFX_CONFIG.withdrawalFeePercent) / 100;
        newTransaction.netAmount = Math.abs(amount) - newTransaction.fee;
    }
    if (!user.isAdmin || (user.isAdmin && user.id !== 'admin001')) {
        if (!user.transactions) user.transactions = [];
        user.transactions.push(newTransaction);
    }
    if (['deposit', 'withdrawal', 'admin_credit', 'investment_start', 'profit_payout', 'investment_mature_credit', 'referral_bonus', 'admin_bonus'].includes(type)) {
        let globalTxs = ls.getTransactions(); globalTxs.push(newTransaction); ls.saveTransactions(globalTxs);
    }
}
function populateProfitCalculatorPlans() {
    if (!dashboardElements.profitCalcPlanSelect) return;
    const displayCurrency = getUserDisplayCurrency();
    dashboardElements.profitCalcPlanSelect.innerHTML = '<option value="">-- Select a Plan --</option>';
    NFX_CONFIG.investmentPlans.filter(p => p.isEnabled).forEach(plan => {
        const option = document.createElement('option'); option.value = String(plan.id);
        option.textContent = `${plan.name} (${formatCurrencyValue(plan.minAmount, displayCurrency)} - ${formatCurrencyValue(plan.maxAmount, displayCurrency)})`;
        dashboardElements.profitCalcPlanSelect.appendChild(option);
    });
}
function calculateProfitProjection() {
    if (!dashboardElements.profitCalcPlanSelect || !dashboardElements.profitCalcAmountInput || !dashboardElements.profitCalcResultsDisplay) return;
    const displayCurrency = getUserDisplayCurrency();
    const amountInputEl = dashboardElements.profitCalcAmountInput; amountInputEl.classList.remove('input-error');
    const planIdStr = dashboardElements.profitCalcPlanSelect.value;
    const amount = parseFloat(amountInputEl.value);
    if (!planIdStr) { showToast("Please select a plan.", "warning"); dashboardElements.profitCalcResultsDisplay.classList.add('hidden'); return; }
    const planId = parseInt(planIdStr);
    const plan = NFX_CONFIG.investmentPlans.find(p => p.id === planId && p.isEnabled);
    if (!plan) { showToast("Invalid or disabled plan.", "error"); dashboardElements.profitCalcResultsDisplay.classList.add('hidden'); return; }
    if (isNaN(amount) || amount <= 0) { showToast("Enter a valid amount.", "error"); amountInputEl.classList.add('input-error'); dashboardElements.profitCalcResultsDisplay.classList.add('hidden'); return; }
    if (amount < plan.minAmount || amount > plan.maxAmount) {
        showToast(`Amount for ${plan.name} must be ${formatCurrencyValue(plan.minAmount, displayCurrency)} - ${formatCurrencyValue(plan.maxAmount, displayCurrency)}.`, "error");
        amountInputEl.classList.add('input-error'); dashboardElements.profitCalcResultsDisplay.classList.add('hidden'); return;
    }

    let projectedProfit = 0;
    let totalReturn = 0;
    let durationDisplay = '';
    let profitText = '';
    const now = new Date();
    let maturityDate;

    if (plan.isShortTerm) {
        projectedProfit = (amount * plan.totalProfitPercentShortTerm) / 100;
        if(plan.dailyProfitFixedShortTerm > 0) projectedProfit += (plan.dailyProfitFixedShortTerm * (plan.durationDaysShortTerm || 0));
        else if(plan.dailyProfitPercentShortTerm > 0) projectedProfit += ((amount * plan.dailyProfitPercentShortTerm / 100) * (plan.durationDaysShortTerm || 0) );


        totalReturn = amount + projectedProfit;
        let totalMinutes = (plan.durationDaysShortTerm * 24 * 60) + plan.durationMinutesShortTerm;
        durationDisplay = (plan.durationDaysShortTerm > 0 ? `${plan.durationDaysShortTerm} Days ` : '') +
                          (plan.durationMinutesShortTerm > 0 ? `${plan.durationMinutesShortTerm} Mins` : '');
        if(!durationDisplay) durationDisplay = "Short period";
        maturityDate = addTime(now, totalMinutes, 'minutes');
        profitText = `${formatCurrencyValue(projectedProfit, displayCurrency)} (Total)`;
    } else {
        if (plan.dailyProfitFixedLongTerm > 0) {
            projectedProfit = plan.dailyProfitFixedLongTerm * plan.durationDaysLongTerm;
            profitText = `${formatCurrencyValue(plan.dailyProfitFixedLongTerm, getGlobalDisplayCurrency())} (Daily Fixed) / ${formatCurrencyValue(projectedProfit, displayCurrency)} (Total)`;
        } else if (plan.dailyProfitPercentLongTerm > 0) {
            const dailyProfit = (amount * plan.dailyProfitPercentLongTerm) / 100;
            projectedProfit = dailyProfit * plan.durationDaysLongTerm;
            profitText = `${formatCurrencyValue(dailyProfit, displayCurrency)} (Daily %) / ${formatCurrencyValue(projectedProfit, displayCurrency)} (Total)`;
        } else if (plan.totalProfitPercentLongTerm > 0) {
             projectedProfit = (amount * plan.totalProfitPercentLongTerm) / 100;
             profitText = `${formatCurrencyValue(projectedProfit, displayCurrency)} (Total)`;
        }
        totalReturn = amount + projectedProfit;
        durationDisplay = `${plan.durationDaysLongTerm} Days`;
        maturityDate = addTime(now, plan.durationDaysLongTerm, 'days');
    }

    if (dashboardElements.profitCalcResultProfit) dashboardElements.profitCalcResultProfit.textContent = profitText;
    if (dashboardElements.profitCalcResultReturn) dashboardElements.profitCalcResultReturn.textContent = formatCurrencyValue(totalReturn, displayCurrency);
    if (dashboardElements.profitCalcResultDuration) dashboardElements.profitCalcResultDuration.textContent = durationDisplay.trim();
    if (dashboardElements.profitCalcResultMaturity) dashboardElements.profitCalcResultMaturity.textContent = formatDate(maturityDate);
    dashboardElements.profitCalcResultsDisplay.classList.remove('hidden');
}
function calculateAndDisplaySingleInvestmentProgress(investmentId) {
    if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) return;
    const investment = currentUser.investments ? currentUser.investments.find(inv => inv.id === investmentId) : null;
    if (!investment) { console.error(`Investment ${investmentId} not found.`); return; }

    const plan = investment;

    const investmentCurrency = NFX_CONFIG.currencies.find(c => c.code === plan.currency) || getUserDisplayCurrency();
    const progressFillEl = document.getElementById(`progress-fill-${investment.id}`);
    const maturityCountdownEl = document.getElementById(`maturity-countdown-${investment.id}`);
    const nextProfitCountdownEl = document.getElementById(`next-profit-countdown-${investment.id}`);
    const maturityStatusEl = document.getElementById(`maturity-status-${investment.id}`);
    if (!progressFillEl || !maturityCountdownEl || !nextProfitCountdownEl || !maturityStatusEl) { console.error("DOM elements missing for investment:", investmentId); return; }

    const startDate = new Date(plan.startDate);
    const now = new Date();
    let timeDiffMs = now.getTime() - startDate.getTime();
    timeDiffMs = Math.max(0, timeDiffMs);

    let totalDurationMs = 0;
    let currentProfit = 0;
    let progressPercent = 0;
    let maturityDate;
    let nextProfitDate;

    const daysInvestedEl = document.getElementById(`days-invested-${investment.id}`);
    const progressTextEl = document.getElementById(`progress-text-${investment.id}`);
    const accProfitEl = document.getElementById(`acc-profit-${investment.id}`);
    const maturityDateElDisplay = document.getElementById(`maturity-date-${investment.id}`);

    if (plan.isShortTerm) {
        const totalDurationMinutes = (plan.durationDaysShortTerm * 24 * 60) + plan.durationMinutesShortTerm;
        totalDurationMs = totalDurationMinutes * 60 * 1000;
        maturityDate = addTime(startDate, totalDurationMinutes, 'minutes');

        if (timeDiffMs >= totalDurationMs) {
            currentProfit = (plan.amount * plan.totalProfitPercentShortTerm) / 100;
            if (plan.dailyProfitFixedShortTerm > 0) currentProfit += (plan.dailyProfitFixedShortTerm * (plan.durationDaysShortTerm || 0));
            else if (plan.dailyProfitPercentShortTerm > 0) currentProfit += ((plan.amount * plan.dailyProfitPercentShortTerm / 100) * (plan.durationDaysShortTerm || 0));

            progressPercent = 100;
            if (nextProfitCountdownEl) nextProfitCountdownEl.textContent = "Matured";
        } else {
            if (plan.dailyProfitFixedShortTerm > 0 || plan.dailyProfitPercentShortTerm > 0) {
                 let unitDurationMs = 24 * 60 * 60 * 1000;
                 let profitCalcUnitPassed = Math.floor(timeDiffMs / unitDurationMs);
                 profitCalcUnitPassed = Math.min(profitCalcUnitPassed, plan.durationDaysShortTerm || 0);
                 currentProfit = plan.dailyProfitFixedShortTerm > 0 ?
                                 profitCalcUnitPassed * plan.dailyProfitFixedShortTerm :
                                 profitCalcUnitPassed * ((plan.amount * plan.dailyProfitPercentShortTerm) / 100);
            } else {
                currentProfit = 0;
            }
            progressPercent = totalDurationMs > 0 ? (timeDiffMs / totalDurationMs) * 100 : 0;
            if (nextProfitCountdownEl) nextProfitCountdownEl.textContent = "At Maturity";
        }
        if (daysInvestedEl) {
            const minutesInvested = Math.floor(timeDiffMs / (60 * 1000));
            const days = Math.floor(minutesInvested / (24 * 60));
            const remainingMinutes = minutesInvested % (24 * 60);
            daysInvestedEl.textContent = (days > 0 ? `${days}d ` : '') + `${remainingMinutes}m`;
        }

    } else {
        totalDurationMs = plan.durationDaysLongTerm * 24 * 60 * 60 * 1000;
        maturityDate = addTime(startDate, plan.durationDaysLongTerm, 'days');
        let unitDurationMs = 24 * 60 * 60 * 1000;
        let profitCalcUnitPassed = Math.floor(timeDiffMs / unitDurationMs);
        profitCalcUnitPassed = Math.min(profitCalcUnitPassed, plan.durationDaysLongTerm);

        if (plan.dailyProfitFixedLongTerm > 0) {
            currentProfit = profitCalcUnitPassed * plan.dailyProfitFixedLongTerm;
        } else if (plan.dailyProfitPercentLongTerm > 0) {
            currentProfit = profitCalcUnitPassed * ((plan.amount * plan.dailyProfitPercentLongTerm) / 100);
        } else if (plan.totalProfitPercentLongTerm > 0 && timeDiffMs >= totalDurationMs) {
             currentProfit = (plan.amount * plan.totalProfitPercentLongTerm) / 100;
        }

        progressPercent = totalDurationMs > 0 ? (timeDiffMs / totalDurationMs) * 100 : 0;
        progressPercent = Math.min(100, progressPercent);
        if (daysInvestedEl) daysInvestedEl.textContent = `${profitCalcUnitPassed} days`;

        if (now < maturityDate && (plan.dailyProfitFixedLongTerm > 0 || plan.dailyProfitPercentLongTerm > 0)) {
            const lastProfitTime = addTime(startDate, profitCalcUnitPassed, 'days');
            nextProfitDate = addTime(lastProfitTime, 1, 'days');
        }
    }
    investment.accumulatedProfit = currentProfit;

    const investedAmountDisplayEl = document.getElementById(`invested-amount-${investment.id}`);
    if (investedAmountDisplayEl) investedAmountDisplayEl.textContent = formatCurrencyValue(plan.amount, investmentCurrency);
    const investmentDateDisplayEl = document.getElementById(`investment-date-${investment.id}`);
    if (investmentDateDisplayEl) investmentDateDisplayEl.textContent = formatDate(plan.startDate);

    let durationTextForDisplay = '';
     if (plan.isShortTerm) {
        durationTextForDisplay = (plan.durationDaysShortTerm > 0 ? `${plan.durationDaysShortTerm} Days ` : '') +
                                 (plan.durationMinutesShortTerm > 0 ? `${plan.durationMinutesShortTerm} Mins` : '');
        if (!durationTextForDisplay) durationTextForDisplay = "Short period";
    } else {
        durationTextForDisplay = `${plan.durationDaysLongTerm} Days`;
    }
    const planDurationDisplayEl = document.getElementById(`plan-duration-${investment.id}`);
    if(planDurationDisplayEl) planDurationDisplayEl.textContent = durationTextForDisplay.trim();


    if (progressFillEl) progressFillEl.style.width = `${progressPercent.toFixed(2)}%`;
    if (progressTextEl) progressTextEl.textContent = `${progressPercent.toFixed(1)}%`;

    let profitRateTextForDisplay = '';
    if (plan.isShortTerm) {
        profitRateTextForDisplay = `${plan.totalProfitPercentShortTerm}% (Total)`;
        if (plan.dailyProfitFixedShortTerm > 0) profitRateTextForDisplay += ` / ${formatCurrencyValue(plan.dailyProfitFixedShortTerm, getGlobalDisplayCurrency())} daily fixed`;
        else if (plan.dailyProfitPercentShortTerm > 0) profitRateTextForDisplay += ` / ${plan.dailyProfitPercentShortTerm}% daily`;
    } else {
        if (plan.dailyProfitFixedLongTerm > 0) profitRateTextForDisplay = `${formatCurrencyValue(plan.dailyProfitFixedLongTerm, getGlobalDisplayCurrency())} (Daily Fixed)`;
        else if (plan.dailyProfitPercentLongTerm > 0) profitRateTextForDisplay = `${plan.dailyProfitPercentLongTerm}% (Daily %)`;
        else if (plan.totalProfitPercentLongTerm > 0) profitRateTextForDisplay = `${plan.totalProfitPercentLongTerm}% (Total)`;
    }
    const profitRateDisplayEl = document.getElementById(`profit-rate-${investment.id}`);
    if (profitRateDisplayEl) profitRateDisplayEl.textContent = profitRateTextForDisplay;


    if (accProfitEl) accProfitEl.textContent = formatCurrencyValue(currentProfit, investmentCurrency);
    if (maturityDateElDisplay) maturityDateElDisplay.textContent = formatDate(maturityDate);

    clearCountdown(`${investment.id}_maturity`); clearCountdown(`${investment.id}_nextProfit`);
    if (now >= maturityDate) {
        if (maturityCountdownEl) maturityCountdownEl.textContent = "Plan Matured!";
        if (maturityStatusEl && !maturityStatusEl.querySelector('button.button-success')) {
            maturityStatusEl.innerHTML = `<p style="color: var(--success-color); font-weight: bold;">Matured!</p><button class="button button-small button-success" onclick="handlePlanMaturity('${investment.id}')"><i class="fas fa-hand-holding-usd"></i> Claim</button>`;
        }
        if (!investment.maturityNotified) {
            const message = `Your '${plan.planName}' (ID: ...${investment.id.slice(-4)}) plan matured. Claim funds.`;
            showToast(`System Notification: ${message}`, 'info', 7000);
            addUserSystemNotification(currentUser.id, message, 'success');
            investment.maturityNotified = true; updateUserInStorage();
        }
    } else {
        if (maturityStatusEl) maturityStatusEl.innerHTML = `<p style="color: var(--info-color);">Active.</p>`;
        if (maturityCountdownEl) startCountdown(`${investment.id}_maturity`, maturityDate, maturityCountdownEl, "Matures in: ");
        if (nextProfitDate && now < nextProfitDate && !plan.isShortTerm && nextProfitCountdownEl) {
            startCountdown(`${investment.id}_nextProfit`, nextProfitDate, nextProfitCountdownEl, "Next profit in: ");
        } else if (plan.isShortTerm && nextProfitCountdownEl) {
            nextProfitCountdownEl.textContent = (plan.dailyProfitFixedShortTerm > 0 || plan.dailyProfitPercentShortTerm > 0) ? "Daily (Opt.)" : "At Maturity";
        }
        else if (nextProfitCountdownEl) { nextProfitCountdownEl.textContent = (now >= maturityDate) ? "Matured" : "Processing..."; }
    }
}
function handlePlanMaturity(investmentId) {
    if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin || !currentUser.investments) return;
    const investmentIndex = currentUser.investments.findIndex(inv => inv.id === investmentId);
    if (investmentIndex === -1) { showToast("Error: Investment not found.", "error"); return; }
    const investment = currentUser.investments[investmentIndex];
    const investmentCurrency = NFX_CONFIG.currencies.find(c => c.code === investment.currency) || getUserDisplayCurrency();
    const principal = investment.amount;
    let finalProfit = 0;

    if (investment.isShortTerm) {
        finalProfit = (principal * investment.totalProfitPercentShortTerm) / 100;
        if (investment.dailyProfitFixedShortTerm > 0) finalProfit += (investment.dailyProfitFixedShortTerm * (investment.durationDaysShortTerm || 0));
        else if (investment.dailyProfitPercentShortTerm > 0) finalProfit += ((principal * investment.dailyProfitPercentShortTerm / 100) * (investment.durationDaysShortTerm || 0));
    } else {
        if (investment.dailyProfitFixedLongTerm > 0) {
            finalProfit = investment.dailyProfitFixedLongTerm * investment.durationDaysLongTerm;
        } else if (investment.dailyProfitPercentLongTerm > 0) {
            finalProfit = investment.durationDaysLongTerm * ((principal * investment.dailyProfitPercentLongTerm) / 100);
        } else if (investment.totalProfitPercentLongTerm > 0) {
            finalProfit = (principal * investment.totalProfitPercentLongTerm) / 100;
        }
    }

    investment.accumulatedProfit = finalProfit;
    const totalReturn = principal + finalProfit;
    currentUser.walletBalance += totalReturn;
    currentUser.totalRealizedProfit = (currentUser.totalRealizedProfit || 0) + finalProfit;
    addTransaction(currentUser, 'investment_mature_credit', `Matured ${investment.planName} (ID...${investment.id.slice(-4)}) - Principal`, principal, 'approved', 'System', investmentCurrency);
    addTransaction(currentUser, 'profit_payout', `Matured ${investment.planName} (ID...${investment.id.slice(-4)}) - Profit`, finalProfit, 'approved', 'System', investmentCurrency);
    const message = `Plan '${investment.planName}' (ID...${investment.id.slice(-4)}) finalized! ${formatCurrencyValue(totalReturn, investmentCurrency)} credited.`;
    showToast(message, "success", 6000); addUserSystemNotification(currentUser.id, message, 'success');
    currentUser.investments.splice(investmentIndex, 1);
    checkAndLockCurrency(); updateUserInStorage(); loadDashboard();
}
function startCountdown(timerKey, targetDate, element, prefix = "") {
    if (!element) return; if (countdownIntervals[timerKey]) clearInterval(countdownIntervals[timerKey]);
    countdownIntervals[timerKey] = setInterval(() => {
        const now = new Date().getTime(); const distance = new Date(targetDate).getTime() - now;
        if (distance < 0) {
            clearInterval(countdownIntervals[timerKey]); element.textContent = prefix + (timerKey.includes('maturity') ? "Matured!" : "Processing...");
            if (currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin && sections.dashboard && !sections.dashboard.classList.contains('hidden')) {
                const investmentIdFromKey = timerKey.substring(0, timerKey.lastIndexOf('_'));
                const investmentItemElement = document.getElementById(`investment-item-${investmentIdFromKey}`);
                if (investmentItemElement) { calculateAndDisplaySingleInvestmentProgress(investmentIdFromKey); }
            } return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)); const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let countdownText = ""; if (days > 0) countdownText += `${days}d `; if (hours > 0 || days > 0) countdownText += `${hours}h `;
        countdownText += `${minutes}m ${seconds}s`; element.textContent = prefix + countdownText;
    }, 1000);
}
function clearCountdown(timerKey) { if (countdownIntervals[timerKey]) { clearInterval(countdownIntervals[timerKey]); delete countdownIntervals[timerKey]; } }
function clearAllCountdowns() { for (const key in countdownIntervals) { clearInterval(countdownIntervals[key]); } countdownIntervals = {}; }
window.renderTransactionHistory = function (filterType = 'all', clickedButton = null) {
    if (currentUser && (currentUser.isAdmin || currentUser.isAssistantAdmin)) return;
    if (!dashboardElements.transactionTableBody || !dashboardElements.noTransactionsMessage || !currentUser) return;
    if (clickedButton) { document.querySelectorAll('#dashboard-section .tx-history-tab-button').forEach(btn => btn.classList.remove('active')); clickedButton.classList.add('active'); }
    const displayCurrency = getUserDisplayCurrency();
    dashboardElements.transactionTableBody.innerHTML = '';
    if (!currentUser.transactions || currentUser.transactions.length === 0) { dashboardElements.noTransactionsMessage.classList.remove('hidden'); return; }
    let filteredTxs = currentUser.transactions.filter(tx => !['system_event', 'profile_update', 'security_update'].includes(tx.type));
    if (filterType === 'deposit') filteredTxs = filteredTxs.filter(tx => tx.type === 'deposit');
    else if (filterType === 'withdrawal') filteredTxs = filteredTxs.filter(tx => tx.type === 'withdrawal');
    else if (filterType === 'earnings') filteredTxs = filteredTxs.filter(tx => ['profit_payout', 'investment_mature_credit', 'referral_bonus'].includes(tx.type));
    else if (filterType === 'bonus') filteredTxs = filteredTxs.filter(tx => tx.type === 'admin_bonus');
    if (filteredTxs.length === 0) {
        dashboardElements.noTransactionsMessage.textContent = `No transactions for filter: ${filterType}.`;
        dashboardElements.noTransactionsMessage.classList.remove('hidden'); return;
    }
    dashboardElements.noTransactionsMessage.classList.add('hidden');
    filteredTxs.slice().reverse().forEach(tx => {
        const row = dashboardElements.transactionTableBody.insertRow();
        const txCurrency = NFX_CONFIG.currencies.find(c => c.code === tx.currency) || displayCurrency;
        row.insertCell().textContent = formatDate(tx.date, { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        row.insertCell().textContent = tx.description;
        const amountCell = row.insertCell(); amountCell.textContent = formatCurrencyValue(tx.amount, txCurrency);
        amountCell.classList.add(tx.txTypeIndicator === 'credit' ? 'amount-credit' : 'amount-debit');
        const statusCell = row.insertCell(); statusCell.textContent = tx.status.charAt(0).toUpperCase() + tx.status.slice(1); statusCell.classList.add(`status-${tx.status}`);
        row.insertCell().textContent = tx.type.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    });
}
function renderAccountGrowthChart() {
    if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) return;
    const chartEl = document.getElementById('accountGrowthChart'); if (!chartEl) return;
    if (accountGrowthChartInstance) accountGrowthChartInstance.destroy();
    const ctx = chartEl.getContext('2d');
    const displayCurrency = getUserDisplayCurrency();
    const dataPoints = [{ date: new Date(currentUser.registeredDate), balance: 0 }];
    let currentRunningBalance = 0;
    const sortedTransactions = currentUser.transactions ? [...currentUser.transactions]
        .filter(tx => tx.status === 'approved' && ['deposit', 'withdrawal', 'profit_payout', 'investment_mature_credit', 'referral_bonus', 'admin_bonus', 'admin_credit'].includes(tx.type))
        .sort((a, b) => new Date(a.date) - new Date(b.date)) : [];

    sortedTransactions.forEach(tx => {
        if (tx.txTypeIndicator === 'credit') currentRunningBalance += tx.amount;
        else if (tx.txTypeIndicator === 'debit' && tx.type !== 'investment_start') currentRunningBalance -= tx.amount;
        dataPoints.push({ date: new Date(tx.date), balance: currentRunningBalance });
    });
    if (dataPoints.length === 1) {
        dataPoints.push({ date: new Date(), balance: currentUser.walletBalance });
    }
    if (new Date(dataPoints[dataPoints.length - 1].date) < new Date()) {
        if (dataPoints[dataPoints.length - 1].balance !== currentUser.walletBalance) {
            dataPoints.push({ date: new Date(), balance: currentUser.walletBalance });
        }
    }

    accountGrowthChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataPoints.map(dp => formatDate(dp.date, { month: 'short', day: 'numeric' })),
            datasets: [{
                label: `Account Balance (${displayCurrency.code})`,
                data: dataPoints.map(dp => dp.balance.toFixed(2)),
                borderColor: 'var(--primary-color)',
                backgroundColor: 'rgba(41, 128, 185, 0.1)',
                tension: 0.1, fill: true
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { callback: value => formatCurrencyValue(value, displayCurrency) } } } }
    });
}
if (forms.financialGoal) {
    forms.financialGoal.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) return;
        const amountInput = document.getElementById('financial-goal-amount');
        const descriptionInput = document.getElementById('financial-goal-description');
        const amount = parseFloat(amountInput.value);
        const description = descriptionInput.value.trim();
        if (isNaN(amount) || amount < 0) { showToast("Invalid goal amount.", "error"); return; }
        if (!description && amount > 0) { showToast("Please provide a description for your goal.", "warning"); return; }
        currentUser.financialGoal = (amount === 0 && !description) ? null : { amount, description };
        updateUserInStorage();
        loadAndDisplayFinancialGoal();
        showToast(currentUser.financialGoal ? "Financial goal updated!" : "Financial goal cleared.", "success");
    });
}
function loadAndDisplayFinancialGoal() {
    if (!currentUser || !dashboardElements.financialGoalDisplay) return;
    const goal = currentUser.financialGoal;
    if (goal && goal.amount > 0) {
        const displayCurrency = getUserDisplayCurrency();
        dashboardElements.financialGoalTextDesc.textContent = goal.description;
        dashboardElements.financialGoalTextAmount.textContent = formatCurrencyValue(goal.amount, displayCurrency);
        const progress = Math.min(100, (currentUser.walletBalance / goal.amount) * 100);
        dashboardElements.financialGoalProgressFill.style.width = `${progress.toFixed(1)}%`;
        dashboardElements.financialGoalProgressFill.textContent = `${progress.toFixed(1)}%`;
        dashboardElements.financialGoalDisplay.classList.remove('hidden');
    } else {
        dashboardElements.financialGoalDisplay.classList.add('hidden');
    }
}
if (forms.adminBroadcast) {
    forms.adminBroadcast.addEventListener('submit', (e) => {
        e.preventDefault(); if (!currentUser || !currentUser.isAdmin) return;
        const messageTextarea = document.getElementById('admin-broadcast-message');
        const message = messageTextarea.value.trim();
        if (!message) { showToast("Broadcast message cannot be empty.", "error"); return; }
        ls.saveBroadcastMessage({ text: message, timestamp: new Date().toISOString() });
        displayBroadcastMessage();
        showToast("Broadcast message sent!", "success");
        addAdminLogEntry(`Sent broadcast message: "${message.substring(0, 30)}..."`);
        messageTextarea.value = '';
    });
}
if (dashboardElements.adminClearBroadcastBtn) {
    dashboardElements.adminClearBroadcastBtn.addEventListener('click', () => {
        if (!currentUser || !currentUser.isAdmin) return;
        ls.saveBroadcastMessage(null);
        if (dashboardElements.broadcastBanner) dashboardElements.broadcastBanner.classList.add('hidden');
        const messageTextarea = document.getElementById('admin-broadcast-message');
        if (messageTextarea) messageTextarea.value = '';
        showToast("Broadcast message cleared.", "info");
        addAdminLogEntry("Cleared site-wide broadcast message.");
    });
}
function displayBroadcastMessage() {
    if (!dashboardElements.broadcastBanner || !dashboardElements.broadcastText) return;
    const broadcastData = ls.getBroadcastMessage();
    if (broadcastData && broadcastData.text) {
        dashboardElements.broadcastText.innerHTML = `<strong>Announcement:</strong> ${broadcastData.text} <em>(Posted: ${formatDate(broadcastData.timestamp)})</em>`;
        dashboardElements.broadcastBanner.classList.remove('hidden');
    } else {
        dashboardElements.broadcastBanner.classList.add('hidden');
    }
}
if (forms.profileSettings) {
    forms.profileSettings.addEventListener('submit', (e) => {
        e.preventDefault(); if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) return;
        const newNameInput = document.getElementById('profile-setting-name');
        const newPicUrlInput = dashboardElements.profileSettingPicUrlInput;
        if (!newNameInput || !newPicUrlInput) return;
        let changed = false; const newName = newNameInput.value.trim();
        if (newName && newName !== currentUser.name) {
            currentUser.name = newName; changed = true;
            if (dashboardElements.welcome) dashboardElements.welcome.textContent = `Welcome, ${currentUser.name}!`;
            if (dashboardElements.userName) dashboardElements.userName.textContent = currentUser.name;
        }
        const newPicUrl = newPicUrlInput.value.trim();
        if (newPicUrl !== (currentUser.profilePicUrl || '')) {
            currentUser.profilePicUrl = newPicUrl || null; changed = true;
            if (currentUser.profilePicUrl) {
                dashboardElements.dashProfilePic.src = currentUser.profilePicUrl;
                dashboardElements.dashProfilePic.classList.remove('hidden');
                dashboardElements.dashProfilePicPlaceholder.classList.add('hidden');
            } else {
                dashboardElements.dashProfilePic.classList.add('hidden');
                dashboardElements.dashProfilePicPlaceholder.classList.remove('hidden');
            }
        }
        if (changed) {
            addTransaction(currentUser, 'profile_update', `Profile details updated.`, 0, 'system_event');
            updateUserInStorage(); showToast("Profile updated successfully!", "success");
        } else { showToast("No changes to update.", "info"); }
    });
}
if (forms.changePassword) {
    forms.changePassword.addEventListener('submit', (e) => {
        e.preventDefault(); if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) return;
        const currentPassInput = document.getElementById('current-password');
        const newPassInput = document.getElementById('new-password');
        const confirmNewPassInput = document.getElementById('confirm-new-password');
        clearFormMessage(dashboardElements.changePasswordMessage);
        if (currentPassInput.value !== currentUser.password) { displayFormMessage(dashboardElements.changePasswordMessage, "Current password incorrect.", "error"); return; }
        if (newPassInput.value.length < 6) { displayFormMessage(dashboardElements.changePasswordMessage, "New password min 6 characters.", "error"); return; }
        if (newPassInput.value !== confirmNewPassInput.value) { displayFormMessage(dashboardElements.changePasswordMessage, "New passwords do not match.", "error"); return; }
        currentUser.password = newPassInput.value;
        addTransaction(currentUser, 'security_update', `Password changed by user.`, 0, 'system_event');
        updateUserInStorage(); displayFormMessage(dashboardElements.changePasswordMessage, "Password changed! (Simulation)", "success");
        forms.changePassword.reset(); showToast("Password changed successfully!", "success");
    });
}
window.handle2FAToggleChange = function (isChecked) {
    if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin || !dashboardElements.profile2FAStatus) return;
    currentUser.is2FAEnabled = isChecked;
    addTransaction(currentUser, 'security_update', `2FA ${isChecked ? 'enabled' : 'disabled'}`, 0, 'system_event');
    updateUserInStorage(); dashboardElements.profile2FAStatus.textContent = isChecked ? "Enabled" : "Disabled";
    showToast(`Two-Factor Authentication option ${isChecked ? 'enabled' : 'disabled'}. (Simulation only)`, "info");
}

function loadUserSupportTicketsBrief() {
    if (!currentUser || !dashboardElements.userTicketListBrief) return;
    const tickets = ls.getSupportTickets().filter(t => t.userId === currentUser.id).sort((a, b) => new Date(b.messages[b.messages.length - 1].timestamp) - new Date(a.messages[a.messages.length - 1].timestamp)).slice(0, 3);
    dashboardElements.userTicketListBrief.innerHTML = '';
    if (tickets.length === 0) {
        dashboardElements.userTicketListBrief.innerHTML = '<p class="text-center">No support tickets yet.</p>'; return;
    }
    tickets.forEach(ticket => {
        const item = document.createElement('div'); item.classList.add('ticket-item');
        item.innerHTML = `<p><strong>${ticket.subject.substring(0, 30)}${ticket.subject.length > 30 ? '...' : ''}</strong></p>
                                <p>Status: <span class="ticket-status-${ticket.status.toLowerCase()}">${ticket.status.replace(/_/g, ' ')}</span> | Last Update: ${formatDate(ticket.messages[ticket.messages.length - 1].timestamp, { month: 'short', day: 'numeric' })}</p>`;
        item.onclick = () => { openModal('userSupportTicketModal'); displayUserTicketChatView(ticket.ticketId); };
        dashboardElements.userTicketListBrief.appendChild(item);
    });
}
function displayUserSupportTicketsView() {
    if(!dashboardElements.userNewTicketFormView || !dashboardElements.userTicketChatView || !dashboardElements.userSupportTicketView || !dashboardElements.userSupportTicketTitle || !dashboardElements.userExistingTicketsList) return;
    dashboardElements.userNewTicketFormView.classList.add('hidden');
    dashboardElements.userTicketChatView.classList.add('hidden');
    dashboardElements.userSupportTicketView.classList.remove('hidden');
    dashboardElements.userSupportTicketTitle.innerHTML = '<i class="fas fa-headset"></i> My Support Tickets';
    const tickets = ls.getSupportTickets().filter(t => t.userId === currentUser.id).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    dashboardElements.userExistingTicketsList.innerHTML = '';
    if (tickets.length === 0) {
        dashboardElements.userExistingTicketsList.innerHTML = '<p class="text-center">You have no support tickets.</p>';
    } else {
        tickets.forEach(ticket => {
            const item = document.createElement('div'); item.classList.add('ticket-item');
            item.innerHTML = `<p><strong>${ticket.subject}</strong> (ID: ...${ticket.ticketId.slice(-4)})</p>
                                    <p>Status: <span class="ticket-status-${ticket.status.toLowerCase()}">${ticket.status.replace(/_/g, ' ')}</span> | Created: ${formatDate(ticket.createdAt, { month: 'short', day: 'numeric' })}</p>`;
            item.onclick = () => displayUserTicketChatView(ticket.ticketId);
            dashboardElements.userExistingTicketsList.appendChild(item);
        });
    }
}
if (dashboardElements.userCreateNewTicketBtn) dashboardElements.userCreateNewTicketBtn.onclick = () => {
    if(!dashboardElements.userSupportTicketView || !dashboardElements.userTicketChatView || !dashboardElements.userNewTicketFormView || !dashboardElements.userSupportTicketTitle) return;
    dashboardElements.userSupportTicketView.classList.add('hidden');
    dashboardElements.userTicketChatView.classList.add('hidden');
    dashboardElements.userNewTicketFormView.classList.remove('hidden');
    dashboardElements.userSupportTicketTitle.innerHTML = '<i class="fas fa-plus-circle"></i> Create New Ticket';
    if (forms.userNewTicketForm) forms.userNewTicketForm.reset();
};
if (dashboardElements.userCancelNewTicketBtn) dashboardElements.userCancelNewTicketBtn.onclick = displayUserSupportTicketsView;
if (forms.userNewTicketForm) forms.userNewTicketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!dashboardElements.userTicketSubjectInput || !dashboardElements.userTicketMessageInput) return;
    const subject = dashboardElements.userTicketSubjectInput.value.trim();
    const message = dashboardElements.userTicketMessageInput.value.trim();
    if (!subject || !message) { showToast("Subject and message are required.", "error"); return; }
    const newTicket = {
        ticketId: generateUniqueId('tkt'), userId: currentUser.id, userEmail: currentUser.email, userName: currentUser.name,
        subject: subject, status: 'open', createdAt: new Date().toISOString(),
        messages: [{ sender: 'user', text: message, timestamp: new Date().toISOString() }],
        lastAdminReplyAt: null, lastUserReplyAt: new Date().toISOString()
    };
    let tickets = ls.getSupportTickets(); tickets.unshift(newTicket); ls.saveSupportTickets(tickets);
    showToast("Support ticket submitted!", "success");
    addUserSystemNotification(NFX_CONFIG.adminCredentials.email, `New support ticket from ${currentUser.email}: "${subject}"`, 'admin', true, newTicket.ticketId);
    displayUserTicketChatView(newTicket.ticketId);
    loadUserSupportTicketsBrief();
});
function displayUserTicketChatView(ticketId) {
    if(!dashboardElements.userSupportTicketView || !dashboardElements.userNewTicketFormView || !dashboardElements.userTicketChatView || !dashboardElements.userSupportTicketTitle || !dashboardElements.userChatTicketSubject || !dashboardElements.userReplyTicketIdInput || !dashboardElements.userTicketChatMessages) return;
    const tickets = ls.getSupportTickets(); const ticket = tickets.find(t => t.ticketId === ticketId);
    if (!ticket) { showToast("Ticket not found.", "error"); displayUserSupportTicketsView(); return; }
    dashboardElements.userSupportTicketView.classList.add('hidden');
    dashboardElements.userNewTicketFormView.classList.add('hidden');
    dashboardElements.userTicketChatView.classList.remove('hidden');
    dashboardElements.userSupportTicketTitle.innerHTML = `<i class="fas fa-comments"></i> Ticket: ${ticket.subject}`;
    dashboardElements.userChatTicketSubject.textContent = ticket.subject;
    dashboardElements.userReplyTicketIdInput.value = ticketId;
    const chatMessagesEl = dashboardElements.userTicketChatMessages; chatMessagesEl.innerHTML = '';
    ticket.messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('support-chat-message', msg.sender === 'user' ? 'user' : 'admin');
        msgDiv.innerHTML = `<span class="sender">${msg.sender === 'user' ? 'You' : 'Support'}</span>
                                    <p>${msg.text.replace(/\n/g, '<br>')}</p>
                                    <span class="timestamp">${formatDate(msg.timestamp, { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })}</span>`;
        chatMessagesEl.appendChild(msgDiv);
    });
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    if (forms.userReplyTicketForm) forms.userReplyTicketForm.reset();
}
if (dashboardElements.userBackToTicketsBtn) dashboardElements.userBackToTicketsBtn.onclick = displayUserSupportTicketsView;
if (forms.userReplyTicketForm) forms.userReplyTicketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!dashboardElements.userReplyTicketIdInput || !dashboardElements.userTicketReplyMessageInput) return;
    const ticketId = dashboardElements.userReplyTicketIdInput.value;
    const replyMessage = dashboardElements.userTicketReplyMessageInput.value.trim();
    if (!replyMessage) { showToast("Reply message cannot be empty.", "error"); return; }
    let tickets = ls.getSupportTickets(); const ticketIndex = tickets.findIndex(t => t.ticketId === ticketId);
    if (ticketIndex === -1) { showToast("Ticket not found.", "error"); return; }
    tickets[ticketIndex].messages.push({ sender: 'user', text: replyMessage, timestamp: new Date().toISOString() });
    tickets[ticketIndex].status = 'user_reply'; tickets[ticketIndex].lastUserReplyAt = new Date().toISOString();
    ls.saveSupportTickets(tickets); showToast("Reply sent!", "success");
    addUserSystemNotification(NFX_CONFIG.adminCredentials.email, `User reply on ticket "${tickets[ticketIndex].subject}" from ${currentUser.email}.`, 'admin', true, ticketId);
    displayUserTicketChatView(ticketId); loadUserSupportTicketsBrief();
});

function showCustomConfirm(message, title = "Confirmation") {
    // This function requires a modal in HTML which is not present.
    // For now, it will use the default browser confirm.
    return Promise.resolve(window.confirm(message));
}

function addAdminLogEntry(text) {
    if (!currentUser || (!currentUser.isAdmin && !currentUser.isAssistantAdmin)) return;
    const logEntry = {
        timestamp: new Date().toISOString(),
        user: currentUser.email,
        text: text
    };
    let logs = ls.getAdminSystemLog();
    logs.unshift(logEntry);
    if (logs.length > 200) logs.splice(200);
    ls.saveAdminSystemLog(logs);

    const adminLogTab = document.getElementById('admin-systemLog-tab');
    if (adminLogTab && adminLogTab.classList.contains('active')) {
        loadAdminSystemLogTabContent();
    }
}

function loadAdminPanel() {
    if (!currentUser || (!currentUser.isAdmin && !currentUser.isAssistantAdmin)) {
        showToast("Access denied.", "error"); navigateToSection('home', 'nav-home'); return;
    }
    navigateToSection('adminPanel', 'nav-admin');
    if (dashboardElements.adminPanelTitle) dashboardElements.adminPanelTitle.innerHTML = `<i class="fas fa-user-shield"></i> Admin Panel (${currentUser.email} - ${currentUser.isAdmin ? 'Super Admin' : 'Assistant'})`;
    if (dashboardElements.adminAssistantBanner) dashboardElements.adminAssistantBanner.classList.toggle('hidden', !currentUser.isAssistantAdmin);
    const firstAdminMainTab = document.querySelector('#admin-panel-section > .admin-tabs .admin-tab-button');
    if (firstAdminMainTab) showAdminMainTab(firstAdminMainTab.dataset.tabTarget, firstAdminMainTab);
    else loadAdminOverviewTabContent();
    if (currentUser.isAssistantAdmin) {
        document.querySelectorAll('#admin-panel-section button:not([data-tab-target]):not(.close-button):not(#admin-apply-tx-filters):not(#admin-clear-tx-filters):not(#admin-apply-user-filters):not(#admin-clear-user-filters):not(#admin-apply-ticket-filters):not(#admin-clear-ticket-filters)').forEach(btn => {
            if (! (btn.classList.contains('button-small') && btn.innerHTML.includes('fa-eye'))) {
                 if (!btn.closest('.modal-content')) {
                    btn.classList.add('disabled'); btn.disabled = true; btn.title = "Action restricted for Assistant Admin";
                 }
            }
        });
        document.querySelectorAll('#admin-panel-section input, #admin-panel-section select, #admin-panel-section textarea').forEach(input => {
            if (!['admin-tx-filter-user', 'admin-tx-filter-type', 'admin-user-filter-name', 'admin-user-filter-status', 'admin-ticket-filter-user', 'admin-ticket-filter-status'].includes(input.id)) {
                if (!input.closest('.modal-content')) {
                    input.disabled = true;
                }
            }
        });
        if (forms.adminReplyTicketForm && dashboardElements.adminTicketReplyMessageInput) {
            dashboardElements.adminTicketReplyMessageInput.disabled = false;
             const submitButton = forms.adminReplyTicketForm.querySelector('button[type="submit"]');
             if (submitButton) {
                 submitButton.disabled = false;
                 submitButton.classList.remove('disabled');
                 submitButton.title = "";
             }
        }
         if(dashboardElements.adminTicketChangeStatusSelect) dashboardElements.adminTicketChangeStatusSelect.disabled = true;
    }
}
window.showAdminMainTab = function (tabName, clickedButton) {
    const mainTabContents = document.querySelectorAll('#admin-panel-section > .admin-tab-content');
    mainTabContents.forEach(content => content.classList.remove('active'));
    const targetMainTab = document.getElementById(`admin-${tabName}-tab`);
    if (targetMainTab) targetMainTab.classList.add('active');
    const mainTabButtons = document.querySelectorAll('#admin-panel-section > .admin-tabs .admin-tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));
    if (clickedButton) clickedButton.classList.add('active');
    if (tabName === 'overview') loadAdminOverviewTabContent();
    else if (tabName === 'userManagement') loadAdminUserManagementTabContent();
    else if (tabName === 'transactions') loadAdminAllTransactionsTabContent();
    else if (tabName === 'contentManagement') loadAdminContentManagementTabContent();
    else if (tabName === 'planManagement') loadAdminPlanManagementTabContent();
    else if (tabName === 'supportTickets') loadAdminSupportTicketsTabContent();
    else if (tabName === 'analytics') loadAdminAnalyticsTabContent();
    else if (tabName === 'settings') loadAdminGlobalSettingsTabContent();
    else if (tabName === 'systemLog') loadAdminSystemLogTabContent();
}
function loadAdminOverviewTabContent() {
    const globalTxs = ls.getTransactions();
    const pendingDeposits = globalTxs.filter(tx => tx.type === 'deposit' && tx.status === 'pending');
    const pendingWithdrawals = globalTxs.filter(tx => tx.type === 'withdrawal' && tx.status === 'pending');
    if (dashboardElements.adminPendingDeposits) renderAdminPendingTxList(dashboardElements.adminPendingDeposits, pendingDeposits, 'deposit');
    if (dashboardElements.adminPendingWithdrawals) renderAdminPendingTxList(dashboardElements.adminPendingWithdrawals, pendingWithdrawals, 'withdrawal');
    if (dashboardElements.adminPendingDepositsCount) dashboardElements.adminPendingDepositsCount.textContent = String(pendingDeposits.length);
    if (dashboardElements.adminPendingWithdrawalsCount) dashboardElements.adminPendingWithdrawalsCount.textContent = String(pendingWithdrawals.length);
    renderAdminGlobalStats();
}
function loadAdminUserManagementTabContent() {
    if (dashboardElements.adminUserFilterName) dashboardElements.adminUserFilterName.value = '';
    if (dashboardElements.adminUserFilterStatus) dashboardElements.adminUserFilterStatus.value = '';
    renderAdminUserListTable();
}
function loadAdminAllTransactionsTabContent() { renderAdminAllTransactionsTable(); }
function loadAdminContentManagementTabContent() {
    if (!currentUser || !currentUser.isAdmin) {
        const contentTab = document.getElementById('admin-contentManagement-tab');
        if (contentTab) contentTab.innerHTML = '<p class="text-center form-message warning">Content management restricted for Assistant Admins.</p>';
        return;
    }
    loadAdminHeroContentForm();
    renderAdminEditableList('feature', NFX_CONFIG.features, dashboardElements.adminFeaturesList, ['iconClass', 'title', 'description']);
    renderAdminEditableList('testimonial', NFX_CONFIG.testimonials, dashboardElements.adminTestimonialsList, ['quote', 'author', 'role', 'avatar']);
    renderAdminEditableList('faq', NFX_CONFIG.faqs, dashboardElements.adminFaqsList, ['q', 'a']);
}
function loadAdminPlanManagementTabContent() {
    if (!currentUser || !currentUser.isAdmin) {
        const planTab = document.getElementById('admin-planManagement-tab');
        if (planTab) planTab.innerHTML = '<p class="text-center form-message warning">Plan management restricted for Assistant Admins.</p>';
        return;
    }
    renderAdminInvestmentPlansList();
}
function loadAdminAnalyticsTabContent() { renderAdminCharts(); }
function loadAdminGlobalSettingsTabContent() {
    if (!currentUser || !currentUser.isAdmin) {
        const settingsTab = document.getElementById('admin-settings-tab');
        if (settingsTab) settingsTab.innerHTML = '<p class="text-center form-message warning">Global settings restricted for Assistant Admins.</p>';
        return;
    }
    populateAdminGlobalSettingsForm();
}
function renderAdminGlobalStats() {
    if (!dashboardElements.adminGlobalStatsDisplay) return;
    const users = ls.getUsers(); const transactions = ls.getTransactions();
    const platformBaseCurrency = getGlobalDisplayCurrency();
    const totalUsers = users.length; let totalWalletBalanceAggregated = 0; let totalActivelyInvestedAggregated = 0;
    users.forEach(user => {
        totalWalletBalanceAggregated += user.walletBalance || 0;
        if (user.investments) user.investments.forEach(inv => { totalActivelyInvestedAggregated += inv.amount || 0; });
    });
    const totalProfitsPaid = transactions.filter(tx => tx.type === 'profit_payout' && tx.status === 'approved').reduce((sum, tx) => sum + tx.amount, 0);
    dashboardElements.adminGlobalStatsDisplay.innerHTML = `
                <div class="stat-card"><h4>Total Users</h4><p>${totalUsers}</p></div>
                <div class="stat-card"><h4>Wallet Balances (Agg.)</h4><p>${formatCurrencyValue(totalWalletBalanceAggregated, platformBaseCurrency)}</p></div>
                <div class="stat-card"><h4>Actively Invested (Agg.)</h4><p>${formatCurrencyValue(totalActivelyInvestedAggregated, platformBaseCurrency)}</p></div>
                <div class="stat-card"><h4>Total Profits Paid</h4><p>${formatCurrencyValue(totalProfitsPaid, platformBaseCurrency)}</p></div>`;
}
function renderAdminPendingTxList(container, items, type) {
    if (!container) return; container.innerHTML = '';
    if (items.length === 0) { container.innerHTML = `<p style="padding:10px 0;">No pending ${type}s.</p>`; return; }
    items.forEach(item => {
        const card = document.createElement('div'); card.classList.add('pending-tx-card');
        let detailsHTML = ''; const itemCurrency = NFX_CONFIG.currencies.find(c => c.code === item.currency) || getGlobalDisplayCurrency();
        if (type === 'deposit') { detailsHTML += `<p>Proof: ${item.proofFilename || 'N/A'}</p>`; }
        else if (type === 'withdrawal') {
            detailsHTML += `<p>Details: ${item.details || 'N/A'}</p><p>Fee: ${formatCurrencyValue(item.fee, itemCurrency)} | Net: ${formatCurrencyValue(item.netAmount, itemCurrency)}</p>`;
        }
        card.innerHTML = `<p><strong>User:</strong> ${item.userEmail} (ID: ${item.userId.slice(0, 8)}...)</p>
                                  <p><strong>${type === 'withdrawal' ? 'Gross ' : ''}Amount:</strong> ${formatCurrencyValue(item.amount, itemCurrency)} (${item.currency})</p>
                                  <p><strong>Method:</strong> ${item.method}</p> <p><strong>Date:</strong> ${formatDate(item.date)}</p> ${detailsHTML}
                                  <div style="margin-top:10px;">
                                      <button class="button button-small button-success ${currentUser.isAssistantAdmin ? 'disabled' : ''}" ${currentUser.isAssistantAdmin ? 'disabled title="Action restricted for Assistant Admin"' : ''} onclick="adminApproveTx('${item.id}', '${type}')"><i class="fas fa-check"></i> Approve</button>
                                      <button class="button button-small button-danger ${currentUser.isAssistantAdmin ? 'disabled' : ''}" ${currentUser.isAssistantAdmin ? 'disabled title="Action restricted for Assistant Admin"' : ''} onclick="adminRejectTx('${item.id}', '${type}')"><i class="fas fa-times"></i> Reject</button>
                                  </div>`;
        container.appendChild(card);
    });
}
function renderAdminUserListTable() {
    if (!dashboardElements.adminUserListTableContainer || !dashboardElements.adminNoUsersMessage || !dashboardElements.adminUserFilterName || !dashboardElements.adminUserFilterStatus) return;
    let users = ls.getUsers();

    const filterNameEmail = dashboardElements.adminUserFilterName.value.trim().toLowerCase();
    const filterStatus = dashboardElements.adminUserFilterStatus.value;

    let filteredUsers = users;

    if (filterNameEmail) {
        filteredUsers = filteredUsers.filter(u => u.name.toLowerCase().includes(filterNameEmail) || u.email.toLowerCase().includes(filterNameEmail));
    }

    if (filterStatus && filterStatus !== "") {
        if (filterStatus === "active") {
            filteredUsers = filteredUsers.filter(u => !u.isSuspended && !u.isAssistantAdmin && !u.isAdmin);
        } else if (filterStatus === "suspended") {
            filteredUsers = filteredUsers.filter(u => u.isSuspended);
        } else if (filterStatus === "assistant_admin") {
            filteredUsers = filteredUsers.filter(u => u.isAssistantAdmin);
        }
    }


    dashboardElements.adminUserListTableContainer.innerHTML = '';
    if (filteredUsers.length === 0) {
        if (filterNameEmail || (filterStatus && filterStatus !== "")) {
            dashboardElements.adminNoUsersMessage.textContent = "No users found matching current filter criteria.";
        } else {
            dashboardElements.adminNoUsersMessage.textContent = "No users registered in the system yet (excluding Super Admin).";
        }
        dashboardElements.adminNoUsersMessage.classList.remove('hidden');
        return;
    }
    dashboardElements.adminNoUsersMessage.classList.add('hidden');

    const table = document.createElement('table');
    table.innerHTML = `<thead><tr><th></th><th>Name</th><th>Email</th><th>Wallet Bal</th><th>Status</th><th>Role</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody>`;
    const tbody = table.querySelector('tbody');

    filteredUsers.forEach(user => {
        if (user.email === NFX_CONFIG.adminCredentials.email && user.isAdmin && user.id === 'admin001') return;

        const tr = tbody.insertRow();
        const picCell = tr.insertCell();
        if (user.profilePicUrl) { picCell.innerHTML = `<img src="${user.profilePicUrl}" class="admin-user-avatar" alt="Avatar">`; }
        else { picCell.innerHTML = `<span class="admin-user-avatar profile-picture-placeholder" style="width:30px;height:30px;font-size:1rem;display:inline-flex; align-items:center; justify-content:center;"><i class="fas fa-user"></i></span>`; }
        tr.insertCell().textContent = user.name;
        tr.insertCell().textContent = user.email;
        const userDisplayCurrency = user.lockedCurrency || getGlobalDisplayCurrency();
        tr.insertCell().textContent = formatCurrencyValue(user.walletBalance || 0, userDisplayCurrency);
        const statusCell = tr.insertCell(); statusCell.textContent = user.isSuspended ? 'Suspended' : 'Active';
        statusCell.classList.add(user.isSuspended ? 'status-suspended' : 'status-approved');
        tr.insertCell().textContent = user.isAssistantAdmin ? 'Assistant' : (user.isAdmin ? 'Admin' : 'User');
        tr.insertCell().textContent = formatDate(user.registeredDate, { day: '2-digit', month: 'short', year: '2-digit' });
        const actionCell = tr.insertCell();
        const viewButton = document.createElement('button'); viewButton.classList.add('button', 'button-small', 'button-secondary');
        viewButton.innerHTML = '<i class="fas fa-eye"></i> View'; viewButton.title = `View details for ${user.name}`;
        viewButton.style.marginRight = '5px'; viewButton.onclick = () => { openAdminViewUserModal(user.id); };
        actionCell.appendChild(viewButton);
        if (currentUser.isAdmin) {
            const editButton = document.createElement('button'); editButton.classList.add('button', 'button-small');
            editButton.innerHTML = '<i class="fas fa-edit"></i> Edit'; editButton.title = `Edit user ${user.name}`;
            editButton.style.marginRight = '5px'; editButton.onclick = () => { openAdminEditUserModal(user.id); };
            actionCell.appendChild(editButton);
            const deleteButton = document.createElement('button'); deleteButton.classList.add('button', 'button-small', 'button-danger');
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i> Delete'; deleteButton.title = `Delete ${user.name}`;
            deleteButton.onclick = () => adminDeleteUser(user.id, user.email);
            actionCell.appendChild(deleteButton);
        }
    });
    dashboardElements.adminUserListTableContainer.appendChild(table);
}

if (dashboardElements.adminApplyUserFiltersBtn) {
    dashboardElements.adminApplyUserFiltersBtn.addEventListener('click', renderAdminUserListTable);
}
if (dashboardElements.adminClearUserFiltersBtn) {
    dashboardElements.adminClearUserFiltersBtn.addEventListener('click', () => {
        if(dashboardElements.adminUserFilterName) dashboardElements.adminUserFilterName.value = '';
        if(dashboardElements.adminUserFilterStatus) dashboardElements.adminUserFilterStatus.value = '';
        renderAdminUserListTable();
    });
}

async function adminDeleteUser(userId, userEmail) {
    if (!currentUser.isAdmin) {
        showToast("Action restricted.", "error");
        return;
    }
    // Using default confirm as custom one is not in HTML
    const confirmation = window.confirm(`DELETE user ${userEmail} (ID: ${userId})? This action is IRREVERSIBLE.`);
    if (!confirmation) {
        return;
    }
    let users = ls.getUsers();
    const updatedUsers = users.filter(user => user.id !== userId);
    if (users.length === updatedUsers.length) {
        showToast(`User ${userEmail} not found.`, "error"); return;
    }
    let globalTxs = ls.getTransactions(); globalTxs = globalTxs.filter(tx => tx.userId !== userId); ls.saveTransactions(globalTxs);
    ls.saveUsers(updatedUsers);
    ls.remove(LS_KEYS.USER_NOTIFICATIONS_PREFIX + userId); ls.remove(LS_KEYS.USER_LAST_LOGIN_PREFIX + userId);
    let supportTickets = ls.getSupportTickets(); supportTickets = supportTickets.filter(ticket => ticket.userId !== userId); ls.saveSupportTickets(supportTickets);
    addAdminLogEntry(`Deleted user ${userEmail} (ID: ${userId}). All their transactions, notifications, and tickets were also removed.`);
    showToast(`User ${userEmail} deleted.`, "success"); loadAdminUserManagementTabContent();
    const overviewTab = document.getElementById('admin-overview-tab');
    if (overviewTab && overviewTab.classList.contains('active')) renderAdminGlobalStats();
}
// --- All other functions (openAdminEditUserModal, forms.adminEditUser submit, etc.) remain identical ---
// --- I'm including them all to provide a complete file as requested. ---
function openAdminEditUserModal(userId) {
    if (!currentUser.isAdmin) { showToast("Action restricted.", "error"); return; }
    const user = ls.getUsers().find(u => u.id === userId); if (!user) { showToast("User not found.", "error"); return; }
    if (!dashboardElements.adminEditUserIdInput || !dashboardElements.adminEditUserNameInput || !dashboardElements.adminEditUserEmailInput || !dashboardElements.adminEditUserPasswordInput || !dashboardElements.adminEditUserCreditInput || !dashboardElements.adminEditUserCreditReasonInput || !dashboardElements.adminEditUserBonusInput || !dashboardElements.adminEditUserBonusReasonInput || !dashboardElements.adminEditUserSuspendedToggle || !dashboardElements.adminEditUserAssistantToggle || !dashboardElements.adminDirectMessageTextInput || !dashboardElements.adminEditUserTitle) return;
    dashboardElements.adminEditUserIdInput.value = user.id;
    dashboardElements.adminEditUserNameInput.value = user.name;
    dashboardElements.adminEditUserEmailInput.value = user.email;
    dashboardElements.adminEditUserPasswordInput.value = '';
    dashboardElements.adminEditUserCreditInput.value = ''; dashboardElements.adminEditUserCreditReasonInput.value = '';
    dashboardElements.adminEditUserBonusInput.value = ''; dashboardElements.adminEditUserBonusReasonInput.value = '';
    dashboardElements.adminEditUserSuspendedToggle.checked = user.isSuspended;
    dashboardElements.adminEditUserAssistantToggle.checked = user.isAssistantAdmin;
    dashboardElements.adminDirectMessageTextInput.value = '';
    dashboardElements.adminEditUserTitle.innerHTML = `<i class="fas fa-user-edit"></i> Edit User: ${user.name}`;
    openModal('adminEditUserModal');
}
if (forms.adminEditUser) forms.adminEditUser.addEventListener('submit', (e) => {
    e.preventDefault(); if (!currentUser.isAdmin) return;
    if (!dashboardElements.adminEditUserIdInput || !dashboardElements.adminEditUserNameInput || !dashboardElements.adminEditUserEmailInput || !dashboardElements.adminEditUserPasswordInput || !dashboardElements.adminEditUserCreditInput || !dashboardElements.adminEditUserCreditReasonInput || !dashboardElements.adminEditUserBonusInput || !dashboardElements.adminEditUserBonusReasonInput || !dashboardElements.adminEditUserSuspendedToggle || !dashboardElements.adminEditUserAssistantToggle || !dashboardElements.adminDirectMessageTextInput) return;
    const userId = dashboardElements.adminEditUserIdInput.value; let users = ls.getUsers();
    const userIndex = users.findIndex(u => u.id === userId); if (userIndex === -1) { showToast("User not found.", "error"); return; }
    let user = users[userIndex]; const oldEmail = user.email; let changesMade = [];
    const newName = dashboardElements.adminEditUserNameInput.value.trim(); if (newName !== user.name) { user.name = newName; changesMade.push("Name updated"); }
    const newEmail = dashboardElements.adminEditUserEmailInput.value.trim(); if (newEmail !== user.email) { user.email = newEmail; changesMade.push("Email updated"); }
    const newPassword = dashboardElements.adminEditUserPasswordInput.value; if (newPassword) { user.password = newPassword; changesMade.push("Password changed"); }
    const creditAmount = parseFloat(dashboardElements.adminEditUserCreditInput.value) || 0;
    const creditReason = dashboardElements.adminEditUserCreditReasonInput.value.trim() || "Admin Credit";
    if (creditAmount !== 0) {
        user.walletBalance = (user.walletBalance || 0) + creditAmount;
        addTransaction(user, 'admin_credit', creditReason, creditAmount, 'approved', 'AdminPanel', user.lockedCurrency || getGlobalDisplayCurrency());
        changesMade.push(`${creditAmount > 0 ? 'Credited' : 'Debited'} ${formatCurrencyValue(Math.abs(creditAmount), user.lockedCurrency || getGlobalDisplayCurrency())}`);
        addUserSystemNotification(user.id, `Admin ${creditAmount > 0 ? 'credited your account with' : 'debited your account by'} ${formatCurrencyValue(Math.abs(creditAmount), user.lockedCurrency || getGlobalDisplayCurrency())} for: ${creditReason}`, creditAmount > 0 ? 'success' : 'warning');
    }
    const bonusAmount = parseFloat(dashboardElements.adminEditUserBonusInput.value) || 0;
    const bonusReason = dashboardElements.adminEditUserBonusReasonInput.value.trim() || "Admin Bonus";
    if (bonusAmount > 0) {
        user.walletBalance = (user.walletBalance || 0) + bonusAmount;
        addTransaction(user, 'admin_bonus', bonusReason, bonusAmount, 'approved', 'AdminPanel', user.lockedCurrency || getGlobalDisplayCurrency());
        changesMade.push(`Added Bonus ${formatCurrencyValue(bonusAmount, user.lockedCurrency || getGlobalDisplayCurrency())}`);
        addUserSystemNotification(user.id, `You received a bonus of ${formatCurrencyValue(bonusAmount, user.lockedCurrency || getGlobalDisplayCurrency())} for: ${bonusReason}`, 'success');
    }
    const isSuspended = dashboardElements.adminEditUserSuspendedToggle.checked;
    if (isSuspended !== user.isSuspended) { user.isSuspended = isSuspended; changesMade.push(isSuspended ? "Account Suspended" : "Account Unsuspended"); addUserSystemNotification(user.id, `Your account has been ${isSuspended ? 'suspended' : 'reinstated'}.`, isSuspended ? 'warning' : 'success'); }
    const isAssistant = dashboardElements.adminEditUserAssistantToggle.checked;
    if (isAssistant !== user.isAssistantAdmin) { user.isAssistantAdmin = isAssistant; changesMade.push(isAssistant ? "Promoted to Assistant" : "Demoted from Assistant"); addUserSystemNotification(user.id, `Your role changed to ${isAssistant ? 'Assistant Admin' : 'User'}.`, 'info'); }
    const directMessage = dashboardElements.adminDirectMessageTextInput.value.trim();
    if (directMessage) { addUserSystemNotification(user.id, `Message from Admin: ${directMessage}`, 'info'); changesMade.push("Direct message sent"); }
    if (changesMade.length > 0) {
        users[userIndex] = user; ls.saveUsers(users);
        addAdminLogEntry(`Edited user ${user.name} (ID: ${userId}, Old Email: ${oldEmail}). Changes: ${changesMade.join(', ')}.`);
        showToast(`User ${user.name} updated.`, "success");
    } else { showToast("No changes made.", "info"); }
    closeModal('adminEditUserModal'); renderAdminUserListTable();
    const overviewTab = document.getElementById('admin-overview-tab');
    if (overviewTab && overviewTab.classList.contains('active')) renderAdminGlobalStats();
});
function adminApproveTx(txId, type) {
    if (currentUser.isAssistantAdmin) { showToast("Action restricted.", "error"); return; }
    let globalTxs = ls.getTransactions(); const txIndex = globalTxs.findIndex(tx => tx.id === txId);
    if (txIndex === -1) { showToast("Transaction not found.", "error"); return; }
    const tx = globalTxs[txIndex];
    let users = ls.getUsers(); const userIndex = users.findIndex(u => u.id === tx.userId);
    if (userIndex === -1) { showToast("User for transaction not found.", "error"); return; }

    const user = users[userIndex];
    if (!user.transactions) user.transactions = [];
    const userTxIndex = user.transactions.findIndex(utx => utx.id === txId);

    if (type === 'deposit') {
        user.walletBalance = (user.walletBalance || 0) + tx.amount;
        tx.status = 'approved';
        if (userTxIndex > -1) user.transactions[userTxIndex].status = 'approved'; else user.transactions.push({...tx});
        addUserSystemNotification(user.id, `Your deposit of ${formatCurrencyValue(tx.amount, NFX_CONFIG.currencies.find(c=>c.code === tx.currency) || getGlobalDisplayCurrency())} has been approved.`, 'success');
    } else if (type === 'withdrawal') {
        if ((user.walletBalance || 0) >= tx.amount) {
            user.walletBalance -= tx.amount;
            tx.status = 'approved';
            if (userTxIndex > -1) user.transactions[userTxIndex].status = 'approved'; else user.transactions.push({...tx});
            addUserSystemNotification(user.id, `Your withdrawal of ${formatCurrencyValue(tx.amount, NFX_CONFIG.currencies.find(c=>c.code === tx.currency) || getGlobalDisplayCurrency())} has been approved.`, 'success');
        } else {
            tx.status = 'rejected';
            if (userTxIndex > -1) user.transactions[userTxIndex].status = 'rejected'; else user.transactions.push({...tx});
            showToast(`Withdrawal for ${user.email} auto-rejected (insufficient funds).`, "warning");
            addUserSystemNotification(user.id, `Your withdrawal for ${formatCurrencyValue(tx.amount, NFX_CONFIG.currencies.find(c=>c.code === tx.currency) || getGlobalDisplayCurrency())} was rejected due to insufficient funds.`, 'error');
        }
    }
    globalTxs[txIndex] = tx;
    ls.saveTransactions(globalTxs);
    users[userIndex] = user; ls.saveUsers(users);

    if (currentUser && currentUser.id === user.id && !currentUser.isAdmin && !currentUser.isAssistantAdmin) {
        currentUser = user; ls.saveCurrentUserSession(currentUser);
        if (sections.dashboard && !sections.dashboard.classList.contains('hidden')) loadDashboard();
    }
    addAdminLogEntry(`Approved ${type} ID ${txId} for ${tx.userEmail}. Amount: ${formatCurrencyValue(tx.amount, NFX_CONFIG.currencies.find(c=>c.code === tx.currency) || getGlobalDisplayCurrency())}.`);
    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} for ${tx.userEmail} set to ${tx.status}.`, tx.status === 'approved' ? "success" : "info");
    loadAdminOverviewTabContent();
}
function adminRejectTx(txId, type) {
    if (currentUser.isAssistantAdmin) { showToast("Action restricted.", "error"); return; }
    let globalTxs = ls.getTransactions(); const txIndex = globalTxs.findIndex(tx => tx.id === txId);
    if (txIndex === -1) { showToast("Transaction not found.", "error"); return; }
    globalTxs[txIndex].status = 'rejected'; ls.saveTransactions(globalTxs);
    let users = ls.getUsers(); const userIndex = users.findIndex(u => u.id === globalTxs[txIndex].userId);
    if (userIndex > -1) {
        const user = users[userIndex]; if (!user.transactions) user.transactions = [];
        const userTxIndex = user.transactions.findIndex(utx => utx.id === txId);
        if (userTxIndex > -1) user.transactions[userTxIndex].status = 'rejected'; else { user.transactions.push({...globalTxs[txIndex]}); }
        users[userIndex] = user; ls.saveUsers(users);
        if (currentUser && currentUser.id === user.id && !currentUser.isAdmin && !currentUser.isAssistantAdmin) { currentUser = user; ls.saveCurrentUserSession(currentUser); }
        const txCurrency = NFX_CONFIG.currencies.find(c => c.code === globalTxs[txIndex].currency) || getGlobalDisplayCurrency();
        addUserSystemNotification(user.id, `Your ${type} request for ${formatCurrencyValue(globalTxs[txIndex].amount, txCurrency)} rejected.`, 'warning');
    }
    addAdminLogEntry(`Rejected ${type} ID ${txId} for ${globalTxs[txIndex].userEmail}.`);
    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} rejected for ${globalTxs[txIndex].userEmail}.`, "info");
    loadAdminOverviewTabContent();
    if (sections.dashboard && !sections.dashboard.classList.contains('hidden') && currentUser && currentUser.id === globalTxs[txIndex].userId && !currentUser.isAdmin && !currentUser.isAssistantAdmin) loadDashboard();
}
function openAdminViewUserModal(userId) {
    if (!dashboardElements.adminViewUserModal || !dashboardElements.adminViewUserTitle || !dashboardElements.adminViewUserDetails) return;
    const users = ls.getUsers(); const userToView = users.find(u => u.id === userId);
    if (!userToView) { showToast("User not found.", "error"); return; }
    dashboardElements.adminViewUserTitle.innerHTML = `<i class="fas fa-user-check"></i> User: ${userToView.name}`;
    const userDisplayCurrency = userToView.lockedCurrency || getGlobalDisplayCurrency();
    let investmentsHTML = 'No active investments.';
    if (userToView.investments && userToView.investments.length > 0) {
        investmentsHTML = userToView.investments.map(inv => {
            const plan = inv;
            const invCurrency = NFX_CONFIG.currencies.find(c => c.code === inv.currency) || userDisplayCurrency;
            let durationTextForModal = '';
            if (plan.isShortTerm) {
                 durationTextForModal = (plan.durationDaysShortTerm > 0 ? `${plan.durationDaysShortTerm}d ` : '') + (plan.durationMinutesShortTerm > 0 ? `${plan.durationMinutesShortTerm}m` : '');
                 if (!durationTextForModal) durationTextForModal = "Short Period";
            } else {
                 durationTextForModal = `${plan.durationDaysLongTerm}d`;
            }

            return `<div class="investment-details-modal">
                                <p><strong>Plan:</strong> ${plan.planName} (ID: ...${inv.id.slice(-4)})</p>
                                <p><strong>Invested:</strong> ${formatCurrencyValue(inv.amount, invCurrency)}</p>
                                <p><strong>Start:</strong> ${formatDate(inv.startDate)}</p>
                                <p><strong>Duration:</strong> ${durationTextForModal.trim()}</p>
                                <p><strong>Profit:</strong> ${formatCurrencyValue(inv.accumulatedProfit || 0, invCurrency)}</p></div>`; }).join('');
    }
    const lastLoginModal = ls.getUserLastLogin(userToView.id);
    let profilePicHTML = `<div class="profile-picture-placeholder" style="width:80px;height:80px;font-size:2.5rem; margin-bottom:10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-user"></i></div>`;
    if (userToView.profilePicUrl) {
        profilePicHTML = `<img src="${userToView.profilePicUrl}" alt="Avatar" class="profile-picture" style="width:80px;height:80px;margin-bottom:10px;">`;
    }
    dashboardElements.adminViewUserDetails.innerHTML = `${profilePicHTML}
                <p><strong>ID:</strong> ${userToView.id}</p><p><strong>Name:</strong> ${userToView.name}</p>
                <p><strong>Email:</strong> ${userToView.email}</p><p><strong>Registered:</strong> ${formatDate(userToView.registeredDate)}</p>
                <p><strong>Last Login:</strong> ${lastLoginModal ? formatDate(lastLoginModal) : 'N/A'}</p>
                <p><strong>Wallet Balance:</strong> ${formatCurrencyValue(userToView.walletBalance || 0, userDisplayCurrency)}</p>
                <p><strong>Total Realized Profit:</strong> ${formatCurrencyValue(userToView.totalRealizedProfit || 0, userDisplayCurrency)}</p>
                <p><strong>Account Currency:</strong> ${userToView.lockedCurrency ? `${userToView.lockedCurrency.code} (Locked)` : `${getGlobalDisplayCurrency().code} (Global)`}</p>
                <p><strong>Status:</strong> <span class="${userToView.isSuspended ? 'status-suspended' : 'status-approved'}">${userToView.isSuspended ? 'Suspended' : 'Active'}</span></p>
                <p><strong>Role:</strong> ${userToView.isAdmin ? 'Super Admin' : (userToView.isAssistantAdmin ? 'Assistant Admin' : 'User')}</p>
                <hr style="margin:10px 0;"><h4>Active Investments: (${userToView.investments ? userToView.investments.length : 0})</h4>${investmentsHTML}
                <hr style="margin:10px 0;"><p><strong>Referral Code:</strong> ${userToView.referralCode}</p>
                <p><strong>Referred By UserID:</strong> ${userToView.referredBy || 'N/A'}</p>
                <p><strong>2FA Enabled:</strong> ${userToView.is2FAEnabled ? 'Yes' : 'No'}</p>`;
    openModal('adminViewUserModal');
}
function renderAdminAllTransactionsTable() {
    if (!dashboardElements.adminAllTransactionsTableBody || !dashboardElements.adminNoTransactionsMessage || !dashboardElements.adminTxFilterUser || !dashboardElements.adminTxFilterType) return;
    let transactions = ls.getTransactions();
    const filterUserEmail = dashboardElements.adminTxFilterUser.value.trim().toLowerCase();
    const filterType = dashboardElements.adminTxFilterType.value;
    if (filterUserEmail) transactions = transactions.filter(tx => tx.userEmail.toLowerCase().includes(filterUserEmail));
    if (filterType) transactions = transactions.filter(tx => tx.type === filterType);
    dashboardElements.adminAllTransactionsTableBody.innerHTML = '';
    if (transactions.length === 0) { dashboardElements.adminNoTransactionsMessage.classList.remove('hidden'); return; }
    dashboardElements.adminNoTransactionsMessage.classList.add('hidden');
    transactions.slice().reverse().forEach(tx => {
        const row = dashboardElements.adminAllTransactionsTableBody.insertRow();
        const txCurrency = NFX_CONFIG.currencies.find(c => c.code === tx.currency) || getGlobalDisplayCurrency();
        row.insertCell().textContent = formatDate(tx.date, { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        row.insertCell().textContent = tx.userEmail; row.insertCell().textContent = tx.description;
        const amountCell = row.insertCell(); amountCell.textContent = formatCurrencyValue(tx.amount, txCurrency);
        amountCell.classList.add(tx.txTypeIndicator === 'credit' ? 'amount-credit' : 'amount-debit');
        row.insertCell().textContent = tx.currency;
        const statusCell = row.insertCell(); statusCell.textContent = tx.status.charAt(0).toUpperCase() + tx.status.slice(1); statusCell.classList.add(`status-${tx.status}`);
        row.insertCell().textContent = tx.type.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        row.insertCell().textContent = tx.id.slice(0, 8) + '...';
    });
}
if (dashboardElements.adminApplyTxFiltersBtn) dashboardElements.adminApplyTxFiltersBtn.addEventListener('click', renderAdminAllTransactionsTable);
if (dashboardElements.adminClearTxFiltersBtn && dashboardElements.adminTxFilterUser && dashboardElements.adminTxFilterType) {
    dashboardElements.adminClearTxFiltersBtn.addEventListener('click', () => {
        dashboardElements.adminTxFilterUser.value = ''; dashboardElements.adminTxFilterType.value = ''; renderAdminAllTransactionsTable();
    });
}
function loadAdminHeroContentForm() {
    if (dashboardElements.adminHeroHeadlineInput) dashboardElements.adminHeroHeadlineInput.value = NFX_CONFIG.heroContent.headline;
    if (dashboardElements.adminHeroSubheadlineInput) dashboardElements.adminHeroSubheadlineInput.value = NFX_CONFIG.heroContent.subheadline;
}
if (forms.adminHeroContent) forms.adminHeroContent.addEventListener('submit', (e) => {
    e.preventDefault(); if (!currentUser.isAdmin) return;
    if (!dashboardElements.adminHeroHeadlineInput || !dashboardElements.adminHeroSubheadlineInput) return;
    const newHeadline = dashboardElements.adminHeroHeadlineInput.value.trim();
    const newSubheadline = dashboardElements.adminHeroSubheadlineInput.value.trim();
    if (newHeadline && newSubheadline) {
        const updatedHeroContent = { headline: newHeadline, subheadline: newSubheadline };
        ls.saveAdminHeroContent(updatedHeroContent); loadEffectiveConfig(); renderHeroContent();
        addAdminLogEntry(`Updated Hero Content. Headline: "${newHeadline.substring(0, 20)}...", Subheadline: "${newSubheadline.substring(0, 20)}..."`);
        showToast("Hero content updated!", "success");
    } else { showToast("Headline and subheadline cannot be empty.", "error"); }
});
function renderAdminEditableList(type, items, container, fields) {
    if (!container) return; container.innerHTML = '';
    if (!items || items.length === 0) { container.innerHTML = `<p>No ${type}s defined. Click "Add ${type.charAt(0).toUpperCase() + type.slice(1)}" to create one.</p>`; return; }
    items.forEach(item => {
        const div = document.createElement('div'); div.classList.add('admin-managed-item'); let contentHTML = '';
        fields.forEach(fieldKey => { contentHTML += `<p><strong>${fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> ${item[fieldKey] || 'N/A'}</p>`; });
        div.innerHTML = `${contentHTML}<div class="actions">
                                <button class="button button-small" onclick="openAdminContentModal('${type}', '${item.id}')"><i class="fas fa-edit"></i> Edit</button>
                                <button class="button button-small button-danger" onclick="adminDeleteContentItem('${type}', '${item.id}')"><i class="fas fa-trash"></i> Delete</button></div>`;
        container.appendChild(div);
    });
}
window.openAdminContentModal = function (type, itemId = null) {
    if (!currentUser.isAdmin) return;
    const modal = dashboardElements.adminEditContentModal; const titleEl = dashboardElements.adminEditContentTitle;
    const idInput = dashboardElements.adminEditContentIdInput; const typeInput = dashboardElements.adminEditContentTypeInput;
    const fieldsContainer = dashboardElements.adminContentFieldsContainer;
    if (!modal || !titleEl || !idInput || !typeInput || !fieldsContainer || !forms.adminEditContent) return;
    forms.adminEditContent.reset(); fieldsContainer.innerHTML = ''; typeInput.value = type;
    let currentItem = null; let fieldsToEdit = []; let fieldPlaceholders = {};
    if (type === 'feature') {
        fieldsToEdit = ['iconClass', 'title', 'description']; fieldPlaceholders = { iconClass: 'e.g., fas fa-star', title: 'Feature Title', description: 'Description' };
        if (itemId) currentItem = NFX_CONFIG.features.find(f => f.id === itemId); titleEl.innerHTML = `<i class="fas fa-star"></i> ${itemId ? 'Edit' : 'Add'} Feature`;
    } else if (type === 'testimonial') {
        fieldsToEdit = ['quote', 'author', 'role', 'avatar']; fieldPlaceholders = { quote: 'Testimonial Text', author: 'Author Name', role: 'Author Role', avatar: 'Image URL' };
        if (itemId) currentItem = NFX_CONFIG.testimonials.find(t => t.id === itemId); titleEl.innerHTML = `<i class="fas fa-comment-dots"></i> ${itemId ? 'Edit' : 'Add'} Testimonial`;
    } else if (type === 'faq') {
        fieldsToEdit = ['q', 'a']; fieldPlaceholders = { q: 'Question', a: 'Answer' };
        if (itemId) currentItem = NFX_CONFIG.faqs.find(f => f.id === itemId); titleEl.innerHTML = `<i class="fas fa-question-circle"></i> ${itemId ? 'Edit' : 'Add'} FAQ`;
    }
    idInput.value = itemId || '';
    fieldsToEdit.forEach(fieldKey => {
        const labelText = fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, ' $1');
        const value = currentItem ? currentItem[fieldKey] : '';
        const inputType = (fieldKey === 'description' || fieldKey === 'quote' || fieldKey === 'a') ? 'textarea' : 'text';
        const fg = document.createElement('div'); fg.classList.add('form-group'); fg.innerHTML = `<label for="content-${fieldKey}">${labelText}:</label>`;
        let inputEl;
        if (inputType === 'textarea') { inputEl = document.createElement('textarea'); inputEl.rows = 3; }
        else { inputEl = document.createElement('input'); inputEl.type = 'text'; }
        inputEl.id = `content-${fieldKey}`; inputEl.name = fieldKey; inputEl.value = value; inputEl.placeholder = fieldPlaceholders[fieldKey] || '';
        inputEl.required = true; fg.appendChild(inputEl); fieldsContainer.appendChild(fg);
    });
    openModal('adminEditContentModal');
}
if (forms.adminEditContent) forms.adminEditContent.addEventListener('submit', (e) => {
    e.preventDefault(); if (!currentUser.isAdmin) return;
    if (!dashboardElements.adminEditContentIdInput || !dashboardElements.adminEditContentTypeInput) return;
    const id = dashboardElements.adminEditContentIdInput.value; const type = dashboardElements.adminEditContentTypeInput.value;
    const formData = new FormData(forms.adminEditContent); const newItemData = {};
    for (let [key, value] of formData.entries()) { if (key !== 'admin-edit-content-id' && key !== 'admin-edit-content-type') newItemData[key] = value.trim(); }
    if (Object.values(newItemData).some(val => !val)) { showToast("All fields are required.", "error"); return; }
    let list, saveFunction, renderFunction, container, configKey;
    if (type === 'feature') { list = [...NFX_CONFIG.features]; saveFunction = ls.saveAdminFeatures; renderFunction = renderFeatures; container = dashboardElements.adminFeaturesList; configKey = 'features'; }
    else if (type === 'testimonial') { list = [...NFX_CONFIG.testimonials]; saveFunction = ls.saveAdminTestimonials; renderFunction = renderTestimonials; container = dashboardElements.adminTestimonialsList; configKey = 'testimonials'; }
    else if (type === 'faq') { list = [...NFX_CONFIG.faqs]; saveFunction = ls.saveAdminFaqs; renderFunction = renderFAQs; container = dashboardElements.adminFaqsList; configKey = 'faqs'; }
    else return;
    let logMessageAction = '';
    if (id) { const index = list.findIndex(item => item.id === id); if (index > -1) list[index] = { ...list[index], ...newItemData }; logMessageAction = 'updated'; }
    else { newItemData.id = generateUniqueId(type); list.push(newItemData); logMessageAction = 'added'; }
    saveFunction(list); loadEffectiveConfig();
    if (container) {
        const firstItem = NFX_CONFIG[configKey] && NFX_CONFIG[configKey].length > 0 ? NFX_CONFIG[configKey][0] : {};
        renderAdminEditableList(type, NFX_CONFIG[configKey], container, Object.keys(firstItem).filter(k => k !== 'id'));
    }
    renderFunction(); closeModal('adminEditContentModal');
    addAdminLogEntry(`${type.charAt(0).toUpperCase() + type.slice(1)} item ${logMessageAction}: ID ${newItemData.id || id}.`);
    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} ${logMessageAction} successfully!`, "success");
});
window.adminDeleteContentItem = function (type, itemId) {
    if (!currentUser.isAdmin) return; if (!confirm(`DELETE this ${type}?`)) return;
    let list, saveFunction, renderFunction, configKey, container;
    if (type === 'feature') { list = [...NFX_CONFIG.features]; saveFunction = ls.saveAdminFeatures; renderFunction = renderFeatures; configKey = 'features'; container = dashboardElements.adminFeaturesList; }
    else if (type === 'testimonial') { list = [...NFX_CONFIG.testimonials]; saveFunction = ls.saveAdminTestimonials; renderFunction = renderTestimonials; configKey = 'testimonials'; container = dashboardElements.adminTestimonialsList; }
    else if (type === 'faq') { list = [...NFX_CONFIG.faqs]; saveFunction = ls.saveAdminFaqs; renderFunction = renderFAQs; configKey = 'faqs'; container = dashboardElements.adminFaqsList; }
    else return;
    const updatedList = list.filter(item => item.id !== itemId); saveFunction(updatedList); loadEffectiveConfig();
    if (container) {
        const firstItem = NFX_CONFIG[configKey] && NFX_CONFIG[configKey].length > 0 ? NFX_CONFIG[configKey][0] : {};
        renderAdminEditableList(type, NFX_CONFIG[configKey], container, Object.keys(firstItem).filter(k => k !== 'id'));
    }
    renderFunction();
    addAdminLogEntry(`Deleted ${type} item with ID ${itemId}.`);
    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted.`, "success");
}
function renderAdminInvestmentPlansList() {
    const container = dashboardElements.adminInvestmentPlansList; if (!container) return; container.innerHTML = '';
    NFX_CONFIG.investmentPlans.forEach(plan => {
        const div = document.createElement('div'); div.classList.add('admin-managed-item');
        if (!plan.isEnabled) div.style.opacity = '0.6';

        let profitInfo = '';
        let durationInfo = '';
        if (plan.isShortTerm) {
            profitInfo = `${plan.totalProfitPercentShortTerm}% total`;
            if (plan.dailyProfitFixedShortTerm > 0) profitInfo += ` / ${formatCurrencyValue(plan.dailyProfitFixedShortTerm, getGlobalDisplayCurrency())} daily fixed`;
            else if (plan.dailyProfitPercentShortTerm > 0) profitInfo += ` / ${plan.dailyProfitPercentShortTerm}% daily`;
            durationInfo = (plan.durationDaysShortTerm > 0 ? `${plan.durationDaysShortTerm}d ` : '') +
                           (plan.durationMinutesShortTerm > 0 ? `${plan.durationMinutesShortTerm}m` : '');
             if (!durationInfo) durationInfo = "Short Period";
        } else {
            if (plan.dailyProfitFixedLongTerm > 0) profitInfo = `${formatCurrencyValue(plan.dailyProfitFixedLongTerm, getGlobalDisplayCurrency())} daily fixed`;
            else if (plan.dailyProfitPercentLongTerm > 0) profitInfo = `${plan.dailyProfitPercentLongTerm}% daily`;
            else if (plan.totalProfitPercentLongTerm > 0) profitInfo = `${plan.totalProfitPercentLongTerm}% total (long term)`;
            durationInfo = `${plan.durationDaysLongTerm}d`;
        }

        div.innerHTML = `<h4>${plan.name} ${!plan.isEnabled ? '(Disabled)' : ''}</h4>
                                <p><strong>Range:</strong> ${plan.minAmount} - ${plan.maxAmount} (${getGlobalDisplayCurrency().symbol})</p>
                                <p><strong>Profit:</strong> ${profitInfo.trim()}</p><p><strong>Duration:</strong> ${durationInfo.trim()}</p>
                                <p><strong>Description:</strong> ${plan.description}</p>
                                <div class="actions">
                                    <button class="button button-small" onclick="openAdminEditPlanModal('${plan.id}')"><i class="fas fa-edit"></i> Edit</button>
                                    <button class="button button-small ${plan.isEnabled ? 'button-warning' : 'button-success'}" onclick="adminTogglePlanStatus(${plan.id})">
                                        <i class="fas ${plan.isEnabled ? 'fa-eye-slash' : 'fa-eye'}"></i> ${plan.isEnabled ? 'Disable' : 'Enable'}
                                    </button></div>`; container.appendChild(div);
    });
}
function setupPlanProfitAutoCalculations() {
    const minAmountEl = document.getElementById('admin-plan-minAmount');
    let activelyCalculating = false;

    const fieldsConfig = [
        { percentElId: 'admin-plan-dailyProfitPercent-long', fixedElId: 'admin-plan-dailyProfitFixed-long' },
        { percentElId: 'admin-plan-dailyProfitPercent-short', fixedElId: 'admin-plan-dailyProfitFixed-short' }
    ];

    const updateLinkedField = (sourceField, targetField, isPercentSource, skipIfTargetNotEmpty = false) => {
        if (activelyCalculating) return;
        activelyCalculating = true;

        const sourceVal = parseFloat(sourceField.value);
        const minAmountVal = parseFloat(minAmountEl.value);

        if (skipIfTargetNotEmpty && targetField.value.trim() !== '' && parseFloat(targetField.value) > 0) {
             activelyCalculating = false;
             return;
        }


        if (!isNaN(sourceVal) && !isNaN(minAmountVal) && minAmountVal > 0) {
            if (isPercentSource) {
                targetField.value = ((sourceVal / 100) * minAmountVal).toFixed(4);
            } else {
                targetField.value = ((sourceVal / minAmountVal) * 100).toFixed(4);
            }
        } else if (sourceField.value.trim() === '' && sourceVal !==0) {
        }
        activelyCalculating = false;
    };

    fieldsConfig.forEach(config => {
        const percentEl = document.getElementById(config.percentElId);
        const fixedEl = document.getElementById(config.fixedElId);

        if (percentEl && fixedEl && minAmountEl) {
            percentEl.addEventListener('input', () => updateLinkedField(percentEl, fixedEl, true));
            fixedEl.addEventListener('input', () => updateLinkedField(fixedEl, percentEl, false));
        }
    });

    if (minAmountEl) {
        minAmountEl.addEventListener('input', () => {
            if (activelyCalculating) return;
            activelyCalculating = true;
            const minAmountVal = parseFloat(minAmountEl.value);

            if (!isNaN(minAmountVal) && minAmountVal > 0) {
                fieldsConfig.forEach(config => {
                    const percentEl = document.getElementById(config.percentElId);
                    const fixedEl = document.getElementById(config.fixedElId);
                    const percentVal = parseFloat(percentEl.value);
                    const fixedVal = parseFloat(fixedEl.value);

                    if (!isNaN(percentVal) && percentEl.value.trim() !== '') {
                        fixedEl.value = ((percentVal / 100) * minAmountVal).toFixed(4);
                    } else if (!isNaN(fixedVal) && fixedEl.value.trim() !== '') {
                        percentEl.value = ((fixedVal / minAmountVal) * 100).toFixed(4);
                    }
                });
            }
            activelyCalculating = false;
        });
    }
}
window.openAdminEditPlanModal = function (planIdStr) {
    if (!currentUser.isAdmin) return;
    const planId = parseInt(planIdStr);
    const plan = NFX_CONFIG.investmentPlans.find(p => p.id === planId);
    if (!plan) { showToast("Plan not found", "error"); return; }

    if (!dashboardElements.adminEditPlanIdInput || !dashboardElements.adminEditPlanTitle ||
        !dashboardElements.adminPlanIsShortTermToggle || !dashboardElements.planFieldsLongTermGroup || !dashboardElements.planFieldsShortTermGroup) {
        console.error("One or more admin plan modal elements are missing.");
        return;
    }

    if(dashboardElements.adminPlanCurrencySymbols) {
        dashboardElements.adminPlanCurrencySymbols.forEach(span => span.textContent = getGlobalDisplayCurrency().symbol);
    }


    dashboardElements.adminEditPlanIdInput.value = String(plan.id);
    document.getElementById('admin-plan-name').value = plan.name;
    document.getElementById('admin-plan-minAmount').value = String(plan.minAmount);
    document.getElementById('admin-plan-maxAmount').value = String(plan.maxAmount);
    document.getElementById('admin-plan-description').value = plan.description;

    dashboardElements.adminPlanIsShortTermToggle.checked = plan.isShortTerm;

    document.getElementById('admin-plan-durationDays-long').value = String(plan.durationDaysLongTerm || 0);
    document.getElementById('admin-plan-dailyProfitPercent-long').value = String(plan.dailyProfitPercentLongTerm || 0);
    document.getElementById('admin-plan-dailyProfitFixed-long').value = String(plan.dailyProfitFixedLongTerm || 0);
    document.getElementById('admin-plan-totalProfitPercent-long').value = String(plan.totalProfitPercentLongTerm || 0);

    document.getElementById('admin-plan-durationDays-short').value = String(plan.durationDaysShortTerm || 0);
    document.getElementById('admin-plan-durationMinutes-short').value = String(plan.durationMinutesShortTerm || 0);
    document.getElementById('admin-plan-totalProfitPercent-short').value = String(plan.totalProfitPercentShortTerm || 0);
    document.getElementById('admin-plan-dailyProfitPercent-short').value = String(plan.dailyProfitPercentShortTerm || 0);
    document.getElementById('admin-plan-dailyProfitFixed-short').value = String(plan.dailyProfitFixedShortTerm || 0);

    togglePlanFieldVisibility(plan.isShortTerm);

    const minAmountVal = parseFloat(document.getElementById('admin-plan-minAmount').value);
    if (!isNaN(minAmountVal) && minAmountVal > 0) {
        const fieldsToAutoPopulate = [
            { percentId: 'admin-plan-dailyProfitPercent-long', fixedId: 'admin-plan-dailyProfitFixed-long' },
            { percentId: 'admin-plan-dailyProfitPercent-short', fixedId: 'admin-plan-dailyProfitFixed-short' }
        ];
        fieldsToAutoPopulate.forEach(pair => {
            const percentEl = document.getElementById(pair.percentId);
            const fixedEl = document.getElementById(pair.fixedId);
            const percentVal = parseFloat(percentEl.value);
            const fixedVal = parseFloat(fixedEl.value);

            if (!isNaN(percentVal) && percentVal > 0 && (isNaN(fixedVal) || fixedVal === 0)) {
                fixedEl.value = ((percentVal / 100) * minAmountVal).toFixed(4);
            }
            else if (!isNaN(fixedVal) && fixedVal > 0 && (isNaN(percentVal) || percentVal === 0)) {
                percentEl.value = ((fixedVal / minAmountVal) * 100).toFixed(4);
            }
        });
    }


    setupPlanProfitAutoCalculations();

    dashboardElements.adminEditPlanTitle.innerHTML = `<i class="fas fa-edit"></i> Edit Plan: ${plan.name}`;
    openModal('adminEditPlanModal');
}
function togglePlanFieldVisibility(isShortTerm) {
    if (dashboardElements.planFieldsLongTermGroup && dashboardElements.planFieldsShortTermGroup) {
        dashboardElements.planFieldsLongTermGroup.classList.toggle('hidden-fields', isShortTerm);
        dashboardElements.planFieldsShortTermGroup.classList.toggle('hidden-fields', !isShortTerm);
    }
}
if (forms.adminEditPlan) forms.adminEditPlan.addEventListener('submit', (e) => {
    e.preventDefault(); if (!currentUser.isAdmin) return;
    if (!dashboardElements.adminEditPlanIdInput) return;
    const planId = parseInt(dashboardElements.adminEditPlanIdInput.value);
    const originalPlan = NFX_CONFIG.investmentPlans.find(p => p.id === planId);
    if (!originalPlan) { showToast("Original plan not found for update.", "error"); return;}

    const isShortTermChecked = document.getElementById('admin-plan-isShortTerm').checked;

    const updatedPlanData = {
        id: planId,
        name: document.getElementById('admin-plan-name').value.trim(),
        minAmount: parseFloat(document.getElementById('admin-plan-minAmount').value),
        maxAmount: parseFloat(document.getElementById('admin-plan-maxAmount').value),
        description: document.getElementById('admin-plan-description').value.trim(),
        isEnabled: originalPlan.isEnabled,
        isShortTerm: isShortTermChecked,

        durationDaysLongTerm: parseInt(document.getElementById('admin-plan-durationDays-long').value) || 0,
        dailyProfitPercentLongTerm: parseFloat(document.getElementById('admin-plan-dailyProfitPercent-long').value) || 0,
        dailyProfitFixedLongTerm: parseFloat(document.getElementById('admin-plan-dailyProfitFixed-long').value) || 0,
        totalProfitPercentLongTerm: parseFloat(document.getElementById('admin-plan-totalProfitPercent-long').value) || 0,

        durationDaysShortTerm: parseInt(document.getElementById('admin-plan-durationDays-short').value) || 0,
        durationMinutesShortTerm: parseInt(document.getElementById('admin-plan-durationMinutes-short').value) || 0,
        totalProfitPercentShortTerm: parseFloat(document.getElementById('admin-plan-totalProfitPercent-short').value) || 0,
        dailyProfitPercentShortTerm: parseFloat(document.getElementById('admin-plan-dailyProfitPercent-short').value) || 0,
        dailyProfitFixedShortTerm: parseFloat(document.getElementById('admin-plan-dailyProfitFixed-short').value) || 0,
    };

    if (!updatedPlanData.name || updatedPlanData.minAmount < 0 || updatedPlanData.maxAmount < updatedPlanData.minAmount) {
        showToast("Invalid plan data. Check name and amounts.", "error"); return;
    }
    if (updatedPlanData.isShortTerm) {
        if (updatedPlanData.totalProfitPercentShortTerm <= 0 && updatedPlanData.dailyProfitFixedShortTerm <=0 && updatedPlanData.dailyProfitPercentShortTerm <= 0) {
            showToast("Short-term plans require at least one profit metric (Total %, Daily Fixed, or Daily %).", "error"); return;
        }
        if ((updatedPlanData.durationDaysShortTerm || 0) === 0 && (updatedPlanData.durationMinutesShortTerm || 0) === 0) {
            showToast("Short-term plans require a duration (days or minutes).", "error"); return;
        }
    } else {
        if ((updatedPlanData.durationDaysLongTerm || 0) === 0) {
            showToast("Long-term plans require Duration Days.", "error"); return;
        }
        if ((updatedPlanData.dailyProfitPercentLongTerm || 0) <= 0 && (updatedPlanData.dailyProfitFixedLongTerm || 0) <= 0 && (updatedPlanData.totalProfitPercentLongTerm || 0) <= 0) {
            showToast("Long-term plans require at least one profit metric (Daily %, Daily Fixed, or Total %).", "error"); return;
        }
    }


    const plans = NFX_CONFIG.investmentPlans.map(p => p.id === planId ? updatedPlanData : p);
    ls.saveAdminPlans(plans); loadEffectiveConfig();
    renderAdminInvestmentPlansList();
    if (planDisplays.public && sections.plans && !sections.plans.classList.contains('hidden')) renderPlans(planDisplays.public, false);
    if (planDisplays.dashboard && sections.dashboard && !sections.dashboard.classList.contains('hidden')) renderPlans(planDisplays.dashboard, true);
    if (dashboardElements.profitCalcPlanSelect) populateProfitCalculatorPlans();
    addAdminLogEntry(`Edited investment plan: ${updatedPlanData.name} (ID: ${planId}).`);
    closeModal('adminEditPlanModal'); showToast("Investment plan updated!", "success");
});
window.adminTogglePlanStatus = function (planId) {
    if (!currentUser.isAdmin) return;
    const plans = NFX_CONFIG.investmentPlans.map(p => {
        if (p.id === planId) { return { ...p, isEnabled: !p.isEnabled }; } return p;
    });
    ls.saveAdminPlans(plans); loadEffectiveConfig();
    renderAdminInvestmentPlansList();
    if (planDisplays.public && sections.plans && !sections.plans.classList.contains('hidden')) renderPlans(planDisplays.public, false);
    if (planDisplays.dashboard && sections.dashboard && !sections.dashboard.classList.contains('hidden')) renderPlans(planDisplays.dashboard, true);
    if (dashboardElements.profitCalcPlanSelect) populateProfitCalculatorPlans();
    const changedPlan = NFX_CONFIG.investmentPlans.find(p => p.id === planId);
    if(changedPlan) addAdminLogEntry(`${changedPlan.isEnabled ? 'Enabled' : 'Disabled'} investment plan: ${changedPlan.name} (ID: ${planId}).`);
    showToast(`Plan status changed.`, "info");
}
function populateAdminGlobalSettingsForm() {
    if (!dashboardElements.adminSettingAppName || !dashboardElements.adminSettingStatsUsers || !dashboardElements.adminSettingStatsInvested || !dashboardElements.adminSettingStatsProfit || !dashboardElements.adminSettingReferralBonus || !dashboardElements.adminSettingWithdrawalFee || !dashboardElements.adminSettingMinWithdrawal || !dashboardElements.adminSettingMaxWithdrawal || !dashboardElements.adminMaintenanceModeToggle || !dashboardElements.adminMaintenanceModeStatus) return;
    dashboardElements.adminSettingAppName.value = NFX_CONFIG.appName;
    dashboardElements.adminSettingStatsUsers.value = NFX_CONFIG.siteStats.users;
    dashboardElements.adminSettingStatsInvested.value = String(NFX_CONFIG.siteStats.investedBase);
    dashboardElements.adminSettingStatsProfit.value = String(NFX_CONFIG.siteStats.profitBase);
    dashboardElements.adminSettingReferralBonus.value = String(NFX_CONFIG.referralBonusAmount);
    dashboardElements.adminSettingWithdrawalFee.value = String(NFX_CONFIG.withdrawalFeePercent);
    dashboardElements.adminSettingMinWithdrawal.value = String(NFX_CONFIG.minWithdrawalAmount);
    dashboardElements.adminSettingMaxWithdrawal.value = String(NFX_CONFIG.maxWithdrawalAmount);
    dashboardElements.adminMaintenanceModeToggle.checked = NFX_CONFIG.maintenanceMode;
    dashboardElements.adminMaintenanceModeStatus.textContent = NFX_CONFIG.maintenanceMode ? "Enabled" : "Disabled";

    const referralBonusLabel = document.querySelector('label[for="admin-setting-referral-bonus"]');
    if (referralBonusLabel) {
        let symbolSpan = referralBonusLabel.querySelector('.currency-symbol-admin');
        if (!symbolSpan) {
            symbolSpan = document.createElement('span'); symbolSpan.classList.add('currency-symbol-admin');
            referralBonusLabel.appendChild(document.createTextNode(" ("));
            referralBonusLabel.appendChild(symbolSpan); referralBonusLabel.appendChild(document.createTextNode(")"));
        }
        symbolSpan.textContent = getGlobalDisplayCurrency().symbol;
    }
}
if (forms.adminGlobalSettings) forms.adminGlobalSettings.addEventListener('submit', (e) => {
    e.preventDefault(); if (!currentUser.isAdmin) return;
    if (!dashboardElements.adminSettingAppName || !dashboardElements.adminSettingStatsUsers || !dashboardElements.adminSettingStatsInvested || !dashboardElements.adminSettingStatsProfit || !dashboardElements.adminSettingReferralBonus || !dashboardElements.adminSettingWithdrawalFee || !dashboardElements.adminSettingMinWithdrawal || !dashboardElements.adminSettingMaxWithdrawal) return;

    const updatedSettings = {
        appName: dashboardElements.adminSettingAppName.value.trim(),
        siteStats: {
            users: dashboardElements.adminSettingStatsUsers.value.trim(),
            investedBase: parseInt(dashboardElements.adminSettingStatsInvested.value),
            profitBase: parseInt(dashboardElements.adminSettingStatsProfit.value)
        },
        referralBonusAmount: parseInt(dashboardElements.adminSettingReferralBonus.value),
        withdrawalFeePercent: parseFloat(dashboardElements.adminSettingWithdrawalFee.value),
        minWithdrawalAmount: parseFloat(dashboardElements.adminSettingMinWithdrawal.value),
        maxWithdrawalAmount: parseFloat(dashboardElements.adminSettingMaxWithdrawal.value),
    };
    if (!updatedSettings.appName || isNaN(updatedSettings.siteStats.investedBase) || isNaN(updatedSettings.siteStats.profitBase) ||
        isNaN(updatedSettings.referralBonusAmount) || isNaN(updatedSettings.withdrawalFeePercent) ||
        isNaN(updatedSettings.minWithdrawalAmount) || isNaN(updatedSettings.maxWithdrawalAmount) ||
        updatedSettings.minWithdrawalAmount < 0 || updatedSettings.maxWithdrawalAmount < updatedSettings.minWithdrawalAmount) {
        showToast("Invalid global settings. Check all values and ensure Max Withdrawal >= Min Withdrawal.", "error"); return;
    }
    const currentAdminSettings = ls.getAdminSettings();
    ls.saveAdminSettings({ ...currentAdminSettings, ...updatedSettings });
    loadEffectiveConfig(); updateStatsBar();
    const withdrawalFeeInfoEl = document.getElementById('withdrawal-fee-info');
    if (withdrawalFeeInfoEl) withdrawalFeeInfoEl.textContent = `A ${NFX_CONFIG.withdrawalFeePercent}% withdrawal fee will be applied.`;
    updateWithdrawalLimitsDisplay();
    addAdminLogEntry(`Updated Global Settings. App Name: ${updatedSettings.appName}, Withdrawal Fee: ${updatedSettings.withdrawalFeePercent}%, Min Withdrawal: ${updatedSettings.minWithdrawalAmount}, Max Withdrawal: ${updatedSettings.maxWithdrawalAmount}.`);
    showToast("Global settings updated!", "success");
});
window.adminToggleMaintenanceMode = function (isEnabled) {
    if (!currentUser.isAdmin) return;
    if (!dashboardElements.adminMaintenanceModeStatus || !dashboardElements.maintenanceModeBanner) return;
    const currentAdminSettings = ls.getAdminSettings();
    ls.saveAdminSettings({ ...currentAdminSettings, maintenanceMode: isEnabled });
    loadEffectiveConfig();
    dashboardElements.adminMaintenanceModeStatus.textContent = isEnabled ? "Enabled" : "Disabled";
    dashboardElements.maintenanceModeBanner.classList.toggle('hidden', !NFX_CONFIG.maintenanceMode);

    addAdminLogEntry(`Maintenance mode ${isEnabled ? 'enabled' : 'disabled'}.`);
    showToast(`Maintenance mode ${isEnabled ? 'enabled' : 'disabled'}.`, "info");
    if (isEnabled && currentUser && !currentUser.isAdmin && !currentUser.isAssistantAdmin) {
        showToast("Site under maintenance. You will be logged out.", "warning", 4000);
        setTimeout(() => { handleLogout(); }, 4000);
    }
}

function loadAdminSystemLogTabContent() {
    if (!dashboardElements.adminSystemLogList) return;
    const logs = ls.getAdminSystemLog();
    dashboardElements.adminSystemLogList.innerHTML = '';
    if (logs.length === 0) {
        dashboardElements.adminSystemLogList.innerHTML = '<p class="text-center" style="padding:10px;">No system log entries yet.</p>'; return;
    }
    const table = document.createElement('table');
    table.innerHTML = '<thead><tr><th>Timestamp</th><th>Admin User</th><th>Action</th></tr></thead><tbody></tbody>';
    const tbody = table.querySelector('tbody');

    logs.forEach(log => {
        const tr = tbody.insertRow();
        tr.insertCell().textContent = formatDate(log.timestamp, { dateStyle: 'short', timeStyle: 'medium' });
        tr.insertCell().textContent = log.user;
        tr.insertCell().textContent = log.text;
    });
    dashboardElements.adminSystemLogList.appendChild(table);
}
window.adminClearSystemLog = function () {
    if (!currentUser.isAdmin) { showToast("Action restricted.", "error"); return; }
    if (confirm("Clear entire admin system log? IRREVERSIBLE.")) {
        ls.saveAdminSystemLog([]); loadAdminSystemLogTabContent();
        addAdminLogEntry("Admin system log cleared by " + currentUser.email);
        showToast("Admin system log cleared.", "info");
    }
}
function loadAdminSupportTicketsTabContent() {
    if (!dashboardElements.adminSupportTicketList || !dashboardElements.adminNoTicketsMessage) return;
    renderAdminSupportTicketList();
    if (dashboardElements.adminApplyTicketFiltersBtn) dashboardElements.adminApplyTicketFiltersBtn.onclick = renderAdminSupportTicketList;
    if (dashboardElements.adminClearTicketFiltersBtn) dashboardElements.adminClearTicketFiltersBtn.onclick = () => {
        if(dashboardElements.adminTicketFilterUser) dashboardElements.adminTicketFilterUser.value = '';
        if(dashboardElements.adminTicketFilterStatus) dashboardElements.adminTicketFilterStatus.value = '';
        renderAdminSupportTicketList();
    };
}
function renderAdminSupportTicketList() {
    if (!dashboardElements.adminSupportTicketList || !dashboardElements.adminNoTicketsMessage || !dashboardElements.adminTicketFilterUser || !dashboardElements.adminTicketFilterStatus) return;
    let tickets = ls.getSupportTickets();
    const filterUser = dashboardElements.adminTicketFilterUser.value.trim().toLowerCase();
    const filterStatus = dashboardElements.adminTicketFilterStatus.value;
    if (filterUser) tickets = tickets.filter(t => t.userEmail.toLowerCase().includes(filterUser) || (t.userName && t.userName.toLowerCase().includes(filterUser)));
    if (filterStatus) tickets = tickets.filter(t => t.status === filterStatus);
    tickets.sort((a, b) => {
        const statusOrder = { 'open': 1, 'user_reply': 2, 'admin_reply': 3, 'closed': 4 };
        if (statusOrder[a.status] !== statusOrder[b.status]) return statusOrder[a.status] - statusOrder[b.status];
        const lastMsgA = a.messages[a.messages.length - 1].timestamp;
        const lastMsgB = b.messages[b.messages.length - 1].timestamp;
        return new Date(lastMsgB) - new Date(lastMsgA);
    });
    dashboardElements.adminSupportTicketList.innerHTML = '';
    if (tickets.length === 0) { dashboardElements.adminNoTicketsMessage.classList.remove('hidden'); return; }
    dashboardElements.adminNoTicketsMessage.classList.add('hidden');
    const table = document.createElement('table');
    table.innerHTML = `<thead><tr><th>Subject</th><th>User</th><th>Status</th><th>Last Update</th><th>Actions</th></tr></thead><tbody></tbody>`;
    const tbody = table.querySelector('tbody');
    tickets.forEach(ticket => {
        const tr = tbody.insertRow(); tr.insertCell().textContent = ticket.subject;
        tr.insertCell().textContent = `${ticket.userName} (${ticket.userEmail})`;
        const statusCell = tr.insertCell();
        statusCell.innerHTML = `<span class="ticket-status-${ticket.status.toLowerCase()}">${ticket.status.replace(/_/g, ' ')}</span>`;
        tr.insertCell().textContent = formatDate(ticket.messages[ticket.messages.length - 1].timestamp, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        const actionCell = tr.insertCell();
        const viewBtn = document.createElement('button'); viewBtn.classList.add('button', 'button-small');
        viewBtn.innerHTML = '<i class="fas fa-eye"></i> View/Reply';
        viewBtn.onclick = () => openAdminSupportTicketModal(ticket.ticketId); actionCell.appendChild(viewBtn);
    });
    dashboardElements.adminSupportTicketList.appendChild(table);
}
function openAdminSupportTicketModal(ticketId) {
    if (!dashboardElements.adminViewSupportTicketTitle || !dashboardElements.adminTicketUserInfo || !dashboardElements.adminTicketStatusInfo || !dashboardElements.adminReplyTicketIdInput || !dashboardElements.adminTicketChangeStatusSelect || !dashboardElements.adminTicketChatMessages || !forms.adminReplyTicketForm || !dashboardElements.adminTicketReplyMessageInput) return;
    const tickets = ls.getSupportTickets(); const ticket = tickets.find(t => t.ticketId === ticketId);
    if (!ticket) { showToast("Ticket not found.", "error"); return; }
    dashboardElements.adminViewSupportTicketTitle.textContent = `Ticket: ${ticket.subject}`;
    dashboardElements.adminTicketUserInfo.textContent = `${ticket.userName} (${ticket.userEmail})`;
    dashboardElements.adminTicketStatusInfo.innerHTML = `<span class="ticket-status-${ticket.status.toLowerCase()}">${ticket.status.replace(/_/g, ' ')}</span>`;
    dashboardElements.adminReplyTicketIdInput.value = ticketId;
    dashboardElements.adminTicketChangeStatusSelect.value = ticket.status;
    const chatMessagesEl = dashboardElements.adminTicketChatMessages; chatMessagesEl.innerHTML = '';
    ticket.messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('support-chat-message', msg.sender === 'admin' ? 'admin' : 'user');
        msgDiv.innerHTML = `<span class="sender">${msg.sender === 'admin' ? 'Support (You)' : msg.sender}</span>
                                    <p>${msg.text.replace(/\n/g, '<br>')}</p>
                                    <span class="timestamp">${formatDate(msg.timestamp, { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })}</span>`;
        chatMessagesEl.appendChild(msgDiv);
    });
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    forms.adminReplyTicketForm.reset();
    const canModifyTicket = currentUser.isAdmin || (currentUser.isAssistantAdmin && ticket.status !== 'closed');
    dashboardElements.adminTicketReplyMessageInput.disabled = !canModifyTicket;
    dashboardElements.adminTicketChangeStatusSelect.disabled = !currentUser.isAdmin;
    const submitButton = forms.adminReplyTicketForm.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = !canModifyTicket;
    openModal('adminViewSupportTicketModal');
}
if (forms.adminReplyTicketForm) forms.adminReplyTicketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!dashboardElements.adminReplyTicketIdInput || !dashboardElements.adminTicketReplyMessageInput || !dashboardElements.adminTicketChangeStatusSelect) return;
    const ticketId = dashboardElements.adminReplyTicketIdInput.value;
    const replyMessage = dashboardElements.adminTicketReplyMessageInput.value.trim();
    const newStatus = dashboardElements.adminTicketChangeStatusSelect.value;
    let tickets = ls.getSupportTickets(); const ticketIndex = tickets.findIndex(t => t.ticketId === ticketId);
    if (ticketIndex === -1) { showToast("Ticket not found.", "error"); return; }
    let ticket = tickets[ticketIndex];

    if (!replyMessage && newStatus === ticket.status && !currentUser.isAdmin) {
        showToast("Please enter a reply or have a Super Admin change the status.", "warning"); return;
    }
    if (currentUser.isAssistantAdmin && newStatus === 'closed' && ticket.status !== 'closed' && !replyMessage) {
        showToast("Assistant Admins must add a reply when closing an open ticket.", "warning"); return;
    }
    if (currentUser.isAssistantAdmin && newStatus !== ticket.status && newStatus !== 'admin_reply' && newStatus !== 'closed') {
        showToast("Assistants can only reply or close tickets.", "warning");
        dashboardElements.adminTicketChangeStatusSelect.value = ticket.status;
        return;
    }

    let replied = false;
    if (replyMessage) {
        ticket.messages.push({ sender: 'admin', text: replyMessage, timestamp: new Date().toISOString() });
        ticket.lastAdminReplyAt = new Date().toISOString();
        if (ticket.status !== 'closed') ticket.status = 'admin_reply';
        addUserSystemNotification(ticket.userId, `Admin replied to your support ticket: "${ticket.subject}"`, 'info', false, ticket.ticketId);
        replied = true;
    }
    if (currentUser.isAdmin && newStatus !== ticket.status) {
        ticket.status = newStatus;
        if (newStatus === 'closed' && !replied) {
            ticket.messages.push({ sender: 'admin', text: 'Ticket closed by administrator.', timestamp: new Date().toISOString() });
            addUserSystemNotification(ticket.userId, `Your support ticket "${ticket.subject}" has been closed.`, 'info', false, ticket.ticketId);
        }
    } else if (!currentUser.isAdmin && currentUser.isAssistantAdmin && newStatus === 'closed' && replied) {
        ticket.status = 'closed';
        addUserSystemNotification(ticket.userId, `Your support ticket "${ticket.subject}" has been closed after admin reply.`, 'info', false, ticket.ticketId);
    }


    tickets[ticketIndex] = ticket; ls.saveSupportTickets(tickets);
    addAdminLogEntry(`Updated support ticket ID ${ticketId} for ${ticket.userEmail}. New status: ${ticket.status}. Reply: ${replyMessage ? 'Yes' : 'No'}.`);
    showToast("Ticket updated!", "success");
    const supportTicketsTab = document.getElementById('admin-supportTickets-tab');
    if (supportTicketsTab && supportTicketsTab.classList.contains('active')) renderAdminSupportTicketList();
    openAdminSupportTicketModal(ticketId);
});
function renderAdminCharts() {
    if (typeof Chart === 'undefined') {
        console.error("Chart.js is not loaded. Admin analytics charts cannot be rendered.");
        return;
    }
    const cssVars = getComputedStyle(document.documentElement);
    const chartPrimaryColor = cssVars.getPropertyValue('--primary-color').trim();
    const chartSuccessColor = cssVars.getPropertyValue('--success-color').trim();
    const chartAccentColor = cssVars.getPropertyValue('--accent-color').trim();
    const chartWarningColor = cssVars.getPropertyValue('--warning-color').trim();
    const chartInfoColor = cssVars.getPropertyValue('--info-color').trim();

    renderAdminUserRegistrationChart(chartPrimaryColor);
    renderAdminTransactionOverviewChart(chartSuccessColor, chartAccentColor);
    renderAdminPlanPopularityChart([chartPrimaryColor, chartSuccessColor, chartInfoColor, chartWarningColor, cssVars.getPropertyValue('--secondary-color').trim()]);
    renderAdminPlatformValueChart(chartSuccessColor);
    renderAdminTransactionVolumeChart([chartPrimaryColor, chartSuccessColor, chartAccentColor, chartWarningColor, chartInfoColor]);
}
function renderAdminUserRegistrationChart(chartPrimaryColor) {
    const chartEl = document.getElementById('adminUserRegistrationChart'); if (!chartEl) return;
    if (adminUserRegistrationChartInstance) adminUserRegistrationChartInstance.destroy();
    const users = ls.getUsers();
    const monthlyRegistrations = {};
    const currentYear = new Date().getFullYear();

    users.forEach(user => {
        const regDate = new Date(user.registeredDate);
        if (regDate.getFullYear() === currentYear) {
            const month = regDate.toLocaleString('default', { month: 'short' });
            monthlyRegistrations[month] = (monthlyRegistrations[month] || 0) + 1;
        }
    });
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const labels = monthNames;
    const data = monthNames.map(month => monthlyRegistrations[month] || 0);

    adminUserRegistrationChartInstance = new Chart(chartEl.getContext('2d'), {
        type: 'bar',
        data: { labels, datasets: [{ label: `User Registrations (${currentYear})`, data, backgroundColor: chartPrimaryColor }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } }
    });
}
function renderAdminTransactionOverviewChart(chartSuccessColor, chartAccentColor) {
    const chartEl = document.getElementById('adminTransactionOverviewChart'); if (!chartEl) return;
    if (adminTransactionOverviewChartInstance) adminTransactionOverviewChartInstance.destroy();
    const transactions = ls.getTransactions().filter(tx => tx.status === 'approved');
    const totalDeposits = transactions.filter(tx => tx.type === 'deposit').reduce((sum, tx) => sum + tx.amount, 0);
    const totalWithdrawals = transactions.filter(tx => tx.type === 'withdrawal').reduce((sum, tx) => sum + tx.amount, 0);

    adminTransactionOverviewChartInstance = new Chart(chartEl.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Total Deposits', 'Total Withdrawals'],
            datasets: [{ data: [totalDeposits, totalWithdrawals], backgroundColor: [chartSuccessColor, chartAccentColor] }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } } }
    });
}
function renderAdminPlanPopularityChart(planColors) {
    const chartEl = document.getElementById('adminPlanPopularityChart'); if (!chartEl) return;
    if (adminPlanPopularityChartInstance) adminPlanPopularityChartInstance.destroy();
    const users = ls.getUsers(); const planCounts = {};
    NFX_CONFIG.investmentPlans.forEach(plan => planCounts[plan.name] = 0);
    users.forEach(user => { if (user.investments) user.investments.forEach(inv => { const plan = NFX_CONFIG.investmentPlans.find(p => p.id === inv.planId); if (plan) planCounts[plan.name]++; }); });

    adminPlanPopularityChartInstance = new Chart(chartEl.getContext('2d'), {
        type: 'pie',
        data: {
            labels: Object.keys(planCounts),
            datasets: [{ data: Object.values(planCounts), backgroundColor: planColors.slice(0, Object.keys(planCounts).length) }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } } }
    });
}
function renderAdminPlatformValueChart(chartColor) {
    const chartEl = document.getElementById('adminPlatformValueChart'); if (!chartEl) return;
    if (adminPlatformValueChartInstance) adminPlatformValueChartInstance.destroy();
    const users = ls.getUsers(); let totalPlatformValue = 0;
    users.forEach(user => {
        totalPlatformValue += user.walletBalance || 0;
        if (user.investments) user.investments.forEach(inv => totalPlatformValue += inv.amount);
    });
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const data = labels.map((_, i) => totalPlatformValue * (0.8 + Math.random() * 0.4 + i * 0.05));

    adminPlatformValueChartInstance = new Chart(chartEl.getContext('2d'), {
        type: 'line',
        data: { labels, datasets: [{ label: 'Illustrative Platform Value Trend', data, borderColor: chartColor, tension: 0.3 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
    });
}

function renderAdminTransactionVolumeChart(volColors) {
    const chartEl = document.getElementById('adminTransactionVolumeChart'); if (!chartEl) return;
    if (adminTransactionVolumeChartInstance) adminTransactionVolumeChartInstance.destroy();
    const transactions = ls.getTransactions().filter(tx => tx.status === 'approved');
    const volumeByType = {};
    transactions.forEach(tx => {
        volumeByType[tx.type] = (volumeByType[tx.type] || 0) + 1;
    });
    const dataValues = Object.values(volumeByType);
    const maxDataValue = dataValues.length > 0 ? Math.max(...dataValues) : 1;

    adminTransactionVolumeChartInstance = new Chart(chartEl.getContext('2d'), {
        type: 'bar',
        data: {
            labels: Object.keys(volumeByType),
            datasets: [{ label: 'Transaction Volume by Type (Approved)', data: dataValues, backgroundColor: volColors.slice(0, Object.keys(volumeByType).length) }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { stepSize: Math.ceil(maxDataValue / 10) || 1 } } } }
    });
}

async function exportUserDashboardToPDF() {
    if (!currentUser || currentUser.isAdmin || currentUser.isAssistantAdmin) { showToast("Not available for this user.", "info"); return; }
    showToast("Generating Dashboard PDF, please wait...", "info", 3000);
    try {
        const { jsPDF } = window.jspdf;
        if (typeof jsPDF !== 'function') {
            showToast("PDF generation error: jsPDF library not found.", "error");
            console.error("jsPDF library is not loaded correctly.");
            return;
        }
        const pdf = new jsPDF('p', 'pt', 'a4');
        const displayCurrency = getUserDisplayCurrency(); let yPos = 40; const pageMargin = 40; const pageWidth = pdf.internal.pageSize.getWidth();
        pdf.setFontSize(18); pdf.text(`${NFX_CONFIG.appName} - Dashboard Report`, pageWidth / 2, yPos, { align: 'center' }); yPos += 25;
        pdf.setFontSize(10); pdf.text(`User: ${currentUser.name} (${currentUser.email})`, pageMargin, yPos); yPos += 15;
        pdf.text(`Generated: ${new Date().toLocaleString()}`, pageMargin, yPos); yPos += 25;
        pdf.setFontSize(12); pdf.text("Account Overview", pageMargin, yPos); yPos += 15; pdf.setFontSize(10);
        pdf.text(`Name: ${currentUser.name}`, pageMargin, yPos); yPos += 12; pdf.text(`Email: ${currentUser.email}`, pageMargin, yPos); yPos += 12;
        pdf.text(`Member Since: ${formatDate(currentUser.registeredDate, { year: 'numeric', month: 'long', day: 'numeric' })}`, pageMargin, yPos); yPos += 12;
        pdf.text(`Referral Code: ${currentUser.referralCode}`, pageMargin, yPos); yPos += 12;
        if (currentUser.referredBy) { const referrer = ls.getUsers().find(u => u.id === currentUser.referredBy); pdf.text(`Referred By: ${referrer ? referrer.name : 'N/A'}`, pageMargin, yPos); yPos += 12; }
        const lastLogin = ls.getUserLastLogin(currentUser.id); pdf.text(`Last Login: ${lastLogin ? formatDate(lastLogin) : 'N/A'}`, pageMargin, yPos); yPos += 12;
        pdf.text(`Account Currency: ${currentUser.lockedCurrency ? `${currentUser.lockedCurrency.code} (Locked)` : `${getGlobalDisplayCurrency().code} (Global)`}`, pageMargin, yPos); yPos += 20;
        pdf.setFontSize(12); pdf.text("Wallet Summary", pageMargin, yPos); yPos += 15; pdf.setFontSize(10);
        const totalActiveInvested = currentUser.investments ? currentUser.investments.reduce((sum, inv) => sum + inv.amount, 0) : 0;
        pdf.text(`Actual Balance: ${formatCurrencyValue(currentUser.walletBalance, displayCurrency)}`, pageMargin, yPos); yPos += 12;
        pdf.text(`Total Actively Invested: ${formatCurrencyValue(totalActiveInvested, displayCurrency)}`, pageMargin, yPos); yPos += 12;
        pdf.text(`Total Realized Profit: ${formatCurrencyValue(currentUser.totalRealizedProfit || 0, displayCurrency)}`, pageMargin, yPos); yPos += 20;
        pdf.setFontSize(12); pdf.text("Active Investments", pageMargin, yPos); yPos += 15; pdf.setFontSize(10);
        if (currentUser.investments && currentUser.investments.length > 0) {
            currentUser.investments.forEach((inv, index) => {
                if (yPos > pdf.internal.pageSize.getHeight() - 100) { pdf.addPage(); yPos = pageMargin; }
                const plan = inv;
                const invCurrency = NFX_CONFIG.currencies.find(c => c.code === inv.currency) || displayCurrency;
                let totalDurationMinutesForMaturityCalc = 0;
                if (plan.isShortTerm) {
                    totalDurationMinutesForMaturityCalc = (plan.durationDaysShortTerm * 24 * 60) + plan.durationMinutesShortTerm;
                }

                pdf.text(`Investment ${index + 1}: ${plan.planName} (ID: ...${inv.id.slice(-4)})`, pageMargin, yPos); yPos += 12;
                pdf.text(`  Amount: ${formatCurrencyValue(inv.amount, invCurrency)}`, pageMargin + 10, yPos); yPos += 12;
                pdf.text(`  Start Date: ${formatDate(inv.startDate)}`, pageMargin + 10, yPos); yPos += 12;
                const maturityD = addTime(new Date(inv.startDate), plan.isShortTerm ? totalDurationMinutesForMaturityCalc : plan.durationDaysLongTerm, plan.isShortTerm ? 'minutes' : 'days');
                pdf.text(`  Maturity Date: ${formatDate(maturityD)}`, pageMargin + 10, yPos); yPos += 12;
                pdf.text(`  Accumulated Profit: ${formatCurrencyValue(inv.accumulatedProfit || 0, invCurrency)}`, pageMargin + 10, yPos); yPos += 15;
            });
        } else { pdf.text("No active investments.", pageMargin, yPos); yPos += 15; }
        yPos += 5;
        if (yPos > pdf.internal.pageSize.getHeight() - 120) { pdf.addPage(); yPos = pageMargin; }
        pdf.setFontSize(12); pdf.text("Transaction History", pageMargin, yPos); yPos += 5;
        const headers = [["Date", "Description", "Amount", "Status", "Type"]];
        const userTransactions = currentUser.transactions || [];
        const data = userTransactions.filter(tx => tx.type !== 'system_event' && tx.type !== 'profile_update' && tx.type !== 'security_update').map(tx => {
            const txCurrencyPdf = NFX_CONFIG.currencies.find(c => c.code === tx.currency) || displayCurrency;
            return [
                formatDate(tx.date, { day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit' }),
                tx.description, formatCurrencyValue(tx.amount, txCurrencyPdf) + (tx.txTypeIndicator === 'debit' ? ' (-)' : ' (+)'),
                tx.status.charAt(0).toUpperCase() + tx.status.slice(1),
                tx.type.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')];
        });
        if (typeof pdf.autoTable === 'function') {
            if (data.length > 0) {
                pdf.autoTable({ head: headers, body: data.slice(0, 30), startY: yPos, theme: 'striped', headStyles: { fillColor: [44, 62, 80] }, styles: { fontSize: 8, cellPadding: 3 }, columnStyles: { 2: { halign: 'right' } } });
                let previousAutoTable = pdf.lastAutoTable || pdf.autoTable.previous;
                yPos = (previousAutoTable && previousAutoTable.finalY) ? previousAutoTable.finalY : yPos;
                if (data.length > 30) {
                    pdf.addPage();
                    yPos = pageMargin;
                    pdf.autoTable({
                        head: headers,
                        body: data.slice(30),
                        startY: yPos,
                        theme: 'striped',
                        headStyles: { fillColor: [44, 62, 80] },
                        styles: { fontSize: 8, cellPadding: 3 },
                        columnStyles: { 2: { halign: 'right' } }
                    });
                    previousAutoTable = pdf.lastAutoTable || pdf.autoTable.previous;
                    yPos = (previousAutoTable && previousAutoTable.finalY) ? previousAutoTable.finalY : yPos;
                }
            } else {
                pdf.text("No transactions to display.", pageMargin, yPos + 15);
            }
        } else {
            showToast("PDF generation error: autoTable plugin not found.", "error");
            console.error("jsPDF autoTable plugin is not loaded correctly.");
            return;
        }
        const filename = `${currentUser.name.replace(/\s+/g, '_')}_Dashboard_Report_${new Date().toISOString().slice(0, 10)}.pdf`;
        pdf.save(filename);
        showToast("Dashboard PDF exported!", "success");
    } catch (error) {
        showToast("Error generating PDF. See console.", "error");
        console.error("PDF Export Error:", error);
    }
}
function initApp() {
    loadEffectiveConfig();
    if (dashboardElements.maintenanceModeBanner) {
        dashboardElements.maintenanceModeBanner.classList.toggle('hidden', !NFX_CONFIG.maintenanceMode);
    }

    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) currentYearEl.textContent = String(new Date().getFullYear());

    // MODIFIED: Do not set hero image, let the video play.
    // setRandomHeroImage(); 

    initAdminCurrencySelector();
    renderHeroContent();
    renderFeatures(); // This will now include animation logic
    renderTestimonials(); // This will now include animation logic
    renderFAQs();
    setupNavigation();
    
    // NEW: Initialize animation observers
    animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.aos').forEach(el => {
        animationObserver.observe(el);
    });

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.stats-bar [data-target]').forEach(el => {
                    const target = +el.getAttribute('data-target');
                    const duration = 2000;
                    let current = 0;
                    
                    const updateCount = () => {
                        const increment = target / (duration / 16);
                        current += increment;

                        if (current < target) {
                            if (el.id === 'stats-users') {
                                el.innerHTML = `${Math.ceil(current).toLocaleString()}+`;
                            } else {
                                el.innerHTML = `$${Math.ceil(current).toLocaleString()}+`;
                            }
                            requestAnimationFrame(updateCount);
                        } else {
                             if (el.id === 'stats-users') {
                                el.innerHTML = `${target.toLocaleString()}+`;
                            } else {
                                el.innerHTML = `$${target.toLocaleString()}+`;
                            }
                        }
                    };
                    requestAnimationFrame(updateCount);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 });
    
    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) {
        updateStatsBar(); // Set initial values and data-targets
        statsObserver.observe(statsBar);
    }
  setupNavigation();
    
    // --- ADD THE NEW CODE HERE ---
    function setupResponsiveNav() {
        const navToggle = document.getElementById('nav-toggle');
        const mainNav = document.getElementById('main-nav');

        if (!navToggle || !mainNav) {
            console.error("Responsive navigation elements not found.");
            return;
        }

        // Toggle the menu on hamburger click
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close the menu when a link is clicked
        mainNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                mainNav.classList.remove('nav-open');
                navToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    setupResponsiveNav();
    // --- END OF NEW CODE ---
    // END NEW
    
    const storedUser = ls.getCurrentUserSession();
    if (storedUser) {
        if (storedUser.isAdmin && storedUser.email === NFX_CONFIG.adminCredentials.email && storedUser.id === 'admin001') {
            currentUser = storedUser;
        } else {
            const users = ls.getUsers(); const validatedUser = users.find(u => u.id === storedUser.id && u.email === storedUser.email);
            if (validatedUser) {
                currentUser = validatedUser;
                if (!currentUser.investments) currentUser.investments = [];
                if (!currentUser.transactions) currentUser.transactions = [];
                if (typeof currentUser.isAssistantAdmin === 'undefined') currentUser.isAssistantAdmin = false;
                if (typeof currentUser.profilePicUrl === 'undefined') currentUser.profilePicUrl = null;
            }
        }
        if (currentUser) {
            if (NFX_CONFIG.maintenanceMode && !currentUser.isAdmin && !currentUser.isAssistantAdmin) {
                handleLogout();
                showToast("Site under maintenance. Please try again later.", "warning", 5000);
                navigateToSection('home', 'nav-home');
                return;
            }
            ls.saveCurrentUserSession(currentUser); updateNavForLoginState();
            if (currentUser.isAdmin || currentUser.isAssistantAdmin) loadAdminPanel(); else loadDashboard();
        } else { ls.clearCurrentUserSession(); updateNavForLogoutState(); navigateToSection('home', 'nav-home'); }
    } else {
        updateNavForLogoutState();
        navigateToSection('home', 'nav-home');
    }
    if (planDisplays.public) renderPlans(planDisplays.public, false);
    if (dashboardElements.profitCalcButton) dashboardElements.profitCalcButton.addEventListener('click', calculateProfitProjection);
    document.addEventListener('click', function (event) {
        if (dashboardElements.notificationsDropdownContainer && !dashboardElements.notificationsDropdownContainer.contains(event.target) &&
            dashboardElements.userNotificationBell && !dashboardElements.userNotificationBell.contains(event.target)) {
            dashboardElements.notificationsDropdownContainer.classList.remove('show');
        }
    });

    dashboardElements.adminPlanIsShortTermToggle = document.getElementById('admin-plan-isShortTerm');
    dashboardElements.planFieldsLongTermGroup = document.getElementById('plan-fields-long-term-group');
    dashboardElements.planFieldsShortTermGroup = document.getElementById('plan-fields-short-term-group');
    dashboardElements.adminPlanCurrencySymbols = document.querySelectorAll('.admin-plan-currency-symbol');


    if (dashboardElements.adminPlanIsShortTermToggle) {
        dashboardElements.adminPlanIsShortTermToggle.addEventListener('change', (e) => {
            togglePlanFieldVisibility(e.target.checked);
        });
    }

}
document.addEventListener('DOMContentLoaded', initApp);