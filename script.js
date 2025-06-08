// ⬇️ PASTE YOUR KEYS HERE ⬇️
const SUPABASE_URL = 'https://bdmsledibaffqcbjnfhg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkbXNsZWRpYmFmZnFjYmpuZmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MDI0MTksImV4cCI6MjA2NDk3ODQxOX0.OnnUTl-UPX-QgKLopc9YsmdpO7Y9cAi0bQwKB3JofWg';
// ⬆️ PASTE YOUR KEYS HERE ⬆️

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- GLOBAL STATE --- 
let currentUser = null;
let NFX_CONFIG = {};
let countdownIntervals = {};
let animationObserver = null;

// Chart instances
let accountGrowthChartInstance = null;
let adminUserRegistrationChartInstance = null;
let adminTransactionOverviewChartInstance = null;
let adminPlanPopularityChartInstance = null;
let adminPlatformValueChartInstance = null;
let adminTransactionVolumeChartInstance = null;

// --- ELEMENT SELECTORS (Unchanged from your original file) ---
const navLinks = { homeLogo: document.getElementById('nav-home-logo'), home: document.getElementById('nav-home'), plans: document.getElementById('nav-plans'), faq: document.getElementById('nav-faq'), login: document.getElementById('nav-login'), register: document.getElementById('nav-register'), dashboard: document.getElementById('nav-dashboard'), admin: document.getElementById('nav-admin'), logout: document.getElementById('nav-logout') };
const sections = { home: [document.getElementById('hero-section-wrapper'), document.getElementById('home-content-section'), document.getElementById('testimonials-section')], plans: document.getElementById('plans-section'), faq: document.getElementById('faq-section'), login: document.getElementById('login-section'), register: document.getElementById('register-section'), dashboard: document.getElementById('dashboard-section'), adminPanel: document.getElementById('admin-panel-section') };
const forms = { login: document.getElementById('login-form'), register: document.getElementById('register-form'), financialGoal: document.getElementById('financial-goal-form'), adminBroadcast: document.getElementById('admin-broadcast-form'), adminGlobalSettings: document.getElementById('admin-global-settings-form'), adminHeroContent: document.getElementById('admin-hero-content-form'), adminEditPlan: document.getElementById('admin-edit-plan-form'), adminEditContent: document.getElementById('admin-edit-content-form'), adminEditUser: document.getElementById('admin-edit-user-form'), userNewTicketForm: document.getElementById('user-new-ticket-form'), userReplyTicketForm: document.getElementById('user-reply-ticket-form'), adminReplyTicketForm: document.getElementById('admin-reply-ticket-form'), changePassword: document.getElementById('change-password-form') };
const planDisplays = { public: document.getElementById('public-plans-display'), dashboard: document.getElementById('dashboard-plans-display') };
const dashboardElements = { broadcastBanner: document.getElementById('broadcast-message-banner'), broadcastText: document.getElementById('broadcast-message-text'), welcome: document.getElementById('dashboard-welcome'), userName: document.getElementById('dash-user-name'), userEmail: document.getElementById('dash-user-email'), memberSince: document.getElementById('dash-member-since'), referralCode: document.getElementById('dash-referral-code'), referredByContainer: document.getElementById('dash-referred-by-container'), referredBy: document.getElementById('dash-referred-by'), lastLogin: document.getElementById('dash-last-login'), accountCurrency: document.getElementById('dash-account-currency'), walletActualBalance: document.getElementById('wallet-actual-balance'), walletInvestedAmount: document.getElementById('wallet-invested-amount'), walletRealizedProfit: document.getElementById('wallet-realized-profit'), withdrawalAvailableBalance: document.getElementById('withdrawal-available-balance'), activeInvestmentsSummaryCard: document.getElementById('active-investments-summary-card'), activeInvestmentsList: document.getElementById('active-investments-list'), activeInvestmentsCount: document.getElementById('active-investments-count'), noInvestmentMessage: document.getElementById('dashboard-no-investment'), investmentOptions: document.getElementById('dashboard-investment-options'), transactionTableBody: document.getElementById('transaction-table-body'), noTransactionsMessage: document.getElementById('no-transactions'), profileSettingsCard: document.getElementById('profile-settings-card'), financialGoalDisplay: document.getElementById('financial-goal-display'), financialGoalTextDesc: document.getElementById('financial-goal-text-desc'), financialGoalTextAmount: document.getElementById('financial-goal-text-amount'), financialGoalProgressFill: document.getElementById('financial-goal-progress-fill'), profitCalculatorCard: document.getElementById('profit-calculator-card'), profitCalcPlanSelect: document.getElementById('profit-calc-plan-select'), profitCalcAmountInput: document.getElementById('profit-calc-amount'), profitCalcButton: document.getElementById('profit-calc-button'), profitCalcResultsDisplay: document.getElementById('profit-calculator-results'), profitCalcResultProfit: document.getElementById('profit-calc-result-profit'), profitCalcResultReturn: document.getElementById('profit-calc-result-return'), profitCalcResultDuration: document.getElementById('profit-calc-result-duration'), profitCalcResultMaturity: document.getElementById('profit-calc-result-maturity'), dashProfilePicPlaceholder: document.getElementById('dash-profile-pic-placeholder'), dashProfilePic: document.getElementById('dash-profile-pic'), userSupportCard: document.getElementById('user-support-card'), userTicketListBrief: document.getElementById('user-ticket-list-brief'), changePasswordMessage: document.getElementById('change-password-message'), profileSettingPicUrlInput: document.getElementById('profile-setting-pic-url'), withdrawalLimitsInfo: document.getElementById('withdrawal-limits-info'), adminPanelTitle: document.getElementById('admin-panel-title'), adminGlobalStatsDisplay: document.getElementById('admin-global-stats-display'), adminPendingDeposits: document.getElementById('admin-pending-deposits'), adminPendingDepositsCount: document.getElementById('admin-pending-deposits-count'), adminPendingWithdrawals: document.getElementById('admin-pending-withdrawals'), adminPendingWithdrawalsCount: document.getElementById('admin-pending-withdrawals-count'), adminUserListTableContainer: document.getElementById('admin-user-list-table-container'), adminNoUsersMessage: document.getElementById('admin-no-users-message'), adminUserFilterName: document.getElementById('admin-user-filter-name'), adminUserFilterStatus: document.getElementById('admin-user-filter-status'), adminApplyUserFiltersBtn: document.getElementById('admin-apply-user-filters'), adminClearUserFiltersBtn: document.getElementById('admin-clear-user-filters'), adminViewUserModal: document.getElementById('adminViewUserModal'), adminViewUserTitle: document.getElementById('adminViewUserTitle'), adminViewUserDetails: document.getElementById('adminViewUserDetails'), adminAllTransactionsTableBody: document.getElementById('admin-all-transactions-table-body'), adminNoTransactionsMessage: document.getElementById('admin-no-transactions-message'), adminTxFilterUser: document.getElementById('admin-tx-filter-user'), adminTxFilterType: document.getElementById('admin-tx-filter-type'), adminApplyTxFiltersBtn: document.getElementById('admin-apply-tx-filters'), adminClearTxFiltersBtn: document.getElementById('admin-clear-tx-filters'), adminClearBroadcastBtn: document.getElementById('admin-clear-broadcast'), adminHeroHeadlineInput: document.getElementById('admin-hero-headline'), adminHeroSubheadlineInput: document.getElementById('admin-hero-subheadline'), adminFeaturesList: document.getElementById('admin-features-list'), adminTestimonialsList: document.getElementById('admin-testimonials-list'), adminFaqsList: document.getElementById('admin-faqs-list'), adminEditContentModal: document.getElementById('adminEditContentModal'), adminEditContentTitle: document.getElementById('adminEditContentTitle'), adminEditContentIdInput: document.getElementById('admin-edit-content-id'), adminEditContentTypeInput: document.getElementById('admin-edit-content-type'), adminContentFieldsContainer: document.getElementById('admin-content-fields-container'), adminInvestmentPlansList: document.getElementById('admin-investment-plans-list'), adminEditPlanModal: document.getElementById('adminEditPlanModal'), adminEditPlanTitle: document.getElementById('adminEditPlanTitle'), adminEditPlanIdInput: document.getElementById('admin-edit-plan-id'), adminSettingAppName: document.getElementById('admin-setting-app-name'), adminSettingStatsUsers: document.getElementById('admin-setting-stats-users'), adminSettingStatsInvested: document.getElementById('admin-setting-stats-invested'), adminSettingStatsProfit: document.getElementById('admin-setting-stats-profit'), adminSettingReferralBonus: document.getElementById('admin-setting-referral-bonus'), adminSettingWithdrawalFee: document.getElementById('admin-setting-withdrawal-fee'), adminMaintenanceModeToggle: document.getElementById('admin-maintenance-mode-toggle'), adminMaintenanceModeStatus: document.getElementById('admin-maintenance-mode-status'), adminAssistantBanner: document.getElementById('admin-assistant-banner'), adminEditUserModal: document.getElementById('adminEditUserModal'), adminEditUserTitle: document.getElementById('adminEditUserTitle'), adminEditUserIdInput: document.getElementById('admin-edit-user-id'), adminEditUserNameInput: document.getElementById('admin-edit-user-name'), adminEditUserEmailInput: document.getElementById('admin-edit-user-email'), adminEditUserPasswordInput: document.getElementById('admin-edit-user-password'), adminEditUserCreditInput: document.getElementById('admin-edit-user-credit'), adminEditUserCreditReasonInput: document.getElementById('admin-edit-user-credit-reason'), adminEditUserBonusInput: document.getElementById('admin-edit-user-bonus'), adminEditUserBonusReasonInput: document.getElementById('admin-edit-user-bonus-reason'), adminEditUserSuspendedToggle: document.getElementById('admin-edit-user-suspended'), adminEditUserAssistantToggle: document.getElementById('admin-edit-user-assistant'), adminDirectMessageTextInput: document.getElementById('admin-direct-message-text'), adminSystemLogList: document.getElementById('admin-system-log-list'), adminSettingMinWithdrawal: document.getElementById('admin-setting-min-withdrawal'), adminSettingMaxWithdrawal: document.getElementById('admin-setting-max-withdrawal'), adminSupportTicketList: document.getElementById('admin-support-ticket-list'), adminNoTicketsMessage: document.getElementById('admin-no-tickets-message'), adminTicketFilterUser: document.getElementById('admin-ticket-filter-user'), adminTicketFilterStatus: document.getElementById('admin-ticket-filter-status'), adminApplyTicketFiltersBtn: document.getElementById('admin-apply-ticket-filters'), adminClearTicketFiltersBtn: document.getElementById('admin-clear-ticket-filters'), adminViewSupportTicketModal: document.getElementById('adminViewSupportTicketModal'), adminViewSupportTicketTitle: document.getElementById('adminViewSupportTicketTitle'), adminTicketUserInfo: document.getElementById('admin-ticket-user-info'), adminTicketSubjectInfo: document.getElementById('admin-ticket-subject-info'), adminTicketStatusInfo: document.getElementById('admin-ticket-status-info'), adminTicketChatMessages: document.getElementById('admin-ticket-chat-messages'), adminReplyTicketIdInput: document.getElementById('admin-reply-ticket-id'), adminTicketReplyMessageInput: document.getElementById('admin-ticket-reply-message'), adminTicketChangeStatusSelect: document.getElementById('admin-ticket-change-status'), userSupportTicketModal: document.getElementById('userSupportTicketModal'), userSupportTicketTitle: document.getElementById('userSupportTicketTitle'), userSupportTicketView: document.getElementById('user-support-ticket-view'), userExistingTicketsList: document.getElementById('user-existing-tickets-list'), userCreateNewTicketBtn: document.getElementById('user-create-new-ticket-btn'), userNewTicketFormView: document.getElementById('user-new-ticket-form-view'), userTicketSubjectInput: document.getElementById('user-ticket-subject'), userTicketMessageInput: document.getElementById('user-ticket-message'), userCancelNewTicketBtn: document.getElementById('user-cancel-new-ticket-btn'), userTicketChatView: document.getElementById('user-ticket-chat-view'), userChatTicketSubject: document.getElementById('user-chat-ticket-subject'), userTicketChatMessages: document.getElementById('user-ticket-chat-messages'), userReplyTicketIdInput: document.getElementById('user-reply-ticket-id'), userTicketReplyMessageInput: document.getElementById('user-ticket-reply-message'), userBackToTicketsBtn: document.getElementById('user-back-to-tickets-btn'), allPageContentWrappers: document.querySelectorAll('.page-section, .page-section-group'), messageElements: { login: document.getElementById('login-message'), register: document.getElementById('register-message'), deposit: document.getElementById('deposit-message'), withdrawal: document.getElementById('withdrawal-message') }, depositModalEl: document.getElementById('depositModal'), withdrawalModalEl: document.getElementById('withdrawalModal'), depositForm: document.getElementById('deposit-form'), withdrawalForm: document.getElementById('withdrawal-form'), depositMethodSelect: document.getElementById('deposit-method'), depositDetailsDisplay: document.getElementById('deposit-details-display'), depositProofGroup: document.getElementById('deposit-proof-group'), currencySelectorAdminContainer: document.getElementById('currency-selector-container-admin'), currencySelectorAdmin: document.getElementById('currency-selector-admin'), profileSettingsForm: document.getElementById('profile-settings-form'), profile2FAToggle: document.getElementById('profile-2fa-toggle'), profile2FAStatus: document.getElementById('profile-2fa-status'), appNameHeader: document.getElementById('app-name-header'), appNameDynamicElements: document.querySelectorAll('.app-name-dynamic'), maintenanceModeBanner: document.getElementById('maintenance-mode-banner'), userNotificationBell: document.getElementById('user-notification-bell'), notificationCountBadge: document.getElementById('notification-count-badge'), notificationsDropdownContainer: document.getElementById('notifications-dropdown-container'), notificationsList: document.getElementById('notifications-list'), heroHeadline: document.getElementById('hero-headline'), heroSubheadline: document.getElementById('hero-subheadline'), adminPlanIsShortTermToggle: document.getElementById('admin-plan-isShortTerm'), planFieldsLongTermGroup: document.getElementById('plan-fields-long-term-group'), planFieldsShortTermGroup: document.getElementById('plan-fields-short-term-group'), adminPlanCurrencySymbols: document.querySelectorAll('.admin-plan-currency-symbol') };

