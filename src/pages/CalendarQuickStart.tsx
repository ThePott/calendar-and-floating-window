import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format } from "date-fns/format";
import { parse, startOfWeek, getDay } from "date-fns";
import { ko, enUS } from "date-fns/locale";

const locales = {
  ko: ko,
  // "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarQuickStartPage = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={undefined}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default CalendarQuickStartPage;
