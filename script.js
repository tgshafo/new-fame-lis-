// Данные участников с дополнительной информацией
const members = [
    {
        id: 1,
        nickname: "SemerkIn",
        username: "@semerkIn",
        category: "Медийки",
        role: "Главная Медийка",
        description: "semerkIn - Также известен как 'Семеркин'. Появился в комьюнити ВКонтакте в 2020 году. Создатель проекта 'Правда о км'. Приобрел популярность благодаря серии интервью с известными медийными личностями.",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar1.png",
        verified: true,
        pinned: true,
        project: "https://t.me/+xm9o_NoMxjVjNjgy",
        telegram: "semerkIn",
        joinDate: "2020-03-15",
        activity: "Высокая",
        posts: 156,
        followers: 24500,
        details: "Известен своей активной гражданской позицией и критическим взглядом на происходящее в сообществе.",
        skills: ["Интервью", "Аналитика", "Критика"],
        socials: {
            telegram: "@semerkIn",
            vk: "semerkIn",
            youtube: "semerkIn"
        }
    },
    {
        id: 2,
        nickname: "Jemon",
        username: "@jemon",
        category: "Медийки",
        role: "Медийка",
        description: "Владелец сайта, по вопросам писать мне и тд хз сайт говно",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar2.png",
        verified: false,
        pinned: false,
        project: "#",
        telegram: "jemon",
        joinDate: "2023-01-10",
        activity: "Средняя",
        posts: 45,
        followers: 8900,
        details: "Разработчик и администратор проекта. Занимается поддержкой и развитием платформы.",
        skills: ["Разработка", "Администрирование", "Дизайн"],
        socials: {
            telegram: "@jemon",
            github: "jemon"
        }
    },
    {
        id: 3,
        nickname: "Иснялцепи",
        username: "@isnialcepi",
        category: "Медийки",
        role: "Медийка",
        description: "Данная личность появилась в 24, набрал популярность благодаря пастам и сносам...",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar3.png",
        verified: false,
        pinned: false,
        project: "#",
        telegram: "isnialcepi",
        joinDate: "2024-02-20",
        activity: "Высокая",
        posts: 210,
        followers: 18700,
        details: "Мастер создания вирусного контента и мемов. Известен резкими высказываниями и провокациями.",
        skills: ["Мемы", "Провокации", "Контент"],
        socials: {
            telegram: "@isnialcepi",
            twitter: "isnialcepi"
        }
    },
    {
        id: 4,
        nickname: "Хакер Pro",
        username: "@hackerpro",
        category: "Кодеры",
        role: "Сеньор Разработчик",
        description: "Опытный разработчик с 10+ лет опыта. Специализация: Python, JavaScript, безопасность.",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar4.png",
        verified: true,
        pinned: false,
        project: "https://github.com/hackerpro",
        telegram: "hackerpro",
        joinDate: "2019-11-05",
        activity: "Высокая",
        posts: 320,
        followers: 31200,
        details: "Эксперт в области кибербезопасности и reverse engineering. Проводит обучение для начинающих.",
        skills: ["Python", "JavaScript", "Security", "Reverse"],
        socials: {
            telegram: "@hackerpro",
            github: "hackerpro",
            twitter: "hackerpro"
        }
    },
    {
        id: 5,
        nickname: "Дизайнер Art",
        username: "@designerart",
        category: "Дизайнеры",
        role: "Главный Дизайнер",
        description: "Создаю уникальные дизайны для проектов любой сложности. UI/UX, брендинг, анимация.",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar5.png",
        verified: true,
        pinned: true,
        project: "https://dribbble.com/designerart",
        telegram: "designerart",
        joinDate: "2021-06-15",
        activity: "Высокая",
        posts: 189,
        followers: 27800,
        details: "Работал с крупными брендами. Специализируется на минималистичном дизайне и анимациях.",
        skills: ["UI/UX", "Figma", "After Effects", "Branding"],
        socials: {
            telegram: "@designerart",
            behance: "designerart",
            instagram: "designerart"
        }
    },
    // Добавьте остальные 495 участников аналогичным образом
    // Каждому добавьте больше полей: telegram, joinDate, activity, posts, followers, details, skills, socials
];

