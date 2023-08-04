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

          fetch(`http://localhost:8080/convert`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
          }).then(res=>res.json()).then((res)=>{console.log(res);setOutput(res.data)}).catch(e=>console.log(e))
      }

      const handleDebug=()=>{
        fetch(`http://localhost:8080/debug`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({code:editor})
          }).then(res=>res.json()).then((res)=>{console.log(res);setOutput(res.data)}).catch(e=>console.log(e))
      }
      const handleQuality=()=>{
        fetch(`http://localhost:8080/quality`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({code:editor})
          }).then(res=>res.json()).then((res)=>{console.log(res);setOutput(res.data)}).catch(e=>console.log(e))
      }

   
  

  return (
    <Box>
      <Flex justify={'space-around'} gap={'10vh'}>
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
      <Flex mt={'5vh'} >
        <Editor
        theme='vs-dark'
        width={'50%'}
        height={'80vh'}
        onChange={handleEditorChange}
        />
        <Box bg={'#1E1E1E'} w='50%' h={'80vh'}  color={'white'}>
      {output}   
        </Box>
      </Flex>
    </Box>
  )
}

export default Homepage
