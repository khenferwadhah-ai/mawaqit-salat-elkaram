// ⏰ تحديث الساعة كل ثانية
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString('ar-EG', {
    hour12: false
  });
}
setInterval(updateClock, 1000);
updateClock();

// 🕌 تحميل مواقيت الصلاة من API
const city = "El Keram"; // يمكنك تغييره لمدينتك
const country = "Algeria";
const method = 3; // طريقة الحساب الرسمية

async function fetchPrayerTimes() {
  try {
    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`);
    const data = await response.json();
    const timings = data.data.timings;

    document.getElementById("fajr").innerText = timings.Fajr;
    document.getElementById("sunrise").innerText = timings.Sunrise;
    document.getElementById("dhuhr").innerText = timings.Dhuhr;
    document.getElementById("asr").innerText = timings.Asr;
    document.getElementById("maghrib").innerText = timings.Maghrib;
    document.getElementById("isha").innerText = timings.Isha;
  } catch (error) {
    console.error("حدث خطأ عند تحميل مواقيت الصلاة:", error);
  }
}

// تحميل المواقيت مباشرة وعند كل يوم جديد
fetchPrayerTimes();
setInterval(fetchPrayerTimes, 1000 * 60 * 60); // تحديث كل ساعة