// --- AUTHENTICATION & SESSION MANAGEMENT ---
supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_OUT') {
        currentUser = null;
        updateNavForLogoutState();
        navigateToSection('home', 'nav-home');
        return;
    }

    if (session) {
        const user = session.user;
        const { data: profile, error } = await supabaseClient.from('profiles').select('*').eq('id', user.id).single();

        if (error || !profile) {
            console.error("Error fetching profile, or profile not found:", error);
            await handleLogout();
            return;
        }

        currentUser = { ...user, ...profile };

        if (NFX_CONFIG.maintenance_mode && currentUser.role !== 'admin') {
            showToast("Site is under maintenance. Please try again later.", "warning", 5000);
            await handleLogout();
            return;
        }

        updateNavForLoginState();
        if (currentUser.role === 'admin' || currentUser.role === 'assistant_admin') {
            loadAdminPanel();
        } else {
            loadDashboard();
        }
    }
});

// --- DATA LOADING & CONFIG ---
// REPLACEMENT for loadAndApplyConfig
async function loadAndApplyConfig() {
    try {
        // Fetch all public data in parallel using simpler, separate queries
        const [
            siteConfigResult,
            plansResult,
            faqsResult,
            featuresResult,
            testimonialsResult
        ] = await Promise.all([
            supabaseClient.from('site_config').select('*').eq('id', 1).single(),
            supabaseClient.from('investment_plans').select('*'),
            supabaseClient.from('faqs').select('*'),
            supabaseClient.from('features').select('*'),
            supabaseClient.from('testimonials').select('*')
        ]);

        // Check if any of the essential requests failed
        if (siteConfigResult.error) throw siteConfigResult.error;

        // Populate the global config object
        NFX_CONFIG = {
            // Set some defaults
            currencies: [{ code: "USD", symbol: "$" }, { code: "EUR", symbol: "€" }],
            heroContent: { headline: "Unlock Your Financial Potential", subheadline: "Invest with Insight." },
            // Overwrite with data from the database
            ...siteConfigResult.data,
            investment_plans: plansResult.data || [],
            faqs: faqsResult.data || [],
            features: featuresResult.data || [],
            testimonials: testimonialsResult.data || [],
        };
        
        // Update the user interface with the loaded data
        updateUIFromConfig();

    } catch (error) {
        console.error("FATAL: Could not load site configuration from database.", error);
        document.body.innerHTML = '<h1>Error: Could not connect to application services. Please try again later.</h1>';
    }
}