// Текущие настройки
let currentTheme = 'dark';
let currentNeonColor = '#808080';
let currentNeonIntensity = 0.5;
let currentNeonSpeed = 5;
let currentAnimatedBg = 'hooks';
let currentBgSpeed = 10;
let currentBgOpacity = 0.5;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMembers();
    initSnow();
    initSettings();
    initNeonControls();
    initAnimatedBg();
    initModals();
    loadSavedSettings();
    initDynamicNeon();
    
    // Загружаем 500 участников
    generateMembers();
});

// Генерация 500 участников
function generateMembers() {
    const categories = ['Медийки', 'Фейм', 'Средний', 'Малый', 'Кодеры', 'Дизайнеры', 'Эдиторы'];
    const roles = {
        'Медийки': ['Главная Медийка', 'Медийка', 'Журналист', 'Блогер'],
        'Фейм': ['Высокий фейм', 'Фейм', 'Известный', 'Популярный'],
        'Средний': ['Активный', 'Участник', 'Контрибьютор'],
        'Малый': ['Новичок', 'Участник', 'Наблюдатель'],
        'Кодеры': ['Сеньор Разработчик', 'Мидл', 'Джун', 'Хакер'],
        'Дизайнеры': ['Главный Дизайнер', 'Дизайнер', 'Иллюстратор'],
        'Эдиторы': ['Видео-эдитор', 'Монтажёр', 'Режиссёр']
    };
    
    const names = [
        'Alex', 'Max', 'John', 'Mike', 'David', 'Chris', 'Tom', 'Steve',
        'Anna', 'Maria', 'Kate', 'Julia', 'Lisa', 'Emma', 'Sophia',
        'CryptoPro', 'HackMaster', 'CodeNinja', 'DesignGod', 'EditKing',
        'CyberWolf', 'DigitalGhost', 'ByteLord', 'PixelWizard', 'TechGuru'
    ];
    
    const descriptions = [
        'Активный участник сообщества. Занимается развитием проектов.',
        'Эксперт в своей области. Помогает новичкам.',
        'Создает качественный контент для сообщества.',
        'Технический специалист с глубокими знаниями.',
        'Творческая личность с уникальным подходом.',
        'Организатор мероприятий и активностей.',
        'Ментор для начинающих участников.',
        'Специалист по безопасности и анонимности.'
    ];
    
    // Очищаем массив и оставляем первые 5 примеров
    while(members.length > 5) {
        members.pop();
    }
    
    // Генерируем 495 дополнительных участников
    for(let i = 6; i <= 500; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const roleList = roles[category];
        const role = roleList[Math.floor(Math.random() * roleList.length)];
        const name = names[Math.floor(Math.random() * names.length)] + i;
        
        members.push({
            id: i,
            nickname: name,
            username: "@" + name.toLowerCase(),
            category: category,
            role: role,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            avatar: `https://raw.githubusercontent.com/yourusername/avatars/main/avatar${((i-1) % 50) + 1}.png`,
            verified: Math.random() > 0.7,
            pinned: Math.random() > 0.9,
            project: "#",
            telegram: name.toLowerCase(),
            joinDate: new Date(2020 + Math.floor(Math.random() * 4), 
                              Math.floor(Math.random() * 12), 
                              Math.floor(Math.random() * 28) + 1)
                        .toISOString().split('T')[0],
            activity: ['Высокая', 'Средняя', 'Низкая'][Math.floor(Math.random() * 3)],
            posts: Math.floor(Math.random() * 500),
            followers: Math.floor(Math.random() * 50000),
            details: 'Дополнительная информация об участнике.',
            skills: ['Навык1', 'Навык2', 'Навык3'],
            socials: {
                telegram: "@" + name.toLowerCase()
            }
        });
    }
    
    // Перезагружаем участников
    loadMembers();
}

