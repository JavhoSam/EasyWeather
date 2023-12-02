export default function GetWeekDay() {
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const day = new Date();
    let WeekNumberDay = day.getDay();

    document.getElementById('WeekDaySpan').textContent = days[WeekNumberDay];

  }

