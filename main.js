// Terminal typing effect
function initializeTerminalTyping() {
    const terminalCursor = document.querySelector('.cursor');
    if (!terminalCursor) return;
    
    const commandSpan = document.querySelector('.terminal-line:last-child .command');
    const commands = [
        'solve_challenge --id A7-B3',
        'start_lab --network_forensics',
        'connect --peer_group',
        'help --modules'
    ];
    
    let currentCommand = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeTerminalCommand() {
        const currentText = commands[currentCommand];
        
        if (!isDeleting && charIndex <= currentText.length) {
            commandSpan.textContent = currentText.substring(0, charIndex);
            charIndex++;
            typingSpeed = 100;
        } else if (isDeleting && charIndex >= 0) {
            commandSpan.textContent = currentText.substring(0, charIndex);
            charIndex--;
            typingSpeed = 50;
        }
        
        if (!isDeleting && charIndex > currentText.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentCommand = (currentCommand + 1) % commands.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeTerminalCommand, typingSpeed);
    }
    
    setTimeout(typeTerminalCommand, 2000);
}

// Navigation handler
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.hasAttribute('href')) return; // Allow normal link behavior
            e.preventDefault();
            alert('Навигация: ' + this.textContent + ' (функционал в разработке)');
        });
    });
}

// CTA Button handler
function initializeCTA() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Добро пожаловать в CyberShield Academy! Регистрация откроется в ближайшее время.');
        });
    }
}

