document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const propertyType = document.getElementById('property-type').value;
    const area = document.getElementById('area').value;
    const location = document.getElementById('location').value;

    // Fake recommendations based on input
    const recommendations = [
        `${propertyType} in ${location} with ${area}m² at $1000/month`,
        `${propertyType} in ${location} with ${area}m² at $1500/month`,
        `${propertyType} in ${location} with ${area}m² at $2000/month`
    ];

    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = ''; // Clear previous results

    recommendations.forEach(rec => {
        const listItem = document.createElement('li');
        listItem.textContent = rec;
        recommendationList.appendChild(listItem);
    });

    document.getElementById('recommendations').classList.remove('hidden');
});
