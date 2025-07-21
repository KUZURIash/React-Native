import React from 'react'

import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name:string //here we pass the props so that we can get that items only
}>

const Icons =({name}:IconsProps)=> { //here we only take the name from the props
 switch (name) { //here we take the data from the name and put that in the switch
  case 'circle': // if the case is circle 
    return <Icon name="circle-thin" size={40} color="blue"/> // then it will return the circle from the api
    break;
  case 'cross': // if the case is cross 
    return <Icon name="times" size={38} color="green"/> // then it will return the cross from the api
    break;
  default:
    return <Icon name="" size={38} color="0D0D0D"/>
 }
}

export default Icons
