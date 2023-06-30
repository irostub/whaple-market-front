import React, {useState} from 'react'
import {getResales, registerResale, ResaleType} from "./RequestClient";

interface Props {

}

const ResaleBoard = ({}: Props) => {
  let [resaleList, setResaleList] = useState<ResaleType[]>([]);
  const trigger = async () => {
    await registerResale();
    const {data: {data}} = await getResales();
    setResaleList(data);
  }

  const mapper = (r: ResaleType) => {
    return (
      <div>
        <p>{r.title}</p>
        <p>{r.content}</p>
        <p>{r.webAppUserDto.id}</p>
        <p>{r.webAppUserDto.firstName}</p>
        <p>{r.webAppUserDto.lastName}</p>
        <p>{r.webAppUserDto.username}</p>
        <p>{r.webAppUserDto.isBot}</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={trigger} type={"button"}>register</button>
      {resaleList.map(mapper)}
    </div>
  )
}

export default ResaleBoard;