// Team cards animation
function initializeTeamCardAnimation() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Update year in footer
function updateFooterYear() {
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Pixel Cat Functionality
function initializePixelCat() {
    const catContainer = document.getElementById('catContainer');
    if (!catContainer) return; // Pixel cat section not on this page
    
    const moveCatBtn = document.getElementById('moveCatBtn');
    const addCatBtn = document.getElementById('addCatBtn');
    const removeCatBtn = document.getElementById('removeCatBtn');
    const clearTrailBtn = document.getElementById('clearTrailBtn');
    const resetBtn = document.getElementById('resetBtn');
    const catPos = document.getElementById('catPos');
    const distanceSpan = document.getElementById('distance');
    const catCountSpan = document.getElementById('catCount');
    
    let cats = [];
    let trails = [];
    let isMoving = false;
    let moveInterval;
    let totalDistance = 0;
    
    createCat(150, 100);
    
    function createCat(x, y) {
        const cat = document.createElement('div');
        cat.className = 'pixel-cat';
        cat.textContent = '🐈';
        cat.style.left = `${x}px`;
        cat.style.top = `${y}px`;
        
        const colors = ['#39FF14', '#00F0FF', '#9D4EDD', '#FFA500', '#FF6B6B', '#4ECDC4'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        cat.style.filter = `drop-shadow(0 0 8px ${randomColor})`;
        
        cat.style.transform = 'scale(0)';
        cat.style.transition = 'transform 0.3s ease';
        
        catContainer.appendChild(cat);
        
        setTimeout(() => {
            cat.style.transform = 'scale(1)';
        }, 10);
        
        cat.addEventListener('click', function(e) {
            e.stopPropagation();
            cat.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cat.style.transform = 'scale(1)';
            }, 300);
            createExplosion(x, y, randomColor);
        });
        
        const catObj = {
            element: cat,
            x: x,
            y: y,
            dx: Math.random() * 4 - 2,
            dy: Math.random() * 4 - 2,
            color: randomColor,
            id: Date.now() + Math.random()
        };
        
        cats.push(catObj);
        updateCatCount();
        return catObj;
    }
    
    function removeCat() {
        if (cats.length === 0) return;
        
        const lastCat = cats.pop();
        lastCat.element.style.transform = 'scale(0)';
        lastCat.element.style.opacity = '0';
        
        createExplosion(lastCat.x, lastCat.y, lastCat.color, true);
        
        setTimeout(() => {
            lastCat.element.remove();
            updateCatCount();
            
            if (cats.length > 0) {
                const firstCat = cats[0];
                catPos.textContent = `x: ${Math.round(firstCat.x)}, y: ${Math.round(firstCat.y)}`;
            } else {
                catPos.textContent = 'x: -, y: -';
            }
        }, 300);
    }
    
    function createExplosion(x, y, color, isRemoval = false) {
        for (let i = 0; i < (isRemoval ? 15 : 10); i++) {
            const particle = document.createElement('div');
            particle.className = 'pixel-cat-trail';
            particle.textContent = isRemoval ? '💥' : '🐾';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.color = color;
            particle.style.fontSize = `${Math.random() * (isRemoval ? 2 : 1.5) + 1}rem`;
            particle.style.zIndex = '20';
            
            catContainer.appendChild(particle);
            trails.push(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * (isRemoval ? 5 : 3) + 1;
            
            let particleX = x;
            let particleY = y;
            
            const particleInterval = setInterval(() => {
                particleX += Math.cos(angle) * speed;
                particleY += Math.sin(angle) * speed;
                particle.style.left = `${particleX}px`;
                particle.style.top = `${particleY}px`;
                
                const currentOpacity = parseFloat(particle.style.opacity || 1);
                particle.style.opacity = (currentOpacity - 0.05).toString();
                
                if (currentOpacity <= 0.1) {
                    clearInterval(particleInterval);
                    particle.remove();
                    const index = trails.indexOf(particle);
                    if (index > -1) trails.splice(index, 1);
                }
            }, 30);
        }
    }
    
    function updateCatCount() {
        catCountSpan.textContent = cats.length;
        if (cats.length === 0 && isMoving) {
            toggleMovement();
        }
    }
    
    function toggleMovement() {
        isMoving = !isMoving;
        
        if (isMoving) {
            moveCatBtn.textContent = 'Остановить патруль';
            moveCatBtn.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
            moveInterval = setInterval(moveCats, 50);
            moveCatBtn.style.animation = 'pulse 0.5s infinite alternate';
        } else {
            moveCatBtn.textContent = 'Запустить патруль';
            moveCatBtn.style.backgroundColor = '';
            clearInterval(moveInterval);
            moveCatBtn.style.animation = 'none';
        }
    }
    
    function moveCats() {
        if (!isMoving || cats.length === 0) return;
        
        cats.forEach((cat, index) => {
            const oldX = cat.x;
            const oldY = cat.y;
            
            cat.x += cat.dx;
            cat.y += cat.dy;
            
            totalDistance += Math.sqrt(Math.pow(cat.x - oldX, 2) + Math.pow(cat.y - oldY, 2));
            distanceSpan.textContent = Math.round(totalDistance);
            
            const containerWidth = catContainer.clientWidth;
            const containerHeight = catContainer.clientHeight;
            
            if (cat.x <= 0 || cat.x >= containerWidth - 50) {
                cat.dx = -cat.dx;
                cat.x = cat.x <= 0 ? 1 : containerWidth - 51;
                createExplosion(cat.x, cat.y, cat.color);
            }
            
            if (cat.y <= 0 || cat.y >= containerHeight - 50) {
                cat.dy = -cat.dy;
                cat.y = cat.y <= 0 ? 1 : containerHeight - 51;
                createExplosion(cat.x, cat.y, cat.color);
            }
            
            cat.element.style.left = `${cat.x}px`;
            cat.element.style.top = `${cat.y}px`;
            
            if (index === 0) {
                catPos.textContent = `x: ${Math.round(cat.x)}, y: ${Math.round(cat.y)}`;
            }
            
            if (Math.random() < 0.02) {
                cat.dx = Math.random() * 4 - 2;
                cat.dy = Math.random() * 4 - 2;
            }
            
            if (Math.random() < 0.3) {
                createTrail(cat.x, cat.y, cat.color);
            }
        });
    }
    
    function createTrail(x, y, color) {
        const trail = document.createElement('div');
        trail.className = 'pixel-cat-trail';
        trail.textContent = '·';
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.color = color;
        trail.style.opacity = '0.5';
        trail.style.fontSize = '1.2rem';
        
        catContainer.appendChild(trail);
        trails.push(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            setTimeout(() => {
                trail.remove();
                const index = trails.indexOf(trail);
                if (index > -1) trails.splice(index, 1);
            }, 500);
        }, 1000);
    }
    
    function clearAllTrails() {
        trails.forEach(trail => {
            trail.style.opacity = '0';
            trail.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                trail.remove();
            }, 500);
        });
        
        trails = [];
    }
    
    function resetAll() {
        if (isMoving) {
            toggleMovement();
        }
        
        while (cats.length > 0) {
            const cat = cats.pop();
            cat.element.style.transform = 'scale(0)';
            cat.element.style.opacity = '0';
            
            setTimeout(() => {
                cat.element.remove();
            }, 300);
        }
        
        clearAllTrails();
        
        totalDistance = 0;
        distanceSpan.textContent = '0';
        catPos.textContent = 'x: -, y: -';
        
        setTimeout(() => {
            createCat(150, 100);
        }, 500);
    }
    
    // Event handlers
    moveCatBtn.addEventListener('click', function() {
        if (cats.length === 0) {
            alert('Нет котов для патрулирования! Добавьте кота сначала.');
            return;
        }
        toggleMovement();
    });
    
    addCatBtn.addEventListener('click', function() {
        const containerWidth = catContainer.clientWidth;
        const containerHeight = catContainer.clientHeight;
        const x = Math.random() * (containerWidth - 50);
        const y = Math.random() * (containerHeight - 50);
        
        createCat(x, y);
        
        addCatBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            addCatBtn.style.transform = 'scale(1)';
        }, 300);
    });
    
    removeCatBtn.addEventListener('click', function() {
        if (cats.length === 0) {
            alert('Нет котов для удаления!');
            return;
        }
        
        removeCat();
        
        removeCatBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            removeCatBtn.style.transform = 'scale(1)';
        }, 300);
    });
    
    clearTrailBtn.addEventListener('click', function() {
        clearAllTrails();
        
        clearTrailBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            clearTrailBtn.style.transform = 'scale(1)';
        }, 300);
    });
    
    resetBtn.addEventListener('click', function() {
        resetAll();
        
        resetBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            resetBtn.style.transform = 'scale(1)';
        }, 300);
    });
    
    catContainer.addEventListener('click', function(e) {
        if (e.target === catContainer) {
            const rect = catContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - 25;
            const y = e.clientY - rect.top - 25;
            
            createCat(x, y);
            
            const circle = document.createElement('div');
            circle.style.position = 'absolute';
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.borderRadius = '50%';
            circle.style.border = '2px solid var(--accent-cyan)';
            circle.style.animation = 'pulse 0.5s forwards';
            circle.style.pointerEvents = 'none';
            
            catContainer.appendChild(circle);
            
            setTimeout(() => {
                circle.remove();
            }, 500);
        }
    });
}

