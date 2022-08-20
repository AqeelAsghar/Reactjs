import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'
const Editor = () => {
  return (
    <div className = 'm-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounder-3xl' >
      {/* header for giving the category adnd the title  */ }
      < Header category='App' title='Editor' />  
      {/* RichTextEditorComponent component to hold textEditor */}
      <RichTextEditorComponent>
        {/* Show tha dummy data into thee Editor */}
        <EditorData />
        {/* Inject services like html editor, Images, link, QuickToolbar,Toolbar into our Editor */}
        <Inject services={[HtmlEditor,Image,Link,QuickToolbar, Toolbar]}/>
      </RichTextEditorComponent>
    </div >
  )
}

export default Editor