// Инициализация навигации
function initNavigation() {
    // Открытие/закрытие бокового меню
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.add('active');
        });
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    }
    
    // Переключение секций
    const navTabs = document.querySelectorAll('.nav-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    
    function switchSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
        
        navTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.section === sectionId) {
                tab.classList.add('active');
            }
        });
        
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            }
        });
    }
    
    navTabs.forEach(tab => {
        if (tab.dataset.section) {
            tab.addEventListener('click', () => {
                switchSection(tab.dataset.section);
            });
        }
    });
    
    menuItems.forEach(item => {
        if (item.dataset.section) {
            item.addEventListener('click', () => {
                switchSection(item.dataset.section);
                sideMenu.classList.remove('active');
            });
        }
    });
    
    // Специальные кнопки
    const faqBtn = document.getElementById('faq-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const menuSettings = document.getElementById('menu-settings');
    const animatedBgBtn = document.getElementById('animated-bg-btn');
    const menuAnimatedBg = document.getElementById('menu-animated-bg');
    
    if (faqBtn) {
        faqBtn.addEventListener('click', () => {
            switchSection('faq-section');
        });
    }
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            openModal('settings-modal');
        });
    }
    
    if (menuSettings) {
        menuSettings.addEventListener('click', () => {
            openModal('settings-modal');
            sideMenu.classList.remove('active');
        });
    }
    
    if (animatedBgBtn) {
        animatedBgBtn.addEventListener('click', () => {
            openModal('animated-bg-modal');
        });
    }
    
    if (menuAnimatedBg) {
        menuAnimatedBg.addEventListener('click', () => {
            openModal('animated-bg-modal');
            sideMenu.classList.remove('active');
        });
    }
}

// Инициализация участников
function initMembers() {
    loadMembers();
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterMembers(category);
        });
    });
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            searchMembers(searchTerm);
        });
    }
}

// Загрузка участников
function loadMembers() {
    const container = document.getElementById('members-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const sortedMembers = [...members].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        if (a.category === 'Медийки' && b.category !== 'Медийки') return -1;
        if (a.category !== 'Медийки' && b.category === 'Медийки') return 1;
        return 0;
    });
    
    sortedMembers.forEach(member => {
        const card = createMemberCard(member);
        container.appendChild(card);
    });
    
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.dataset.id;
            showProfile(memberId);
        });
    });
}

// Создание карточки участника
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.dataset.id = member.id;
    card.dataset.category = member.category;
    
    if (member.pinned) card.classList.add('pinned');
    if (member.verified) card.classList.add('verified');
    
    const hasAvatar = member.avatar && member.avatar.includes('avatar');
    const avatarUrl = hasAvatar ? member.avatar : `https://via.placeholder.com/70/2a2a2a/888?text=${member.nickname.charAt(0)}`;
    
    card.innerHTML = `
        <div class="member-avatar">
            <img src="${avatarUrl}" alt="${member.nickname}" onerror="this.src='https://via.placeholder.com/70/2a2a2a/888?text=Error'">
        </div>
        
        <div class="member-info">
            <h3>${member.nickname}</h3>
            <div class="member-role">${member.role}</div>
            <p class="member-description">${member.description.substring(0, 100)}${member.description.length > 100 ? '...' : ''}</p>
        </div>
    `;
    
    return card;
}