// Password visibility toggle and validation
function initializePasswordToggle() {
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const generatePasswordBtn = document.getElementById('generatePassword');
    const emailInput = document.getElementById('email');
    const registrationForm = document.getElementById('registrationForm');
    
    // Toggle password visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function(e) {
            e.preventDefault();
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            
            const icon = togglePassword.querySelector('i');
            if (type === 'password') {
                icon.className = 'fas fa-eye';
            } else {
                icon.className = 'fas fa-eye-slash';
            }
        });
    }
    
    if (toggleConfirmPassword && confirmPasswordInput) {
        toggleConfirmPassword.addEventListener('click', function(e) {
            e.preventDefault();
            const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
            confirmPasswordInput.type = type;
            
            const icon = toggleConfirmPassword.querySelector('i');
            if (type === 'password') {
                icon.className = 'fas fa-eye';
            } else {
                icon.className = 'fas fa-eye-slash';
            }
        });
    }
    
    // Validate password requirements
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            
            // Check requirements
            const requirements = {
                'req-length': password.length >= 8,
                'req-uppercase': /[A-Z]/.test(password),
                'req-lowercase': /[a-z]/.test(password),
                'req-number': /[0-9]/.test(password),
                'req-special': /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
            };
            
            // Update UI
            Object.keys(requirements).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    if (requirements[key]) {
                        element.classList.add('met');
                        element.querySelector('i').className = 'fas fa-check-circle';
                    } else {
                        element.classList.remove('met');
                        element.querySelector('i').className = 'fas fa-circle';
                    }
                }
            });
            
            // Validate confirm password
            if (confirmPasswordInput && confirmPasswordInput.value && password !== confirmPasswordInput.value) {
                confirmPasswordInput.style.borderColor = 'var(--accent-red)';
            } else if (confirmPasswordInput && confirmPasswordInput.value) {
                confirmPasswordInput.style.borderColor = 'var(--accent-cyan)';
            }
        });
    }
    
    // Validate confirm password
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value !== passwordInput.value) {
                this.style.borderColor = 'var(--accent-red)';
            } else {
                this.style.borderColor = 'var(--accent-cyan)';
            }
        });
    }
    
    // Generate random password
    if (generatePasswordBtn && passwordInput) {
        generatePasswordBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const password = generateSecurePassword();
            passwordInput.value = password;
            passwordInput.type = 'text';
            
            // Toggle icon
            if (togglePassword) {
                togglePassword.querySelector('i').className = 'fas fa-eye-slash';
            }
            
            // Trigger input event to update requirements
            passwordInput.dispatchEvent(new Event('input'));
        });
    }
    
    // Email validation with @ requirement
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value;
            if (email && (!email.includes('@') || !email.includes('.'))) {
                this.style.borderColor = 'var(--accent-red)';
            } else if (email) {
                this.style.borderColor = 'var(--accent-cyan)';
            }
        });
        
        emailInput.addEventListener('input', function() {
            const email = this.value;
            if (email && (!email.includes('@') || !email.includes('.'))) {
                this.style.borderColor = 'var(--accent-red)';
            } else if (email) {
                this.style.borderColor = 'var(--accent-cyan)';
            } else {
                this.style.borderColor = 'var(--accent-cyan)';
            }
        });
    }
    
    // Handle form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isValid = validateForm();
            if (isValid) {
                const submitBtn = registrationForm.querySelector('.submit-btn');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> РЕГИСТРАЦИЯ...';
                
                // Simulate success
                setTimeout(() => {
                    const successMessage = document.getElementById('successMessage');
                    if (successMessage) {
                        successMessage.style.display = 'block';
                        submitBtn.style.display = 'none';
                    }
                    
                    // Redirect after 3 seconds
                    setTimeout(() => {
                        window.location.href = '../../index.html';
                    }, 3000);
                }, 2000);
            }
        });
    }
    
    // Generate secure password function
    function generateSecurePassword() {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let password = '';
        
        // Ensure at least one of each type
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += special[Math.floor(Math.random() * special.length)];
        
        // Fill rest randomly
        const allChars = uppercase + lowercase + numbers + special;
        for (let i = password.length; i < 12; i++) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        
        // Shuffle password
        return password.split('').sort(() => Math.random() - 0.5).join('');
    }
    
    // Validate entire form
    function validateForm() {
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const level = document.getElementById('level');
        const terms = document.getElementById('terms');
        
        let isValid = true;
        
        // Check username
        if (!username || username.value.length < 3) {
            isValid = false;
            if (username) username.style.borderColor = 'var(--accent-red)';
        }
        
        // Check email
        if (!email || !email.value.includes('@') || !email.value.includes('.')) {
            isValid = false;
            if (email) email.style.borderColor = 'var(--accent-red)';
        }
        
        // Check password
        if (!password || password.value.length < 8) {
            isValid = false;
            if (password) password.style.borderColor = 'var(--accent-red)';
        }
        
        // Check confirm password
        if (!confirmPassword || password.value !== confirmPassword.value) {
            isValid = false;
            if (confirmPassword) confirmPassword.style.borderColor = 'var(--accent-red)';
        }
        
        // Check level
        if (!level || !level.value) {
            isValid = false;
            if (level) level.style.borderColor = 'var(--accent-red)';
        }
        
        // Check terms
        if (!terms || !terms.checked) {
            isValid = false;
        }
        
        return isValid;
    }
}

// Initialize module card clicks
function initializeModuleCards() {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on the button itself
            if (e.target.closest('.module-btn')) return;
            
            const moduleBtn = this.querySelector('.module-btn');
            if (moduleBtn) {
                window.location.href = moduleBtn.getAttribute('href');
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCTA();
    initializeTeamCardAnimation();
    initializeTerminalTyping();
    updateFooterYear();
    initializePixelCat();
    initializePasswordToggle();
    initializeModuleCards();
});
