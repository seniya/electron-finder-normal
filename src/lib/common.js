import ConstIconType from '@/lib/ConstIconType'
import moment from 'moment'

function getFileIcon (itemData) {
  let vIco = ConstIconType[itemData.mimeType]
  if (itemData.isDir) vIco = 'mdi-folder'
  if (vIco === undefined) {
    vIco = 'mdi-file'
    // console.log(' getFileIcon undefined : ', itemData.mimeType)
  }
  return vIco
}

function getFileSizeIEC (a, b, c, d, e) {
  b = Math
  c = b.log
  d = 1024
  e = c(a) / c(d) | 0
  return (a / b.pow(d, e)).toFixed(1) + ' ' + (e ? 'kMGTPEZY'[--e] + 'B' : 'Bytes')
}

function getFileType (mimeType) {
  return mimeType.split('.').pop()
}

function getFileTime (time) {
  const returnValue = moment(time).format('YYYY-MM-DD HH:mm')
  return returnValue
}

function generateUUID () {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

export { getFileIcon, getFileSizeIEC, getFileType, getFileTime, generateUUID }
