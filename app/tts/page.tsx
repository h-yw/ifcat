'use client'

import { useEffect, useState } from 'react'

function TTS() {
  const synth = globalThis.speechSynthesis
  const [text, setText] = useState('测试一下这个玩意儿')
  const [opts, setOpts] = useState({})
  const [voiceList, setVoiceList] = useState<SpeechSynthesisVoice[]>([])
  const onSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(text)
    for (const key in opts) {
      utterance[key] = opts[key]
    }
    synth.speak(utterance)
  }
  const onTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  const getVoice = () => {
    const list = synth.getVoices()
    console.log(list)
    setVoiceList(list)
    setOpts({
      voice: list[0],
    })
  }
  useEffect(() => {
    getVoice()
  }, [])
  return (
    <div>
      <h1 className="text-2xl">TTS</h1>
      <div className="] flex flex-col items-center  gap-2">
        <div className="w-[50%]  md:w-full">
          <select
            className="border-gray w-[100%] rounded-md border-2 "
            onChange={(e) => {
              setOpts({
                ...opts,
                voice: voiceList.find((v) => v.name === e.target.value),
              })
            }}
          >
            {voiceList.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
        </div>

        <textarea
          onChange={onTextarea}
          value={text}
          className="border-gray w-[50%] rounded-md border-2 md:w-full"
        ></textarea>
        <button
          className="weight-md w-[100px] rounded-md bg-gray-500 pb-2 pt-2 font-bold text-white shadow-md hover:bg-gray-600 hover:shadow-lg "
          onClick={onSpeech}
        >
          Speak
        </button>
      </div>
    </div>
  )
}

export default TTS