function updateUIFromConfig() {
    document.title = `${NFX_CONFIG.app_name} - Advanced Investment Platform`;
    if (dashboardElements.appNameHeader) dashboardElements.appNameHeader.textContent = NFX_CONFIG.app_name;
    dashboardElements.appNameDynamicElements.forEach(el => el.textContent = NFX_CONFIG.app_name);
    dashboardElements.maintenanceModeBanner.classList.toggle('hidden', !NFX_CONFIG.maintenance_mode);

    renderHeroContent();
    renderFeatures();
    renderTestimonials();
    renderFAQs();
    updateStatsBar();

    const withdrawalFeeInfoEl = document.getElementById('withdrawal-fee-info');
    if (withdrawalFeeInfoEl) withdrawalFeeInfoEl.textContent = `A ${NFX_CONFIG.withdrawal_fee_percent}% withdrawal fee will be applied.`;
    updateWithdrawalLimitsDisplay();
}

// --- AUTHENTICATION FORMS ---
if (forms.register) forms.register.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const referralCodeInput = document.getElementById('register-referral-code').value.trim();
    if (!name || !email || !password || password.length < 6) {
        return displayFormMessage(dashboardElements.messageElements.register, "Please fill all fields correctly (password min 6 chars).", "error");
    }
    const { data, error } = await supabaseClient.auth.signUp({ email, password, options: { data: { name, referral_code_input: referralCodeInput } } });
    if (error) return displayFormMessage(dashboardElements.messageElements.register, error.message, "error");
    
    displayFormMessage(dashboardElements.messageElements.register, "Success! Please check your email to confirm.", "success");
    showToast(`Confirmation email sent to ${email}.`, "success", 7000);
    forms.register.reset();
});

