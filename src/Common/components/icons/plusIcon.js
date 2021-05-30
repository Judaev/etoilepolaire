import React from 'react'

const PlusIcon = ({width = '20', height = '20', opacity = '1'}) => {
  return (
		<svg width={width} height={height} opacity={opacity} viewBox="0 0 426.667 426.667"  xmlns="http://www.w3.org/2000/svg">
			<path fill='#fff' d="M405.332 192H234.668V21.332C234.668 9.559 225.109 0 213.332 0 201.559 0 192 9.559 192 21.332V192H21.332C9.559 192 0 201.559 0 213.332c0 11.777 9.559 21.336 21.332 21.336H192v170.664c0 11.777 9.559 21.336 21.332 21.336 11.777 0 21.336-9.559 21.336-21.336V234.668h170.664c11.777 0 21.336-9.559 21.336-21.336 0-11.773-9.559-21.332-21.336-21.332zm0 0"/>
		</svg> 
  );
}

export default PlusIcon
