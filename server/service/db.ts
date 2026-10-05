import type { H3Event } from 'h3'
import { serverSupabaseClient } from '#supabase/server'
import { InquiryData } from '../types/inquiry'

export const saveMessage = async (event: H3Event, data: InquiryData) => {
  const client = await serverSupabaseClient<any>(event)
  const { error } = await client
    .from('contact')
    .insert([data])
  
  if (error) {
    console.error('Supabase DB Error (saveMessageToDb):', error.message)
    throw new Error(`Failed to save inquiry to database: ${error.message}`)
  }
  return true
}

export const getProjectLikes = async (event: H3Event): Promise<Record<string, number>> => {
  const client = await serverSupabaseClient<any>(event)
  const { data, error } = await client
    .from('project_likes')
    .select('slug, likes_count')

  if (error) {
    console.error('Supabase DB Error (fetchProjectLikesFromDb):', error.message)
    return {}
  }

  if (!data) return {}

  return data.reduce((acc, item) => {
    acc[item.slug] = item.likes_count
    return acc
  }, {} as Record<string, number>)
}

export const toggleProjectLike = async (event: H3Event, slug: string, isLiking: boolean) => {
  const client = await serverSupabaseClient<any>(event)
  const incrementVal = isLiking ? 1 : -1

  const { error } = await client.rpc('update_project_like', {
    project_slug: slug,
    increment_val: incrementVal,
  })

  if (error) {
    console.error('Supabase RPC Error (toggleProjectLikeInDb):', error.message)
    throw new Error(`Failed to update project likes: ${error.message}`)
  }

  return true
}