if (forms.login) forms.login.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    if (!email || !password) return displayFormMessage(dashboardElements.messageElements.login, "Email and password required.", "error");

    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) return displayFormMessage(dashboardElements.messageElements.login, "Invalid credentials.", "error");
    
    showToast(`Welcome!`, "success"); // The onAuthStateChange listener will handle the rest
});

async function handleLogout() {
    await supabaseClient.auth.signOut();
}

// --- CORE APP LOGIC ---

// REPLACEMENT for loadDashboard
async function loadDashboard() {
    if (!currentUser) return; // Safety check

    navigateToSection('dashboard', 'nav-dashboard');
    // clearAllCountdowns(); // We will add this back later

    // Fetch the user's complete data, including related investments and transactions
    const { data: userData, error } = await supabaseClient
        .from('profiles')
        .select(`
            *,
            user_investments(*),
            transactions(*)
        `)
        .eq('id', currentUser.id)
        .single();

    if (error) {
        console.error('Error loading dashboard data:', error);
        showToast('Could not load your dashboard.', 'error');
        return;
    }

    // Update the global currentUser object with the fresh, complete data
    currentUser = { ...currentUser, ...userData };
    // For convenience, let's create simple aliases to match your old code structure
    currentUser.investments = currentUser.user_investments || [];

    // Now, populate the dashboard UI with all the fresh data
    const displayCurrency = getUserDisplayCurrency();

    // --- Populate Profile Card ---
    if (dashboardElements.welcome) dashboardElements.welcome.textContent = `Welcome, ${currentUser.name}!`;
    if (dashboardElements.userName) dashboardElements.userName.textContent = currentUser.name;
    if (dashboardElements.userEmail) dashboardElements.userEmail.textContent = currentUser.email;
    if (dashboardElements.memberSince) dashboardElements.memberSince.textContent = formatDate(currentUser.registered_date);
    if (dashboardElements.referralCode) dashboardElements.referralCode.textContent = currentUser.referral_code;

    // --- Populate Wallet Card ---
    if (dashboardElements.walletActualBalance) dashboardElements.walletActualBalance.textContent = formatCurrencyValue(currentUser.wallet_balance, displayCurrency);
    const totalInvestedActive = currentUser.investments
        .filter(inv => inv.status === 'active')
        .reduce((sum, inv) => sum + Number(inv.amount), 0);
    if (dashboardElements.walletInvestedAmount) dashboardElements.walletInvestedAmount.textContent = formatCurrencyValue(totalInvestedActive, displayCurrency);
    if (dashboardElements.walletRealizedProfit) dashboardElements.walletRealizedProfit.textContent = formatCurrencyValue(currentUser.total_realized_profit || 0, displayCurrency);

    // --- Render Dynamic Lists ---
    renderActiveInvestments(currentUser.investments);
    renderTransactionHistory(currentUser.transactions);
    
    // --- Render Other Dashboard Components ---
    renderPlans(planDisplays.dashboard, true); // This renders the available plans at the bottom
    // renderAccountGrowthChart(currentUser.transactions); // We can enable this later
}

