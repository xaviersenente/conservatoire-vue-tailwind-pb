import PocketBase from 'pocketbase'
import { Collections, type EventsResponse } from './pocketbase-types'

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