// Фильтрация участников
function filterMembers(category) {
    const cards = document.querySelectorAll('.member-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Поиск участников
function searchMembers(term) {
    const cards = document.querySelectorAll('.member-card');
    const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
    
    cards.forEach(card => {
        const nickname = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.member-description').textContent.toLowerCase();
        
        const matchesSearch = nickname.includes(term) || description.includes(term);
        const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
        
        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// ПОЛНЫЙ ПРОФИЛЬ С ВСЕЙ ИНФОРМАЦИЕЙ
function showProfile(memberId) {
    const member = members.find(m => m.id == memberId);
    if (!member) return;
    
    const container = document.getElementById('profile-content');
    const hasAvatar = member.avatar && member.avatar.includes('avatar');
    const avatarUrl = hasAvatar ? member.avatar : `https://via.placeholder.com/120/2a2a2a/888?text=${member.nickname.charAt(0)}`;
    
    // Форматирование даты
    const joinDate = new Date(member.joinDate);
    const formattedDate = joinDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Генерация бейджей навыков
    const skillsHtml = member.skills ? member.skills.map(skill => 
        `<span class="badge category">${skill}</span>`
    ).join('') : '';
    
    // Генерация социальных ссылок
    const socialsHtml = member.socials ? Object.entries(member.socials).map(([platform, value]) => {
        let icon = 'fas fa-link';
        let url = '#';
        
        switch(platform) {
            case 'telegram':
                icon = 'fab fa-telegram';
                url = `https://t.me/${value.replace('@', '')}`;
                break;
            case 'github':
                icon = 'fab fa-github';
                url = `https://github.com/${value}`;
                break;
            case 'twitter':
                icon = 'fab fa-twitter';
                url = `https://twitter.com/${value}`;
                break;
            case 'vk':
                icon = 'fab fa-vk';
                url = `https://vk.com/${value}`;
                break;
            case 'youtube':
                icon = 'fab fa-youtube';
                url = `https://youtube.com/${value}`;
                break;
            case 'instagram':
                icon = 'fab fa-instagram';
                url = `https://instagram.com/${value}`;
                break;
            case 'behance':
                icon = 'fab fa-behance';
                url = `https://behance.net/${value}`;
                break;
        }
        
        return `<a href="${url}" class="action-btn telegram" target="_blank">
                    <i class="${icon}"></i> ${platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>`;
    }).join('') : '';
    
    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <img src="${avatarUrl}" alt="${member.nickname}" onerror="this.src='https://via.placeholder.com/120/2a2a2a/888?text=Error'">
            </div>
            
            <h1 class="profile-title">${member.nickname}</h1>
            <p class="profile-username">${member.username}</p>
            
            <div class="profile-badges">
                ${member.verified ? '<span class="badge verified">✓ Верифицирован</span>' : ''}
                ${member.pinned ? '<span class="badge pinned">📌 Закреплён</span>' : ''}
                <span class="badge category">${member.category}</span>
                ${skillsHtml}
            </div>
            
            <div class="profile-actions">
                <a href="https://t.me/${member.telegram}" class="action-btn telegram" target="_blank">
                    <i class="fab fa-telegram"></i> Написать в ЛС
                </a>
                ${member.project !== '#' ? `<a href="${member.project}" class="action-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Проект
                </a>` : ''}
                <button class="action-btn" onclick="copyProfileLink('${member.nickname}')">
                    <i class="fas fa-share"></i> Поделиться
                </button>
                ${socialsHtml}
            </div>
        </div>
        
        <div class="profile-content">
            <div class="profile-description">
                <h3>Описание</h3>
                <p>${member.description}</p>
                ${member.details ? `<p><strong>Детали:</strong> ${member.details}</p>` : ''}
                
                <h3 style="margin-top: 30px;">Навыки и специализация</h3>
                <p>${member.skills ? member.skills.join(' • ') : 'Не указано'}</p>
                
                ${member.socials ? `
                <h3 style="margin-top: 30px;">Социальные сети</h3>
                <div class="profile-actions">
                    ${Object.entries(member.socials).map(([platform, value]) => {
                        let icon = 'fas fa-link';
                        let url = '#';
                        
                        switch(platform) {
                            case 'telegram':
                                icon = 'fab fa-telegram';
                                url = `https://t.me/${value.replace('@', '')}`;
                                break;
                            case 'github':
                                icon = 'fab fa-github';
                                url = `https://github.com/${value}`;
                                break;
                            case 'twitter':
                                icon = 'fab fa-twitter';
                                url = `https://twitter.com/${value}`;
                                break;
                            case 'vk':
                                icon = 'fab fa-vk';
                                url = `https://vk.com/${value}`;
                                break;
                            case 'youtube':
                                icon = 'fab fa-youtube';
                                url = `https://youtube.com/${value}`;
                                break;
                        }
                        
                        return `<a href="${url}" class="action-btn telegram" target="_blank">
                                    <i class="${icon}"></i> ${platform}
                                </a>`;
                    }).join('')}
                </div>` : ''}
            </div>
            
            <div class="profile-stats">
                <h3>Статистика</h3>
                <div class="stat-item">
                    <span class="stat-label">Категория:</span>
                    <span class="stat-value">${member.category}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Роль:</span>
                    <span class="stat-value">${member.role}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Дата вступления:</span>
                    <span class="stat-value">${formattedDate}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Активность:</span>
                    <span class="stat-value">${member.activity}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Публикации:</span>
                    <span class="stat-value">${member.posts}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Подписчики:</span>
                    <span class="stat-value">${member.followers.toLocaleString()}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Статус:</span>
                    <span class="stat-value">${member.verified ? 'Верифицирован ✓' : 'Не верифицирован'}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">ID:</span>
                    <span class="stat-value">${member.id}</span>
                </div>
            </div>
        </div>
    `;
    
    switchSection('profile-details');
}

// Инициализация снега
function initSnow() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    createSnowflakes();
    
    const snowToggle = document.getElementById('snow-effect');
    if (snowToggle) {
        snowToggle.addEventListener('change', function() {
            if (this.checked) {
                snowContainer.style.display = 'block';
                createSnowflakes();
            } else {
                snowContainer.style.display = 'none';
                snowContainer.innerHTML = '';
            }
        });
    }
}

// Создание снежинок
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    snowContainer.innerHTML = '';
    
    for (let i = 0; i < 60; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        
        snowContainer.appendChild(snowflake);
    }
}

