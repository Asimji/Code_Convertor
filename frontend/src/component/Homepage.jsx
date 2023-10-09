import React, {  useState } from 'react'
import Editor from "@monaco-editor/react"
import { Box, Button, Flex, Select } from '@chakra-ui/react'

const Homepage = () => {
    const [editor,setEditor]=useState("")
    const [language,setLanguage]=useState("")
    const [output,setOutput]=useState("")
    const handleEditorChange = (newValue) => {
        setEditor(newValue);
      }
      const handleConvert=()=>{
          
          const obj={
            code:editor,
            language
          }

          fetch(`${process.env.REACT_APP_URL}/convert`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
          }).then(res=>res.json()).then((res)=>{setOutput(res.data)}).catch(e=>console.log(e))
      }

      const handleDebug=()=>{
        fetch(`${process.env.REACT_APP_URL}/debug`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({code:editor})
          }).then(res=>res.json()).then((res)=>{setOutput(res.data)}).catch(e=>console.log(e))
      }
      const handleQuality=()=>{
        fetch(`${process.env.REACT_APP_URL}/quality`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({code:editor})
          }).then(res=>res.json()).then((res)=>{console.log(res);setOutput(res.data)}).catch(e=>console.log(e))
      }

   
  

  return (
    <Box >
      <Flex justify={'space-around'} gap={'10vh'} mt="5vh" direction={{xl:'row',base:'column'}}>
        <Select w={'30vh'} onChange={(e)=>setLanguage(e.target.value)}>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="c++">C++</option>
            <option value="c">C</option>
            <option value="python">Python</option>
        </Select>
        <Button w={'30vh'} onClick={handleConvert}>Convert</Button>
        <Button w={'30vh'} onClick={handleDebug}> Debug</Button>
        <Button w={'30vh'} onClick={handleQuality}>Quality Check</Button>
      </Flex>
        
      <Flex  m={'5vh 7vh 0 7vh'}  >
      
        <Editor
        theme='vs-dark'
        width={'40%'}
        height={'80vh'}
        onChange={handleEditorChange}
        value={editor?editor : "// Write your Code Here 👇"}
        />
      
      
      <Editor
       theme='vs-dark'
       width={'60%'}
       height={'80vh'}
      value={output ? output : "Thank you for your patience! Your result will be ready soon.\nIn the meantime, enjoy some soothing thoughts."}
      />
      </Flex>
    </Box>
  )
}

export default Homepage
