// Crop Data
const cropData = {
    tomato: {
        name: 'Tomato',
        scientific: 'Solanum lycopersicum',
        image: 'https://images.unsplash.com/photo-1592924357615-bc4f2222b8a2?w=600&h=400&fit=crop',
        water: {
            daily: '4-6 mm/day',
            total: '400-600 mm/season',
            moisture: '60-70%'
        },
        plantation: {
            season: 'Summer & Winter',
            months: 'February-March and July-August',
            temp: '20-25°C (ideal)',
            soil: 'Well-drained loamy soil with pH 6.0-6.8'
        },
        fertilizer: [
            { type: 'Nitrogen (N)', quantity: '80-100 kg/ha', time: 'At planting & 30 days after' },
            { type: 'Phosphorus (P)', quantity: '60-80 kg/ha', time: 'At planting' },
            { type: 'Potassium (K)', quantity: '60-80 kg/ha', time: 'Split in 2-3 doses' },
            { type: 'Organic Manure', quantity: '20-25 tons/ha', time: 'Before planting' }
        ],
        harvesting: [
            { title: 'Monitor Ripeness', desc: 'Tomatoes are ready to harvest when they turn red and are slightly soft to touch.' },
            { title: 'Timing', desc: 'Harvest in the early morning to maintain freshness and quality.' },
            { title: 'Picking Method', desc: 'Gently twist and pull fruits from the vine. Use pruning shears for large clusters.' },
            { title: 'Storage', desc: 'Store at room temperature away from direct sunlight for 3-5 days, or refrigerate for longer shelf life.' },
            { title: 'Frequency', desc: 'Harvest every 2-3 days during peak season for continuous yield.' }
        ],
        selling: [
            { tip: '🏪 Direct to Retailers - Contact local grocery stores and vegetable vendors for bulk orders' },
            { tip: '🚜 Farm Gate Sales - Sell directly at your farm to reduce transportation costs and middleman margins' },
            { tip: '🌾 Farmers Market - Set up stalls at local farmers markets for premium prices' },
            { tip: '📦 Cooperative Marketing - Join farmer cooperatives for collective bargaining and better prices' },
            { tip: '🏥 Institutional Buyers - Supply to hotels, restaurants, and food processing units' },
            { tip: '🌐 E-commerce Platforms - List on online platforms for direct consumer sales' },
            { tip: '💰 Best Selling Time - Sell during off-season when prices are premium' }
        ]
    },
    sugarcane: {
        name: 'Sugarcane',
        scientific: 'Saccharum officinarum',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
        water: {
            daily: '4-6 mm/day',
            total: '1200-1500 mm/season',
            moisture: '65-75%'
        },
        plantation: {
            season: 'Winter & Spring',
            months: 'September-November and February-March',
            temp: '20-30°C (ideal)',
            soil: 'Well-drained, fertile soil with pH 6.0-8.5'
        },
        fertilizer: [
            { type: 'Nitrogen (N)', quantity: '150-200 kg/ha', time: 'In splits at 3, 6, 9 months' },
            { type: 'Phosphorus (P)', quantity: '80-100 kg/ha', time: 'At planting' },
            { type: 'Potassium (K)', quantity: '80-100 kg/ha', time: 'At planting' },
            { type: 'FYM/Compost', quantity: '25-30 tons/ha', time: 'Before planting' }
        ],
        harvesting: [
            { title: 'Check Maturity', desc: 'Sugarcane matures in 10-12 months. Check maturity through brix meter reading (>20% is ideal).' },
            { title: 'Optimal Harvest Time', desc: 'Harvest before monsoon for better juice content. Early morning harvest is preferred.' },
            { title: 'Cutting Technique', desc: 'Cut canes 2-3 inches above ground level to allow for ratoon crop. Use sharp machetes.' },
            { title: 'Bundle & Transport', desc: 'Bind harvested canes and transport to mill within 24 hours for maximum juice extraction.' },
            { title: 'Yield Expected', desc: 'Average yield: 50-60 tons/hectare of fresh cane.' }
        ],
        selling: [
            { tip: '🏭 Sugar Mills - Sell directly to sugar factories for better prices and assured market' },
            { tip: '🚚 Bulk Traders - Contract with sugar traders for guaranteed quantity purchase' },
            { tip: '💼 Cooperative Societies - Join sugarcane cooperatives for collective marketing' },
            { tip: '📊 Forward Contracts - Sign contracts before planting to fix prices' },
            { tip: '🌾 Jaggery Production - Process into jaggery for premium pricing' },
            { tip: '🥤 Juice Industry - Supply to beverage and juice industries' },
            { tip: '📈 Timing - Prices are highest during off-season (April-June)' }
        ]
    },
    paddy: {
        name: 'Paddy (Rice)',
        scientific: 'Oryza sativa',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=600&h=400&fit=crop',
        water: {
            daily: '5-10 mm/day',
            total: '1000-1500 mm/season',
            moisture: '80-90% (submerged)'
        },
        plantation: {
            season: 'Monsoon & Winter',
            months: 'June-August and September-October',
            temp: '20-30°C (ideal)',
            soil: 'Clay or clay loam soil with pH 6.0-7.0, flood-prone areas'
        },
        fertilizer: [
            { type: 'Nitrogen (N)', quantity: '60-80 kg/ha', time: 'In splits at 3 stages' },
            { type: 'Phosphorus (P)', quantity: '40-60 kg/ha', time: 'At planting' },
            { type: 'Potassium (K)', quantity: '40-60 kg/ha', time: 'At planting' },
            { type: 'FYM', quantity: '5-10 tons/ha', time: 'Before planting' }
        ],
        harvesting: [
            { title: 'Maturity Check', desc: 'Paddy is mature in 120-150 days when panicles become golden yellow and bend downward.' },
            { title: 'Moisture Content', desc: 'Wait until moisture content drops to 20-25% for optimal harvesting.' },
            { title: 'Harvesting Method', desc: 'Use combine harvesters or manual sickle method. Harvest in early morning for less grain loss.' },
            { title: 'Drying', desc: 'Spread harvested crop for sun-drying for 3-5 days until moisture is 12-14%.' },
            { title: 'Storage', desc: 'Store in cool, dry place with proper ventilation to prevent mold and pest infestation.' }
        ],
        selling: [
            { tip: '🏪 Procurement Centers - Sell to government procurement centers for assured prices (MSP)' },
            { tip: '🌾 Paddy Mills - Direct supply to rice mills for milling and processing' },
            { tip: '🏬 Wholesalers - Bulk sales to rice wholesalers and distributors' },
            { tip: '🌐 Online Platforms - Sell processed rice through online agricultural marketplaces' },
            { tip: '🥘 Direct Consumer - Brand and market branded rice directly to consumers' },
            { tip: '💼 Export Market - Prepare for export as basmati or premium varieties' },
            { tip: '⏰ Best Time - Sell after harvest season (November-December) when supply is high and prices stabilize' }
        ]
    },
    chilli: {
        name: 'Chilli',
        scientific: 'Capsicum annum',
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd33cef?w=600&h=400&fit=crop',
        water: {
            daily: '3-5 mm/day',
            total: '400-500 mm/season',
            moisture: '50-60%'
        },
        plantation: {
            season: 'Summer & Monsoon',
            months: 'January-March and June-August',
            temp: '20-30°C (ideal)',
            soil: 'Well-drained loamy soil with pH 6.0-7.0'
        },
        fertilizer: [
            { type: 'Nitrogen (N)', quantity: '100-125 kg/ha', time: 'In splits at 30, 60, 90 days' },
            { type: 'Phosphorus (P)', quantity: '80-100 kg/ha', time: 'At planting' },
            { type: 'Potassium (K)', quantity: '100-125 kg/ha', time: 'In splits during season' },
            { type: 'Organic Matter', quantity: '20-25 tons/ha', time: 'Before planting' }
        ],
        harvesting: [
            { title: 'Ripeness Stage', desc: 'Chillies can be harvested green (60-70 days) or red (90-120 days) depending on market demand.' },
            { title: 'Picking Method', desc: 'Carefully pluck fruits from the plant to avoid damage. Use gloves to prevent skin irritation.' },
            { title: 'Multiple Harvesting', desc: 'Continue harvesting for 4-6 months as the plant bears fruits throughout the season.' },
            { title: 'Post-Harvest', desc: 'Dry red chillies in sun for 7-10 days to reduce moisture for storage and processing.' },
            { title: 'Yield', desc: 'Expected yield: 15-20 tons/hectare of fresh chillies or 3-4 tons of dried chillies.' }
        ],
        selling: [
            { tip: '🌶️ Green Chillies - Sell fresh green chillies in local markets at premium prices' },
            { tip: '🔴 Red/Dried Chillies - Dry and sell to spice traders and export markets' },
            { tip: '🏭 Processing Units - Supply to chilli powder and spice manufacturers' },
            { tip: '🚛 Traders - Wholesale to spice traders for distribution' },
            { tip: '🌐 Export Market - Premium export opportunities to international spice markets' },
            { tip: '🏪 Retail Markets - Direct supply to vegetable vendors and supermarkets' },
            { tip: '💰 Price Peak - Prices peak during off-season (March-April) for fresh chillies' }
        ]
    }
};