// Инициализация настроек
function initSettings() {
    const settingsTabs = document.querySelectorAll('.settings-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab + '-tab';
            
            settingsTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.dataset.theme;
            
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            applyTheme(theme);
        });
    });
    
    const bgUpload = document.getElementById('bg-upload');
    const bgPreview = document.getElementById('bg-preview');
    
    if (bgUpload) {
        bgUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    bgPreview.innerHTML = `<img src="${e.target.result}" alt="Фон">`;
                    bgPreview.style.display = 'block';
                    
                    localStorage.setItem('fame_background', e.target.result);
                    document.body.style.backgroundImage = `url(${e.target.result})`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    const neonFlowEffect = document.getElementById('neon-flow-effect');
    if (neonFlowEffect) {
        neonFlowEffect.addEventListener('change', function() {
            if (this.checked) {
                initDynamicNeon();
            } else {
                removeNeonFlow();
            }
        });
    }
}

// Инициализация контролов неона
function initNeonControls() {
    const neonColor = document.getElementById('neon-color');
    const neonIntensity = document.getElementById('neon-intensity');
    const neonSpeed = document.getElementById('neon-speed');
    const applyNeonBtn = document.getElementById('apply-neon');
    const intensityValue = document.getElementById('intensity-value');
    const speedValue = document.getElementById('speed-value');
    const colorPreview = document.getElementById('neon-color-preview');
    
    // Обновление предпросмотра цвета
    if (neonColor && colorPreview) {
        neonColor.addEventListener('input', function() {
            colorPreview.style.backgroundColor = this.value;
        });
        colorPreview.style.backgroundColor = neonColor.value;
    }
    
    // Обновление значения интенсивности
    if (neonIntensity && intensityValue) {
        neonIntensity.addEventListener('input', function() {
            intensityValue.textContent = this.value + '%';
        });
        intensityValue.textContent = neonIntensity.value + '%';
    }
    
    // Обновление значения скорости
    if (neonSpeed && speedValue) {
        const speedLabels = {
            1: 'Очень медленно',
            2: 'Медленно',
            3: 'Немного медленно',
            4: 'Ниже средней',
            5: 'Средняя',
            6: 'Выше средней',
            7: 'Быстро',
            8: 'Очень быстро',
            9: 'Супер быстро',
            10: 'Максимальная'
        };
        
        neonSpeed.addEventListener('input', function() {
            speedValue.textContent = speedLabels[this.value] || 'Средняя';
        });
        speedValue.textContent = speedLabels[neonSpeed.value] || 'Средняя';
    }
    
    // Применение настроек неона
    if (applyNeonBtn) {
        applyNeonBtn.addEventListener('click', function() {
            const color = neonColor.value;
            const intensity = parseInt(neonIntensity.value) / 100;
            const speed = parseInt(neonSpeed.value);
            
            applyNeonSettings(color, intensity, speed);
        });
    }
}

// Применение настроек неона
function applyNeonSettings(color, intensity, speed) {
    currentNeonColor = color;
    currentNeonIntensity = intensity;
    currentNeonSpeed = speed;
    
    localStorage.setItem('fame_neon_color', color);
    localStorage.setItem('fame_neon_intensity', intensity);
    localStorage.setItem('fame_neon_speed', speed);
    
    initDynamicNeon();
}

