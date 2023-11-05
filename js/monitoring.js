var salesByGroupData = {
    labels: ["BTS", "Blackpink", "TWICE", "EXO", "Red Velvet"],
    datasets: [{
        data: [4500, 2800, 3500, 2200, 1800],
        backgroundColor: ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF00FF"],
    }]
};

var categoryDistributionData = {
    labels: ["Albums", "Clothes", "Cards", "Light Sticks"],
    datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ["#FF5733", "#33FF57", "#5733FF", "#FFD700"],
    }]
};

var ageGroupsData = {
    labels: ["Under 18", "18-24", "25-34", "35-44", "45+"],
    datasets: [{
        data: [15, 35, 40, 25, 10],
        backgroundColor: ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF00FF"],
    }]
};

// Chart initialization
var ctx1 = document.getElementById('salesByGroupChart').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: salesByGroupData
});

var ctx2 = document.getElementById('categoryDistributionChart').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: categoryDistributionData
});

var ctx3 = document.getElementById('ageGroupsChart').getContext('2d');
new Chart(ctx3, {
    type: 'bar',
    data: ageGroupsData
});