// Login Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const farmerType = document.getElementById('farmerType').value;
    
    if(username && farmerType) {
        localStorage.setItem('username', username);
        localStorage.setItem('farmerType', farmerType);
        document.getElementById('userDisplay').textContent = `Welcome, ${username}`;
        
        showPage('dashboardPage');
        this.reset();
    }
});

// View Crop Details
function viewCropDetails(cropType) {
    const crop = cropData[cropType];
    
    if(crop) {
        // Update crop info
        document.getElementById('cropImage').src = crop.image;
        document.getElementById('cropName').textContent = crop.name;
        document.getElementById('cropScientific').textContent = crop.scientific;
        
        // Update water info
        document.getElementById('waterDaily').textContent = crop.water.daily;
        document.getElementById('waterTotal').textContent = crop.water.total;
        document.getElementById('soilMoisture').textContent = crop.water.moisture;
        
        // Update plantation info
        document.getElementById('season').textContent = crop.plantation.season;
        document.getElementById('plantMonths').textContent = crop.plantation.months;
        document.getElementById('tempRange').textContent = crop.plantation.temp;
        document.getElementById('soilType').textContent = crop.plantation.soil;
        
        // Update fertilizer table
        const fertilizerBody = document.getElementById('fertilizerBody');
        fertilizerBody.innerHTML = crop.fertilizer.map(f => `
            <tr>
                <td>${f.type}</td>
                <td>${f.quantity}</td>
                <td>${f.time}</td>
            </tr>
        `).join('');
        
        // Update harvesting steps
        const harvestSteps = document.getElementById('harvestSteps');
        harvestSteps.innerHTML = crop.harvesting.map((step, index) => `
            <div class="step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.desc}</p>
                </div>
            </div>
        `).join('');
        
        // Update selling tips
        const sellingTips = document.getElementById('sellingTips');
        sellingTips.innerHTML = crop.selling.map(tip => `
            <div class="tip">${tip.tip}</div>
        `).join('');
        
        showPage('cropDetailsPage');
    }
}

// Back to Dashboard
function backToDashboard() {
    showPage('dashboardPage');
}

// Logout
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('farmerType');
    showPage('loginPage');
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

// Toggle Signup (placeholder for signup functionality)
function toggleSignup() {
    alert('Sign Up functionality can be added with backend integration');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if(username) {
        document.getElementById('userDisplay').textContent = `Welcome, ${username}`;
        showPage('dashboardPage');
    } else {
        showPage('loginPage');
    }
});