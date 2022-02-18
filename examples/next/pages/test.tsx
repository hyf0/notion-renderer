import { FC } from 'react'

const Text: FC = () => {
  return (
    <div className="flex max-w-sm my-0 mx-auto p-6 border rounded-xl bg-white shadow-xl items-center space-x-4">
      <div className="shrink-0">
        <img className=" h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div className="">
        <h4 className=" text-xl font-medium text-black">ChitChat</h4>
        <p className=" text-base leading-6 text-slate-500">You have a new message!</p>
      </div>
    </div>
  )
}

export default Text
