import type { H3Event } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

interface InquiryData {
  name: string
  email: string
  message: string
}

export const saveToDb = async (event: H3Event, data: InquiryData) => {
  const client = await serverSupabaseClient<any>(event)
  const { error } = await client
    .from('contact')
    .insert([data])
  
  if (error) {
    console.error('Supabase DB Error:', error.message)
    throw new Error(`Failed to save inquiry to database: ${error.message}`)
  }
  return true
}