async function handleInvestmentSelection(planId) {
    const plan = NFX_CONFIG.investmentPlans.find(p => p.id === planId);
    if (!plan || !plan.is_enabled) return showToast("Invalid or disabled plan selected.", "error");

    const displayCurrency = getUserDisplayCurrency();
    const amountToInvestStr = prompt(`Enter amount for ${plan.name} (${displayCurrency.code})\nMin: ${formatCurrencyValue(plan.min_amount, displayCurrency)}, Max: ${formatCurrencyValue(plan.max_amount, displayCurrency)}\nWallet: ${formatCurrencyValue(currentUser.wallet_balance, displayCurrency)}`, String(plan.min_amount));
    if (amountToInvestStr === null) return;
    const amountToInvest = parseFloat(amountToInvestStr);

    if (isNaN(amountToInvest) || amountToInvest < plan.min_amount || amountToInvest > plan.max_amount) {
        return showToast(`Amount must be between ${formatCurrencyValue(plan.min_amount, displayCurrency)} and ${formatCurrencyValue(plan.max_amount, displayCurrency)}.`, "error");
    }
    if (amountToInvest > currentUser.wallet_balance) return showToast(`Insufficient balance.`, "error");

    showToast('Processing your investment...', 'info');
    const { error } = await supabaseClient.rpc('create_investment', {
        p_plan_id: plan.id,
        p_amount: amountToInvest,
        p_currency_code: displayCurrency.code,
        p_currency_symbol: displayCurrency.symbol
    });
    
    if (error) {
        console.error("Investment RPC Error:", error);
        return showToast(error.message, 'error');
    }

    showToast(`Successfully invested ${formatCurrencyValue(amountToInvest, displayCurrency)} in ${plan.name}!`, "success");
    await loadDashboard();
}

async function handlePlanMaturity(investmentId) {
    showToast('Processing plan maturity...', 'info');
    const { error } = await supabaseClient.rpc('process_plan_maturity', { p_investment_id: investmentId });

    if (error) {
        console.error("Maturity RPC Error:", error);
        return showToast(error.message, 'error');
    }

    showToast(`Plan finalized and funds credited to your wallet!`, "success");
    await loadDashboard();
}

// --- ADMIN PANEL ---
async function loadAdminPanel() {
    navigateToSection('adminPanel', 'nav-admin');
    if (dashboardElements.adminPanelTitle) dashboardElements.adminPanelTitle.innerHTML = `<i class="fas fa-user-shield"></i> Admin Panel (${currentUser.email} - ${currentUser.role})`;
    
    // Default to overview tab
    showAdminMainTab('overview', document.querySelector('.admin-tab-button[data-tab-target="overview"]'));
}

