// Данные участников с аватарками
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
        details: "Известен своей активной гражданской позицией и критическим взглядом на происходящее в сообществе."
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
        project: "#"
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
        project: "#"
    },
    // Добавьте остальные 497 участников аналогичным образом
    // {
    //     id: 4,
    //     nickname: "Участник4",
    //     username: "@username4",
    //     category: "Фейм",
    //     role: "Высокий фейм",
    //     description: "Описание...",
    //     avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar4.png",
    //     verified: false,
    //     pinned: false,
    //     project: "#"
    // },
    // ... и так далее до avatar500.png
];

// Текущий цвет темы
let currentTheme = 'dark';

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMembers();
    initSnow();
    initSettings();
    initModals();
    loadSavedSettings();
    
    // Применяем эффект переливания по умолчанию
    applyNeonFlow();
});

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
    
    // Переключение секций через навигацию
    const navTabs = document.querySelectorAll('.nav-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    
    function switchSection(sectionId) {
        // Скрыть все секции
        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        // Показать выбранную секцию
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
        
        // Обновить активные вкладки
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
    
    // Обработчики для навигационных вкладок
    navTabs.forEach(tab => {
        if (tab.dataset.section) {
            tab.addEventListener('click', () => {
                switchSection(tab.dataset.section);
            });
        }
    });
    
    // Обработчики для меню
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
}

// Инициализация участников
function initMembers() {
    loadMembers();
    
    // Фильтрация по категориям
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterMembers(category);
        });
    });
    
    // Поиск
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
    
    // Сортировка: сначала закрепленные, потом по уровню фейма
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
    
    // Добавляем обработчики кликов
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.dataset.id;
            showProfile(memberId);
        });
    });
    
    // Применяем эффект переливания
    applyNeonFlowToCards();
}

