document.getElementById('weatherForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const location = document.getElementById('locationInput').value.trim();
  const apiKey = '9a34e4dcd8ed4c3e9bd162207250307';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Location not found');
    const data = await res.json();

    // Display weather
    document.getElementById('cityName').textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById('temperature').textContent = `🌡️ Temperature: ${data.current.temp_c}°C`;
    document.getElementById('condition').textContent = `🌥️ Condition: ${data.current.condition.text}`;
    document.getElementById('weatherIcon').src = data.current.condition.icon;
    document.getElementById('weatherResult').classList.remove('hidden');
  } catch (error) {
    alert('Error: ' + error.message);
  }
});