// Динамический неон
function initDynamicNeon() {
    // Удаляем старые стили
    const oldStyle = document.getElementById('dynamic-neon-style');
    if (oldStyle) oldStyle.remove();
    
    // Преобразуем hex в rgba
    const hex = currentNeonColor;
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    
    // Рассчитываем длительность анимации на основе скорости
    const duration = (11 - currentNeonSpeed) + 's';
    
    // Создаем новые стили
    const style = document.createElement('style');
    style.id = 'dynamic-neon-style';
    
    style.textContent = `
        @keyframes neonFlow {
            0%, 100% { 
                box-shadow: 0 0 ${10 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.8 * currentNeonIntensity}),
                          0 0 ${20 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.6 * currentNeonIntensity}),
                          0 0 ${30 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.4 * currentNeonIntensity}),
                          inset 0 0 ${10 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.5 * currentNeonIntensity}); 
            }
            50% { 
                box-shadow: 0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.9 * currentNeonIntensity}),
                          0 0 ${25 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.7 * currentNeonIntensity}),
                          0 0 ${35 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.5 * currentNeonIntensity}),
                          inset 0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.6 * currentNeonIntensity}); 
            }
        }
        
        @keyframes textNeonFlow {
            0%, 100% { 
                text-shadow: 0 0 ${5 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.8 * currentNeonIntensity}),
                           0 0 ${10 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.6 * currentNeonIntensity}); 
            }
            50% { 
                text-shadow: 0 0 ${8 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.9 * currentNeonIntensity}),
                           0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.7 * currentNeonIntensity}); 
            }
        }
        
        .neon-flow {
            animation: neonFlow ${duration} ease-in-out infinite !important;
        }
        
        .text-neon-flow {
            animation: textNeonFlow ${duration} ease-in-out infinite !important;
        }
    `;
    
    document.head.appendChild(style);
    
    // Применяем неон ко всем элементам
    const neonFlowEffect = document.getElementById('neon-flow-effect');
    if (neonFlowEffect && neonFlowEffect.checked) {
        applyNeonToElements();
    }
}

// Применение неона к элементам
function applyNeonToElements() {
    document.querySelectorAll('.member-card').forEach(card => {
        card.classList.add('neon-flow');
    });
    
    document.querySelectorAll('.modal-content').forEach(modal => {
        modal.classList.add('neon-flow');
    });
    
    document.querySelectorAll('.upload-btn').forEach(btn => {
        btn.classList.add('neon-flow');
    });
    
    const profileHeader = document.querySelector('.profile-header');
    if (profileHeader) {
        profileHeader.classList.add('neon-flow');
    }
}

// Удаление эффекта переливания
function removeNeonFlow() {
    document.querySelectorAll('.neon-flow').forEach(el => {
        el.classList.remove('neon-flow');
    });
    document.querySelectorAll('.text-neon-flow').forEach(el => {
        el.classList.remove('text-neon-flow');
    });
}

// Инициализация анимированного фона
function initAnimatedBg() {
    const bgOptions = document.querySelectorAll('.animated-bg-option');
    const bgSpeed = document.getElementById('bg-speed');
    const bgOpacity = document.getElementById('bg-opacity');
    const applyBgBtn = document.getElementById('apply-animated-bg');
    
    // Выбор фона
    bgOptions.forEach(option => {
        option.addEventListener('click', function() {
            bgOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            currentAnimatedBg = this.dataset.bg;
        });
    });
    
    // Настройка скорости
    if (bgSpeed) {
        bgSpeed.addEventListener('input', function() {
            currentBgSpeed = parseInt(this.value);
        });
    }
    
    // Настройка прозрачности
    if (bgOpacity) {
        bgOpacity.addEventListener('input', function() {
            currentBgOpacity = parseInt(this.value) / 100;
        });
    }
    
    // Применение фона
    if (applyBgBtn) {
        applyBgBtn.addEventListener('click', applyAnimatedBg);
    }
}

// Применение анимированного фона
function applyAnimatedBg() {
    const bgElement = document.getElementById('animated-bg');
    
    // Удаляем все классы фонов
    const bgClasses = ['particles-bg', 'waves-bg', 'pulse-bg', 'hooks-bg', 
                      'circuit-bg', 'grid-bg', 'dots-bg', 'lines-bg'];
    bgClasses.forEach(cls => bgElement.classList.remove(cls));
    
    // Добавляем выбранный фон
    bgElement.classList.add(`${currentAnimatedBg}-bg`);
    
    // Настраиваем скорость анимации
    const speed = currentBgSpeed / 10;
    bgElement.style.animationDuration = `${20 / speed}s`;
    
    // Настраиваем прозрачность
    bgElement.style.opacity = currentBgOpacity;
    
    // Сохраняем настройки
    localStorage.setItem('fame_animated_bg', currentAnimatedBg);
    localStorage.setItem('fame_bg_speed', currentBgSpeed);
    localStorage.setItem('fame_bg_opacity', currentBgOpacity);
}

// Инициализация модальных окон
function initModals() {
    const settingsBtns = document.querySelectorAll('#settings-btn, #menu-settings');
    
    settingsBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                openModal('settings-modal');
            });
        }
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
}

