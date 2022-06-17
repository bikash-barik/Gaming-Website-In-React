import React from 'react'
import { SideCard } from './SideCard'

export const SideCards = () => {
  return (
      <div className='mt-5'>
    <h3 className="text-white">Librery</h3>
    <div className="overflow-auto h-75">
    <SideCard
      imgs={"../images/digestive system.gif"}
      title={"Digestive System"}
      text={" The digestive system  ..."}
      link={"/3d/sec_digestivesystem"}
    />
    <SideCard
      imgs={"../images/kidney.gif"}
      title={"Kidney Anatomy"}
      link={"/3d/sec_kidney"}
      text={"The human Kidney is..."}
    />
   
    <SideCard
      imgs={"../images/muscular system.gif"}
      title={"Muscular System"}
      text={
        " The muscular system  ..."
      }
      link={"/3d/sec_muscularsystem"}
    />
    <SideCard
      imgs={"../images/digestive system.gif"}
      title={"Digestive System"}
      text={" The digestive system  ..."}
      link={"/3d/sec_digestivesystem"}
    />
    <SideCard
      imgs={"../images/kidney.gif"}
      title={"Kidney Anatomy"}
      link={"/3d/sec_kidney"}
      text={"The human Kidney is..."}
    />
   
    <SideCard
      imgs={"../images/muscular system.gif"}
      title={"Muscular System"}
      text={
        " The muscular system  ..."
      }
      link={"/3d/sec_muscularsystem"}
    />
    </div>
  </div>
  
  )
}
