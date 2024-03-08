import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090')

export async function getEvents() {
  const records = await pb.collection('events').getFullList()
  return records
}

export async function getNextEvents() {
  // Obtenir la date du jour au format "YYYY-MM-DD"
  const today = new Date().toISOString().split('T')[0]
  // Modifier la requête pour filtrer jusqu'à la date du jour actuel
  const filteredresults = await pb.collection('events').getList(1, 50, {
    filter: `date >= "${today} 00:00:00"`,
    sort: '+date'
  })
  return filteredresults
}

export async function oneEvent(id) {
  const oneRecord = await pb.collection('events').getOne(id)

  return oneRecord
}

try {
  //debugger
  const records = await oneEvent('uqdrv3c8jftuezq')
  console.log(records)
} catch (e) {
  console.error(e)
}