window.showAdminMainTab = function (tabName, clickedButton) {
    document.querySelectorAll('#admin-panel-section > .admin-tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`admin-${tabName}-tab`).classList.add('active');
    document.querySelectorAll('#admin-panel-section > .admin-tabs .admin-tab-button').forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');

    // Load content for the selected tab
    switch (tabName) {
        case 'overview': loadAdminOverviewTabContent(); break;
        case 'userManagement': loadAdminUserManagementTabContent(); break;
        // Add other cases here as you build them out
    }
}

async function loadAdminOverviewTabContent() {
    const { data, error } = await supabaseClient.from('transactions').select('*').in('status', ['pending']);
    if(error) return showToast('Could not load pending transactions', 'error');

    const pendingDeposits = data.filter(tx => tx.type === 'deposit');
    const pendingWithdrawals = data.filter(tx => tx.type === 'withdrawal');

    renderAdminPendingTxList(dashboardElements.adminPendingDeposits, pendingDeposits, 'deposit');
    renderAdminPendingTxList(dashboardElements.adminPendingWithdrawals, pendingWithdrawals, 'withdrawal');
    dashboardElements.adminPendingDepositsCount.textContent = pendingDeposits.length;
    dashboardElements.adminPendingWithdrawalsCount.textContent = pendingWithdrawals.length;

    // Load global stats
    const { data: stats, error: statsError } = await supabaseClient.rpc('get_global_stats');
    if(statsError) return showToast('Could not load global stats', 'error');
    
    const { total_users, total_wallet_balances, total_invested } = stats;
    dashboardElements.adminGlobalStatsDisplay.innerHTML = `
        <div class="stat-card"><h4>Total Users</h4><p>${total_users}</p></div>
        <div class="stat-card"><h4>Wallet Balances (Agg.)</h4><p>${formatCurrencyValue(total_wallet_balances)}</p></div>
        <div class="stat-card"><h4>Actively Invested (Agg.)</h4><p>${formatCurrencyValue(total_invested)}</p></div>
    `;
}

function renderAdminPendingTxList(container, items, type) {
    if (!container) return;
    container.innerHTML = '';
    if (items.length === 0) {
        container.innerHTML = `<p style="padding:10px 0;">No pending ${type}s.</p>`;
        return;
    }
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('pending-tx-card');
        const itemCurrency = { code: item.currency, symbol: '$' }; // Simplified
        let detailsHTML = type === 'deposit' 
            ? `<p>Proof: ${item.proof_filename || 'N/A'}</p>`
            : `<p>Details: ${item.details || 'N/A'}</p><p>Fee: ${formatCurrencyValue(item.fee, itemCurrency)} | Net: ${formatCurrencyValue(item.net_amount, itemCurrency)}</p>`;

        card.innerHTML = `
            <p><strong>User:</strong> ${item.user_email}</p>
            <p><strong>Amount:</strong> ${formatCurrencyValue(item.amount, itemCurrency)}</p>
            ${detailsHTML}
            <div style="margin-top:10px;">
                <button class="button button-small button-success" onclick="adminApproveTx('${item.id}', '${type}')"><i class="fas fa-check"></i> Approve</button>
                <button class="button button-small button-danger" onclick="adminRejectTx('${item.id}')"><i class="fas fa-times"></i> Reject</button>
            </div>`;
        container.appendChild(card);
    });
}

async function adminApproveTx(txId, type) {
    if(currentUser.role !== 'admin') return showToast('Permission Denied', 'error');
    showToast('Processing...', 'info');
    const { error } = await supabaseClient.rpc('approve_transaction', { transaction_id: txId, transaction_type: type });
    if(error) return showToast(error.message, 'error');
    showToast('Transaction approved!', 'success');
    loadAdminOverviewTabContent();
}

async function adminRejectTx(txId) {
    if(currentUser.role !== 'admin') return showToast('Permission Denied', 'error');
    showToast('Processing...', 'info');
    const { error } = await supabaseClient.from('transactions').update({ status: 'rejected' }).eq('id', txId);
    if(error) return showToast(error.message, 'error');
    showToast('Transaction rejected!', 'success');
    loadAdminOverviewTabContent();
}