// Создание карточки участника
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.dataset.id = member.id;
    card.dataset.category = member.category;
    
    if (member.pinned) card.classList.add('pinned');
    if (member.verified) card.classList.add('verified');
    
    // Проверяем наличие аватарки
    const hasAvatar = member.avatar && member.avatar.includes('avatar');
    const avatarUrl = hasAvatar ? member.avatar : 'https://via.placeholder.com/70/2a2a2a/888?text=' + member.nickname.charAt(0);
    
    card.innerHTML = `
        <div class="member-avatar">
            <img src="${avatarUrl}" alt="${member.nickname}" onerror="this.src='https://via.placeholder.com/70/2a2a2a/888?text=Error'">
        </div>
        
        <div class="member-info">
            <h3>${member.nickname}</h3>
            <div class="member-role">${member.role}</div>
            <p class="member-description">${member.description}</p>
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

// Показать профиль участника
function showProfile(memberId) {
    const member = members.find(m => m.id == memberId);
    if (!member) return;
    
    const container = document.getElementById('profile-content');
    const hasAvatar = member.avatar && member.avatar.includes('avatar');
    const avatarUrl = hasAvatar ? member.avatar : 'https://via.placeholder.com/120/2a2a2a/888?text=' + member.nickname.charAt(0);
    
    // Копируем ссылку на фейм лист
    function copyProfileLink() {
        const link = `https://t.me/+UO-WJgp_j65iYjA6`;
        navigator.clipboard.writeText(link).then(() => {
            alert('Ссылка на канал скопирована в буфер обмена!');
        });
    }
    
    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <img src="${avatarUrl}" alt="${member.nickname}" onerror="this.src='https://via.placeholder.com/120/2a2a2a/888?text=Error'">
            </div>
            
            <h1 class="profile-title">${member.nickname}</h1>
            
            <div class="profile-badges">
                ${member.verified ? '<span class="badge verified">✓ Верифицирован</span>' : ''}
                ${member.pinned ? '<span class="badge pinned">📌 Закреплён</span>' : ''}
            </div>
            
            <p>${member.username}</p>
            
            <div class="profile-actions">
                <a href="${member.project}" class="action-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Открыть профиль
                </a>
                <a href="${member.username.replace('@', 'https://t.me/')}" class="action-btn" target="_blank">
                    <i class="fas fa-paper-plane"></i> Написать в ЛС
                </a>
                <button class="action-btn" onclick="copyProfileLink()">
                    <i class="fas fa-share"></i> Поделиться
                </button>
            </div>
        </div>
        
        <div class="profile-description">
            <h3>Описание</h3>
            <p>${member.description}</p>
            ${member.details ? `<p>${member.details}</p>` : ''}
        </div>
    `;
    
    // Применяем эффект переливания к профилю
    applyNeonFlowToProfile();
    
    // Переключаемся на секцию профиля
    switchSection('profile-details');
}

// Инициализация снега
function initSnow() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    createSnowflakes();
    
    // Включаем/выключаем снег
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
    // Переключение вкладок настроек
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
    
    // Выбор темы
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.dataset.theme;
            
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            applyTheme(theme);
        });
    });
    
    // Загрузка фона
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
                    
                    // Сохраняем фон
                    localStorage.setItem('fame_background', e.target.result);
                    
                    // Применяем фон к body
                    document.body.style.backgroundImage = `url(${e.target.result})`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Эффект переливания
    const neonFlowEffect = document.getElementById('neon-flow-effect');
    if (neonFlowEffect) {
        neonFlowEffect.addEventListener('change', function() {
            if (this.checked) {
                applyNeonFlow();
            } else {
                removeNeonFlow();
            }
        });
    }
}

// Применение темы
function applyTheme(theme) {
    currentTheme = theme;
    
    // Удаляем все классы тем
    const themeClasses = ['dark-theme', 'black-theme', 'red-theme', 'red-black-theme', 
                         'red-gray-theme', 'purple-theme', 'blue-theme', 'green-theme', 
                         'orange-theme', 'pink-theme'];
    
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(theme + '-theme');
    
    // Сохраняем тему в localStorage
    localStorage.setItem('fame_theme', theme);
}

// Применение эффекта переливания
function applyNeonFlow() {
    // Карточки
    document.querySelectorAll('.member-card').forEach(card => {
        card.classList.add('neon-flow');
    });
    
    // Профиль
    const profileHeader = document.querySelector('.profile-header');
    if (profileHeader) {
        profileHeader.classList.add('neon-flow');
    }
    
    // Модальные окна
    document.querySelectorAll('.modal-content').forEach(modal => {
        modal.classList.add('neon-flow');
    });
    
    // Кнопки
    document.querySelectorAll('.upload-btn').forEach(btn => {
        btn.classList.add('neon-flow');
    });
    
    // Сохраняем настройку
    localStorage.setItem('fame_neon_flow', 'enabled');
}

// Удаление эффекта переливания
function removeNeonFlow() {
    // Карточки
    document.querySelectorAll('.member-card').forEach(card => {
        card.classList.remove('neon-flow');
    });
    
    // Профиль
    const profileHeader = document.querySelector('.profile-header');
    if (profileHeader) {
        profileHeader.classList.remove('neon-flow');
    }
    
    // Модальные окна
    document.querySelectorAll('.modal-content').forEach(modal => {
        modal.classList.remove('neon-flow');
    });
    
    // Кнопки
    document.querySelectorAll('.upload-btn').forEach(btn => {
        btn.classList.remove('neon-flow');
    });
    
    // Сохраняем настройку
    localStorage.setItem('fame_neon_flow', 'disabled');
}

// Применение эффекта переливания к карточкам
function applyNeonFlowToCards() {
    const cards = document.querySelectorAll('.member-card');
    cards.forEach(card => {
        if (localStorage.getItem('fame_neon_flow') !== 'disabled') {
            card.classList.add('neon-flow');
        }
    });
}

// Применение эффекта переливания к профилю
function applyNeonFlowToProfile() {
    const profileHeader = document.querySelector('.profile-header');
    if (profileHeader && localStorage.getItem('fame_neon_flow') !== 'disabled') {
        profileHeader.classList.add('neon-flow');
    }
}

// Инициализация модальных окон
function initModals() {
    // Открытие модальных окон
    const settingsBtns = document.querySelectorAll('#settings-btn, #menu-settings');
    
    settingsBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                openModal('settings-modal');
            });
        }
    });
    
    // Закрытие модальных окон
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });
    
    // Закрытие по клику вне окна
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

// Глобальные функции
window.copyProfileLink = function() {
    const link = `https://t.me/+UO-WJgp_j65iYjA6`;
    navigator.clipboard.writeText(link).then(() => {
        alert('Ссылка на канал скопирована в буфер обмена!');
    });
};

// Сохранение настроек при изменении
document.getElementById('snow-effect')?.addEventListener('change', function() {
    localStorage.setItem('fame_snow', this.checked ? 'enabled' : 'disabled');
});

document.getElementById('neon-flow-effect')?.addEventListener('change', function() {
    localStorage.setItem('fame_neon_flow', this.checked ? 'enabled' : 'disabled');
});