import moment from 'moment'
import {
  logger
} from '../../logger'
import * as d3 from 'd3'

let dateFormat = ''
let axisFormat = ''
let title = ''
let sections = []
let tasks = []
let currentSection = ''
let funs = []

export const clear = function () {
  sections = []
  tasks = []
  currentSection = ''
  funs = []
  title = ''
  taskCnt = 0
  lastTask = undefined
  lastTaskID = undefined
  rawTasks = []
}

export const setAxisFormat = function (txt) {
  axisFormat = txt
}

export const getAxisFormat = function () {
  return axisFormat
}

export const setDateFormat = function (txt) {
  dateFormat = txt
}

export const setTitle = function (txt) {
  title = txt
}

export const getTitle = function () {
  return title
}

export const addSection = function (txt) {
  currentSection = txt
  sections.push(txt)
}

export const getTasks = function () {
  let allItemsPricessed = compileTasks()
  const maxDepth = 10
  let iterationCount = 0
  while (!allItemsPricessed && (iterationCount < maxDepth)) {
    allItemsPricessed = compileTasks()
    iterationCount++
  }

  tasks = rawTasks

  return tasks
}

const getStartDate = function (prevTime, dateFormat, str) {
  str = str.trim()

  // Test for after
  const re = /^after\s+([\d\w-]+)/
  const afterStatement = re.exec(str.trim())

  if (afterStatement !== null) {
    const task = findTaskById(afterStatement[1])

    if (typeof task === 'undefined') {
      const dt = new Date()
      dt.setHours(0, 0, 0, 0)
      return dt
    }
    return task.endTime
  }

  // Check for actual date set
  if (moment(str, dateFormat.trim(), true).isValid()) {
    return moment(str, dateFormat.trim(), true).toDate()
  } else {
    logger.debug('Invalid date:' + str)
    logger.debug('With date format:' + dateFormat.trim())
  }

  // Default date - now
  return new Date()
}

const getEndDate = function (prevTime, dateFormat, str) {
  str = str.trim()

  // Check for actual date
  if (moment(str, dateFormat.trim(), true).isValid()) {
    return moment(str, dateFormat.trim()).toDate()
  }

  const d = moment(prevTime)
  // Check for length
  const re = /^([\d]+)([wdhms])/
  const durationStatement = re.exec(str.trim())

  if (durationStatement !== null) {
    switch (durationStatement[2]) {
      case 's':
        d.add(durationStatement[1], 'seconds')
        break
      case 'm':
        d.add(durationStatement[1], 'minutes')
        break
      case 'h':
        d.add(durationStatement[1], 'hours')
        break
      case 'd':
        d.add(durationStatement[1], 'days')
        break
      case 'w':
        d.add(durationStatement[1], 'weeks')
        break
    }
    return d.toDate()
  }
  // Default date - now
  return d.toDate()
}

let taskCnt = 0
const parseId = function (idStr) {
  if (typeof idStr === 'undefined') {
    taskCnt = taskCnt + 1
    return 'task' + taskCnt
  }
  return idStr
}
// id, startDate, endDate
// id, startDate, length
// id, after x, endDate
// id, after x, length
// startDate, endDate
// startDate, length
// after x, endDate
// after x, length
// endDate
// length

const compileData = function (prevTask, dataStr) {
  let ds

  if (dataStr.substr(0, 1) === ':') {
    ds = dataStr.substr(1, dataStr.length)
  } else {
    ds = dataStr
  }

  const data = ds.split(',')

  const task = {}

  // Get tags like active, done cand crit
  let matchFound = true
  while (matchFound) {
    matchFound = false
    if (data[0].match(/^\s*active\s*$/)) {
      task.active = true
      data.shift(1)
      matchFound = true
    }
    if (data[0].match(/^\s*done\s*$/)) {
      task.done = true
      data.shift(1)
      matchFound = true
    }
    if (data[0].match(/^\s*crit\s*$/)) {
      task.crit = true
      data.shift(1)
      matchFound = true
    }
  }
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].trim()
  }

  switch (data.length) {
    case 1:
      task.id = parseId()
      task.startTime = prevTask.endTime
      task.endTime = getEndDate(task.startTime, dateFormat, data[0])
      break
    case 2:
      task.id = parseId()
      task.startTime = getStartDate(undefined, dateFormat, data[0])
      task.endTime = getEndDate(task.startTime, dateFormat, data[1])
      break
    case 3:
      task.id = parseId(data[0])
      task.startTime = getStartDate(undefined, dateFormat, data[1])
      task.endTime = getEndDate(task.startTime, dateFormat, data[2])
      break
    default:
  }

  return task
}

