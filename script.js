// Video Player Controls
document.addEventListener('DOMContentLoaded', function() {
    // Video player functionality
    const video = document.querySelector('video');
    const playPauseBtn = document.querySelector('.play-pause');
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const timeDisplay = document.querySelector('.time-display');
    const fullscreenBtn = document.querySelector('.fullscreen');
    
    if (video && playPauseBtn) {
        // Play/Pause functionality
        playPauseBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
        
        // Update progress bar
        video.addEventListener('timeupdate', function() {
            const percent = (video.currentTime / video.duration) * 100;
            progress.style.width = percent + '%';
            
            const currentMinutes = Math.floor(video.currentTime / 60);
            const currentSeconds = Math.floor(video.currentTime % 60);
            const durationMinutes = Math.floor(video.duration / 60);
            const durationSeconds = Math.floor(video.duration % 60);
            
            timeDisplay.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')} / ${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
        });
        
        // Seek functionality
        progressBar.addEventListener('click', function(e) {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            video.currentTime = percent * video.duration;
        });
        
        // Fullscreen functionality
        fullscreenBtn.addEventListener('click', function() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        });
    }
    
    // Rating System
    const stars = document.querySelectorAll('.stars i');
    const ratingText = document.querySelector('.rating-text');
    
    if (stars.length > 0) {
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                // Remove active class from all stars
                stars.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked star and all previous stars
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('active');
                }
                
                // Update rating text
                const rating = index + 1;
                const ratingTexts = ['', 'Rất kém', 'Kém', 'Trung bình', 'Tốt', 'Rất tốt'];
                ratingText.textContent = ratingTexts[rating];
                
                // Here you would typically send the rating to the server
                console.log('Rating submitted:', rating);
            });
            
            // Hover effect
            star.addEventListener('mouseenter', function() {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.style.color = '#ffc107';
                    } else {
                        s.style.color = '#ddd';
                    }
                });
            });
        });
        
        // Reset on mouse leave
        document.querySelector('.stars').addEventListener('mouseleave', function() {
            stars.forEach(star => {
                if (!star.classList.contains('active')) {
                    star.style.color = '#ddd';
                } else {
                    star.style.color = '#ffc107';
                }
            });
        });
    }
    
    // Outline Navigation
    const outlineItems = document.querySelectorAll('.outline-item');
    outlineItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            outlineItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Here you would typically load the corresponding lesson
            const lessonName = this.querySelector('.lesson-name')?.textContent;
            console.log('Loading lesson:', lessonName);
        });
    });
    
    // Comment Form
    const commentForm = document.querySelector('.comment-form textarea');
    const submitComment = document.querySelector('.submit-comment');
    
    if (submitComment && commentForm) {
        submitComment.addEventListener('click', function() {
            const comment = commentForm.value.trim();
            if (comment) {
                // Here you would typically send the comment to the server
                console.log('Comment submitted:', comment);
                
                // Clear the form
                commentForm.value = '';
                
                // Show success message (you could make this more sophisticated)
                alert('Bình luận đã được gửi!');
            }
        });
    }
    
    // Q&A Form
    const qaForm = document.querySelector('.qa-form textarea');
    const submitQuestion = document.querySelector('.submit-question');
    
    if (submitQuestion && qaForm) {
        submitQuestion.addEventListener('click', function() {
            const question = qaForm.value.trim();
            if (question) {
                // Here you would typically send the question to the server
                console.log('Question submitted:', question);
                
                // Clear the form
                qaForm.value = '';
                
                // Show success message
                alert('Câu hỏi đã được gửi!');
            }
        });
    }
    
    // Download Buttons
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const materialName = this.parentElement.querySelector('span').textContent;
            console.log('Downloading:', materialName);
            
            // Here you would typically initiate the download
            // For demo purposes, we'll just show an alert
            alert(`Đang tải về: ${materialName}`);
        });
    });
    
    // Enroll Button
    const enrollBtn = document.querySelector('.enroll-btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            console.log('Enrollment clicked');
            alert('Đang chuyển đến trang đăng ký...');
        });
    }
    
    // Continue Button
    const continueBtn = document.querySelector('.continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            console.log('Continue to next lesson');
            alert('Đang tải bài học tiếp theo...');
        });
    }
    
    // Search Functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    console.log('Searching for:', searchTerm);
                    // Here you would typically perform the search
                    alert(`Tìm kiếm: ${searchTerm}`);
                }
            }
        });
    }
    
    // Like/Reply Buttons
    const actionButtons = document.querySelectorAll('.comment-actions button');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.innerHTML.includes('thumbs-up')) {
                // Toggle like
                const currentCount = parseInt(this.textContent.match(/\d+/)?.[0] || 0);
                const newCount = this.classList.contains('liked') ? currentCount - 1 : currentCount + 1;
                this.innerHTML = `<i class="fas fa-thumbs-up"></i> ${newCount}`;
                this.classList.toggle('liked');
            } else if (this.innerHTML.includes('reply')) {
                // Handle reply
                console.log('Reply clicked');
                alert('Chức năng trả lời đang được phát triển...');
            }
        });
    });
    
    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Auto-hide video controls
    let videoControlsTimeout;
    const videoContainer = document.querySelector('.video-container');
    
    if (videoContainer && video) {
        videoContainer.addEventListener('mousemove', function() {
            const controls = videoContainer.querySelector('.video-controls');
            if (controls) {
                controls.style.opacity = '1';
                clearTimeout(videoControlsTimeout);
                videoControlsTimeout = setTimeout(() => {
                    if (!video.paused) {
                        controls.style.opacity = '0';
                    }
                }, 3000);
            }
        });
        
        video.addEventListener('play', function() {
            const controls = videoContainer.querySelector('.video-controls');
            if (controls) {
                videoControlsTimeout = setTimeout(() => {
                    controls.style.opacity = '0';
                }, 3000);
            }
        });
        
        video.addEventListener('pause', function() {
            const controls = videoContainer.querySelector('.video-controls');
            if (controls) {
                controls.style.opacity = '1';
            }
        });
    }
    
    // Progress Animation
    const progressCircle = document.querySelector('.progress-circle circle:last-child');
    if (progressCircle) {
        // Animate progress circle on page load
        setTimeout(() => {
            progressCircle.style.transition = 'stroke-dashoffset 1s ease-in-out';
        }, 100);
    }
    
    // Lazy loading for images (if needed)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Utility Functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Local Storage for user preferences
function saveUserPreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key, defaultValue = null) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
}

// Theme Toggle (if implemented)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    
    body.classList.toggle('dark-theme');
    saveUserPreference('theme', currentTheme);
}

// Load user preferences on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = getUserPreference('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to a logging service
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log('Page load time:', loadTime.toFixed(2), 'ms');
});
