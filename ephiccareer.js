const jobs = [
    {
        id: 1,
        title: "Accountant",
        department: "Accounting",
        image: "img/accountant.jfif",
        description: "Join our accounting team to manage financial operations.",
        requirements: [
            "Female",
            "Bachelor's Degree in Accounting must be a Certified Public Accountant (CPA)",
            "Extensive experience in finance, accounting and audit",
            "Must have good written and oral communication skills",
            "Good attention to detail, thoroughness and objectivity",
        ],
        benefits: [
            "Competitive salary",
            "Flexible working hours",
            "Health insurance",
            "Professional development opportunities"
        ]
    },
    {
        id: 2,
        title: "Accounting Staff",
        department: "Accounting",
        image: "img/accountingstaff.jpeg",
        description: "Support our accounting team in maintaining financial records.",
        requirements: [
            "Female",
            "Graduate of BS Accountancy or any related course",
            "With a high level of accuracy and attention to detail",
            "Hardworking, precise and can work with less supervision",
            "With or without experience",
        ],
        benefits: [
            "Competitive salary",
            "Stock options",
        ]
    },
    {
        id: 3,
        title: "Pharmacist",
        department: "Pharmacy",
        image: "img/pharmacist.jpg",
        description: "Manage and dispense medications in our pharmacy department.",
        requirements: [
            "Female",
            "Candidate must be a licensed Pharmacist",
            "Can work with less supervision, self-motivated and keen to detail",
            "Hardworking, honest and responsible",
            "With or without experience"
        ],
        benefits: [
            "Competitive salary",
            "Health and wellness programs",
            "Flexible work schedule",
            "Creative work environment"
        ]
    }
];

function createJobCard(job) {
    return `
        <div class="job-card">
            <img src="${job.image}" alt="${job.title}">
            <div class="job-card-content">
                <h3>${job.title}</h3>
                <p>${job.department}</p>
            </div>
            <button onclick="showJobDetails(${job.id})">View Details</button>
        </div>
    `;
}

function showJobDetails(jobId) {
    const job = jobs.find(j => j.id === jobId);
    const detailsHtml = `
        <h2>${job.title}</h2>
        <p>${job.description}</p>
        <h3>Requirements</h3>
        <ul>
            ${job.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
        <h3>Benefits</h3>
        <ul>
            ${job.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
        <h3>Recruitment Process</h3>
        <ol>
            <li>Application Review</li>
            <li>Phone Screening</li>
            <li>Technical Interview</li>
            <li>On-site Interview</li>
            <li>Reference Check</li>
            <li>Offer</li>
        </ol>
    `;
    document.getElementById('jobDetails').innerHTML = detailsHtml;
}

document.getElementById('jobList').innerHTML = jobs.map(createJobCard).join('');

// Scroll-to-top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollUpBtn").style.display = "block";
    } else {
        document.getElementById("scrollUpBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}