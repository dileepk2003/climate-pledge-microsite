document.addEventListener('DOMContentLoaded', () => {
    const mockPledges = [
        { id: 1, name: 'Alex Green', date: '2025-07-15', state: 'California', profile: 'Student', rating: '⭐⭐' },
        { id: 2, name: 'Brenda Blue', date: '2025-07-16', state: 'New York', profile: 'Working Professional', rating: '⭐⭐⭐' }
    ];

    const achievedPledgesEl = document.getElementById('achieved-pledges');
    const studentCountEl = document.getElementById('student-count');
    const proCountEl = document.getElementById('pro-count');
    const pledgeTableBody = document.querySelector('#pledge-table tbody');
    const form = document.getElementById('form');
    const certificateSection = document.getElementById('certificate');
    const certNameEl = document.getElementById('cert-name');
    const certRatingEl = document.getElementById('cert-rating');
    const downloadBtn = document.getElementById('download-btn');
    const shareBtn = document.getElementById('share-btn');

    function animateCountUp(el, endValue) {
        let startValue = 0;
        const duration = 1500;
        if (endValue === 0) { el.textContent = 0; return; }
        const stepTime = Math.abs(Math.floor(duration / endValue));
        const timer = setInterval(() => {
            startValue += 1;
            el.textContent = startValue;
            if (startValue >= endValue) {
                el.textContent = endValue;
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    function updateKPIs() {
        const totalPledges = mockPledges.length;
        const studentPledges = mockPledges.filter(p => p.profile === 'Student').length;
        const proPledges = mockPledges.filter(p => p.profile === 'Working Professional').length;
        animateCountUp(achievedPledgesEl, totalPledges);
        animateCountUp(studentCountEl, studentPledges);
        animateCountUp(proCountEl, proPledges);
    }

    function populatePledgeWall() {
        pledgeTableBody.innerHTML = '';
        mockPledges.forEach(pledge => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${pledge.id}</td><td>${pledge.name}</td><td>${pledge.date}</td><td>${pledge.state}</td><td>${pledge.profile}</td><td>${pledge.rating}</td>`;
            pledgeTableBody.appendChild(row);
        });
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const checkedCommitments = document.querySelectorAll('input[name="commitment"]:checked').length;

        let hearts = '', stars = '';
        if (checkedCommitments >= 1 && checkedCommitments <= 3) {
            hearts = '♥';
            stars = '⭐';
        } else if (checkedCommitments >= 4 && checkedCommitments <= 6) {
            hearts = '♥♥';
            stars = '⭐⭐';
        } else if (checkedCommitments >= 7) {
            hearts = '♥♥♥';
            stars = '⭐⭐⭐';
        }

        const name = document.getElementById('name').value;
        const state = document.getElementById('state').value;
        const profile = document.getElementById('profile').value;
        
        const newPledge = {
            id: mockPledges.length + 1, name,
            date: new Date().toISOString().split('T')[0],
            state, profile,
            rating: stars 
        };
        mockPledges.push(newPledge);
        
        updateKPIs();
        populatePledgeWall();
        
        certNameEl.textContent = name;
        certRatingEl.innerHTML = hearts;
        
        certificateSection.classList.remove('hidden');
        document.getElementById('pledge-form').classList.add('hidden');
        certificateSection.scrollIntoView({ behavior: 'smooth' });
    }

    downloadBtn.addEventListener('click', () => {
        const certificateContent = document.getElementById('certificate-content');
        html2canvas(certificateContent, { backgroundColor: "#f8f9fa" }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'climate-pledge-certificate.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: 'I Took the Climate Action Pledge!',
            text: 'I just made a commitment to protect our planet. Join me and take the pledge!',
            url: window.location.href
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert('Web Share is not supported on this browser. Try sharing from your mobile!');
            }
        } catch (err) {
            console.error("Couldn't share successfully", err);
        }
    });

    form.addEventListener('submit', handleFormSubmit);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if(entry.target.id === 'kpis') {
                    updateKPIs();
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    populatePledgeWall();
});