import { createClient } from 'utils/supabase/server'
export default async function Expose({ params }: { params: { path: string; title: string } }) {
  const isProduction = process.env.NODE_ENV === 'production'
  if (!params?.path || !isProduction) return
  const supabase = await createClient()
  try {
    await supabase.rpc('increment', {
      _path: params.path,
      _title: params.title,
      _filed: 'expose',
    })
  } catch (e) {
    // 上报异常
  }
  return <></>
}
