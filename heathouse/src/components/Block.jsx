import React from 'react'

const Block = props => {
    return (
      <button
        className="flex flex-col rounded-2xl shadow-2xl justify-center align-middle bg-yellow-400 mx-10 w-full"
        onClick={props.selectItem}
        id={props.value}
      >
        <div
          id={props.value}
          className="flex flex-wrap self-center text-center text-3xl font-semibold mx-5 my-5"
        >
          {props.text}
        </div>
        <img
          id={props.value}
          className="w-1/2 h-auto justify-self-center self-center"
          src={props.image}
          alt="oops"
        ></img>
      </button>
    );
}

export default Block;