import moment from 'moment';
import 'moment/locale/es';
moment().locale('es');

export default {
  minToHours: (value) => {
    let h = moment
      .utc(moment.duration(value, 'minutes').asMilliseconds())
      .format('HH:mm');

    const hours = `${h} ${value >= 60 ? 'mins' : 'min'}`;

    return hours;
  },
};
