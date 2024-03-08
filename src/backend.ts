import PocketBase from 'pocketbase'
import { Collections, type EventsResponse } from './pocketbase-types'
import { ClientResponseError } from 'pocketbase'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE)

export async function getEvents() {
  return await pb.collection(Collections.Events).getFullList<EventsResponse>()
}

export async function getNextEvents() {
  // Obtenir la date du jour au format "YYYY-MM-DD"
  const today = new Date().toISOString().split('T')[0]
  // Modifier la requête pour filtrer jusqu'à la date du jour actuel
  return await pb.collection(Collections.Events).getList<EventsResponse>(1, 50, {
    filter: `date >= "${today} 00:00:00"`,
    sort: '+date'
  })
}

export async function oneEvent(id: string) {
  let retValue = null
  try {
    retValue = await pb.collection(Collections.Events).getOne<EventsResponse>(id)
  } catch (error) {
    if (!(error instanceof ClientResponseError)) throw error
    if (error.status !== 404) throw error
    error.message = `L'événement ${id} n'existe pas : ${error.message}`
    console.error(error)
  }
  return retValue
}