// Stubs for other admin functions
async function loadAdminUserManagementTabContent() {
    const { data, error } = await supabaseClient.from('profiles').select('*');
    if (error) return showToast('Could not load users', 'error');
    
    // Simplified rendering
    dashboardElements.adminUserListTableContainer.innerHTML = `
        <table class="table-responsive-wrapper">
            <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
            <tbody>
                ${data.map(user => `
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.role}</td>
                        <td>${user.is_suspended ? 'Suspended' : 'Active'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// --- UI & HELPER FUNCTIONS ---
function navigateToSection(sectionKey, navLinkId = null) {
    const activeLinkElement = navLinkId ? document.getElementById(navLinkId) : null;
    showSection(sectionKey, activeLinkElement);
}

function showSection(sectionKey, activeLinkElement = null) {
    if (NFX_CONFIG.maintenance_mode && (!currentUser || currentUser.role !== 'admin')) {
        if (!['home', 'faq', 'login', 'register'].includes(sectionKey)) {
            showToast("Site is currently under maintenance.", "warning", 5000);
            return navigateToSection('home', 'nav-home');
        }
    }

    Object.values(sections).flat().forEach(sec => sec && sec.classList.add('hidden'));
    const target = sections[sectionKey];
    if (Array.isArray(target)) {
        target.forEach(part => part && part.classList.remove('hidden'));
    } else if (target) {
        target.classList.remove('hidden');
    }

    Object.values(navLinks).forEach(link => link && link.classList.remove('active'));
    if (activeLinkElement) activeLinkElement.classList.add('active');
    else if (navLinks[sectionKey]) navLinks[sectionKey].classList.add('active');
    window.scrollTo(0, 0);
}

function updateNavForLoginState() {
    const isAdmin = currentUser && (currentUser.role === 'admin' || currentUser.role === 'assistant_admin');
    document.querySelectorAll('.auth-nav').forEach(el => el.classList.add('hidden'));
    navLinks.logout.classList.remove('hidden');
    if (isAdmin) {
        navLinks.admin.classList.remove('hidden');
        navLinks.dashboard.classList.add('hidden');
    } else {
        navLinks.dashboard.classList.remove('hidden');
        navLinks.admin.classList.add('hidden');
    }
}

function updateNavForLogoutState() {
    document.querySelectorAll('.auth-nav').forEach(el => el.classList.remove('hidden'));
    navLinks.logout.classList.add('hidden');
    navLinks.dashboard.classList.add('hidden');
    navLinks.admin.classList.add('hidden');
}

function renderHeroContent() {
    if (dashboardElements.heroHeadline) dashboardElements.heroHeadline.textContent = NFX_CONFIG.heroContent.headline;
    if (dashboardElements.heroSubheadline) dashboardElements.heroSubheadline.textContent = NFX_CONFIG.heroContent.subheadline;
}

function renderFeatures() {
    const container = document.getElementById('features-grid-container'); if (!container) return; container.innerHTML = '';
    (NFX_CONFIG.features || []).forEach((feature, index) => {
        const item = document.createElement('div');
        item.className = 'feature-item aos';
        item.setAttribute('data-aos', 'fade-up');
        item.innerHTML = `<div class="icon-wrapper"><i class="${feature.icon_class || 'fas fa-star'}"></i></div><h3>${feature.title}</h3><p>${feature.description}</p>`;
        container.appendChild(item);
        if (animationObserver) animationObserver.observe(item);
    });
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-grid-container'); if (!container) return; container.innerHTML = '';
    (NFX_CONFIG.testimonials || []).forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card aos';
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `<img src="${testimonial.avatar || `https://i.pravatar.cc/150?u=${testimonial.author}`}" alt="${testimonial.author}" class="avatar"><p class="author">${testimonial.author} <span>${testimonial.role}</span></p><p class="quote">${testimonial.quote}</p>`;
        container.appendChild(card);
        if (animationObserver) animationObserver.observe(card);
    });
}

function renderFAQs() {
    const faqContainer = document.getElementById('faq-container'); if (!faqContainer) return; faqContainer.innerHTML = '';
    (NFX_CONFIG.faqs || []).forEach(faq => {
        const item = document.createElement('div'); item.classList.add('faq-item');
        item.innerHTML = `<div class="faq-question">${faq.question} <span class="faq-toggle"><i class="fas fa-plus"></i></span></div><div class="faq-answer"><p>${faq.answer}</p></div>`;
        item.querySelector('.faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
            const icon = item.querySelector('.faq-toggle i');
            icon.className = `fas ${item.classList.contains('active') ? 'fa-minus' : 'fa-plus'}`;
        });
        faqContainer.appendChild(item);
    });
}

// REPLACEMENT for renderActiveInvestments
function renderActiveInvestments(investments) {
    const container = dashboardElements.activeInvestmentsList;
    if (!container) return;
    container.innerHTML = '';

    const activeInvestments = (investments || []).filter(inv => inv.status === 'active');

    dashboardElements.activeInvestmentsCount.textContent = activeInvestments.length;
    dashboardElements.noInvestmentMessage.classList.toggle('hidden', activeInvestments.length > 0);

    activeInvestments.forEach(inv => displaySingleInvestment(inv));
}

// REPLACEMENT for displaySingleInvestment
function displaySingleInvestment(investment) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('active-investment-item');
    itemDiv.id = `investment-item-${investment.id}`;
    
    const currency = { code: investment.currency, symbol: '$' }; // Simplified for now
    const hasMatured = new Date() > new Date(investment.maturity_date);

    itemDiv.innerHTML = `
        <h4>${investment.plan_name}</h4>
        <p>Invested: <strong>${formatCurrencyValue(investment.amount, currency)}</strong></p>
        <p>Start Date: <span>${formatDate(investment.start_date)}</span></p>
        <p>Matures On: <span>${formatDate(investment.maturity_date)}</span></p>
        ${hasMatured 
            ? `<button class="button button-small button-success" onclick="handlePlanMaturity('${investment.id}')">Claim Funds</button>`
            : `<div class="countdown-timer" style="color:var(--info-color);">Status: Active</div>`
        }
    `;
    dashboardElements.activeInvestmentsList.appendChild(itemDiv);

    // We can add the real countdown logic here later if needed
}

