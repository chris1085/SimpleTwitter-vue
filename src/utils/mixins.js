import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const dateFilter = {
  filters: {
    customizeDate(datetime) {
      moment.locale('zh-tw')
      return datetime ? moment(datetime).format('A hh:mm・YYYY年MM月DD日') : '-'
    },
    monthDayDate(datetime) {
      return datetime ? moment(datetime).format('M月D日') : ''
    },
    hourMinDate(datetime) {
      moment.locale('zh-tw')
      return datetime ? moment(datetime).format('A hh:mm') : ''
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/400x400/DFDFDF?text=No+Image'
    },
    emptyCoverImage(src) {
      return src || 'https://via.placeholder.com/1200x400/DFDFDF?text=No+Image'
    }
  }
}
