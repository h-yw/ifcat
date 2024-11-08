'use client'
import { useEffect } from 'react'
import { createClient } from 'utils/supabase/client'
export default function Expose({ params }: { params: { path: string; title: string } }) {
  const isProduction = process.env.NODE_ENV === 'production'
  async function updateViews() {
    if (!params?.path || !isProduction) return
    const supabase = await createClient()
    await supabase.rpc('increment', {
      _path: params.path,
      _title: params.title,
      _filed: 'expose',
    })
  }
  useEffect(() => {
    updateViews()
  }, [])
  return <></>
}