const parseData = function (prevTaskId, dataStr) {
  let ds
  if (dataStr.substr(0, 1) === ':') {
    ds = dataStr.substr(1, dataStr.length)
  } else {
    ds = dataStr
  }

  const data = ds.split(',')

  const task = {}

  // Get tags like active, done cand crit
  let matchFound = true
  while (matchFound) {
    matchFound = false
    if (data[0].match(/^\s*active\s*$/)) {
      task.active = true
      data.shift(1)
      matchFound = true
    }
    if (data[0].match(/^\s*done\s*$/)) {
      task.done = true
      data.shift(1)
      matchFound = true
    }
    if (data[0].match(/^\s*crit\s*$/)) {
      task.crit = true
      data.shift(1)
      matchFound = true
    }
  }
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].trim()
  }

  switch (data.length) {
    case 1:
      task.id = parseId()
      task.startTime = {
        type: 'prevTaskEnd',
        id: prevTaskId
      }
      task.endTime = {
        data: data[0]
      }
      break
    case 2:
      task.id = parseId()
      task.startTime = {
        type: 'getStartDate',
        startData: data[0]
      }
      task.endTime = {
        data: data[1]
      }
      break
    case 3:
      task.id = parseId(data[0])
      task.startTime = {
        type: 'getStartDate',
        startData: data[1]
      }
      task.endTime = {
        data: data[2]
      }
      break
    default:
  }

  return task
}

let lastTask
let lastTaskID
let rawTasks = []
const taskDb = {}
export const addTask = function (descr, data) {
  const rawTask = {
    section: currentSection,
    type: currentSection,
    processed: false,
    raw: {
      data: data
    },
    task: descr,
    classes: []
  }
  const taskInfo = parseData(lastTaskID, data)
  rawTask.raw.startTime = taskInfo.startTime
  rawTask.raw.endTime = taskInfo.endTime
  rawTask.id = taskInfo.id
  rawTask.prevTaskId = lastTaskID
  rawTask.active = taskInfo.active
  rawTask.done = taskInfo.done
  rawTask.crit = taskInfo.crit

  const pos = rawTasks.push(rawTask)

  lastTaskID = rawTask.id
  // Store cross ref
  taskDb[rawTask.id] = pos - 1
}

export const findTaskById = function (id) {
  const pos = taskDb[id]
  return rawTasks[pos]
}

export const addTaskOrg = function (descr, data) {
  const newTask = {
    section: currentSection,
    type: currentSection,
    description: descr,
    task: descr,
    classes: []
  }
  const taskInfo = compileData(lastTask, data)
  newTask.startTime = taskInfo.startTime
  newTask.endTime = taskInfo.endTime
  newTask.id = taskInfo.id
  newTask.active = taskInfo.active
  newTask.done = taskInfo.done
  newTask.crit = taskInfo.crit
  lastTask = newTask
  tasks.push(newTask)
}