// Открытие модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Закрытие модального окна
function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Загрузка сохраненных настроек
function loadSavedSettings() {
    // Тема
    const savedTheme = localStorage.getItem('fame_theme');
    if (savedTheme) {
        const themeOption = document.querySelector(`.theme-option[data-theme="${savedTheme}"]`);
        if (themeOption) {
            themeOption.click();
        }
    }
    
    // Фон
    const savedBg = localStorage.getItem('fame_background');
    if (savedBg) {
        document.body.style.backgroundImage = `url(${savedBg})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundPosition = 'center';
    }
    
    // Настройки неона
    const savedNeonColor = localStorage.getItem('fame_neon_color') || '#808080';
    const savedNeonIntensity = parseFloat(localStorage.getItem('fame_neon_intensity')) || 0.5;
    const savedNeonSpeed = parseInt(localStorage.getItem('fame_neon_speed')) || 5;
    
    const neonColor = document.getElementById('neon-color');
    const neonIntensity = document.getElementById('neon-intensity');
    const neonSpeed = document.getElementById('neon-speed');
    
    if (neonColor) neonColor.value = savedNeonColor;
    if (neonIntensity) neonIntensity.value = savedNeonIntensity * 100;
    if (neonSpeed) neonSpeed.value = savedNeonSpeed;
    
    applyNeonSettings(savedNeonColor, savedNeonIntensity, savedNeonSpeed);
    
    // Анимированный фон
    const savedAnimatedBg = localStorage.getItem('fame_animated_bg') || 'hooks';
    const savedBgSpeed = parseInt(localStorage.getItem('fame_bg_speed')) || 10;
    const savedBgOpacity = parseFloat(localStorage.getItem('fame_bg_opacity')) || 0.5;
    
    currentAnimatedBg = savedAnimatedBg;
    currentBgSpeed = savedBgSpeed;
    currentBgOpacity = savedBgOpacity;
    
    const bgOption = document.querySelector(`.animated-bg-option[data-bg="${savedAnimatedBg}"]`);
    if (bgOption) {
        bgOption.classList.add('active');
    }
    
    const bgSpeed = document.getElementById('bg-speed');
    const bgOpacity = document.getElementById('bg-opacity');
    
    if (bgSpeed) bgSpeed.value = savedBgSpeed;
    if (bgOpacity) bgOpacity.value = savedBgOpacity * 100;
    
    applyAnimatedBg();
    
    // Эффект переливания
    const savedNeonFlow = localStorage.getItem('fame_neon_flow');
    const neonFlowCheckbox = document.getElementById('neon-flow-effect');
    if (neonFlowCheckbox) {
        if (savedNeonFlow === 'disabled') {
            neonFlowCheckbox.checked = false;
            removeNeonFlow();
        } else {
            neonFlowCheckbox.checked = true;
        }
    }
    
    // Снег
    const savedSnow = localStorage.getItem('fame_snow');
    const snowCheckbox = document.getElementById('snow-effect');
    if (snowCheckbox) {
        if (savedSnow === 'disabled') {
            snowCheckbox.checked = false;
            document.querySelector('.snow-container').style.display = 'none';
        } else {
            snowCheckbox.checked = true;
        }
    }
}

// Применение темы
function applyTheme(theme) {
    currentTheme = theme;
    
    const themeClasses = ['dark-theme', 'black-theme', 'red-theme', 'red-black-theme', 
                         'red-gray-theme', 'purple-theme', 'blue-theme', 'green-theme', 
                         'orange-theme', 'pink-theme'];
    
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(theme + '-theme');
    
    localStorage.setItem('fame_theme', theme);
}

// Глобальные функции
window.copyProfileLink = function(username) {
    const link = `https://t.me/+UO-WJgp_j65iYjA6?text=Смотри%20профиль%20${encodeURIComponent(username)}`;
    navigator.clipboard.writeText(link).then(() => {
        alert('Ссылка на профиль скопирована в буфер обмена!');
    });
};

// Сохранение настроек при изменении
document.getElementById('snow-effect')?.addEventListener('change', function() {
    localStorage.setItem('fame_snow', this.checked ? 'enabled' : 'disabled');
});

document.getElementById('neon-flow-effect')?.addEventListener('change', function() {
    localStorage.setItem('fame_neon_flow', this.checked ? 'enabled' : 'disabled');
    if (this.checked) {
        initDynamicNeon();
    } else {
        removeNeonFlow();
    }
});

// Функция переключения секций
function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }
    
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.section === sectionId) {
            tab.classList.add('active');
        }
    });
}