// REPLACEMENT for renderTransactionHistory
function renderTransactionHistory(transactions, filterType = 'all') {
    const container = dashboardElements.transactionTableBody;
    if (!container) return;
    container.innerHTML = '';

    const filtered = (transactions || []).filter(tx => {
        if (filterType === 'all') return true;
        return tx.type.includes(filterType); // Simple filter
    });

    dashboardElements.noTransactionsMessage.classList.toggle('hidden', filtered.length > 0);

    filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).forEach(tx => {
        const row = container.insertRow();
        const currency = { code: tx.currency, symbol: '$' };
        row.innerHTML = `
            <td>${formatDate(tx.created_at)}</td>
            <td>${tx.description}</td>
            <td class="amount-${tx.tx_type_indicator}">${formatCurrencyValue(tx.amount, currency)}</td>
            <td class="status-${tx.status}">${tx.status}</td>
            <td>${tx.type.replace(/_/g, ' ')}</td>
        `;
    });
}

function renderPlans(container, isDashboard) {
    if (!container) return;
    container.innerHTML = '';
    const displayCurrency = getUserDisplayCurrency();
    (NFX_CONFIG.investmentPlans || []).forEach(plan => {
        if (!plan.is_enabled && !isDashboard) return;
        const card = document.createElement('div');
        card.className = `plan-card ${!plan.is_enabled ? 'disabled-plan' : ''}`;
        card.innerHTML = `<h3>${plan.name}</h3><p class="price-range">Invest: ${formatCurrencyValue(plan.min_amount, displayCurrency)} - ${formatCurrencyValue(plan.max_amount, displayCurrency)}</p>`;
        if (isDashboard && plan.is_enabled) {
            const btn = document.createElement('button');
            btn.className = 'button';
            btn.innerHTML = 'Invest';
            btn.onclick = () => handleInvestmentSelection(plan.id);
            card.appendChild(btn);
        }
        container.appendChild(card);
    });
}

// Stubs for other less critical functions for now
function updateStatsBar() {}
function updateWithdrawalLimitsDisplay() {}
function getUserDisplayCurrency() { return (currentUser && currentUser.locked_currency) ? JSON.parse(currentUser.locked_currency) : { code: 'USD', symbol: '$' }; }
function getGlobalDisplayCurrency() { return { code: 'USD', symbol: '$' }; }
function checkAndLockCurrency() {}
function displayBroadcastMessage() {}
async function loadUserNotifications() {}
function populateProfitCalculatorPlans() {}
function loadAndDisplayFinancialGoal() {}
function renderAccountGrowthChart(transactions) {}
function updateCurrencyDisplays() {}
async function loadUserSupportTicketsBrief() {}
function copyToClipboard(text) { navigator.clipboard.writeText(text).then(() => showToast('Copied!', 'success')); }
function clearAllCountdowns() { Object.values(countdownIntervals).forEach(clearInterval); countdownIntervals = {}; }
function openModal(id) { const el = document.getElementById(id); if(el) el.classList.add('show'); }
function closeModal(id) { const el = document.getElementById(id); if(el) el.classList.remove('show'); }
function formatDate(d) { return new Date(d).toLocaleDateString(); }
function formatCurrencyValue(amount, currency) { const sym = (currency && currency.symbol) || '$'; return `${sym}${Number(amount || 0).toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}`; }
function showToast(message, type = 'info', duration = 3500) { const cont = document.getElementById('toast-container'); if (!cont) return; const toast = document.createElement('div'); toast.className = `toast ${type}`; toast.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`; cont.appendChild(toast); setTimeout(() => toast.classList.add('show'), 10); setTimeout(() => { toast.classList.remove('show'); setTimeout(() => cont.removeChild(toast), 500); }, duration); }
function displayFormMessage(element, message, type = 'error') { if(element) { element.textContent = message; element.className = `form-message ${type}`; element.classList.remove('hidden'); } }

// --- APP INITIALIZATION ---
async function initApp() {
    await loadAndApplyConfig();
    
    // Setup navigation clicks
    Object.entries({
        'nav-home-logo': 'home', 'nav-home': 'home', 'nav-plans': 'plans',
        'nav-faq': 'faq', 'nav-login': 'login', 'nav-register': 'register',
        'nav-dashboard': 'dashboard', 'nav-admin': 'adminPanel'
    }).forEach(([id, section]) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', (e) => { e.preventDefault(); navigateToSection(section, id); });
    });
    if(navLinks.logout) navLinks.logout.addEventListener('click', (e) => { e.preventDefault(); handleLogout(); });

    // Setup animation observer
    animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.aos').forEach(el => animationObserver.observe(el));

    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // The onAuthStateChange listener handles the initial user state, so no need for checks here.
    navigateToSection('home');
}

document.addEventListener('DOMContentLoaded', initApp);