const compileTasks = function () {
  const compileTask = function (pos) {
    const task = rawTasks[pos]
    let startTime = ''
    switch (rawTasks[pos].raw.startTime.type) {
      case 'prevTaskEnd':
        const prevTask = findTaskById(task.prevTaskId)
        task.startTime = prevTask.endTime
        break
      case 'getStartDate':
        startTime = getStartDate(undefined, dateFormat, rawTasks[pos].raw.startTime.startData)
        if (startTime) {
          rawTasks[pos].startTime = startTime
        }
        break
    }

    if (rawTasks[pos].startTime) {
      rawTasks[pos].endTime = getEndDate(rawTasks[pos].startTime, dateFormat, rawTasks[pos].raw.endTime.data)
      if (rawTasks[pos].endTime) {
        rawTasks[pos].processed = true
      }
    }

    return rawTasks[pos].processed
  }

  let allProcessed = true
  for (let i = 0; i < rawTasks.length; i++) {
    compileTask(i)

    allProcessed = allProcessed && rawTasks[i].processed
  }
  return allProcessed
}

/**
 * Called by parser when a link is found. Adds the URL to the vertex data.
 * @param ids Comma separated list of ids
 * @param linkStr URL to create a link for
 */
export const setLink = function (ids, linkStr) {
  ids.split(',').forEach(function (id) {
    let rawTask = findTaskById(id)
    if (typeof rawTask !== 'undefined') {
      pushFun(id, () => { window.open(linkStr, '_self') })
    }
  })
  setClass(ids, 'clickable')
}

/**
 * Called by parser when a special node is found, e.g. a clickable element.
 * @param ids Comma separated list of ids
 * @param className Class to add
 */
export const setClass = function (ids, className) {
  ids.split(',').forEach(function (id) {
    let rawTask = findTaskById(id)
    if (typeof rawTask !== 'undefined') {
      rawTask.classes.push(className)
    }
  })
}

const setClickFun = function (id, functionName, functionArgs) {
  if (typeof functionName === 'undefined') {
    return
  }

  let argList = []
  if (typeof functionArgs === 'string') {
    /* Splits functionArgs by ',', ignoring all ',' in double quoted strings */
    argList = functionArgs.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
    for (let i = 0; i < argList.length; i++) {
      let item = argList[i].trim()
      /* Removes all double quotes at the start and end of an argument */
      /* This preserves all starting and ending whitespace inside */
      if (item.charAt(0) === '"' && item.charAt(item.length - 1) === '"') {
        item = item.substr(1, item.length - 2)
      }
      argList[i] = item
    }
  }

  let rawTask = findTaskById(id)
  if (typeof rawTask !== 'undefined') {
    pushFun(id, () => { window[functionName](...argList) })
  }
}

/**
 * The callbackFunction is executed in a click event bound to the task with the specified id or the task's assigned text
 * @param id The task's id
 * @param callbackFunction A function to be executed when clicked on the task or the task's text
 */
const pushFun = function (id, callbackFunction) {
  funs.push(function (element) {
    const elem = d3.select(element).select(`[id="${id}"]`)
    if (elem !== null) {
      elem.on('click', function () {
        callbackFunction()
      })
    }
  })
  funs.push(function (element) {
    const elem = d3.select(element).select(`[id="${id}-text"]`)
    if (elem !== null) {
      elem.on('click', function () {
        callbackFunction()
      })
    }
  })
}

/**
 * Called by parser when a click definition is found. Registers an event handler.
 * @param ids Comma separated list of ids
 * @param functionName Function to be called on click
 * @param functionArgs Function args the function should be called with
 */
export const setClickEvent = function (ids, functionName, functionArgs) {
  ids.split(',').forEach(function (id) {
    setClickFun(id, functionName, functionArgs)
  })
  setClass(ids, 'clickable')
}

/**
 * Binds all functions previously added to fun (specified through click) to the element
 * @param element
 */
export const bindFunctions = function (element) {
  funs.forEach(function (fun) {
    fun(element)
  })
}

export default {
  clear,
  setDateFormat,
  setAxisFormat,
  getAxisFormat,
  setTitle,
  getTitle,
  addSection,
  getTasks,
  addTask,
  findTaskById,
  addTaskOrg,
  setClickEvent,
  setLink,
  bindFunctions
}
